import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: "/read-source-code/",
  title: '若川视野 x 源码共读',
  // keywords: "若川，微信搜索「若川视野」关注我，长期交流学习。写有《学习源码整体架构系列》。包含jquery源码、underscore源码、lodash源码、sentry源码、vuex源码、axios源码、koa源码、redux源码、vue-devtools源码、vuex4源码。前端路上，PPT爱好者，所知甚少，唯善学。",
  description: '若川，微信搜索「若川视野」关注我，长期交流学习。写有《学习源码整体架构系列》。包含jquery源码、underscore源码、lodash源码、sentry源码、vuex源码、axios源码、koa源码、redux源码。前端路上，PPT爱好者，所知甚少，唯善学。',

  head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["link", { rel: "mainfest", href: "/mainfest.json" }],
    // 添加百度统计
  [
    "script",
    {
      defer: "defer",
    },
    `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?2733a38fe6a2d84d7f6fa4a6637a3785";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();
  `,
  ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/index' },
      // { text: 'README', link: '/README' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],
    sidebar: [
      {
        text: '总则',
        items: [
          { text: '共读规则', link: '/index' },
        ],
      },
      {
        text: '公告',
        items: [
          { text: '第46期 _ 分析 vant4 源码，学会用 vue3 + ts 开发毫秒级渲染的倒计时组件，真是妙啊', link: '/notice/p46' },
          { text: '第45期 | 分析 vant4 源码，如何用 vue3 + ts 开发一个瀑布流滚动加载的列表组件？', link: '/notice/p45' },
          { text: '第44期 | 神器啊，从未想过 VSCode 还能这样直接打开仓库URL，原理揭秘~', link: '/notice/p44' },
          { text: '第43期 | 学习 react-use 源码，写自定义 hooks 越来越顺', link: '/notice/p43' },
          { text: '第42期 | 跟着 vant4 源码学习如何用 vue3+ts 开发一个 loading 组件，仅88行代码', link: '/notice/p42' },
          { text: '第41期 | vant 4 正式发布了，支持暗黑主题，那么是如何实现的呢', link: '/notice/p41' },
          { text: '第40期 | vite 是如何解析用户配置的 .env 的', link: '/notice/p40' },
          { text: '第39期 | 如何发布一个 npm 库，自动化管理版本号、生成 changelog、tag 等', link: '/notice/p39' },
          { text: '第38期 | 经常用 vant-weapp 开发小程序，却不知道如何开发一个组件？学！', link: '/notice/p38' },
          { text: '第37期 | vite 3.0 都发布了，经常初始化 vite 项目，却不知 create-vite 原理？揭秘！', link: '/notice/p37' },
          { text: '第36期 | 可能是历史上最简单的一期 omit.js 剔除对象中的属性', link: '/notice/p36' },
          { text: '第35期 | 为 vite 项目自动添加 eslint 和 prettier', link: '/notice/p35' },
          { text: '第34期 | tdesign-vue 初始化组件', link: '/notice/p34' },
          { text: '第33期 | arrify 转数组', link: '/notice/p33' },
          { text: '第32期 | yocto-queue 队列 链表', link: '/notice/p32' },
          { text: '第31期 | p-limit 限制并发数', link: '/notice/p31' },
          { text: '第30期 | @tarojs_plugin-mini-ci 小程序上传代码 ci', link: '/notice/p30' },
          { text: '第29期 | quick-lru', link: '/notice/p29' },
          { text: '第28期 | vue react 小程序 message 组件', link: '/notice/p28' },
          { text: '第27期 | read-pkg', link: '/notice/p27' },
          { text: '第26期 | classnames', link: '/notice/p26' },
          { text: '第25期 | 跟着underscore学防抖', link: '/notice/p25' },
          { text: '第24期 | vue2工具函数', link: '/notice/p24' },
          { text: '第23期 | 为什么 Vue2 this 能够直接获取到 data 和 methods', link: '/notice/p23' },
          { text: '第22期 | dotenv', link: '/notice/p22' },
          { text: '第21期 | await-to-js', link: '/notice/p21' },
          { text: '第20期 | install-pkg', link: '/notice/p20' },
          { text: '第19期 | axios 工具函数', link: '/notice/p19' },
          { text: '第18期 | delay  带取消功能的延迟函数', link: '/notice/p18' },
          { text: '第17期 | js-cookie', link: '/notice/p17' },
          { text: '第16期 | 一行代码统一规范 包管理器', link: '/notice/p16' },
          { text: '第15期 | element 初始化组件功能', link: '/notice/p15' },
          { text: '第14期 | promisify', link: '/notice/p14' },
          { text: '第13期 | open 打开浏览器', link: '/notice/p13' },
          { text: '第12期 | 尤雨溪推荐 的ni 神器', link: '/notice/p12' },
          { text: '第11期 | 玩具 vite', link: '/notice/p11' },
          { text: '第10期 | configstore 存储', link: '/notice/p10' },
          { text: '第9期 | create-vue Vue 团队公开的全新脚手架工具', link: '/notice/p9' },
          { text: '第8期 | mitt、tiny-emitter 发布订阅', link: '/notice/p8' },
          { text: '第7期 | validate-npm-package-name 检测 npm 包是否符合标准', link: '/notice/p7' },
          { text: '第6期 | update-notifier 检测 npm 包是否更新', link: '/notice/p6' },
          { text: '第5期 | koa-compose 相对较难，觉得难可跳过', link: '/notice/p5' },
          { text: '第4期 | co 源码 觉得较难可先跳过', link: '/notice/p4' },
          { text: '第3期 | vue 3.2 是怎么发布的 vue-release', link: '/notice/p3' },
          { text: '第2期 | vue3 工具函数', link: '/notice/p2' },
          { text: '第1期 | vue-devtools', link: '/notice/p1' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/ruochuan-f2e/read-source-code' },
    ],
  },
});

