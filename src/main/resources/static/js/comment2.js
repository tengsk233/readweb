function hideElement_(elmID)
{
    for(i = 0; i < document.getElementsByTagName( elmID ).length; i++ )
    {
        obj = document.getElementsByTagName( elmID )[i];
        if( !obj || !obj.offsetParent )
        {
            continue;
        }
        obj.style.visibility = "hidden";
    }
}

function showElement_(elmID)
{
    for( i = 0; i < document.getElementsByTagName(elmID).length; i++ )
    {
        obj = document.getElementsByTagName( elmID )[i];

        if( !obj || !obj.offsetParent )
        {
            continue;
        }
        obj.style.visibility = "";
    }
}
function showBox(name)
{

    hideElement_("SELECT");

    var _y=document.body.scrollTop;
    var _x=document.body.scrollLeft;
    document.getElementById(name).style.left='250px';
    document.getElementById(name).style.top='200px';
    document.getElementById(name).style.display='block';

}
function closeBox(name)
{
    showElement_("SELECT");
    document.getElementById(name).style.display='none';
}

function add_user(user_id)
{
    var uid=user_id;
    var user_value=document.getElementById('sendto').value;
    if(user_value=='')
    {

        document.getElementById('sendto').value=user_id;

    }else{

        var sss=user_value.indexOf(user_id);

        if (user_value.indexOf(user_id)==-1)
        {
            document.getElementById('sendto').value=user_value + "," + user_id;
        }
        else
        {
            alert('您已经选择了此收件人');
        }
    }

}

function fav_add_item(tags_name)
{
    var tag=document.form3.tag.value;
    if (tag==""){
        document.form3.tag.value=tags_name;
    }else{
        test = new Array();
        test = tag.split(" ");
        var i = test.length;
        if(i < 5)
        {
            for(j = 0; j < i; j++)
            {
                if(test[j] == tags_name)
                {
                    alert("不能重复选择标签！");
                    return false;
                }
            }
            document.form3.tag.value=tag+" "+tags_name;
        }
        else
        {
            alert("最多只能填入5个标签！");
            return false;
        }
    }
}

function change(id,name,co){
    for(i=1;i<=co;i++){
        class_name=name+i;
        class_name2=name+"_"+i;
        if (id==i){
            document.getElementById(class_name).style.display="block";
            document.getElementById(class_name2).className=name+"_yes";
        }else{
            document.getElementById(class_name).style.display="none";
            document.getElementById(class_name2).className=name+"_no";
        }
    }
}


function review_show(id)
{
    img=new Image();
    lang_review = 'lang_review_'+id;
    short_review = 'short_review_'+id;
    img='img_'+id;
    show_hide=document.getElementById(lang_review).style.display;
    if(show_hide=='none'){
        document.getElementById(img).src="images/common/hide.gif";
        document.getElementById(lang_review).style.display="block";
        document.getElementById(short_review).style.display="none";
        document.getElementById(img).title="收缩书评";
        document.getElementById(img).alt="收缩书评";
    }else{
        document.getElementById(img).src="images/common/show.gif";
        document.getElementById(lang_review).style.display="none";
        document.getElementById(short_review).style.display="block";
        document.getElementById(img).title="展开书评";
        document.getElementById(img).alt="展开书评";
    }
}

function bookinfo_show(id)
{
    links=new Image();
    lang_bookinfo = 'lang_bookinfo_'+id;
    short_bookinfo = 'short_bookinfo_'+id;
    links='link_'+id;
    show_hide=document.getElementById(lang_bookinfo).style.display;
    if(show_hide=='none'){
        document.getElementById(short_bookinfo).style.display="none";
        document.getElementById(lang_bookinfo).style.display="block";
    }else{
        document.getElementById(lang_bookinfo).style.display="none";
        document.getElementById(short_bookinfo).style.display="block";
    }
}

function changeFontsize(type)
{
    if(type=='1'){
        document.getElementById('change_font_size_1').style.fontSize="14px";
        document.getElementById('change_font_size_2').style.fontSize="14px";
    }else{
        document.getElementById('change_font_size_1').style.fontSize="12px";
        document.getElementById('change_font_size_2').style.fontSize="12px";
    }
}

