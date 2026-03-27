import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '一灰',
  description: '一灰的个人博客',
  lang: 'zh-CN',
  base: '/',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '一灰' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: '一灰' }],
    ['meta', { property: 'og:description', content: '一灰的个人博客' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '一灰',
    appearance: true,

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about/' },
    ],

    sidebar: {
      '/articles/': [
        {
          text: 'CSS',
          items: [
            { text: 'CSS 属性书写顺序', link: '/articles/css_order' },
            { text: 'CSS 处理文字不换行、换行截断、溢出省略号', link: '/articles/nowrap' },
            { text: 'H5 移动端页面禁用长按选中文本', link: '/articles/select_none' },
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: '使用 debug.js 调试手机网页', link: '/articles/debug.js' },
            { text: 'jQuery 图片加载完成', link: '/articles/img_loaded' },
          ]
        },
        {
          text: 'Git',
          items: [
            { text: 'git add 后如何撤销?', link: '/articles/git_revert_head' },
            { text: 'git bash 中 vue-cli 无法选择设置', link: '/articles/git_bash_alias' },
            { text: 'windows 安装 Git Bash 增强版', link: '/articles/git-sdk-md' },
          ]
        },
        {
          text: 'Vue',
          items: [
            { text: 'vue 开启 ESLint + Prettier，vscode 配置', link: '/articles/vue_config_eslint_prettierrc' },
          ]
        },
        {
          text: '工具与模板',
          items: [
            { text: '文件模版', link: '/articles/html_tpl' },
          ]
        },
        {
          text: '部署与运维',
          items: [
            { text: 'Hexo 推送 Github 需要重新绑定域名问题', link: '/articles/hexo-gh-host-bug' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2026 liunwcj <a href="https://beian.miit.gov.cn/" target="_blank">桂ICP备2022006833号</a>'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  vite: {
    server: {
      port: 3000,
      host: true
    }
  }
})
