(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{422:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress从零开始搭建自己的博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress从零开始搭建自己的博客"}},[s._v("#")]),s._v(" VuePress从零开始搭建自己的博客")]),s._v(" "),a("p",[s._v("最近将自己的博客从Hexo转移到VuePress中来，使用VuePress的过程中也遇到了一些问题，写一篇文章来记录一下搭建过程和踩过的坑。")]),s._v(" "),a("h2",{attrs:{id:"vuepress是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress是什么"}},[s._v("#")]),s._v(" VuePress是什么？")]),s._v(" "),a("p",[s._v("VuePress是以Vue驱动的静态网站生成器，是一个由Vue、Vue Router和webpack驱动的单页应用。在VuePress中，你可以使用Markdown编写文档，然后生成网页，每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用，其他的页面则会只在用户浏览到的时候才按需加载。")]),s._v(" "),a("p",[s._v("详情请看"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress官方文档"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"vuepress特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress特性"}},[s._v("#")]),s._v(" VuePress特性")]),s._v(" "),a("ul",[a("li",[s._v("为技术文档而优化的内置Markdown拓展")]),s._v(" "),a("li",[s._v("在Markdown文件中使用Vue组件的能力")]),s._v(" "),a("li",[s._v("Vue驱动的自定义主题系统")]),s._v(" "),a("li",[s._v("自动生成Service Worker(支持PWA)")]),s._v(" "),a("li",[s._v("Google Analytics集成")]),s._v(" "),a("li",[s._v('基于Git的"最后更新时间"')]),s._v(" "),a("li",[s._v("多语言支持")]),s._v(" "),a("li",[s._v("响应式布局")])]),s._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("VuePress支持使用Yarn和npm来安装，Node.js版本需要>=8才可以。")]),s._v(" "),a("h4",{attrs:{id:"全局安装vuepress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局安装vuepress"}},[s._v("#")]),s._v(" 全局安装VuePress")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("yarn global add vuepress # 或者：npm install -g vuepress\n")])])]),a("h4",{attrs:{id:"创建项目目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目目录"}},[s._v("#")]),s._v(" 创建项目目录")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("mkdir project\ncd project\n")])])]),a("h4",{attrs:{id:"初始化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目"}},[s._v("#")]),s._v(" 初始化项目")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("yarn init -y # 或者 npm init -y\n")])])]),a("h4",{attrs:{id:"新建docs文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建docs文件夹"}},[s._v("#")]),s._v(" 新建docs文件夹")]),s._v(" "),a("p",[s._v("docs文件夹作为项目文档根目录，主要放置Markdown类型的文章和.vuepress文件夹。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("mkdir docs\n")])])]),a("h4",{attrs:{id:"设置package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置package-json"}},[s._v("#")]),s._v(" 设置package.json")]),s._v(" "),a("p",[s._v("VuePress中有两个命令，vuepress dev docs命令运行本地服务，通过访问http://localhost:8080即可预览网站，vuepress build docs命令用来生成静态文件，默认情况下，放置在docs/.vuepress/dist目录中，当然你也可以在docs/.vuepress/config.js中的dest字段来修改默认存放目录。在这里将两个命令封装成脚本的方式，直接使用npm run docs:dev和npm run docs:build即可。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])]),a("h4",{attrs:{id:"创建-vuepress目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-vuepress目录"}},[s._v("#")]),s._v(" 创建.vuepress目录")]),s._v(" "),a("p",[s._v("在docs目录中，创建.vuepress目录，.vuepress目录主要用于存放VuePress相关的文件。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("mkdir .vuepress\n")])])]),a("h4",{attrs:{id:"创建config-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建config-js"}},[s._v("#")]),s._v(" 创建config.js")]),s._v(" "),a("p",[s._v("进入到.vuepress目录中，然后创建config.js，config.js是VuePress必要的配置文件，它导出y一个javascript对象。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("touch config.js\n")])])]),a("h4",{attrs:{id:"创建public文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建public文件夹"}},[s._v("#")]),s._v(" 创建public文件夹")]),s._v(" "),a("p",[s._v("进入到.vuepress目录中，然后创建public文件夹，此文件夹主要放静态资源文件，例如favicons和 PWA的图标。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("mkdir public\n")])])]),a("p",[s._v("此时，项目的结构差不多就出来了。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("project\n├─── docs\n│   ├── README.md\n│   └── .vuepress\n│       ├── public\n│       └── config.js\n└── package.json\n\n")])])]),a("p",[s._v("以上只是简单了搭建了一下博客的开发环境，接下来是博客主要的基本配置config.js，也是必须要做的。")]),s._v(" "),a("h2",{attrs:{id:"基本配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本配置"}},[s._v("#")]),s._v(" 基本配置")]),s._v(" "),a("p",[s._v("一个config.js的主要配置包括网站的标题、描述等基本信息，以及主题的配置。这里简单的列举一下常用配置。")]),s._v(" "),a("h3",{attrs:{id:"网站信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网站信息"}},[s._v("#")]),s._v(" 网站信息")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aoaojiao.club-Blog'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    description"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ZhangJP-技术文档'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    head"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/img/logo.ico'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'manifest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/manifest.json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apple-touch-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/img/logo.png'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'meta'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'viewport'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("title：网站标题")]),s._v(" "),a("li",[s._v("description：网站描述")]),s._v(" "),a("li",[s._v('head：额外的需要被注入到当前页面的HTML"head"中的标签，其中路径的"/"就是public资源目录。')])]),s._v(" "),a("p",[s._v("具体配置详情请看文档："),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("配置"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"主题配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题配置"}},[s._v("#")]),s._v(" 主题配置")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        nav"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主页'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'博文'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n              items"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Android'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/android/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ios'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/ios/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Web'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/web/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'关于'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/about/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" link"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'url'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        sidebar"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/web/"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"web1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("\n            \t\t\t\t "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        sidebarDepth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        lastUpdated"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Last Updated'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v('nav：导航栏配置，此配置主要用于配置导航栏的链接，例如以上主页的link为"/"，默认是根目录下的README.md。"/android/"链接到根目录docs下的android文件夹下的README.md文件。')])]),s._v(" "),a("li",[a("p",[s._v("sidebar：侧边栏配置，你可以省略.md拓展名，同时以/结尾的路径将会被视为 */README.md。'/android/'、'/ios/'和'/web/'是通过路由的方式将每个页面的标题抽取出来显示。\"/android/\"是指根目录下android文件夹中的路由，每个路由链接都要有README.md。所以目录结构如下：")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("├─── docs\n├── README.md\n└── android\n│   └── README.md\n└── ios\n   └── README.md\n\n")])])])]),s._v(" "),a("li",[a("p",[s._v("sidebarDepth：嵌套的标题链接深度，默认的深度为1。")])]),s._v(" "),a("li",[a("p",[s._v("lastUpdated：最后更新时间。")])])]),s._v(" "),a("p",[s._v("侧边栏如图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ws3.sinaimg.cn/large/006tKfTcly1fs54ju3v4fj30j60mwq5b.jpg",alt:""}})]),s._v(" "),a("p",[s._v("具体主题配置详情请看文档："),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5",target:"_blank",rel:"noopener noreferrer"}},[s._v("主题配置"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"pwa配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa配置"}},[s._v("#")]),s._v(" PWA配置")]),s._v(" "),a("p",[s._v("VuePress默认支持PWA配置的，需要在基本配置中开启serviceWorker。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t serviceWorker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("然后再添加icons和Manifest配置，在public中添加manifest.json配置，和图标。如果不知道PWA的可以到"),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[s._v("PWA配置"),a("OutboundLink")],1),s._v("查看相关资料。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v('{\n  "name": "name",\n  "short_name": "name",\n  "start_url": "index.html",\n  "display": "standalone",\n  "background_color": "#2196f3",\n  "description": "name的个人主页",\n  "theme_color": "blue",\n  "icons": [\n    {\n      "src": "./logo.png",\n      "sizes": "144x144",\n      "type": "image/png"\n    }\n  ],\n  "related_applications": [\n    {\n      "platform": "web"\n    }\n  ]\n}\n')])])]),a("p",[s._v("在config.js配置中添加manifest.json，由于iphone11.3不支持manifest的图标，所以加上apple-touch-icon图标配置即可。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\thead"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\t        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'manifest'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/manifest.json'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'link'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'apple-touch-icon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/img/logo.png'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("最后在iphone中访问网站，然后添加主屏幕即可。")]),s._v(" "),a("h3",{attrs:{id:"自定义页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义页面"}},[s._v("#")]),s._v(" 自定义页面")]),s._v(" "),a("p",[s._v("默认的主题提供了一个首页（Homepage）的布局(用于这个网站的主页)。想要使用它，需要在你的根级 README.md的home: true，然后添加数据。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("---\nhome: true\nheroImage: /hero.png\nactionText: 快速上手 →\nactionLink: /zh/guide/\nfeatures:\n- title: 简洁至上\n  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n- title: Vue驱动\n  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n- title: 高性能\n  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\nfooter: MIT Licensed | Copyright © 2018-present Evan You\n---\n")])])]),a("p",[s._v("效果如下：\n"),a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tKfTcly1fs54znn6ldj31880xcafr.jpg",alt:""}})]),s._v(" "),a("p",[s._v("如果你想自定义首页或者其他页面，可以在页面的md文件中添加页面Vue文件。Vue文件放置在docs/.vuepress/components目录中。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("---\nlayout: HomeLayout\n---\n")])])]),a("p",[s._v("例如我博客的自定义首页：\n"),a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tKfTcly1fs555mywb0j313g0vu466.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"部署上线"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署上线"}},[s._v("#")]),s._v(" 部署上线")]),s._v(" "),a("p",[s._v("由于构建的时候生成静态页面，所以将dist文件夹中的内容可以部署在gitHub的pages或者coding的pages都可以。如果使用git上传到github上，操作比较繁琐，这里使用脚本的方式自动部署到github上。")]),s._v(" "),a("h3",{attrs:{id:"创建一个deploy-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个deploy-sh"}},[s._v("#")]),s._v(" 创建一个deploy.sh")]),s._v(" "),a("p",[s._v("在project下创建deploy.sh。")]),s._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[s._v("touch deploy.sh\n")])])]),a("h3",{attrs:{id:"编写脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写脚本"}},[s._v("#")]),s._v(" 编写脚本")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("#"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("env sh\n\n# 确保脚本抛出遇到的错误\nset "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("e\n\n# 生成静态文件\nnpm run docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("build\n\n# 进入生成的文件夹\ncd docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist\n\n# 如果是发布到自定义域名\n# echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'www.example.com'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CNAME")]),s._v("\n\ngit init\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n# 如果发布到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io\n# git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git master\n\n# 如果发布到 https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n# git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("f git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("USERNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("REPO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git master"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("pages\n\ncd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\n")])])]),a("h3",{attrs:{id:"设置package-json-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置package-json-2"}},[s._v("#")]),s._v(" 设置package.json")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deploy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash deploy.sh"')]),s._v("\n\t  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("运行npm run deploy 即可自动构建部署到github上。")]),s._v(" "),a("p",[s._v("详情请看，"),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/deploy.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("部署"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("示例："),a("a",{attrs:{href:"https://www.aoaojiao.club",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的博客"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);