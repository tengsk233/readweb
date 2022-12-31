
    //点击小图片，显示表情
    $(".bq").click(function (e) {
    $(".face").slideDown(); //慢慢向下展开
    e.stopPropagation(); //阻止冒泡事件
});

    //在桌面任意地方点击，关闭表情框
    $(document).click(function () {
    $(".face").slideUp(); //慢慢向上收
});

    //点击小图标时，添加功能
    $(".face ul li").click(function () {
    let simg = $(this).find("img").attr('data');
    let yval = $('.messageReal').val();
    $(".messageReal").val(yval+simg); //将表情添加到输入框
});

    //点击发表按扭，发表内容
    $("span.submit").click(function () {
    var txt = $(".messageReal").val(); //获取输入框内容
    var email = $("#sumbitemail").val();
    var name = $("#sumbitname").val();
    var blog = $("#sumbitblog").val();
    if(blog==""){
    blog="#";
}
    var pageUrl = window.location.href;
    var articleTitle = $("#pagess").val();
    var articleId =$('#articleIdinit').val();
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
    if (txt=="" || txt==null || txt==undefined) {
    alert("请填写评论内容！");
    return;
}
    if (email=="" || email==null || email==undefined) {
    alert("请填写邮箱！");
    return;
}else if(!reg.test(email)){
    alert("请输入正确的邮箱!");
    return;
}
    if (name=="" || name==null || name==undefined) {
    alert("请填写昵称！");
    return;
}
    var json = '[{"title":"[/冒泡专用表情]","src":"https://www.zjhuiwan.cn/images/images/zjemogi.png"},{"title":"[/困]","src":"https://www.zjhuiwan.cn/images/images/gbzkun_thumb.gif"},{"title":"[/生闷气]","src":"https://www.zjhuiwan.cn/images/images/boboshengmenqi_thumb.gif"},{"title":"[/不要啊]","src":"https://www.zjhuiwan.cn/images/images/chn_buyaoya_thumb.gif"},{"title":"[/泪奔]","src":"https://www.zjhuiwan.cn/images/images/daxiongleibenxiong_thumb.gif"},{"title":"[/运气中]","src":"https://www.zjhuiwan.cn/images/images/cat_yunqizhong_thumb.gif"},{"title":"[/有钱]","src":"https://www.zjhuiwan.cn/images/images/youqian_thumb.gif"},{"title":"[/阴险]","src":"https://www.zjhuiwan.cn/images/images/yx_thumb.gif"},{"title":"[/怒骂]","src":"https://www.zjhuiwan.cn/images/images/nm_thumb.gif"},{"title":"[/心]","src":"https://www.zjhuiwan.cn/images/images/hearta_thumb.gif"},{"title":"[/伤心]","src":"https://www.zjhuiwan.cn/images/images/unheart.gif"},{"title":"[/猪头]","src":"https://www.zjhuiwan.cn/images/images/pig.gif"},{"title":"[/好的]","src":"https://www.zjhuiwan.cn/images/images/ok_thumb.gif"},{"title":"[/耶]","src":"https://www.zjhuiwan.cn/images/images/ye_thumb.gif"},{"title":"[/厉害]","src":"https://www.zjhuiwan.cn/images/images/good_thumb.gif"},{"title":"[/不要]","src":"https://www.zjhuiwan.cn/images/images/no_thumb.gif"},{"title":"[/赞]","src":"https://www.zjhuiwan.cn/images/images/z2_thumb.gif"},{"title":"[/来]","src":"https://www.zjhuiwan.cn/images/images/come_thumb.gif"},{"title":"[/弱]","src":"https://www.zjhuiwan.cn/images/images/sad_thumb.gif"},{"title":"[/蜡烛]","src":"https://www.zjhuiwan.cn/images/images/lazu_thumb.gif"},{"title":"[/钟]","src":"https://www.zjhuiwan.cn/images/images/clock_thumb.gif"},{"title":"[/蛋糕]","src":"https://www.zjhuiwan.cn/images/images/cake.gif"},{"title":"[/话筒]","src":"https://www.zjhuiwan.cn/images/images/m_thumb.gif"},{"title":"[/围脖]","src":"https://www.zjhuiwan.cn/images/images/weijin_thumb.gif"},{"title":"[/转发]","src":"https://www.zjhuiwan.cn/images/images/lxhzhuanfa_thumb.gif"},{"title":"[/路过这儿]","src":"https://www.zjhuiwan.cn/images/images/lxhluguo_thumb.gif"},{"title":"[/变脸]","src":"https://www.zjhuiwan.cn/images/images/bofubianlian_thumb.gif"},{"title":"[/吐]","src":"https://www.zjhuiwan.cn/images/images/t_thumb.gif"},{"title":"[/打哈气]","src":"https://www.zjhuiwan.cn/images/images/k_thumb.gif"},{"title":"[/抱抱]","src":"https://www.zjhuiwan.cn/images/images/bba_thumb.gif"},{"title":"[/怒]","src":"https://www.zjhuiwan.cn/images/images/angrya_thumb.gif"},{"title":"[/疑问]","src":"https://www.zjhuiwan.cn/images/images/yw_thumb.gif"},{"title":"[/馋嘴]","src":"https://www.zjhuiwan.cn/images/images/cza_thumb.gif"},{"title":"[/拜拜]","src":"https://www.zjhuiwan.cn/images/images/88_thumb.gif"},{"title":"[/思考]","src":"https://www.zjhuiwan.cn/images/images/sk_thumb.gif"},{"title":"[/汗]","src":"https://www.zjhuiwan.cn/images/images/sweata_thumb.gif"},{"title":"[/困]","src":"https://www.zjhuiwan.cn/images/images/sleepya_thumb.gif"},{"title":"[/睡觉]","src":"https://www.zjhuiwan.cn/images/images/sleepa_thumb.gif"},{"title":"[/钱]","src":"https://www.zjhuiwan.cn/images/images/money_thumb.gif"},{"title":"[/失望]","src":"https://www.zjhuiwan.cn/images/images/sw_thumb.gif"},{"title":"[/酷]","src":"https://www.zjhuiwan.cn/images/images/cool_thumb.gif"},{"title":"[/花心]","src":"https://www.zjhuiwan.cn/images/images/hsa_thumb.gif"},{"title":"[/哼]","src":"https://www.zjhuiwan.cn/images/images/hatea_thumb.gif"},{"title":"[/鼓掌]","src":"https://www.zjhuiwan.cn/images/images/gza_thumb.gif"},{"title":"[/晕]","src":"https://www.zjhuiwan.cn/images/images/dizzya_thumb.gif"},{"title":"[/悲伤]","src":"https://www.zjhuiwan.cn/images/images/bs_thumb.gif"},{"title":"[/抓狂]","src":"https://www.zjhuiwan.cn/images/images/crazya_thumb.gif"},{"title":"[/黑线]","src":"https://www.zjhuiwan.cn/images/images/h_thumb.gif"},{"title":"[/爱你]","src":"https://www.zjhuiwan.cn/images/images/lovea_thumb.gif"},{"title":"[/泪]","src":"https://www.zjhuiwan.cn/images/images/sada_thumb.gif"},{"title":"[/偷笑]","src":"https://www.zjhuiwan.cn/images/images/heia_thumb.gif"},{"title":"[/亲亲]","src":"https://www.zjhuiwan.cn/images/images/qq_thumb.gif"},{"title":"[/生病]","src":"https://www.zjhuiwan.cn/images/images/sb_thumb.gif"},{"title":"[/太开心]","src":"https://www.zjhuiwan.cn/images/images/mb_thumb.gif"},{"title":"[/懒得理你]","src":"https://www.zjhuiwan.cn/images/images/ldln_thumb.gif"},{"title":"[/右哼哼]","src":"https://www.zjhuiwan.cn/images/images/yhh_thumb.gif"},{"title":"[/左哼哼]","src":"https://www.zjhuiwan.cn/images/images/zhh_thumb.gif"},{"title":"[/嘘]","src":"https://www.zjhuiwan.cn/images/images/x_thumb.gif"},{"title":"[/衰]","src":"https://www.zjhuiwan.cn/images/images/cry.gif"},{"title":"[/委屈]","src":"https://www.zjhuiwan.cn/images/images/wq_thumb.gif"},{"title":"[/闭嘴]","src":"https://www.zjhuiwan.cn/images/images/zjemogi.gif"},{"title":"[/鄙视]","src":"https://www.zjhuiwan.cn/images/images/bs2_thumb.gif"},{"title":"[/闭嘴]","src":"https://www.zjhuiwan.cn/images/images/bz_thumb.gif"},{"title":"[/挤眼]","src":"https://www.zjhuiwan.cn/images/images/zy_thumb.gif"},{"title":"[/害羞]","src":"https://www.zjhuiwan.cn/images/images/shamea_thumb.gif"},{"title":"[/吃惊]","src":"https://www.zjhuiwan.cn/images/images/cj_thumb.gif"},{"title":"[/挖鼻屎]","src":"https://www.zjhuiwan.cn/images/images/kbsa_thumb.gif"},{"title":"[/可怜]","src":"https://www.zjhuiwan.cn/images/images/kl_thumb.gif"},{"title":"[/可爱]","src":"https://www.zjhuiwan.cn/images/images/tza_thumb.gif"},{"title":"[/哈哈]","src":"https://www.zjhuiwan.cn/images/images/laugh.gif"},{"title":"[/嘻嘻]","src":"https://www.zjhuiwan.cn/images/images/tootha_thumb.gif"},{"title":"[/呵呵]","src":"https://www.zjhuiwan.cn/images/images/smilea_thumb.gif"}]';
    json = eval('('+ json +')');
    var pattern1 = /\[\/[\u4e00-\u9fa5]+\]/g;
    var pattern2 = /\[\/[\u4e00-\u9fa5]+\]/;
    var contents = txt;
    var content = contents.match(pattern1);
    var str = contents;
    var src = "";
    console.log(articleId);
    if(content!=null){
    for(i=0;i<content.length;i++){
    for(j=0;j<json.length;j++){
    if(json[j].title == content[i]){
    src ="<img src='"+json[j].src+"'/>";
    break;
}
}
    str = str.replace(pattern2,src);
}
}

    txt = str;
    $.ajax({
    url : '/submitArticleComment',
    type : "post",
    data : {
    "content" : txt,
    "name" : name,
    "blog" : blog,
    "articleId" : articleId,
    "articleTitle" : articleTitle,
    "email" : email,
    "pageurl":pageUrl
},
    dataType : "json",
    success : function(data) {
    if ("success" == data.msg) {
    $('.messageReal').val('') // 清空输入框
    let str =
    `<div class='msgBox'>
										<div class="headUrl">
											<img src='https://www.zjhuiwan.cn//blogImg/otherImg/yktx.png' width='50' height='50'>
											<div>
												<span class="title"><a href="`+blog+`" target="_blank" style="cursor: pointer">`+ name +`</a></span>
												<span class="time">`+data.time+`</span>
											</div>
											<a class="reply">回复</a>
										</div>
										<div class='msgTxt '>
											`+txt+`
										</div>
										<label style="margin-top: 12px;display: none;">
										<br>
										<input class="rename" type="text" size="15" style="font-size: 12px;height: 2rem;width: 133px;padding: 0 10px;border: 1px solid #ddd;"
										   placeholder="输入你的昵称">
										  <input class="redetail" type="text" size="30" style="font-size: 12px;height: 2rem;width: 340px;padding: 0 10px;border: 1px solid #ddd;"
											placeholder="输入回复内容">
											<div class="yseorno" style="float: right">
												<a href="javascript:void(0)" style="color:white;width: 40px;font-size: 14px;background-color: green;padding: 2px 4px;" onclick="save(this,`+data.commentId+`)">确认</a>
												<a class="closeReply" style="color:white;margin-left:10px;width: 40px;font-size: 14px;background-color: green;padding: 2px 4px;">取消</a>
											</div>
										</label>
									</div>`;
    $(".msgCon").prepend(str);
    //点击“回复”显示回复框
    $('.reply').on('click', function(event) {
    $(this).parent().siblings('label').show();
});
    //点击“取消”隐藏回复框
    $('.closeReply').on('click', function(event) {
    $(this).parents('label').hide();
});
} else{
    alert("系统异常，留言失败！");
}
},
})

});

    //点击“回复”显示回复框
    $('.reply').on('click', function(event) {
    $(this).parent().siblings('label').show();
});
    //点击“取消”隐藏回复框
    $('.closeReply').on('click', function(event) {
    $(this).parents('label').hide();
});

    //提交回复
    function save(obj, commentId) {
    var replyName = $(obj).parent().parent().find(".rename").val();
    var replyDetail = $(obj).parent().parent().find(".redetail").val();
    var pageUrl = window.location.href;
    var articleTitle = $("#pagess").val();
    console.log(replyName);
    console.log(replyDetail);
    if (replyName == "") {
    alert("请填写你的昵称！");
    return false;
}
    if (replyDetail == "") {
    alert("请输入回复内容");
    return false;
}
    $.ajax({
    type : "post",
    data : {
    "commentId" : commentId,
    "replyDetail" : replyDetail,
    "replyName" : replyName,
    "pageUrl" : pageUrl,
    "articleTitle":articleTitle
},
    url : '/submitArticleCommentReply',
    dataType : "json",
    success : function(data) {
    if ("success" == data.msg) {
    $(obj).parents('label').hide();
    window.location.hash='pinglun';
    location.reload(true);
    $('.rename').val(replyName);
} else {
    alert("系统异常，回复失败！");
}
},
})
}
