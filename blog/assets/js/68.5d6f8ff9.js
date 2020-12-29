(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{425:function(a,s,t){"use strict";t.r(s);var e=t(42),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"javascript设计模式详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript设计模式详解"}},[a._v("#")]),a._v(" Javascript设计模式详解")]),a._v(" "),t("p",[a._v("设计模式是程序员必须掌握的基础知识，无论是前端开发、移动端还是后台，都需要掌握。它是成为一名合格工程师的必要条件。如果你只懂得敲代码，不懂得设计程序，那永远成为不了一名高级工程师。如果你是一名高级工程师，那么你肯定具有一定的设计能力，对于整个项目架构布局有更好的设计。")]),a._v(" "),t("h2",{attrs:{id:"开发环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境搭建"}},[a._v("#")]),a._v(" 开发环境搭建")]),a._v(" "),t("p",[a._v("作为一名前端开发人员，在这里默认安装好node环境。")]),a._v(" "),t("h3",{attrs:{id:"初始化npm环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化npm环境"}},[a._v("#")]),a._v(" 初始化npm环境")]),a._v(" "),t("p",[a._v("通过npm init命令初始化工程环境，在根目录下创建src文件夹，在文件夹中创建index.js文件。")]),a._v(" "),t("h3",{attrs:{id:"安装webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack"}},[a._v("#")]),a._v(" 安装webpack")]),a._v(" "),t("p",[a._v("在命令行中输入 npm install webpack webpack-cli --save-dev 即可安装。然后在根目录下创建webpack.dev.config.js文件。然后写入以下内容：")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("module"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/index.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//入口文件")]),a._v("\n    output"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//输出文件")]),a._v("\n        path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" __dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./release/bundle.js"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("在package.json中scripts中添加以下命令：")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dev"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --config ./webpack.dev.config.js --mode development"')]),a._v("\n")])])]),t("p",[a._v("然后运行npm run dev即可打包。")]),a._v(" "),t("h3",{attrs:{id:"安装webpack-dev-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack-dev-server"}},[a._v("#")]),a._v(" 安装webpack-dev-server")]),a._v(" "),t("p",[a._v("在命令行中输入 npm install webpack-dev-server html-webpack-plugin --save-dev来安装。")]),a._v(" "),t("h3",{attrs:{id:"安装babel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装babel"}},[a._v("#")]),a._v(" 安装babel")]),a._v(" "),t("p",[a._v("在命令行中输入npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev安装。然后在根目录创建.babelrc文件。")]),a._v(" "),t("h2",{attrs:{id:"设计原则和设计模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原则和设计模式"}},[a._v("#")]),a._v(" 设计原则和设计模式")]),a._v(" "),t("h3",{attrs:{id:"设计原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设计原则"}},[a._v("#")]),a._v(" 设计原则")])])}),[],!1,null,null,null);s.default=r.exports}}]);