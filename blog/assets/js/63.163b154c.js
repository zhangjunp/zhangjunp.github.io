(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{417:function(t,s,a){"use strict";a.r(s);var _=a(42),v=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端开发规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端开发规范"}},[t._v("#")]),t._v(" 前端开发规范")]),t._v(" "),a("p",[t._v("本文主要整理出前端开发应该具有的规范性，为提高团队协作效率，使开发流程更加规范化。\n")]),t._v(" "),a("h2",{attrs:{id:"html部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html部分"}},[t._v("#")]),t._v(" html部分")]),t._v(" "),a("h3",{attrs:{id:"_1-1遵循xhtml1-0规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1遵循xhtml1-0规则"}},[t._v("#")]),t._v(" 1.1遵循xhtml1.0规则")]),t._v(" "),a("ol",[a("li",[t._v("所有标签必须结束")]),t._v(" "),a("li",[t._v("所有标签必须小写")]),t._v(" "),a("li",[t._v("标签属性必须使用成对引号(单引号或双引号)")]),t._v(" "),a("li",[t._v("标签属性必须有值")]),t._v(" "),a("li",[t._v("所有特殊符号必须转义(&、<、>、...)")]),t._v(" "),a("li",[t._v("文档类型声明及编码：同一位html5声明类型<!DOCTYPE html>。编码统一为"),a("meta",{attrs:{charset:"utf-8"}}),t._v("，书写时利用IDE实现层次分明的缩进。")]),t._v(" "),a("li",[t._v("非特殊情况下样式文件必须外链至"),a("head"),t._v("之间。非特殊情况下JavaScript文件必须外链至页面底部。")])]),t._v(" "),a("h3",{attrs:{id:"_1-2标签属性命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2标签属性命名规范"}},[t._v("#")]),t._v(" 1.2标签属性命名规范")]),t._v(" "),a("ul",[a("li",[t._v('id：连接符命名法 "hello-world"')]),t._v(" "),a("li",[t._v('class： 连接符命名法 "hello-world"')]),t._v(" "),a("li",[t._v('name： 驼峰式命名法 "helloWorld"')])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("用于结构布局的元素id命名")]),t._v(" "),a("ul",[a("li",[t._v("主容器：main")]),t._v(" "),a("li",[t._v("页头：header")]),t._v(" "),a("li",[t._v("页脚：footer")]),t._v(" "),a("li",[t._v("内容区域：content")]),t._v(" "),a("li",[t._v("LOGO：logo")]),t._v(" "),a("li",[t._v("主导航：main-nav")]),t._v(" "),a("li",[t._v("二级导航：sub-nav")])])]),t._v(" "),a("li",[a("p",[t._v('name命名\n一般用于表单元素，根据当前元素id属性值命名，去掉id属性值的前缀和所有连接符，使用驼峰式命名法命名，例如id="id-card"，那么name="idCard"。')])])]),t._v(" "),a("h3",{attrs:{id:"_1-3合理使用标签-语义化结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3合理使用标签-语义化结构"}},[t._v("#")]),t._v(" 1.3合理使用标签，语义化结构")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("标签合理嵌套")]),t._v(" "),a("ul",[a("li",[t._v("span、strong、em等行级元素不能包含块级元素：div、ul、ol、p、h1~h6。尽可能减少div嵌套，例如"),a("div",[a("div",[t._v("请输入用户名")])]),t._v("可以使用"),a("div",[a("p",[t._v("请输入用户名")])]),t._v("代替。")]),t._v(" "),a("li",[t._v("严禁多div症、多span症、多table症，正确使用标签表现DOM结构，在文档去除css的情况下，仍然具有结构和可读性，以下是html标记的使用规范：\n"),a("ul",[a("li",[t._v("p：文本段落；")]),t._v(" "),a("li",[t._v("dl：定义列表，可包括标题和内容简介的列表；")]),t._v(" "),a("li",[t._v("ul：无序列表；")]),t._v(" "),a("li",[t._v("ol：有序列表；")]),t._v(" "),a("li",[t._v("h1~h6：文章标题、内容区块标题，根据重要性由大到小区分，h1一个页面只出现一次；")]),t._v(" "),a("li",[t._v("strong/em：强调文本；")]),t._v(" "),a("li",[t._v("img：图像，必须加上alt属性，当图像无法显示时可表示图像信息，背景和按钮使用css处理，不适用img元素；")]),t._v(" "),a("li",[t._v("table：数据网格，规则的分栏布局，尽可能显性的定宽和定高。")])])]),t._v(" "),a("li",[t._v('充分利用无兼容性问题的html自身标签，比如span，em，strong，label等等，需要为html元素添加自定义属性的时候，首先要考虑下有没有默认的已有的合适标签去设置，如果没有，可以使用须以"data-"为前缀来添加自定义属性。')]),t._v(" "),a("li",[t._v('书写链接地址时，必须避免重定向，例如：href="http://baidu.com/"，即须在URL地址后面加上"/"。')]),t._v(" "),a("li",[t._v("合理化表单结构\n"),a("ul",[a("li",[t._v("使用fieldset元素包裹相同类别的字段")]),t._v(" "),a("li",[t._v("使用legend元素表示字段类别名称")]),t._v(" "),a("li",[t._v("使用label表示字段文本，添加必要的for属性，以在点击字段文本时，文本框能获得焦点")]),t._v(" "),a("li",[t._v("文本框不使用size属性定义宽度，而使用css的width属性")]),t._v(" "),a("li",[t._v("添加maxlength属性限制输入字符的长度")])])])])])]),t._v(" "),a("h2",{attrs:{id:"css部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css部分"}},[t._v("#")]),t._v(" Css部分")]),t._v(" "),a("h3",{attrs:{id:"_2-1css命名规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1css命名规则"}},[t._v("#")]),t._v(" 2.1Css命名规则")]),t._v(" "),a("ol",[a("li",[t._v("样式类名全部用小写，首字符必须是字母，禁止数字或其他特殊字符。由以字母开头的小写字符(a-z)、数字(0-9)、中划线(-)组成。")]),t._v(" "),a("li",[t._v('可以使单个单词，也可以使组合单词，要求能够描述清楚模块和元素的含义，使其具有语义化。避免使用123456...red，blue，left，right之类的(如颜色、字号大小等)矢量命名，如class="left-news"、class="2"，以避免当状态改变时名称失去意义。')]),t._v(" "),a("li",[t._v("尽量用单个单词简单描述class名称。")]),t._v(" "),a("li",[t._v("双单词或多单词组合方式：形容词-名词、命名空间-名词、命名空间-形容词-名词。例如：news-list、mod-feeds、mod-my-feeds、cell-title。")]),t._v(" "),a("li",[t._v("css文件命名：英文命名，后缀.css。共用wichuang.css，首页index.css，其他页面依实际模块需求命名。")])]),t._v(" "),a("h3",{attrs:{id:"_2-2命名空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2命名空间"}},[t._v("#")]),t._v(" 2.2命名空间")]),t._v(" "),a("p",[t._v("在编码思想上，我们可以将页面拆分为不同的层级(布局、模块、原件)。\n什么是css命名空间？\n通过统一的命名规范定义命名的范围，成为css class&id命名空间。\n布局：以语义化的单词layout作为命名空间，例如主栏布局命名layout-main。只改变layout-命名空间后面的命名，layout始终保留。布局的命名空间为layout-xxx\n模块：页面是由一个或多个模块组成，模块的英文单词是module，规范写成mod，如新闻模块mod-news，照片展示模块mod-photo-show。模块的命名空间为mod-xxx。\n元件：元件是属于模块内部的，也可以说模块是由元件和它内部的自有元素组成。如用户照片信息元件cell-user-photo。元件的命名空间为cell-xxx。")]),t._v(" "),a("h3",{attrs:{id:"_2-3添加文档样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3添加文档样式"}},[t._v("#")]),t._v(" 2.3添加文档样式")]),t._v(" "),a("ol",[a("li",[t._v("引用外部文件方式添加样式")]),t._v(" "),a("li",[t._v("严禁编写标记内代码")]),t._v(" "),a("li",[t._v("严禁在文档中使用"),a("code",[t._v('js <style type="text/css"></style>')]),t._v("代码块")]),t._v(" "),a("li",[t._v("如果是发布版本，请压缩合并代码，将多个样式文件合并为单个文件。")])]),t._v(" "),a("h3",{attrs:{id:"_2-4属性简写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4属性简写"}},[t._v("#")]),t._v(" 2.4属性简写")]),t._v(" "),a("p",[t._v("为了节省字节数及文件大小，以下属性请使用简写方式。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("padding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" top right bottom left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmargin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  top right bottom left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nborder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("  style width color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nborder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("top"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" style width color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nborder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" style width color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbackground"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" color "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" repeat position"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlist"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" type position "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfont"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("weight"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-5字体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5字体"}},[t._v("#")]),t._v(" 2.5字体")]),t._v(" "),a("ol",[a("li",[t._v("全局定义字体："),a("code",[t._v("js body{font:12px arial,helvetica,sans-self;line-height:1.5;}")])]),t._v(" "),a("li",[t._v("font-family:\n"),a("ol",[a("li",[t._v("等宽字体组合：Arial,Helvetica,sans-serlf;")]),t._v(" "),a("li",[t._v("不等宽(宽扁)字体组合：Verdana,Trebuchet MS,sans-serlf;")]),t._v(" "),a("li",[t._v("中文字体：除非内容文本需要，不推荐强制定义；")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-6编写兼容的css代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6编写兼容的css代码"}},[t._v("#")]),t._v(" 2.6编写兼容的css代码")]),t._v(" "),a("ol",[a("li",[t._v("页面必须在ie6~8、firefox、opera、safari、chrome下显示兼容。")]),t._v(" "),a("li",[t._v("尽量不使用IE有条件注释方式，对某一版本浏览器编写额外的样式表。")]),t._v(" "),a("li",[t._v("尽量不要使用!important或下划线等招数编写代码。")])]),t._v(" "),a("h2",{attrs:{id:"图片部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片部分"}},[t._v("#")]),t._v(" 图片部分")]),t._v(" "),a("ol",[a("li",[t._v("背景图片：bg001，bg002，bg003.....")]),t._v(" "),a("li",[t._v("一般图片：img001，img002，img003.....")]),t._v(" "),a("li",[t._v("特定图片：如banner，logo按照具体情况命名")]),t._v(" "),a("li",[t._v("按钮图片：btn-submit，btn-cancel...")]),t._v(" "),a("li",[t._v("运用css sprite技术集中小的背景图或图标，减小页面http请求。")]),t._v(" "),a("li",[t._v("图片格式仅限于gif||png||jpg")]),t._v(" "),a("li",[t._v("在保证视觉效果的情况下选择最小的图片格式与图片质量，以减小加载时间")])]),t._v(" "),a("h2",{attrs:{id:"javascript部分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript部分"}},[t._v("#")]),t._v(" JavaScript部分")]),t._v(" "),a("h3",{attrs:{id:"_4-1js命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1js命名规范"}},[t._v("#")]),t._v(" 4.1Js命名规范")]),t._v(" "),a("p",[t._v("Js文件命名：英文命名，后缀.js。共用wichung-common.js，其他依实际模块需求命名")]),t._v(" "),a("h3",{attrs:{id:"_4-2在文档中引入js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2在文档中引入js"}},[t._v("#")]),t._v(" 4.2在文档中引入js")]),t._v(" "),a("ol",[a("li",[t._v("使用外部文件方式引用js")]),t._v(" "),a("li",[t._v("将引用js的代码集中放置在一起，可放置在"),t._v("之前或"),t._v("之前，严禁在body间分散放置")]),t._v(" "),a("li",[t._v("使DOM结构和js代码分离，禁止写在标记内部")]),t._v(" "),a("li",[t._v("如果是发布版本，请将多个稳定版本的js文件压缩、归类放置到单个文件内，压缩和最小化js文件。")]),t._v(" "),a("li",[t._v("引入js库文件，文件名须包含库名称及版本号及是否为压缩版，比如jquery-1.1.1.min.js；引入插件，文件名格式为库名称+插件名称，比如JQuery.cookie.js；")])]),t._v(" "),a("h3",{attrs:{id:"_4-3优化jquery代码-提高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3优化jquery代码-提高性能"}},[t._v("#")]),t._v(" 4.3优化JQuery代码，提高性能")]),t._v(" "),a("ol",[a("li",[t._v("原则上仅引入JQuery库，弱需引入第三方库，须与团队其他人员讨论决定")]),t._v(" "),a("li",[t._v("JQuery变量命名：$name，普通变量命名：name")]),t._v(" "),a("li",[t._v('选择器从最近的ID开始继承或直接使用ID选择器：$("#id tag")')]),t._v(" "),a("li",[t._v('选择器在使用class前加上标签名：$("span.span1");')]),t._v(" "),a("li",[t._v("尽量使用ID选择器代替class")]),t._v(" "),a("li",[t._v('要获取子元素请使用子选择器，而不要使用后代选择器：$("#id>span")')]),t._v(" "),a("li",[t._v("使用data()存储临时变量")]),t._v(" "),a("li",[t._v("避免使用live()方法绑定事件")]),t._v(" "),a("li",[t._v('在父级元素监听事件，对目标元素进行操作：$("#id").click(function(e){});')]),t._v(" "),a("li",[t._v("推迟加载拖放、动画、视觉特效等代码，把可能会影响页面加载速度的代码绑定到$(window).load()事件中。")])])])}),[],!1,null,null,null);s.default=v.exports}}]);