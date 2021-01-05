(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{392:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"okhttp的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#okhttp的使用"}},[t._v("#")]),t._v(" okhttp的使用")]),t._v(" "),a("p",[t._v("现在开发App常用的网络框架有android-async-http、volley、okhttp、Retrofit，由于android-async-http和volley内部使用的是HttpClient，而Android 6.0对HttpClient已经放弃了，不再使用。所以现在一般使用的网络框架是okhttp和Retrofit。今天讲解一下okhttp的使用。\n")]),t._v(" "),a("h2",{attrs:{id:"okhttp的使用-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#okhttp的使用-2"}},[t._v("#")]),t._v(" okhttp的使用")]),t._v(" "),a("ul",[a("li",[t._v("在使用之前需要加上对OkHttp的依赖\n"),a("pre",[t._v("compile 'com.squareup.okhttp3:okhttp:3.8.0'")])]),t._v(" "),a("li",[t._v("使用Okhttp的步骤如下：")]),t._v(" "),a("li",[t._v("创建OkHttpClient实例\n"),a("pre",[t._v("OkHttpClient okHttpClient = new OkHttpClient();")])]),t._v(" "),a("li",[t._v("创建一个Request对象,使用构造者模式\n"),a("pre",[t._v('Request.Builder builder = new Request.Builder();\nRequest request = builder.get().url("http://www.baidu.com").build();\n')])]),t._v(" "),a("li",[t._v("将Request对象使用OkHttpClient封装成Call对象\n"),a("pre",[t._v("Call call = okHttpClient.newCall(request);\n")])]),t._v(" "),a("li",[t._v("执行Call的方法\n"),a("ul",[a("li",[t._v("异步操作，回调的方法在子线程")])])])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFailure")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Call")]),t._v(" call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Call")]),t._v(" call"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Response")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IOException")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("* 同步操作\n```java\n\t\tResponse response = call.execute();\n        String result = response.body().string();\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#### 以上是OkHttp基于Get请求，Post请求需要Request.Builder调用post()方法，并将RequestBody对象传入即可。代码如下：\n```java\n        RequestBody requestBody = new FormBody.Builder().add("username", "username").build();\n        Request request = builder.url("").post(requestBody).build();\n')])])]),a("p",[t._v("上面这种方法是通过表单的形式发送Post请求，当然RequestBody提供了一些静态方法来传入像字符串、上传文件等。\n"),a("img",{attrs:{src:"http://ww2.sinaimg.cn/large/006HJ39wgy1fg8b7yevp1j30oi039aai.jpg",alt:""}}),t._v("\n例如字符串：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MediaType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"text/plain;chaset=utf-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{username:codeteenager}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("你只需注意第一个参数mime type即可。")]),t._v(" "),a("h4",{attrs:{id:"以上就是使用okhttp的一个基本的流程-okhttp官网-http-square-github-io-okhttp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以上就是使用okhttp的一个基本的流程-okhttp官网-http-square-github-io-okhttp"}},[t._v("#")]),t._v(" 以上就是使用OkHttp的一个基本的流程，OkHttp官网： http://square.github.io/okhttp/")])])}),[],!1,null,null,null);s.default=e.exports}}]);