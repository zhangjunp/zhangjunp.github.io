(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{390:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"leakcanary教程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leakcanary教程"}},[a._v("#")]),a._v(" LeakCanary教程")]),a._v(" "),s("p",[a._v("LeakCanary是Square公司开源的一个检测内存泄漏的函数库，可以方便的在项目中集成，在Debug版本中监控Activity、Fragment等的内存泄漏。使用教程如下：")]),a._v(" "),s("h4",{attrs:{id:"leakcanary是square公司开源的一个检测内存泄漏的函数库-可以方便的在项目中集成-在debug版本中监控activity、fragment等的内存泄漏。使用教程如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#leakcanary是square公司开源的一个检测内存泄漏的函数库-可以方便的在项目中集成-在debug版本中监控activity、fragment等的内存泄漏。使用教程如下"}},[a._v("#")]),a._v(" LeakCanary是Square公司开源的一个检测内存泄漏的函数库，可以方便的在项目中集成，在Debug版本中监控Activity、Fragment等的内存泄漏。使用教程如下：")]),a._v(" "),s("ul",[s("li",[a._v("在你项目的gradle中添加以下依赖。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("dependencies "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n   debugCompile "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.squareup.leakcanary:leakcanary-android:1.5.1'")]),a._v("\n   releaseCompile "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.squareup.leakcanary:leakcanary-android-no-op:1.5.1'")]),a._v("\n   testCompile "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.squareup.leakcanary:leakcanary-android-no-op:1.5.1'")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("在上述依赖中可以看到，只有在Debug版本中才使用LeakCanary的功能，而在Release和Test版本中，使用其no-op版本，此版本没有实际代码和操作，这样不会对生成的APK包体积和应用的性能造成影响。")]),a._v(" "),s("ul",[s("li",[a._v("在Application中获取RefWatcher实例，并用RefWatcher来检测想要监控的对象。")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RefWatcher")]),a._v(" refWatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Override")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("onCreate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LeakCanary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("isInAnalyzerProcess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        refWatcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("LeakCanary")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RefWatcher")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRefWatcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Context")]),a._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyApplication")]),a._v(" application "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("refWatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("如果只检测Activity的泄漏，只需要在Application中的onCreate()中使用LeakCanary.install(this);即可，此函数会启动一个ActivityRefWatcher，它会自动监控应用中调用Activity.onDestroy()之后发生泄漏的Activity。如果想监控其他对象例如Fragment，那就用RefWatcher的实例来实现。")]),a._v(" "),s("ul",[s("li",[a._v("使用RefWatcher来检测对象")])]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RefWatcher")]),a._v(" refWatcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("getRefWatcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\trefWatcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("ul",[s("li",[a._v("LeakCanary的Github地址：https://github.com/square/leakcanary")]),a._v(" "),s("li",[a._v("LeakCanary中文使用：https://www.liaohuqiu.net/cn/posts/leak-canary-read-me/")])])])}),[],!1,null,null,null);t.default=e.exports}}]);