(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{412:function(a,s,t){"use strict";t.r(s);var e=t(42),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mac中编译ffmpeg教程-android版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac中编译ffmpeg教程-android版"}},[a._v("#")]),a._v(" Mac中编译FFmpeg教程(Android版)")]),a._v(" "),t("p",[a._v("本篇文章主要介绍在Mac环境中，编译FFmpeg生成so库。")]),a._v(" "),t("h2",{attrs:{id:"ffmpeg简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg简介"}},[a._v("#")]),a._v(" FFmpeg简介")]),a._v(" "),t("p",[a._v("FFmpeg既是一款音视频编解码工具，同时也是一组音视频编解码开发套件，作为编解码开发套件，它为开发者提供了丰富的音视频处理的调用接口。\nFFmpeg提供了多种媒体格式的封装和解封装，包括多种音视频编码、多种协议的流媒体、多种色彩格式转换、多种采样率转换、多种码率转换等。FFmpeg框架提供了多种丰富的插件模块，包含封装与解封装的插件、编码与解码的插件等。")]),a._v(" "),t("h2",{attrs:{id:"开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[a._v("#")]),a._v(" 开发环境")]),a._v(" "),t("p",[a._v("本次编译的环境如下：")]),a._v(" "),t("ul",[t("li",[a._v("macOS High Sierra(10.13.5)")]),a._v(" "),t("li",[a._v("FFmpeg源码(3.3.7)")]),a._v(" "),t("li",[a._v("ndk(android-ndk-r14b)")])]),a._v(" "),t("p",[a._v("首先下载ndk，建议不要使用Android Studio自带的ndk-bundle，然后配置ndk的全局环境，在.bash_profile中添加一下配置：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ANDROID_NDK_ROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/Users/jiangshuaijie/android-ndk-r14b/build\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),t("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v("}")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${ANDROID_NDK_ROOT}")]),a._v("\n")])])]),t("p",[a._v("然后在命令行中输入ndk-build测试环境是否配置成功。")]),a._v(" "),t("h2",{attrs:{id:"下载ffmpeg源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载ffmpeg源码"}},[a._v("#")]),a._v(" 下载FFmpeg源码")]),a._v(" "),t("p",[a._v("FFmpeg的源码可以在 https://ffmpeg.org/download.html#releases 中下载，也可以使用git clone https://git.ffmpeg.org/ffmpeg.git ffmpeg 克隆到本地。建议下载3.3.x版本的库，最新的库编译的问题比较多，各种路径不正常等问题。")]),a._v(" "),t("h2",{attrs:{id:"修改configure文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改configure文件"}},[a._v("#")]),a._v(" 修改configure文件")]),a._v(" "),t("p",[a._v("下载FFmpeg源代码之后，首先需要对源代码中的configure文件进行修改。由于编译出来的动态库文件名的版本号在.so之后（例如“libavcodec.so.5.100.1”），而android平台不能识别这样文件名，所以需要修改这种文件名。在configure文件中找到下面几行代码：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SLIBNAME_WITH_MAJOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBNAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("."),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("LIBMAJOR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LIB_INSTALL_EXTRA_CMD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("RANLIB"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("LIBDIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("LIBNAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\"'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SLIB_INSTALL_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBNAME_WITH_VERSION"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SLIB_INSTALL_LINKS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBNAME_WITH_MAJOR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBNAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("'")]),a._v("\n")])])]),t("p",[a._v("替换成")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SLIBNAME_WITH_MAJOR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBPREF"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("FULLNAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("LIBMAJOR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBSUF"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LIB_INSTALL_EXTRA_CMD")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'$"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("RANLIB"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("LIBDIR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("LIBNAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("\"'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SLIB_INSTALL_NAME")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBNAME_WITH_MAJOR"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("'")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SLIB_INSTALL_LINKS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("SLIBNAME"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("'")]),a._v("\n")])])]),t("h2",{attrs:{id:"编写脚本生成类库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写脚本生成类库"}},[a._v("#")]),a._v(" 编写脚本生成类库")]),a._v(" "),t("p",[a._v("在ffmpeg中创建一个build_android.sh的脚本，并赋予可执行的权限，脚本内容如下：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/bash")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# NDK的路径，根据自己的安装位置进行设置")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TMPDIR")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/Users/jiangshuaijie/ffmpeg-3.3.7/ffmpeg_install\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NDK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/Users/jiangshuaijie/android-ndk-r14b\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SYSROOT")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NDK")]),a._v("/platforms/android-21/arch-arm/\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("TOOLCHAIN")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NDK")]),a._v("/toolchains/arm-linux-androideabi-4.9/prebuilt/darwin-x86_64\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CPU")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("arm\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v("/android/"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CPU")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADDI_CFLAGS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-marm"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("build_one")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n./configure "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$PREFIX")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --target-os"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --cross-prefix"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TOOLCHAIN")]),a._v("/bin/arm-linux-androideabi- "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("arm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --sysroot"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SYSROOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --extra-cflags"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-Os -fpic '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADDI_CFLAGS")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --extra-ldflags"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADDI_LDFLAGS")]),a._v('"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --cc"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TOOLCHAIN")]),a._v("/bin/arm-linux-androideabi-gcc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --nm"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$TOOLCHAIN")]),a._v("/bin/arm-linux-androideabi-nm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-shared "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-runtime-cpudetect "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-gpl "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-small "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-cross-compile "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-debug "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-static "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-doc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-asm "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-ffmpeg "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-ffplay "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-ffprobe "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-ffserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-postproc "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --enable-avdevice "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-symver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --disable-stripping "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ADDITIONAL_CONFIGURE_FLAG")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_LRINT 0/HAVE_LRINT 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_LRINTF 0/HAVE_LRINTF 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_ROUND 0/HAVE_ROUND 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_ROUNDF 0/HAVE_ROUNDF 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_TRUNC 0/HAVE_TRUNC 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_TRUNCF 0/HAVE_TRUNCF 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_CBRT 0/HAVE_CBRT 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sed")]),a._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'s/HAVE_RINT 0/HAVE_RINT 1/g'")]),a._v(" config.h\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 这里是定义用几个CPU编译，我用4个，一般在5分钟之内编译完成")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" -j4\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\nbuild_one\n\n")])])]),t("p",[a._v("其中：")]),a._v(" "),t("ul",[t("li",[a._v("TMPDIR为编译生成的临时文件存放的目录")]),a._v(" "),t("li",[a._v("SYSROOT为so文件支持的最低Android版本的平台目录")]),a._v(" "),t("li",[a._v("CPU为指定so文件支持的平台")]),a._v(" "),t("li",[a._v("PREFIX为生成的so文件存放目录")]),a._v(" "),t("li",[a._v("TOOLCHAIN为编译所使用的工具链目录")]),a._v(" "),t("li",[a._v("cross-prefix为编译所使用的工具链文件")]),a._v(" "),t("li",[a._v("enable和disable指定了需要编译的项")]),a._v(" "),t("li",[a._v("target-os为目标操作系统；")])]),a._v(" "),t("h2",{attrs:{id:"编译ffmpeg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译ffmpeg"}},[a._v("#")]),a._v(" 编译FFmpeg")]),a._v(" "),t("p",[a._v("在ffmpeg目录中，执行终端命令：")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("./build_android.sh\n")])])]),t("p",[a._v("即可编译，然后等待生成so文件即可。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tKfTcly1ft8dad6vqwj31dm0gu0zg.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"相关资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关资料"}},[a._v("#")]),a._v(" 相关资料")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/leixiaohua1020/article/details/47008825",target:"_blank",rel:"noopener noreferrer"}},[a._v("雷霄骅的博客"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);