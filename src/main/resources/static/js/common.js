// JavaScript Document
/*
function reload_callback() {
	parent.parent.location.reload();
}
function reload() {
	window.setTimeout("reload_callback()", 3000);
}
function goToWithoutWait(url) {
	parent.parent.location.href=url;
}
function goTo(url) {
	window.setTimeout(function goTo_callback(){parent.parent.location.href=url;}, 3000);
}
function goToByOpen(url) {
	window.setTimeout(function goTo_callback(){location.href=url;}, 3000);
}*/

//鼠标移动显示图书信息
function showBookInfo(classname){
    var t;
    $(classname).find('li').hover(
        function () {
            if (t) {
                window.clearTimeout(t);
            }
            var that = this;
            t = window.setTimeout(function () {

                var detailFrame = $('.detail-frame', that).html(),
                    img = $('img', that),
                    thisX = img.offset().left,
                    thisY = img.offset().top,
                    imgWidth = img.width(),
                    winWidth = window.innerWidth || document.body.offsetWidth,
                    tip = $('.detail-tip'),
                    arrowLeft = $('.arrow-left', tip),
                    arrowRight = $('.arrow-right', tip),
                    tipWidth;

                if ( tip.length === 0 ) {
                    $('body').append('<div class="detail-tip"><div class="bd"></div><span class="arrow-left"></span><span class="arrow-right"></span></div>');
                    tip = $('.detail-tip');
                    arrowLeft = $('.arrow-left', tip);
                    arrowRight = $('.arrow-right', tip);
                }

                tip.find('.bd').html(detailFrame);
                tipWidth = tip.width();

                if (thisX + imgWidth + tipWidth > winWidth) {
                    tip.removeClass('shadow-left').removeClass('shadow-right').addClass('shadow-left').css({top:thisY, left:thisX - tipWidth - 35});
                    arrowLeft.hide();
                    arrowRight.show();
                } else {
                    tip.removeClass('shadow-left').removeClass('shadow-right').addClass('shadow-right').css({top:thisY, left:thisX + imgWidth + 10});
                    arrowLeft.show();
                    arrowRight.hide();
                }

                tip.show();
            }, 200);
        },
        function () {
            if (t) {
                window.clearTimeout(t);
            }
            $('.detail-tip').hide();
        }
    );
}

//三级导航显示更多出版社
function showPressList() {
    //$(".yellow").click(function(){alert(123)});
    $("#ebookThirdNavMore").toggle(function() {
        $(".ebookHideNav").show('slow', function(){$("#ebookThirdNavMore").html('隐藏…').attr({title:'隐藏部分出版社'});});
    }, function() {
        $(".ebookHideNav").hide('slow', function(){$("#ebookThirdNavMore").html('更多…').attr({title:'显示全部出版社'});});
    });
}