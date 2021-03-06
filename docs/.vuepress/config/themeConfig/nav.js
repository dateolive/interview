// nav
module.exports = [
  {
    text: '语言',
    link: '/code/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: 'Java', link: '/pages/6824ac/' },
      { text: 'C/C++', link: '/pages/28591f/' }
    ],
  },
  {
    text: '数据库',
    link: '/database/',
    items: [
      { text: 'MySQL', link: '/pages/5bf967/' },
      { text: 'Redis', link: '/pages/b9a12d/' },
      { text: 'MongoDB', link: '/pages/c4ff75/' },
    ],
  },
  {
    text: '学科',
    link: '/base/',
    items: [
      { text: '操作系统', link: '/pages/ff28d3/' },
      { text: '计算机网络', link: '/pages/2ea435/' },
    ],
  },
  {
    text: '框架',
    link: '/frame/',
    items: [
      { text: 'spring全家桶', link: '/pages/5c591f/', 
      },
      { text: '权限框架', link: '/pages/d8fc22/',
      items:[
        { text: 'Shiro', link: '/pages/2622ac/' },
        { text: 'SpringSecurity', link: '/pages/d8fc22/' },
      ]
      
    },
      { text: 'Mybatis', link: '/pages/79b4b1/' },
      { text: '中间件', link: '/pages/f635df/'
      },
      
    ],
  },
  {
    text: '算法|数据结构',
    link: '/algorithm/',
    items: [
      { text: '算法', link: '/pages/817a23/' },
      { text: '数据结构', link: '/pages/cf8bda/' },
      { text: 'LeetCode', link: '/pages/cf8bda/' },
      { text: '剑指offer', link: '/pages/cf8bda/' },
      { text: '其他算法题', link: '/pages/cf8bda/' }
    ],
  },
  {
    text: '其他',
    link: '/other/',
    items: [
      { text: '设计模式', link: '/pages/b40d7a/' },
      { text: 'Git相关', link: '/pages/bafb3a/' },
      { text: 'Docker', link: '/pages/c259fd/' },
      { text: '智力题', link: '/pages/2d6562/' },
      { text: 'Linux', link: '/pages/84648d/' },
      { text: '其他', link: '/pages/e2e2c9/' }
    ],
  }
]
