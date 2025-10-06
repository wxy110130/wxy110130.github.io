"use strict";
var posts = ["posts/eadb39c4.html", "posts/e173abca.html", "posts/8b43.html", "posts/9ffb.html", "posts/bd4e.html", "posts/7e87.html", "posts/2785.html", "posts/fe37.html", "posts/fd57.html", "posts/72ea.html", "posts/9520.html", "posts/d4d2.html", "posts/8645.html", "posts/4c6a.html", "posts/ff46.html", "posts/2594.html", "posts/521a.html", "posts/495f.html", "posts/88de.html", "posts/4a9f.html", "posts/fe76.html", "posts/b8cf1317.html", "posts/3830.html", "posts/443e.html", "posts/39a9.html", "posts/222.html", "posts/1ed1.html", "posts/3753.html", "posts/c939.html", "posts/8d2b.html", "posts/3444.html", "posts/aa50.html", "posts/d335.html", "posts/c248.html", "posts/a76e.html", "posts/52d8.html", "posts/ce6a.html", "posts/sdxhu.html", "posts/e62b.html", "posts/c3d3.html", "posts/aa28.html", "posts/xoan.html", "posts/192f.html", "posts/968f.html", "posts/b019.html", "posts/292d.html", "posts/fc18.html", "posts/98c4.html", "posts/d50a.html", "posts/4190.html", "posts/6c69.html", "posts/b228.html", "posts/e140.html", "posts/571d.html", "posts/asdx.html", "posts/8e53.html", "posts/b1d7.html", "posts/e8da.html", "posts/6fd4.html", "posts/dfb3.html", "posts/340b.html", "posts/40fd.html", "posts/dd9.html", "posts/8105.html", "posts/ddae.html", "posts/cf4f.html", "posts/e644.html", "posts/136a.html", "posts/4eb4.html", "posts/b590.html"];
function toRandomPost() {
    pjax.loadUrl("/" + posts[Math.floor(Math.random() * posts.length)])
}
var friend_link_list = [{
    name: "安知鱼",
    link: "https://blog.anheyu.com/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/15/63232b7d91d22.jpg",
    descr: "生活明朗，万物可爱",
    siteshot: "https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg",
    color: "vip",
    tag: "技术"
}, {
    name: "Akilarの糖果屋",
    link: "https://akilar.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc9de6507.webp",
    descr: "期待您的光临！",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc39c5966.webp",
    color: "vip",
    tag: "生活"
}, {
    name: "张洪Heo",
    link: "https://blog.zhheo.com/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc38f1465.webp",
    descr: "分享设计与科技生活",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311fc3959f82.webp",
    color: "speed",
    tag: "生活"
}, {
    name: "Leonus",
    link: "https://blog.leonus.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/16/6324505c9890a.jpeg",
    descr: "进一寸有进一寸的欢喜。",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/16/6324505c98fae.jpg",
    color: null,
    tag: "技术"
}, {
    name: "山岳库博",
    link: "https://kmar.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/06/633e9c4c2786f.png",
    descr: "开发学习启发性二刺螈",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/06/633e9c4c3460b.jpg",
    color: null,
    tag: "技术"
}, {
    name: "Tianli",
    link: "https://tianli-blog.club",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/11/636db0d451fd0.webp",
    descr: "惟其不可能，所以才相信。",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/11/07/6368520c9e4e7.webp",
    color: null,
    tag: "技术"
}, {
    name: "Ariasaka",
    link: "https://yisous.xyz",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/11/6395bcc946fc9.png",
    descr: "人有悲欢离合 月有阴晴圆缺",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/12/11/6395bcc1502e5.png",
    color: null,
    tag: "技术"
}, {
    name: "风记星辰",
    link: "https://www.thyuu.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/04/64a3710cd824a.webp",
    descr: "简述热爱你来过的每一份温度",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2023/07/04/64a371403e548.webp",
    color: null,
    tag: "技术"
}, {
    name: "Black Flies",
    link: "https://www.yyyzyyyz.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/14/64b0b00b33d75.webp",
    descr: "When nothing goes right,just go left.",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2023/07/09/64aa91e87d4c6.webp",
    color: null,
    tag: "技术"
}, {
    name: "张时贰",
    link: "https://zhsher.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/12/636ef2c1632a5.webp",
    descr: "环转码，爱敲代码的小张！",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2023/02/03/63dc8d606e61a.webp",
    color: null,
    tag: "技术"
}, {
    name: "小孙同学",
    link: "https://blog.sunguoqi.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0d3e56247.webp",
    descr: "路虽远行则将至，事虽难做则必成！",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0d149b0b3.webp",
    color: null,
    tag: "技术"
}, {
    name: "杜老师说",
    link: "https://dusays.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/21/63a2acb9c07d0.png!linkavatar",
    descr: "师者，传道，授业，解惑！",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/12/21/63a2acb9c07d0.webp"
}, {
    name: "Fomalhaut🥝",
    link: "https://www.fomal.cc/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311ff42df52e.webp!linkavatar",
    descr: "Welcome to Fomalhaut🥝のTiny Home",
    siteshot: "https://img02.anheyu.com/thumbnails/303c9346ba832c2ea658a9048391ea47.png",
    recommend: !0
}, {
    name: "JayHrn",
    link: "https://blog.jayhrn.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647daed23513c.png!linkavatar",
    descr: "念念不忘，必有回响",
    siteshot: "https://img02.anheyu.com/thumbnails/416689c272ace752eaf6d484097ea054.png"
}, {
    name: "Mycpen",
    link: "https://blog.cpen.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/03/638b0c930633c.png!linkavatar",
    descr: "这是一个有趣的博客",
    siteshot: "https://img02.anheyu.com/thumbnails/67c9c14c543cdb7b547d0bb5acf664cd.png"
}, {
    name: "Ethan.Tzy",
    link: "https://fe32.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/17/6325338e1ad8a.jpg!linkavatar",
    descr: "古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志",
    screenshot: "https://img02.anheyu.com/adminuploads/1/2022/09/17/6325338e287ab.jpg"
}, {
    name: "mumumu1",
    link: "https://mumushu1.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/23/632d1e69da485.jpg!linkavatar",
    descr: "在最高点乘着叶片往前飞",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/23/632d1e69ef640.jpg"
}, {
    name: "LanYun",
    link: "https://lanyundev.com/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/04/633b93d34c802.jpg!linkavatar",
    descr: "Share Technology.",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/04/633b93d6a79a9.jpg"
}, {
    name: "一生雾梦の博客",
    link: "https://yswm-m.github.io",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/05/633d9b6d5fdc8.jpg!linkavatar",
    descr: "若一心追逐北极星,所经路线便能成为地图",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/05/633d9b6d603d2.jpg"
}, {
    name: "九九九感冒绫",
    link: "https://www.miku-39.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/10/6343ab3ea1cd3.jpg!linkavatar",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/10/6343ab48d89df.jpg",
    descr: "这是我的梦想,我会慢慢的完成它"
}, {
    name: "Jermyn",
    link: "https://www.jermyn.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/15/634a2200ba851.jpg!linkavatar",
    descr: "To be, or not to be, that is the Question.",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/15/634a21f0a2635.png"
}, {
    name: "ichika",
    link: "https://ichika.cc",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/15/634a2208a0879.jpg!linkavatar",
    descr: "Hello,gamer!",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/15/634a21f97f982.png"
}, {
    name: "心流",
    link: "https://blog.aqcoder.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/18/634df5b5282f2.webp!linkavatar",
    descr: "分享知识，认识世界",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/18/634df5b6b35ec.jpg"
}, {
    name: "Echo",
    link: "https://www.liveout.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/10/21/6351e69b70281.png!linkavatar",
    descr: "韶华不为少年留 恨悠悠 几时休",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/10/21/6351e69b6a3c2.jpg"
}, {
    name: "Marcus",
    link: "https://blog.marcus233.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d783297889f.png!linkavatar",
    descr: "人间值得，未来可期",
    siteshot: "https://img01.anheyu.com/useruploads/8/2023/08/09/64d387fadfd13.png"
}, {
    name: "鹿啵包の小窝",
    link: "https://pochacco.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/04/23/644529c4558e3.png!linkavatar",
    descr: "落日橘子海，揽尽世间温柔",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/11/05/63660700b43b0.webp"
}, {
    name: "卿以君歌",
    link: "https://www.kimtoli.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/05/6366073950d69.webp!linkavatar",
    descr: "永远年轻，永远热泪盈眶",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/11/05/636607115f0ef.webp"
}, {
    name: "puff",
    link: "https://www.zoulicheng.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/16/6374ce9591310.webp!linkavatar",
    descr: "我想呼风唤雨"
}, {
    name: "怕冷爱上雪",
    link: "https://blog.4t.pw/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/19/63785fa4cfc86.webp!linkavatar",
    descr: "千里之行，始于足下。"
}, {
    name: "HiPeach",
    link: "https://opeach.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/20/637990a28fa47.png!linkavatar",
    descr: "妙不可言"
}, {
    name: "Heyiki",
    link: "https://www.heyiki.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/24/637eec3251e1c.webp!linkavatar",
    descr: "梦在旅途，永不止步。"
}, {
    name: "Ice",
    link: "https://blog.081113.xyz/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/03/638b1fb988e1e.webp!linkavatar",
    descr: "海内存知己，天涯若比邻"
}, {
    name: "小豪",
    link: "https://202271.xyz/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/06/638e91f01da0c.png!linkavatar",
    descr: "小豪的个人博客"
}, {
    name: "青衣",
    link: "https://www.qingyi1220.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/06/638e929f3e6ac.webp!linkavatar",
    descr: "世界既不黑也不白，而是一道精致的灰"
}, {
    name: "HAO",
    link: "https://haobk.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/06/638e938303cd0.png!linkavatar",
    descr: "热爱编程"
}, {
    name: "洛屿",
    link: "https://www.drluo.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/11/63956a6e94510.webp!linkavatar",
    descr: "嗨，靓仔，今天也要有个好心情哦！"
}, {
    name: "一蓑烟雨",
    link: "https://easyf12.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/18/639ea6d1ed21a.webp!linkavatar",
    descr: "竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。"
}, {
    name: "wsb",
    link: "https://wsbblog.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/21/63a2bf8e25ffb.png!linkavatar",
    descr: "己所不欲，勿施于人"
}, {
    name: "竹山一叶",
    link: "https://zsyyblog.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/23/63a54e9b90149.webp!linkavatar",
    descr: "来了就不想走的小家",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/12/23/63a54e962ae67.webp"
}, {
    name: "贰猹的小窝",
    link: "https://noionion.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/27/63aa52f8c4542.webp!linkavatar",
    descr: "用这生命中的每一秒，给自己一个不后悔的未来"
}, {
    name: "绯鞠的博客",
    link: "https://loli.fj.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/27/63aa5660046ca.png!linkavatar",
    descr: "一只爱折腾的绯鞠"
}, {
    name: "ReCclay",
    link: "https://www.recclay.cc/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/14/63c21540b014c.png!linkavatar",
    descr: "芯片硅农，别忘无恙🧐"
}, {
    name: "Anjhon",
    link: "https://www.anjhon.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/14/63c216ff99a7d.webp!linkavatar",
    descr: "但知行好事，莫要问前程"
}, {
    name: "Shine",
    link: "https://shineyull.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/14/63c21f007e710.png!linkavatar",
    descr: "Let’s go! Target: The Vast Stars!"
}, {
    name: "SLOVER",
    link: "https://678777.xyz",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/14/63c2262621e4e.png!linkavatar",
    descr: "诱导已亮，前方净空，祝君武运昌隆"
}, {
    name: "Neil's Notes",
    link: "https://www.neily.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4c4b070acd.webp!linkavatar",
    descr: "咕咕咕！"
}, {
    name: "Haoyu",
    link: "https://g-haoyu.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4c4b07ab76.png!linkavatar",
    descr: "恭喜，你发现了宝藏"
}, {
    name: "XK",
    link: "https://blog.xukaiyyds.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4cbedf3303.png!linkavatar",
    descr: "一个干净整洁的个人博客"
}, {
    name: "咬一口激动的鱼",
    link: "https://blog.jiyu134.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4cbee0c799.webp!linkavatar",
    descr: "风带来了种子，时间使之发芽"
}, {
    name: "维度前端",
    link: "https://www.df100.ltd/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4cdaeab017.jpg!linkavatar",
    descr: "我将飞向星空，时刻期待与你邂逅"
}, {
    name: "Prong",
    link: "https://prong.ltd",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4cdaeac44f.webp!linkavatar",
    descr: "尖头叉子在霍格沃茨的休息室~"
}, {
    name: "Hc",
    link: "https://blog.ivil.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/03/63dc90c5896ed.jpg!linkavatar",
    descr: "相遇即是上上签"
}, {
    name: "钟意博客",
    link: "https://blog.thatcoder.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4cdaeab017.jpg!linkavatar",
    descr: "感谢你的阅读."
}, {
    name: "小嗷犬",
    link: "https://blog.marquis.eu.org/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/03/63dc90bd46c50.png!linkavatar",
    descr: "为天地立心，为生民立命，为往圣继绝学，为万世开太平"
}, {
    name: "墨尘",
    link: "https://mnchen.cn/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/655174f93b7e6bde139ecd3c806ac1ef_6633555606483452992..jpg",
    descr: "虽多尘色染，犹见墨痕浓"
}, {
    name: "Mxne",
    link: "https://blog.mxne.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/03/63dca3126b8c8.png!linkavatar",
    descr: "学如逆水行舟，不进则退。"
}, {
    name: "道宣的窝",
    link: "https://daoxuan.cc/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/13/63ea2dc47351a.webp!linkavatar",
    descr: "欢迎来到道宣的温暖小窝"
}, {
    name: "ゆちゃん",
    link: "https://idealistyu.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/13/63ea2e9391ad4.webp!linkavatar",
    descr: "ゆちゃんのブログ"
}, {
    name: "雷雷屋头",
    link: "https://ll.sc.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/13/63ea2e9391811.webp!linkavatar",
    descr: "爱生活，爱工作，爱折腾。",
    siteshot: "https://ll.sc.cn/img/siteshot.webp"
}, {
    name: "爱吃肉的猫",
    link: "https://meuicat.com/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/15/63ecbb97ac708.png!linkavatar",
    descr: "有肉有猫有生活."
}, {
    name: "Billwing Blog",
    link: "https://billwing.fun",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/15/63ecba6196a60.webp!linkavatar",
    descr: "每个人都有无限的潜能"
}, {
    name: "TactfulBean",
    link: "https://blog.tactfulbean.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/15/63ecbb97ac5de.webp!linkavatar",
    descr: "一颗咸鱼豆子的博客"
}, {
    name: "湘铭",
    link: "https://xiangming.site/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/27/63fc51858414b.webp!linkavatar",
    descr: "湘铭的秘密基地啊！"
}, {
    name: "小飞博客",
    link: "https://www.xffjs.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/02/27/63fc51858413d.webp!linkavatar",
    descr: "生活明朗,万物可爱,人间值得,未来可期。"
}, {
    name: "满心Hrn",
    link: "https://qq.mba/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/03/26/641ff636e1f2c.webp!linkavatar",
    descr: "追求让人充实，分享让人快乐"
}, {
    name: "幻想乡の红魔馆",
    link: "https://ming-e.space",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/03/26/641ff743c8bb0.webp!linkavatar",
    descr: "车万人万岁"
}, {
    name: "博客录",
    link: "https://boke.lu",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/03/26/641ff86bcc912.png!linkavatar",
    descr: "博客收录展示平台"
}, {
    name: "墨点白",
    link: "https://nanwish.love",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/03/26/641ff9cccf2e3.jpg!linkavatar",
    descr: "学习着、并快乐着"
}, {
    name: "青城小居",
    link: "https://zhaoyuansong.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/23/646c10ee6c9b2.webp!linkavatar",
    descr: "清风也染人间忧"
}, {
    name: "Pupper",
    link: "https://pupper.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/64535eba5d72e.webp!linkavatar",
    descr: "记录学习、生活中的点点滴滴~"
}, {
    name: "海阔蓝",
    link: "https://blog.hklan.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/645361f49df1e.webp!linkavatar",
    descr: "终于找到你啦~分享你想要的经验"
}, {
    name: "包子哟",
    link: "https://blog.bugjava.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/645363cd11758.png!linkavatar",
    descr: "一个练习Bug时长两年半的程序员建立的小站"
}, {
    name: "浅笑安然",
    link: "https://siax.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/64536ebfee596.png!linkavatar",
    descr: "总之岁月漫长, 然而值得等待。"
}, {
    name: "繁華如夢",
    link: "https://holyghostf.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/64536f0b08a86.webp!linkavatar",
    descr: "苍茫大地一剑尽挽破，何处繁华笙歌落。"
}, {
    name: "小潘",
    link: "https://pansida.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/64536f7a61344.webp!linkavatar",
    descr: "拥抱阳光，活力满满"
}, {
    name: "召尘秘境",
    link: "https://www.olive-r.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/6453707aa128c.webp!linkavatar",
    descr: "开放，包容，共享，团结"
}, {
    name: "半方池水半方田",
    link: "https://uuanqin.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/645371241664d.png!linkavatar",
    descr: "技术分享与生活分享"
}, {
    name: "Celia",
    link: "https://7boe.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/13/645f7a92a3cbb.png!linkavatar",
    descr: "欲买桂花同载酒，终不似少年游"
}, {
    name: "萌新闻",
    link: "http://www.imxw.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/23/646c0dd50a179.png!linkavatar",
    descr: "每天60秒新闻简报分享"
}, {
    name: "阿猪",
    link: "https://yfzhu.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0b9f4859c.png!linkavatar",
    descr: "计算机、股票业余爱好者"
}, {
    name: "小植の小破站",
    link: "https://blog.xiaoztx.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/23/646c0f205b9d4.webp!linkavatar",
    descr: "生生不息，好运不止"
}, {
    name: "祈杰",
    link: "https://qijieya.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/23/646c1065e8664.webp!linkavatar",
    descr: "Share something with you"
}, {
    name: "困困鱼",
    link: "https://kunkunyu.com/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/23/646c13caca15e.webp!linkavatar",
    descr: "喜欢捣鼓的博主"
}, {
    name: "Ganzhe",
    link: "https://ganzhe.site/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/fc84004fc20c58187e70db94f57c8e6a_8939175869693511002..png",
    descr: "顺其自然，持之以恒"
}, {
    name: "Kevinwu",
    link: "https://blog.fiveth.cc/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647dafc95b3bd.webp!linkavatar",
    descr: "喜欢，就去追。"
}, {
    name: "Plasmon222",
    link: "https://blog.loveak.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647dae63aee47.webp!linkavatar",
    descr: "一念既出，万山无阻"
}, {
    name: "青桔气球",
    link: "https://blog.qjqq.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647daf8997f45.webp!linkavatar",
    descr: "分享网络安全与科技生活"
}, {
    name: "胡桃木实验室",
    link: "https://www.htmacg.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647db064b074f.png!linkavatar",
    descr: "胡桃木的笔记分享小站"
}, {
    name: "王貔貅",
    link: "https://blog.wpixiu.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647db0b237ebd.webp!linkavatar",
    descr: "日就月将,学有缉熙于光明"
}, {
    name: "你好可爱",
    link: "https://wjldarling.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647db1bc85ced.webp!linkavatar",
    descr: "山水一程，三生有幸✨"
}, {
    name: "懒觉猫先生",
    link: "https://blog.luoaicheng.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/06/05/647db222b0fdd.jpeg!linkavatar",
    descr: "睡觉睡觉，睡觉睡觉，喵喵"
}, {
    name: "DQY&WYの小窝",
    link: "https://www.dqywy.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d1ec20209.png!linkavatar",
    descr: "Sow nothing, reap nothing."
}, {
    name: "提剑追梦",
    link: "https://www.jkjoy.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d2741db7e.png!linkavatar",
    descr: "曾梦想仗剑走天涯"
}, {
    name: "DashBing",
    link: "https://dashbing.github.io",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d37076b44.webp!linkavatar",
    descr: "搏海之明辉，何来彼岸？"
}, {
    name: "萌傀儡",
    link: "https://blhorizon.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d44b50b5f.webp!linkavatar",
    descr: "珍惜现在，趁早摸鱼"
}, {
    name: "Memory Dairy",
    link: "https://yc100.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d4dde710f.webp!linkavatar",
    descr: "只有记忆才是人生中最美丽的永恒"
}, {
    name: "小智の空间站",
    link: "https://blog.cuixinyu.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d68f06385.webp!linkavatar",
    descr: "记录学习踩坑"
}, {
    name: "SmileToC",
    link: "https://smiletoc.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d6f274f07.webp!linkavatar",
    descr: "生活不止眼前的苟且，还有诗和远方"
}, {
    name: "慕斯",
    link: "https://blog.dd.ac.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d8d8ab0f3.png!linkavatar",
    descr: "风在迷茫中吹来夏天，少年借微光成长"
}, {
    name: "萌傀儡",
    link: "https://blhorizon.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0d44b50b5f.webp!linkavatar",
    descr: "珍惜现在，趁早摸鱼"
}, {
    name: "GuKaifeng",
    link: "https://gukaifeng.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0ddcd75dfa.webp!linkavatar",
    descr: "一个刚入门的分布式存储研发工程师"
}, {
    name: "SuYi-宿仪",
    link: "https://www.thotz.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0de6d6a5d1.webp!linkavatar",
    descr: "随心写作，随缘阅读"
}, {
    name: "神经蛙",
    link: "https://hexo.sjava.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/02/64a0df56459a2.png!linkavatar",
    descr: "种一棵树最好的时间是十年前，其次是现在。"
}, {
    name: "沐泽",
    link: "https://zelihole.github.io/blog2023",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba019ce1451.png!linkavatar",
    descr: "佳肴弗食，与我何干？"
}, {
    name: "随风起",
    link: "https://blog.bywind.xyz/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/23/632d1e69d9fd8.jpg!linkavatar",
    descr: "爱意随风起，风止意难平",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/23/632d1e69da344.jpg"
}, {
    name: "杀死一只知更鸟",
    link: "https://www.shangjidong.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba08b36e826.gif!linkavatar",
    descr: "记录生活留住美好时刻 ，分享个人学习笔记"
}, {
    name: "Haoの小破站",
    link: "https://haonp.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba09a4bb405.webp!linkavatar",
    descr: "代码改变世界"
}, {
    name: "九弦之屋",
    link: "https://blog.sinzmise.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0a4a25443.webp!linkavatar",
    descr: "随着风和光来的旅行者，欢迎来到九弦之屋"
}, {
    name: "Mr.喵帕斯",
    link: "https://blog.mpsxx.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0acac099a.webp!linkavatar",
    descr: "熬夜伤身"
}, {
    name: "屑殇",
    link: "https://jinghuashang.cn/",
    descr: "桃李春风一杯酒，江湖夜雨十年灯",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/07/21/64ba0b45db496.webp!linkavatar"
}, {
    name: "Mo的记事簿",
    link: "https://blog.xiowo.net/",
    descr: "万年鸽王，哈哈OvO",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d770bcac9c8.png!linkavatar"
}, {
    name: "吮指原味姬",
    link: "https://www.yejinblok.cn/",
    descr: "无论什么时候，都不要后悔",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d77138b2722.webp!linkavatar"
}, {
    name: "Roozen",
    link: "https://roozen.top/",
    descr: "技术宅男拯救世界！",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d771abaf984.webp!linkavatar"
}, {
    name: "Hercules",
    link: "https://blog.zhaoziyi.site",
    descr: "生数理化生一塌糊涂的理科生，对兴趣情有独钟的追寻",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d7728b0d041.jpg!linkavatar"
}, {
    name: "桜紺狸の部落阁",
    link: "https://www.skira.top",
    descr: "一个闲聊萌新动漫技术交流站",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d7736fbd711.webp!linkavatar"
}, {
    name: "樱花小镇",
    link: "https://blog.sakura.vin",
    descr: "小园新种红樱树，闲绕花枝便当游。",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d7740cb19ca.ico!linkavatar"
}, {
    name: "小张同学",
    link: "https://blog.xiaozhangstu.com/",
    descr: "小张的进步记录",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d781897b8e9.webp!linkavatar"
}, {
    name: "一只鬆の小站",
    link: "https://blog.sotkg.cn",
    descr: "心有多宽，世界就有多远",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d7822d2c1c7.png!linkavatar"
}, {
    name: "毕少侠",
    link: "https://hexo.geekswg.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/08/12/64d78252cd7a7.webp!linkavatar",
    descr: "毕少侠也在江湖"
}, {
    name: "wmh’s wiki",
    link: "https://wmhwiki.cn",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/09/02/64f2a3019a805.webp!linkavatar",
    descr: "鸟要高飞先振翅，人求上进先读书。"
}, {
    name: "L",
    link: "https://luoyuanxiang.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/09/02/64f2a35df2db4.png!linkavatar",
    descr: "天行健，君子以自强不息；地势坤，君子以厚德载物"
}, {
    name: "Chenli",
    link: "https://www.chenliss.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/09/02/64f2a401627aa.webp!linkavatar",
    descr: "分享生活，分享技术"
}, {
    name: "Sugar",
    link: "https://blog.imsugar.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/09/02/64f2a442567b3.webp!linkavatar",
    descr: "陌上花开，可缓缓归矣"
}, {
    name: "Taosu",
    link: "https://blog.yblue.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/09/02/64f2a56ef3fbc.webp!linkavatar",
    descr: "Daily Growing"
}, {
    name: "小林",
    link: "https://blog.lucksss.com/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/09/02/64f2a64b38e57.webp!linkavatar",
    descr: "我们总是在相同的路上 却看到了不同的风景"
}, {
    name: "LZH",
    link: "https://blog.lzh.life",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/5d785233a61ed1613328e676664d1964_1209168590646386197..png",
    descr: "凡是过往。皆为序章"
}, {
    name: "TKEY",
    link: "https://vikeya.com",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/d3d33768c58f75198568fbf6c4d7c281_2437554829714979656..png",
    descr: "经常用的钥匙，总是闪闪发光。"
}, {
    name: "赵九思",
    link: "https://zhaoshulin.top",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/f8fd37270b9e44b28a7747ed2417d50b_1691246906328132577..png",
    descr: "择一业谋食养命，等一运扭转乾坤。"
}, {
    name: "阿猫阿狗",
    link: "https://blog.yhz610.com/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/41513a5684ef78f77bfdba9c2f787169_1660225663997858439..png",
    descr: "一个记录生活分享工作经验的个人博客"
}, {
    name: "Ayorishy",
    link: "https://blog.ban.moe",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/73b8b692ff01f348124473c9097444b3_4793956288164185833..jpg",
    descr: "ACGN / DESIGN / WEBDEV"
}, {
    name: "偷闲小站",
    link: "https://blog.andypang.cc",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/2533afff7ca19810147095b6db4cdf9c_1058393824521763734..jpg",
    descr: "跨越山海，终见曙光"
}, {
    name: "小文的元宇宙",
    link: "https://xiaowen.cc",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/10/09/652357cddb4aa.ico",
    descr: "XiaoWen Meta"
}, {
    name: "WuWu",
    link: "https://ming-e.space/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/10/09/652359867178c.webp",
    descr: "车万人万岁!"
}, {
    name: "Joker2Yue",
    link: "https://blog.joker2yue.top/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/dbbd55c059088e9ddee63b62939dc914_5389145172360860396..jpg",
    descr: "Joker Never Plays Jokes."
}, {
    name: "ClimbingMouse",
    link: "https://blog.climbingmouse.top/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/018e812c85df2279c1d402fac5fbc07d_9135257532464261501..jpg",
    descr: "纵有疾风起，人生不言弃。"
}, {
    name: "Ame",
    link: "http://486916.xyz/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/29763c7a3793ecf779a561bee1212728_5528445071118825776..png",
    descr: "为世界上所有的美好而战！"
}, {
    name: "ADYUN",
    link: "https://blog.adyun.design/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/10/09/125766904/927908c8ba00ec9378834bb4d329fb23_6023776546073740860..jpg",
    descr: "记录分享设计、技术、生活"
}, {
    name: "星の野",
    link: "https://byer.top",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/04a36eb0568fe9bb0612fb8ae7e78856_4484617986689785235..jpg",
    descr: "我自是年少，韶华倾负"
}, {
    name: "yiwanbin",
    link: "https://www.zsuh.cc",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/81219f4b152433e96a7213be822b27f6_5316664846646970209..png",
    descr: "True master always with a heart of apprentice 🍭🍭🍭"
}, {
    name: "目的地-Destination",
    link: "https://blog.chrison.cn",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/39bbfa92ccaa45a5730208aa12a22fa9_519562744237141867..png",
    descr: "前程似锦、未来可期、寻得良人、共赴白头，祝你也祝我。"
}, {
    name: "SerMs",
    link: "https://blog.serms.top/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/8f9252c7940fd59e9c6e0b6ddca6dc57_31365434704744465..png",
    descr: "迈向光明之路，必定荆棘从生。"
}, {
    name: "夜雨柠檬",
    link: "https://blog.yeyulemon.top/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/dc43e81db305325aa72d8b008f615724_1398320215628207285..png",
    descr: "生于忧患，死于安乐。"
}, {
    name: "UncleCAT4",
    link: "https://yuanj.top",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/425c29e21de1dc86a4a7cef16f8ec2a4_756631403016828007..png",
    descr: "思绪来得快去得也快，偶尔会在这里停留"
}, {
    name: "终成",
    link: "https://blog.zc.wiki/",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/470cf1c97e465556c693c2612079ece0_7032551070099972169..jpeg",
    descr: "有情人终成眷属"
}, {
    name: "好软猫",
    link: "https://www.haoruanmao.com",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/7c327cafb359d4cd286ff74965be8459_4245591855459184053..png",
    descr: "专注好软件与资源分享的猫"
}, {
    name: "琅環书生",
    link: "https://www.zhuangzhi.love",
    avatar: "https://upload-bbs.miyoushe.com/upload/2023/11/01/125766904/ea46f3f1bb5652ba599c3f38ab8ea017_720142685624772804..jpg",
    descr: "无远弗届，皆有可能"
}, {
    name: "Vinson",
    link: "https://sakura520.co/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311ff0644d0e.webp!linkavatar",
    descr: "梦想是一个天真的词，实现梦想是一个残酷的词",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/02/6311ff0719a8e.webp"
}, {
    name: "程序员云天",
    link: "https://nwjshm.cn/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/02/631200151f547.webp!linkavatar",
    descr: "记录程序员从大牛之路"
}, {
    name: "btwoa",
    link: "https://blog.btwoa.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/17/6325d829e355c.jpg!linkavatar",
    descr: "我仍相信人间滚烫",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/17/6325d829e4d64.png"
}, {
    name: "梦念逍遥",
    link: "https://blog.lwtxiaoyao.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/20/63294be7b841e.jpg!linkavatar",
    descr: "无梦之境",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/20/63294be7a7d0d.jpg"
}, {
    name: "七鳄の学习格",
    link: "https://blog.gmcj0816.top/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/25/633016add88ac.jpg!linkavatar",
    descr: "如果世界多了精彩，每一位都是创造者，大家都是你的观众",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/09/25/633016addb7c6.jpg"
}, {
    name: "来动力家族喝杯酒",
    link: "https://pikachen-pick.github.io/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/09/28/6333981c8d045.jpg!linkavatar",
    descr: "逸一时，误一世，依旧已久罢已零"
}, {
    name: "MoyuqL",
    link: "https://blog.moyuql.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/27/63aa5649a4cbc.webp!linkavatar",
    descr: "MoyuqL与你同在~"
}, {
    name: "方糖",
    link: "https://www.iftft.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/05/63667aafb06ea.png!linkavatar",
    descr: "方糖（FangTang）世界",
    siteshot: "https://img02.anheyu.com/adminuploads/1/2022/11/05/636679e6beae7.webp"
}, {
    name: "华仔927",
    link: "https://blog.xiaohua927.top",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/11/24/637eee0d52f69.webp!linkavatar",
    descr: "行而不辍，未来可期！"
}, {
    name: "胖二十",
    link: "https://pangershi.com",
    avatar: "https://img02.anheyu.com/adminuploads/1/2022/12/27/63aa551e5f29b.png!linkavatar",
    descr: "不秃头，无格子衫，擅长复制粘贴的正经程序猿"
}, {
    name: "kwobron",
    link: "https://www.acozycotage.net/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/02/63b2c369a7b29.webp!linkavatar",
    descr: "寄言燕雀莫相唣，自有云霄万里高 🍭🍭🍭"
}, {
    name: "匹诺草的小宇宙",
    link: "https://blog.pinochio.cf",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/02/63b2c256bc384.webp!linkavatar",
    descr: "匹诺草啊啊啊"
}, {
    name: "栖迟於一丘",
    link: "https://www.ccyh.xyz/",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/01/28/63d4c81d90e60.png!linkavatar",
    descr: "技术分享，生活随笔"
}, {
    name: "杨不羁",
    link: "http://www.blog.yzq.ink",
    avatar: "https://img02.anheyu.com/adminuploads/1/2023/05/04/64536c4e8fced.webp!linkavatar",
    descr: "流水落花春去也，天上人间"
}]
  , refreshNum = 1;
