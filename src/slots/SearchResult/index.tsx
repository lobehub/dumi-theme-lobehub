import { Icon } from '@lobehub/ui';
import animateScrollTo from 'animated-scroll-to';
import { Empty, Typography } from 'antd';
import { useTheme } from 'antd-style';
import { FormattedMessage, Link, history, type useSiteSearch } from 'dumi';
import { FileBox, FileIcon, HeadingIcon, LetterText, LucideIcon } from 'lucide-react';
import React, { Fragment, memo, useCallback, useEffect, useState } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { siteSelectors, useSiteStore } from '@/store';

const ICONS_MAPPING: { [key: string]: LucideIcon } = {
  content: LetterText,
  demo: FileBox,
  page: FileIcon,
  title: HeadingIcon,
};

type ISearchResult = ReturnType<typeof useSiteSearch>['result'];

type ISearchFlatData = (
  | {
      type: 'title';
      value: Pick<ISearchResult[0], 'title'>;
    }
  | {
      activeIndex: number;
      type: 'hint';
      value: ISearchResult[0]['hints'][0];
    }
)[];

const Highlight = memo<{
  texts: ISearchResult[0]['hints'][0]['highlightTexts'];
}>((props) => {
  return (
    <>
      {props.texts.map((text, idx) => (
        <Fragment key={idx}>{text.highlighted ? <mark>{text.text}</mark> : text.text}</Fragment>
      ))}
    </>
  );
});

const useFlatSearchData = (data: ISearchResult) => {
  const update = useCallback((): [ISearchFlatData, number] => {
    let activeIndex = 0;
    const ret: ISearchFlatData = [];

    for (const item of data) {
      if (item.title) {
        ret.push({
          type: 'title',
          value: {
            title: item.title,
          },
        });
      }
      for (const hint of item.hints) {
        ret.push({
          activeIndex: activeIndex++,
          type: 'hint',
          value: hint,
        });
      }
    }

    return [ret, activeIndex];
  }, [data]);
  const [flatData, setFlatData] = useState(update);

  useEffect(() => {
    setFlatData(update);
  }, [data]);

  return flatData;
};

const SearchResult = memo<{
  data: ISearchResult;
  loading: boolean;
  onItemSelect?: (item: ISearchResult[0]['hints'][0]) => void;
}>((props) => {
  const theme = useTheme();
  const [data, histsCount] = useFlatSearchData(props.data);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [pathname, hostname] = useSiteStore((s) => [
    s.location.pathname,
    siteSelectors.hostname(s),
  ]);

  const onItemSelect = (item: ISearchResult[0]['hints'][0]) => {
    props.onItemSelect?.(item);

    const url = new URL(item?.link, hostname || location?.origin);
    if (url?.pathname === pathname && !url.hash) {
      setTimeout(() => {
        animateScrollTo(0, {
          maxDuration: 300,
        });
      }, 1);
    }
  };

  useEffect(() => {
    const handler = (ev: KeyboardEvent) => {
      // TODO: scroll into view for invisible items
      if (ev.key === 'ArrowDown') {
        setActiveIndex((activeIndex + 1) % histsCount);
      } else if (ev.key === 'ArrowUp') {
        setActiveIndex((activeIndex + histsCount - 1) % histsCount);
      } else if (ev.key === 'Enter' && activeIndex >= 0) {
        const item = data.find((item) => item.type === 'hint' && item.activeIndex === activeIndex)!
          .value as ISearchResult[0]['hints'][0];

        history.push(item.link);
        onItemSelect?.(item);
        (document.activeElement as HTMLInputElement).blur();
      }

      if (['Escape', 'Enter'].includes(ev.key)) {
        setActiveIndex(-1);
      }
    };

    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  });

  let returnNode: React.ReactNode = null;

  if (props.loading) {
    returnNode = (
      <Empty
        description={<FormattedMessage id="search.loading" />}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  } else if (props.data.length > 0) {
    returnNode = (
      <Flexbox gap={8} paddingBlock={8} paddingInline={8}>
        {data.map((item, i) =>
          item.type === 'title' ? (
            <Flexbox
              key={String(i)}
              paddingBlock={8}
              paddingInline={12}
              style={{
                background: theme.colorFillTertiary,
                borderRadius: theme.borderRadius,
              }}
            >
              <Typography.Title
                ellipsis={{ rows: 1 }}
                level={4}
                style={{
                  fontSize: 14,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {item.value.title}
              </Typography.Title>
            </Flexbox>
          ) : (
            <Flexbox key={String(i)}>
              <Link
                data-active={activeIndex === item.activeIndex || undefined}
                onClick={() => onItemSelect?.(item.value)}
                style={{ color: 'inherit' }}
                to={item.value.link}
              >
                <Flexbox
                  align={'center'}
                  gap={16}
                  horizontal
                  style={{
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Center
                    flex={'none'}
                    height={48}
                    style={{
                      background: theme.colorFillTertiary,
                      borderRadius: theme.borderRadius,
                    }}
                    width={48}
                  >
                    <Icon
                      color={theme.colorTextDescription}
                      icon={ICONS_MAPPING?.[item.value.type] as any}
                      size={{ fontSize: 32 }}
                    />
                  </Center>
                  <Flexbox>
                    <Typography.Title
                      ellipsis={{ rows: 1 }}
                      level={4}
                      style={{
                        fontSize: 14,
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      <Highlight texts={item.value.highlightTitleTexts} />
                    </Typography.Title>
                    <Typography.Paragraph
                      ellipsis={{ rows: 2 }}
                      style={{
                        color: theme.colorTextSecondary,
                        fontSize: 12,
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      <Highlight texts={item.value.highlightTexts} />
                    </Typography.Paragraph>
                  </Flexbox>
                </Flexbox>
              </Link>
            </Flexbox>
          ),
        )}
      </Flexbox>
    );
  } else {
    returnNode = (
      <Empty
        description={<FormattedMessage id="search.not.found" />}
        image={Empty.PRESENTED_IMAGE_SIMPLE}
      />
    );
  }

  return (
    <Flexbox
      onMouseDownCapture={(ev) => ev.preventDefault()}
      onMouseEnter={() => setActiveIndex(-1)}
      onMouseUpCapture={() => {
        (document.activeElement as HTMLInputElement).blur();
      }}
    >
      {returnNode}
    </Flexbox>
  );
});

export default SearchResult;
