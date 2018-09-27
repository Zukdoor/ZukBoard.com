module.exports = {
  markdown: {
    lineNumbers: true,
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',  // 将会被设置为 <html> 的 lang 属性
      title: 'ZukBoard',
      description: 'Just Draw It'
    },
    '/zh/': { lang: 'zh-CN', title: 'ZukBoard', description: '开始画吧' }
  },
  themeConfig: {
    repo: 'zukdoor/zukboard.com',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup:
              { message: 'New content is available.', buttonText: 'Refresh' }
        },
        algolia: {},
        nav: [
          { text: 'Home', link: '/' }, 
          { text: 'Plugins', link: '/plugins/' },
          { text: 'Tutorials', link: '/tutorials/' }, 
          { text: 'Examples', link: '/examples/'},
          { text: 'Docs', link:'/docs/' },
          { text: 'Contact Us', link:'mailto:test@bookwiki.site' }
        ],
        sidebar: {
          '/': [/* ... */],
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker:
            {updatePopup: {message: '发现新内容可用.', buttonText: '刷新'}},
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '主页', link: '/' }, 
          { text: '插件', link: '/plugins/' },
          { text: '教程', link: '/tutorials/' }, 
          { text: '示例', link: '/examples/'},
          { text: '文档', link:'/docs/' },
          { text: '联系我们', link:'mailto:test@bookwiki.site' }
        ],
        sidebar: {
          '/zh/': [/* ... */],
        }
      }
    }
  },
  plugins: {
    '@vuepress/i18n-ui': true,
    '@vuepress/back-to-top': true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: true
    },
    '@vuepress/plugin-medium-zoom': true
  }
}