function friendChainRandomTransmission() {
    var a = Math.floor(Math.random() * friend_link_list.length)
      , a = friend_link_list.splice(a, 1)[0]
      , t = a.name
      , n = a.link;
    Snackbar.show({
        text: "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + t + "」",
        duration: 8e3,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function(a) {
            a.style.opacity = 0,
            window.open(n, "_blank")
        }
    })
}
function addFriendLinksInFooter() {
    var a = document.getElementById("footer-random-friends-btn");
    if (a) {
        a.style.opacity = "0.2",
        a.style.transitionDuration = "0.3s",
        a.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
        for (var t = [], n = 0; friend_link_list.length && n < 3; ) {
            var s = Math.floor(Math.random() * friend_link_list.length)
              , s = friend_link_list.splice(s, 1)[0]
              , e = s.name
              , p = s.link
              , s = s.avatar;
            t.push({
                name: e,
                link: p,
                avatar: s
            }),
            n++
        }
        var i = t.map(function(a) {
            var t = a.name;
            return "<a class='footer-item' href='" + a.link + "' target='_blank' rel='noopener nofollow'>" + t + "</a>"
        }).join("");
        i += "<a class='footer-item' href='/link/'>更多</a>",
        document.getElementById("friend-links-in-footer").innerHTML = i,
        setTimeout(function() {
            a.style.opacity = "1"
        }, 300)
    }
}
