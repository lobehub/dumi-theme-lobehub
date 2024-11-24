import { TabsNav } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Link, history } from 'dumi';
import NavbarExtra from 'dumi/theme-default/slots/NavbarExtra';
import { memo } from 'react';

import { siteSelectors, useSiteStore } from '@/store';

const useStyles = createStyles(({ css, stylish, token, responsive, prefixCls }) => {
  return {
    link: css`
      ${stylish.resetLinkColor}
    `,
    tabs: css`
      .${prefixCls}-tabs-tab-active a {
        color: ${token.colorText} !important;
      }
      ${responsive.mobile} {
        display: none;
      }
    `,
  };
});
const Navbar = memo(() => {
  const { styles } = useStyles();

  const regLink = /^(\w+:)\/\/|^(mailto|tel):/;
  const nav = useSiteStore((s) => s.navData);
  const activePath = useSiteStore(siteSelectors.activePath);
  return (
    <>
      <TabsNav
        activeKey={activePath}
        className={styles.tabs}
        items={nav.map((item) => ({
          key: String(item.activePath! || item.link),
          label: regLink.test(item.link || '') ? (
            <a className={styles.link} href={item.link} rel="noreferrer" target="_blank">
              {item.title}
            </a>
          ) : (
            <Link className={styles.link} to={item.link!}>
              {item.title}
            </Link>
          ),
        }))}
        onChange={(path) => {
          const url = nav.find((i) => i.activePath === path || i.link === path)?.link;
          if (!url || regLink.test(url)) return;
          history.push(url);
        }}
      />
      <NavbarExtra />
    </>
  );
});

export default Navbar;
