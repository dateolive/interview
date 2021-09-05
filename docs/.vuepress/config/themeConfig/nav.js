// nav
module.exports = [
  {
    text: '语言',
    link: '/code/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      { text: 'Java', link: '/pages/55bf8c/' },
      { text: 'C/C++', link: '/pages/7426b1/' }
    ],
  },
  {
    text: '数据库',
    link: '/database/',
    items: [
      { text: 'MySQL', link: '/pages/1aef7c/' },
      { text: 'Redis', link: '/pages/b9a12d/' },
      { text: 'MongoDB', link: '/pages/9fbb16/' },
    ],
  },
  {
    text: '学科',
    link: '/base/',
    items: [
      { text: '操作系统', link: '/pages/5bfa72/' },
      { text: '计算机网络', link: '/pages/6bb966/' },
    ],
  },
  {
    text: '框架',
    link: '/frame/',
    items: [
      { text: 'spring全家桶', link: '/pages/9baa5c/', 
        items:[
          { text: 'Spring', link: '/pages/eaabb9/' },
          { text: 'SpringMVC', link: '/pages/eaabb9/' },
          { text: 'SpringBoot', link: '/pages/eaabb9/' },
          { text: 'SpringCloud', link: '/pages/eaabb9/' },
        ]
      },
      { text: '权限框架', link: '/pages/eaabb9/',
      items:[
        { text: 'Shiro', link: '/pages/eaabb9/' },
        { text: 'SpringSecurity', link: '/pages/eaabb9/' },
      ]
      
    },
      { text: 'Mybatis', link: '/pages/4ee7f5/' },
      { text: '中间件', link: '/pages/4ee7f5/'
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
      { text: '设计模式', link: '/pages/e6c953/' },
      { text: 'Git相关', link: '/pages/cfc81f/' },
      { text: 'Docker', link: '/pages/829562/' },
      { text: '智力题', link: '/pages/2d6562/' },
      { text: '三高的理解', link: '/pages/56e2d2/' },
      { text: '编码之道', link: '/pages/56e2d2/' },
      { text: '安全之道', link: '/pages/e2e2c9/' }
    ],
  }
]
