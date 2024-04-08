import { TabsNav } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { Link } from 'dumi';
import NavbarExtra from 'dumi/theme-default/slots/NavbarExtra';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';

import { activePathSel, useSiteStore } from '@/store';

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

  const nav = useSiteStore((s) => s.navData, shallow);
  const activePath = useSiteStore(activePathSel);

  return (
    <>
      <TabsNav
        activeKey={activePath}
        className={styles.tabs}
        items={nav.map((item) => ({
          key: String(item.activePath! || item.link),
          label: /^(\w+:)\/\/|^(mailto|tel):/.test(item.link) ? (
            <a className={styles.link} href={String(item.link)} rel="noreferrer" target="_blank">
              {item.title}
            </a>
          ) : (
            <Link className={styles.link} to={String(item.link)}>
              {item.title}
            </Link>
          ),
        }))}
      />
      <NavbarExtra />
    </>
  );
});

export default Navbar;
