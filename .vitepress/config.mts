import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/read-source-code/",
  title: '若川视野 x 源码共读',
  description: 'A VitePress Site',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/README' },
      // { text: 'README', link: '/README' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '公告',
        items: [
          { text: '第1期 | vue-devtools', link: '/notice/p1' },
          { text: '第2期 | vue3 工具函数', link: '/notice/p2' },
          { text: '第3期 | vue 3.2 是怎么发布的 vue-release', link: '/notice/p3' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
