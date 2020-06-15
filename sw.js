/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/10/12/hello-world/index.html","3ab3260f0f5668c553e86531530e94ea"],["/2019/10/17/BOSS直聘爬虫/index.html","b4688078623b0625ef206ef6bf8ecea0"],["/2019/10/17/BOSS直聘爬虫/图1-1目标页面.png","87c6d70403cd6ca75b011b59ec80ed53"],["/2019/10/17/BOSS直聘爬虫/图1-2分析目标页面.png","f529f762f190e5a3db41a342866104d3"],["/2019/10/17/BOSS直聘爬虫/图1-4获取的数据.png","f0d04583951ba146caf72b6aedd46cc6"],["/2019/10/17/BOSS直聘爬虫/图2-1 自动驾驶职位招聘全国分布.png","bfe56cacc877bf1fd4f733a37957c3e4"],["/2019/10/17/BOSS直聘爬虫/图2-2  自动驾驶岗位数量全国TOP10城市.png","396e176722651b5cd9c60866c351de2d"],["/2019/10/17/BOSS直聘爬虫/图2-3  自动驾驶全国平均薪资水平统计.png","4b67c69b7307fb5bdbffa68e7eaed1cf"],["/2019/10/17/BOSS直聘爬虫/图2-4  “自动驾驶”职位学历要求.png","ec0c81ec373f4f5b6c1c0af1d4ec71b4"],["/2019/10/17/BOSS直聘爬虫/图2-5  “自动驾驶”职位工作经验要求.png","cd06e65b734c365a8b36a17b9c8bb184"],["/2019/10/17/BOSS直聘爬虫/图2-6  “自动驾驶”主要岗位种类分析.png","1fc6a7fd570b845c00cab50bea195292"],["/2019/10/17/BOSS直聘爬虫/图2-7  “自动驾驶”主要招聘企业.png","f50cb9e78a0152386c68705f325dbd6c"],["/2019/10/17/BOSS直聘爬虫/图2-8  自动驾驶招聘行业分布.png","b78717848587e036888e185defa7bc9e"],["/2019/10/17/BOSS直聘爬虫/岗位名称.jpg","a6f368cf19a7a4fecdcb08e03421373b"],["/2019/11/07/逻辑回归模型/TPR和TNR.png","94b8221a1ba5cb644699cb1f4f79982b"],["/2019/11/07/逻辑回归模型/index.html","7aa4d93c7d10d2520731b1ba2ee560d5"],["/2019/11/07/逻辑回归模型/validate_ROC.png","0bbb0016a200f7b88d7865dcf5c9f2df"],["/2019/11/07/逻辑回归模型/图2-1  aggr()生成的原始数据集的缺失值模式图形.png","62078edf1df50bf2c630b83ae6208614"],["/2019/11/07/逻辑回归模型/图2-2  原始数据集按实例（行）展示真实值和缺失值的矩阵图.png","fafaa97bc27bf1e7e84bd152a700f5e7"],["/2019/11/07/逻辑回归模型/图2-3  异常值分析.png","debb8edd3e027439a98dc8eae7c768c0"],["/2019/11/07/逻辑回归模型/图3-1  变量分布统计图1.png","1bdabee4299e87e84aa0887f8e46492b"],["/2019/11/07/逻辑回归模型/图3-1  变量分布统计图2.png","5bc7774f4101965e7697ccc7d108e2fa"],["/2019/11/07/逻辑回归模型/图3-2  变量之间的相关性分析.png","fdfdbe1950cfba0ef06d2ded3aff5d3e"],["/2019/11/07/逻辑回归模型/图4-1  拟合优度ROC.png","f282c4b565ed9b47f151918bef299fde"],["/2019/11/07/逻辑回归模型/图5-1  测试数据集拟合优度.png","c712225fd8bebfd892e32903c0c8bd77"],["/2019/11/07/逻辑回归模型/拟合ROC.png","f282c4b565ed9b47f151918bef299fde"],["/2020/01/03/改进CNN识别Fashion-MINST/index.html","79f838b40e0878caacec2a2746cbc0d1"],["/2020/02/12/WiFi-detect-OD-estimation/CDF of the bus load error.png","bc90826c8d0be730d93450036d631610"],["/2020/02/12/WiFi-detect-OD-estimation/Estimated and ground truth of bus load.png","3efd1153d05162b4781a44ebacbb12b2"],["/2020/02/12/WiFi-detect-OD-estimation/Estimated bus load error distribution.png","f9031dbdcca0c4a0f0cf4f332c2bf8e1"],["/2020/02/12/WiFi-detect-OD-estimation/Overall architecture of the data collection system.png","a60e8b7ba597fa7199d9f12d8a3450da"],["/2020/02/12/WiFi-detect-OD-estimation/Statistics of optimal filtering parameters.png","fe421f1d5eb936a2b15d92904168e728"],["/2020/02/12/WiFi-detect-OD-estimation/Survey route route 101.png","df8e650a159baacc917bd8462649144e"],["/2020/02/12/WiFi-detect-OD-estimation/The Wi-Fi device OD matrix based on time matching.jpg","3c1d213ad2935c9fbb62e8dc5ae18241"],["/2020/02/12/WiFi-detect-OD-estimation/The composition of the hardware of the data collection system.png","87399e4867baaa477ce8535fcee877be"],["/2020/02/12/WiFi-detect-OD-estimation/The inference process of the boarding and alighting stop of the detected devices.png","9785e6f0effa83cb8b0add10ebda666a"],["/2020/02/12/WiFi-detect-OD-estimation/index.html","6385e31f12339bc8b900bf358a8e39e0"],["/2020/05/04/心之力/index.html","bf53fb440d331bd1365757f8e899646e"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/BIOS启动1.png","0fcbb3065ffa40508ae48958cdc3e33a"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/UEFI安装1.png","23d9c00cd38ecfc630ee7b7087518081"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/UEFI安装2.png","37b6656054522f11c419a2fe3cecfc39"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/index.html","8f95e63a85af5a476855c0c6bd6e78cf"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/分区1.png","1fd7c637839f9d4e3fddef2091300842"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/分区2.png","2f4d99f11aedbde047952f316efb2d6e"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/分区3.png","4ba541b04ba45378b1170f35d029b964"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/分区4.png","3992205c3265035610fed85f6ed67891"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/分区5.png","11dbbad05509846e3648ebb9b94c869a"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/添加硬盘.png","9220b2667422ce8cdba50d907bb488f9"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/添加硬盘2.png","1b865e2255fc6b0b4ec724313ab4a72a"],["/2020/06/14/将ubuntu装到移动硬盘中即插即用/添加硬盘3.png","d31588ffbfe6907a24000504aa1999cc"],["/404.html","d8c7f84f3ebca126736e7bbfa3fcca29"],["/about/index.html","761da19de9c48add4cf8691e45669261"],["/archives/2019/10/index.html","a68e99f431347af55b38fda85934d711"],["/archives/2019/11/index.html","a2a3e0a3ff9ea934815a04d140e829e3"],["/archives/2019/index.html","011201ec1e0b8edd218f022c312ec15d"],["/archives/2020/01/index.html","d4989efed431deeba33ca8d397acd081"],["/archives/2020/02/index.html","08e139959bbb4910120265c1cad7c838"],["/archives/2020/05/index.html","fb8475da04c5e999df40d326b9f92c91"],["/archives/2020/06/index.html","decc3098e21edd1158411343cab9f6d4"],["/archives/2020/index.html","0e8c869f10df9014afdf2d9a2f4dbe4a"],["/archives/index.html","e9d8e1afd5259359fe773ab7d1e77cfb"],["/baidu_verify_K9ZcD5P5s2.html","af9be4b88f0f88ec65a3ebe9fc897870"],["/categories/2019秋《交通数据分析》/index.html","145ffe5c5525375236671d1d8b34a785"],["/categories/2019秋《交通数据分析》/广义线性模型/index.html","04e3368d9410a0fa7312c6faf58b0ad5"],["/categories/2019秋《交通数据分析》/广义线性模型/logistics回归模型/index.html","8ea94a55e3dcb81ee6176821f777bc10"],["/categories/2019秋《交通数据分析》/数据爬取/index.html","c002f007333b9173eada5ec04a116b36"],["/categories/index.html","96d7e763a5e3f45ba8cfd50c75d8f580"],["/categories/linux/index.html","a982a65dfa2f32b4ef9a19c5fa578925"],["/categories/linux/ubuntu/index.html","b589a42e93fb766a09feeaa46cb0870a"],["/categories/本科毕设/index.html","03f6d59d30eecdcf6d8c6be5fec27f07"],["/categories/转载/index.html","d6d52d555b17e92bc4d2cdbc7f2a212b"],["/css/main.css","00a3f86d82b2d77087ac0ecc9bc550f0"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","7bff743f47964a282251f6fb5e4f0ffa"],["/images/android-chrome-512x512.png","8b6ec0201b7b07e7396dc51aed2894fe"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/wechatpay.png","fe5a9aeb793131c6f9a4c9f9ae42d5d9"],["/index.html","03ae099f40caf98e83c482fda5a1cd4e"],["/js/algolia-search.js","13d5068b7c608684a54ba89be47f270f"],["/js/bookmark.js","62ed78dd032fcb5933a922fb244df5e8"],["/js/local-search.js","03c8505b60a76dc06f02810a92c4f5e8"],["/js/motion.js","c9f6f59d8024d6b39a9dfda6e8c5d34e"],["/js/next-boot.js","37871dae141eb1519851ae4277e44b7a"],["/js/schemes/muse.js","ddbf5e290206e666bede5460cd254fe4"],["/js/schemes/pisces.js","9fd161588b63a8792dde98ef910f5bdc"],["/js/utils.js","d867227a1677e885d94af37998d23321"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","807365f5a7b701859d72ca1cefc5b53d"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/README.html","7f1a928bd62b6f844cbe98fadb1f78c5"],["/lib/canvas-ribbon/canvas-ribbon.js","952c131e3099dbf7aad0c350355fea0a"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/pjax/CHANGELOG.html","a394d10d1bccb4b3a3fe0efe32b5259e"],["/lib/pjax/README.html","14c5a67cdaac0b8f804cb3054fb32564"],["/lib/pjax/example/example.js","693e793ab23257ba91ba22933172555d"],["/lib/pjax/example/forms.html","f0ef2d4bd8c1cf9376cd91e11f14dece"],["/lib/pjax/example/index.html","48ce79ecaeda8493a973e58138a1f14e"],["/lib/pjax/example/page2.html","1fa7ca86f980d45ace18273a6fa6c756"],["/lib/pjax/example/page3.html","1252f77a8d30b697b1b985b1e6e04c09"],["/lib/pjax/index.js","3ef2531a2c7a333d0f7a232dee4ef9e8"],["/lib/pjax/lib/abort-request.js","4bdc59dae5e5b29ee8484873804d1f8c"],["/lib/pjax/lib/eval-script.js","43601f1c12e67f29197cd09304078739"],["/lib/pjax/lib/events/off.js","a32b62a0efb066d81d1aac58c90fb3bd"],["/lib/pjax/lib/events/on.js","a77e3da8fecd8a92550152189c6c6986"],["/lib/pjax/lib/events/trigger.js","bfb14e27ee61ce0fd3ac52af0726c663"],["/lib/pjax/lib/execute-scripts.js","8ff50f47e6593e4c060d6fabc09a0b7f"],["/lib/pjax/lib/foreach-els.js","cc92a783c79bf1a9c29cdbf152b104c5"],["/lib/pjax/lib/foreach-selectors.js","59e887fda038986c2f6418d281e3beb3"],["/lib/pjax/lib/is-supported.js","3a3ac8e8cba4b4e4d29a7894a4d06177"],["/lib/pjax/lib/parse-options.js","0287c332b98fb1ebe2e6c2793ddcc85e"],["/lib/pjax/lib/proto/attach-form.js","e976eb2a5bdc97c6237876bd88f6cbdb"],["/lib/pjax/lib/proto/attach-link.js","3671625d0900e7c630b6785c85527e84"],["/lib/pjax/lib/proto/handle-response.js","05556fa655572885181e9caa2295d08c"],["/lib/pjax/lib/proto/log.js","40caea5f9f971381fc5204416d06dfcc"],["/lib/pjax/lib/proto/parse-element.js","e2f6b3d683bb6bd3d7d3acc2bfbb93dd"],["/lib/pjax/lib/send-request.js","77e4c002534f12d39817326a372db618"],["/lib/pjax/lib/switches-selectors.js","2246ad5dd990e5eefbe6e6c11ea7d59d"],["/lib/pjax/lib/switches.js","ef5ed5e542dbb93be1a5c1b72d8b63db"],["/lib/pjax/lib/uniqueid.js","b47ca3fddf0a67c9cc5f0c7dcb56f974"],["/lib/pjax/lib/util/clone.js","43f6c73e044eebcdd6d3088075b17f90"],["/lib/pjax/lib/util/contains.js","ec87af9c5172cb2872b764997bd07c6f"],["/lib/pjax/lib/util/extend.js","07c19e94a35ea2f0ce68163b42f7ddd4"],["/lib/pjax/lib/util/noop.js","8c3b460cdce5a650e3369c63bfccb8e5"],["/lib/pjax/lib/util/update-query-string.js","4cf0e29017b579458950b03985fa4b91"],["/lib/pjax/pjax.js","01d568bf063b9a42c278a494db48d994"],["/lib/pjax/pjax.min.js","44d301d594470e6a2cb6d29787d6d29d"],["/lib/pjax/tests/lib/abort-request.js","92fa92a19a0f515f3b615ea6a63511b8"],["/lib/pjax/tests/lib/eval-scripts.js","162f3f8090aa2d9b232539750306fcae"],["/lib/pjax/tests/lib/events.js","0f8b44484c6a6ee7106b6133e8cee88a"],["/lib/pjax/tests/lib/execute-scripts.js","2bdfd4dbcc3ef5f76538ad7e1217b4a5"],["/lib/pjax/tests/lib/foreach-els.js","86e9dbb444e0b632ee944cfa827037f5"],["/lib/pjax/tests/lib/foreach-selectors.js","fee45340269c39818ea3a051cda931ab"],["/lib/pjax/tests/lib/is-supported.js","50b479ea4bb3d042d90db8700eebcee1"],["/lib/pjax/tests/lib/parse-options.js","30f8242970dfb2a059de4ffb68594070"],["/lib/pjax/tests/lib/proto/attach-form.js","1208c9d6f04612dbdc9b6b1a4c104226"],["/lib/pjax/tests/lib/proto/attach-link.js","f8ad9b826c96e283497e4962e329e14a"],["/lib/pjax/tests/lib/proto/handle-response.js","39cdab7ddcf315ddfcea09068c26b93c"],["/lib/pjax/tests/lib/proto/parse-element.js","aa0b73c0a2ed1b8846933f8040d8c1ba"],["/lib/pjax/tests/lib/send-request.js","263fc784b516f2a7abc12b72de951aee"],["/lib/pjax/tests/lib/switch-selectors.js","95d4a0b423d581e86daf60d94e3b0c49"],["/lib/pjax/tests/lib/switches.js","a6df597650eaad447047430e643f12ea"],["/lib/pjax/tests/lib/uniqueid.js","d69cb621ac17b33d7d5ea90c3b12834d"],["/lib/pjax/tests/lib/util/clone.js","7fb4097648cc8b252399ea1f6445caa9"],["/lib/pjax/tests/lib/util/contains.js","7d0d2235138f9fa6f5694176c6aea149"],["/lib/pjax/tests/lib/util/extend.js","487ff1562ba80eed3fb90e97831105c1"],["/lib/pjax/tests/lib/util/noop.js","59e3460d4f796c9222b11de27dc4b177"],["/lib/pjax/tests/lib/util/update-query-string.js","e9d8c6590f7a49acf8cfbc8c2e6fb662"],["/lib/pjax/tests/setup.js","dcf8474136e082831fbbb3c2c5f583e0"],["/lib/three/README.html","523d0725e6e40cead7d386761d98ad9b"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/sw-register.js","e3f8d84becfad27799582a69743d2c0a"],["/tags/JSP/index.html","50d2b7bc8144cee3ad395030977577ae"],["/tags/Linux/index.html","3fce5055232d1e25080b48e39fde6e92"],["/tags/OD矩阵估计/index.html","aa324936506b99e58259dedb17d893cb"],["/tags/R/index.html","c4f47993faec929460b2793cbdccfe68"],["/tags/Wi-Fi检测/index.html","2505070068a8b50c7f473282deb7ba58"],["/tags/index.html","ea3feeeeb2126b71f3e3ec5d297a1786"],["/tags/logistic回归模型/index.html","f74cd7ee1d61f632cc67e173db194818"],["/tags/pyecharts/index.html","e1f72a0cf463d0bbec9bced75db44965"],["/tags/python/index.html","23b7c34b9406e461166e3b2f39373ae9"],["/tags/ubuntu/index.html","632cf28ec2e3c0591e8de50e477fe783"],["/tags/可视化/index.html","4125b09d3d0cef930a5de3cc93b7c8d7"],["/tags/名人文章/index.html","a34195807f4c2d143d3b3748b33abb07"],["/tags/工作信息/index.html","4057f97218c134fd7c2a0c8eaf7aea30"],["/tags/广义线性模型/index.html","257d652867498c1f2876afe8fea1a26f"],["/tags/拟合优度/index.html","e5d41a8aae7d62c34b83ee6a860b1345"],["/tags/操作系统/index.html","3bb781acb4dffa376eedc71409cd0b8b"],["/tags/数据预处理/index.html","2a580e937f4be2b2946ac3d7f51b8364"],["/tags/极大似然估计法/index.html","e4cbfb4a57ceab9edffb4b1a3b0a1256"],["/tags/爬虫/index.html","10ba53e3e9f5813cde236bce498a6205"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
