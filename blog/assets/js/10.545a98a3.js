(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{363:function(d,i,a){"use strict";a.r(i);var n=a(42),r=Object(n.a)({},(function(){var d=this,i=d.$createElement,a=d._self._c||i;return a("ContentSlotsDistributor",{attrs:{"slot-key":d.$parent.slotKey}},[a("h1",{attrs:{id:"android-ndk初识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk初识"}},[d._v("#")]),d._v(" Android NDK初识")]),d._v(" "),a("p",[d._v("Android NDK是Android软件开发包(SDK)的相关工具集，用来扩展Android SDK的功能，从而使开发人员能够使用机器代码生成的编程语言(如C、C++和汇编语言)实现一些对代码性能要求较高的模块，并将这些模块嵌入到Android应用程序中使用。")]),d._v(" "),a("h2",{attrs:{id:"什么是android-ndk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是android-ndk"}},[d._v("#")]),d._v(" 什么是Android NDK？")]),d._v(" "),a("p",[d._v("Android NDK是Android软件开发包(SDK)的相关工具集，用来扩展Android SDK的功能，从而使开发人员能够使用机器代码生成的编程语言(如C、C++和汇编语言)实现一些对代码性能要求较高的模块，并将这些模块嵌入到Android应用程序中使用。")]),d._v(" "),a("p",[d._v("NDK 不适用于大多数初学的 Android 编程者，对许多类型的 Android 应用没什么价值。 因为它不可避免地会增加开发过程的复杂性，所以通常不值得使用。 但如果您需要执行以下操作，它可能很有用：")]),d._v(" "),a("ul",[a("li",[d._v("在平台之间移植其应用。")]),d._v(" "),a("li",[d._v("重复使用现有库，或者提供其自己的库供重复使用。")]),d._v(" "),a("li",[d._v("在某些情况下提高性能，特别是像游戏这种计算密集型应用。")])]),d._v(" "),a("h2",{attrs:{id:"android-ndk提供的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk提供的组件"}},[d._v("#")]),d._v(" Android NDK提供的组件")]),d._v(" "),a("p",[d._v("Android NDK不是一个单独的工具，他是一个包含API、交叉编译器、链接程序、调试器、构建工具、文档和示例应用程序的综合工具集。以下是Android NDK的一些主要组件：")]),d._v(" "),a("ul",[a("li",[d._v("ARM、x86和MIPS交叉编译器")]),d._v(" "),a("li",[d._v("构建系统")]),d._v(" "),a("li",[d._v("Java原生接口头文件(jni)")]),d._v(" "),a("li",[d._v("C库")]),d._v(" "),a("li",[d._v("Math库")]),d._v(" "),a("li",[d._v("POSIX线程")]),d._v(" "),a("li",[d._v("最小的C++库")]),d._v(" "),a("li",[d._v("ZLib压缩库")]),d._v(" "),a("li",[d._v("动态链接库")]),d._v(" "),a("li",[d._v("Android日志库")]),d._v(" "),a("li",[d._v("Android像素缓冲区库")]),d._v(" "),a("li",[d._v("Android原生应用APIs")]),d._v(" "),a("li",[d._v("OpenGL ES 3D图形库")]),d._v(" "),a("li",[d._v("OpenSL ES原生音频库")]),d._v(" "),a("li",[d._v("OpenMAX AL最小支持")])]),d._v(" "),a("h2",{attrs:{id:"android-ndk的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk的结构"}},[d._v("#")]),d._v(" Android NDK的结构")]),d._v(" "),a("p",[d._v("Android NDK组件都被安装在NDK的根目录下，下面介绍一些重要的文件和子目录。")]),d._v(" "),a("ul",[a("li",[d._v("ndk-build：ndk-build 脚本用于在 NDK 中心启动构建脚本，这些脚本：\n"),a("ul",[a("li",[d._v("自动探测您的开发系统和应用项目文件以确定要构建的内容。")]),d._v(" "),a("li",[d._v("生成二进制文件。")]),d._v(" "),a("li",[d._v("生成二进制文件。")])])]),d._v(" "),a("li",[d._v("ndk-gdb：该shell脚本允许用GUN调试器调试原生组件。")]),d._v(" "),a("li",[d._v("ndk-stack：该shell脚本可以帮助分析原生组件崩溃时的堆栈追踪。")]),d._v(" "),a("li",[d._v("build：该目录包含了Android NDK构建系统的所有模块。")]),d._v(" "),a("li",[d._v("platforms：该目录包含了支持不同Android目标版本的头文件和库文件。Android NDK构建系统会根据具体的Android版本自动引用这些文档。")]),d._v(" "),a("li",[d._v("sources：该目录包含了可供开发人员导入到现有的Android NDK项目的一些共享模块。")]),d._v(" "),a("li",[d._v("toolchains：该目录包含目前Android NDK支持的不同目标机体系结构的交叉编译器。Android NDK目前支持ARM、X86和MIPS机体系结构。Android NDK构建系统根据选定的体系结构使用不同的交叉编译器。")])]),d._v(" "),a("h2",{attrs:{id:"android-ndk的开发流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk的开发流程"}},[d._v("#")]),d._v(" Android NDK的开发流程")]),d._v(" "),a("ol",[a("li",[a("p",[d._v("在java中声明Native方法")]),d._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[d._v("public")]),d._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[d._v("native")]),d._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[d._v("String")]),d._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[d._v("hello")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[d._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[d._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[d._v(";")]),d._v("\n")])])])]),d._v(" "),a("li",[a("p",[d._v("在jni目录中实现原生方法")]),d._v(" "),a("ol",[a("li",[a("p",[d._v("首先创建jni目录。")]),d._v(" "),a("p",[a("img",{attrs:{src:"https://ws2.sinaimg.cn/large/006tNc79ly1fn29zk3bg3j316a0veqfb.jpg",alt:""}})])]),d._v(" "),a("li",[a("p",[d._v("在jni目录中创建c/c++文件，并实现对应的方法。")]),d._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[d._v('#include <jni.h>\n#include <stdio.h>\n#include <stdlib.h>\n\nextern "C"\nJNIEXPORT jstring JNICALL\nJava_cn_com_codeteenager_ndkone_MainActivity_hello(JNIEnv *env, jobject obj) {\n\n return env->NewStringUTF("Hello World");\n}\n')])])])]),d._v(" "),a("li",[a("p",[d._v("添加Android.mk文件。")]),d._v(" "),a("div",{staticClass:"language-mk extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[d._v("LOCAL_PATH := $(call my-dir)\ninclude $(CLEAR_VARS)\nLOCAL_MODULE := helloworld\nLOCAL_SRC_FILES := HelloWorld.cpp\nLOCAL_C_INCLUDES += $(LOCAL_PATH)\n #LOCAL_LDLIBS := -llog\ninclude $(BUILD_SHARED_LIBRARY)\n")])])])]),d._v(" "),a("li",[a("p",[d._v("添加Application.mk文件。")]),d._v(" "),a("div",{staticClass:"language-mk extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[d._v("# 指定生成哪些cpu架构的库\nAPP_ABI := armeabi-v7a\n# 此变量包含目标 Android 平台的名称\nAPP_PLATFORM := android-22\n")])])]),a("p",[d._v("​")])])])]),d._v(" "),a("li",[a("p",[d._v("通过命令行打开jni目录，然后执行ndk-build命令脚本进行编译。编译后的项目结果如图所示。")]),d._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tNc79ly1fn29xy8i9fj30eo0p075p.jpg",alt:""}})]),d._v(" "),a("ul",[a("li",[d._v("jni：该目录包含原生组件的源代码以及描述原生组件构建方法的Android.mk构建文件。")]),d._v(" "),a("li",[d._v("libs：在Android NDK构建系统的构建过程中创建该目录。他包含指定的目标机体系结构的独立子目录，在打包过程中该目录被包含在APK文件中。")]),d._v(" "),a("li",[d._v("obj：这是一个中间目录，编译源代码后所产生的目标文件都保存在该目录下。")])])])]),d._v(" "),a("h2",{attrs:{id:"android-ndk构建系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk构建系统"}},[d._v("#")]),d._v(" Android NDK构建系统")]),d._v(" "),a("p",[d._v("Android NDK的构建系统是基于GUN Make的。该构建系统的主要目的是使开发人员能够用很短的构建文档来描述原生的Android应用程序。")]),d._v(" "),a("h2",{attrs:{id:"android-ndk的其他两种编译方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-ndk的其他两种编译方式"}},[d._v("#")]),d._v(" Android NDK的其他两种编译方式")]),d._v(" "),a("p",[d._v("上述Android NDK的开发流程中通过配置Android.mk来编译是其中的一种方式，还有两种方式。")]),d._v(" "),a("h3",{attrs:{id:"通过配置android-studio中build-gradle来编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过配置android-studio中build-gradle来编译"}},[d._v("#")]),d._v(" 通过配置Android Studio中build.gradle来编译")]),d._v(" "),a("p",[d._v("这种方式简化了编写Android.mk文件，跟上述流程一样，只是不需要编写Android.mk和Application.mk，但是需要添加两样配置。")]),d._v(" "),a("ul",[a("li",[a("p",[d._v("在项目的gradle.properties中，添加android.useDeprecatedNdk = true。")])]),d._v(" "),a("li",[a("p",[d._v("在主Module的build.gradle的defaultConfig里添加")]),d._v(" "),a("div",{staticClass:"language-gradle extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[d._v("ndk{\n     \tmoduleName 'hello'\n      abiFilter 'armeabi-v7a'\n   \t}\n")])])])])]),d._v(" "),a("p",[d._v("注意：这种方式无法再Android Studio3.0以上使用，只能在3.0以下使用，3.0及以上采用cmake来编译生成so文件。")]),d._v(" "),a("h3",{attrs:{id:"通过android-studio的cmake插件编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过android-studio的cmake插件编译"}},[d._v("#")]),d._v(" 通过Android Studio的cmake插件编译")]),d._v(" "),a("p",[d._v("在Android Studio2.2及以上版本中，可以使用cmake插件来编译c库，这也是最新的ndk开发方式。首先你需要在SDK Tools中下载CMake和LLDB这两个组件，当然ndk也是必须的。")]),d._v(" "),a("ul",[a("li",[d._v("CMake：一款外部构建工具，可与Gradle搭配使用来构建原生库。如果您想用ndk-build，则不需要此组件。")]),d._v(" "),a("li",[d._v("LLDB：一种调试程序，Android Studio使用它来调试原生代码。")])]),d._v(" "),a("p",[d._v("当你安装好上述两个组件后，你可以使用Android Studio创建支持C/C++的新项目。步骤如下：")]),d._v(" "),a("ol",[a("li",[a("p",[d._v("在向导的 "),a("strong",[d._v("Configure your new project")]),d._v(" 部分，选中 "),a("strong",[d._v("Include C++ Support")]),d._v(" 复选框。")])]),d._v(" "),a("li",[a("p",[d._v("点击 "),a("strong",[d._v("Next")]),d._v("。")])]),d._v(" "),a("li",[a("p",[d._v("正常填写所有其他字段并完成向导接下来的几个部分。")])]),d._v(" "),a("li",[a("p",[d._v("在向导的 "),a("strong",[d._v("Customize C++ Support")]),d._v(" 部分，您可以使用下列选项自定义项目：")]),d._v(" "),a("ul",[a("li",[a("strong",[d._v("C++ Standard")]),d._v("：使用下拉列表选择您希望使用哪种 C++ 标准。选择 "),a("strong",[d._v("Toolchain Default")]),d._v(" 会使用默认的 CMake 设置。")]),d._v(" "),a("li",[a("strong",[d._v("Exceptions Support")]),d._v("：如果您希望启用对 C++ 异常处理的支持，请选中此复选框。如果启用此复选框，Android Studio 会将 "),a("code",[d._v("-fexceptions")]),d._v(" 标志添加到模块级 "),a("code",[d._v("build.gradle")]),d._v(" 文件的 "),a("code",[d._v("cppFlags")]),d._v(" 中，Gradle 会将其传递到 CMake。")]),d._v(" "),a("li",[a("strong",[d._v("Runtime Type Information Support")]),d._v("：如果您希望支持 RTTI，请选中此复选框。如果启用此复选框，Android Studio 会将 "),a("code",[d._v("-frtti")]),d._v(" 标志添加到模块级 "),a("code",[d._v("build.gradle")]),d._v(" 文件的 "),a("code",[d._v("cppFlags")]),d._v(" 中，Gradle 会将其传递到 CMake。")])])]),d._v(" "),a("li",[a("p",[d._v("点击 "),a("strong",[d._v("Finish")]),d._v("，创建成功，项目结构如下图所示。")]),d._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tNc79ly1fn2ew9mqh3j30je0g475j.jpg",alt:""}})]),d._v(" "),a("ul",[a("li",[d._v("cpp文件夹用于存放C/C++文件。")]),d._v(" "),a("li",[d._v("在External Build Files中，CMakeLists.txt是构建原生库的CMake脚本。")])])])]),d._v(" "),a("p",[d._v("当你创建完成项目后点击Android Studio中Build->Make Project，系统会帮你构建完成后，你就可以在相对应Module下的build->intermediates->cmake下找到so库。")])])}),[],!1,null,null,null);i.default=r.exports}}]);