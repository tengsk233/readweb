if (typeof $ =='undefined')
{
    $ = function(id)
    {
        return document.getElementById(id);
    }
}

//检查是否数字
function isNumber(obj)
{
    if(obj.search("^-?\\d+(\\.\\d+)?$") != 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}

function checkEmail(obj)
{
    var filter=/^\s*([A-Za-z0-9_-]+(\.\w+)*@(\w+\.)+\w{2,3}){0,40}\s*$/;
    if (!filter.test(obj))
    {
        return false;
    }
    else
    {
        return true;
    }
}

function checkChinese(str)
{
    var len=0;
    for(var i=0;i<str.length;i++)
    {
        if   ( str.charCodeAt(i)>127 || str.charCodeAt(i)==94 )
            len+=1;
    }
    if ( len > 0 )
        return false;
    else
        return true;
}

function calculate_byte( sTargetStr )
{
    var sTmpStr, sTmpChar;
    var nOriginLen = 0;
    var nStrLength = 0;

    sTmpStr = new String(sTargetStr);
    nOriginLen = sTmpStr.length;

    for ( var i=0 ; i < nOriginLen ; i++ )
    {
        sTmpChar = sTmpStr.charAt(i);

        if (escape(sTmpChar).length > 4)
        {
            nStrLength += 2;
        }
        else if(sTmpChar!='\r')
        {
            nStrLength ++;
        }
    }

    return nStrLength;
}

function rRDelsure(errStr)
{
    var box=window.confirm("提示：\n\n"+errStr);
    if(box)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/**
 * 复选框全选
 */
function selectAll(obj, chk)
{
    if (chk == null)
    {
        chk = 'checkboxes';
    }

    var elems = obj.form.getElementsByTagName("INPUT");

    for (var i=0; i < elems.length; i++)
    {
        if (elems[i].name == chk || elems[i].name == chk + "[]")
        {
            elems[i].checked = obj.checked;
        }
    }
}

function selCheckboxes()
{
    var len = document.getElementsByName('checkboxes[]');
    var arr = new Array();
    var temp = '';
    for(var i = 0; i< len.length; i++)
    {
        if(len[i].checked == true)
        {
            temp += len[i].value + ',';

        }
    }
    temp = temp.substr(0, temp.length - 1);

    return temp;
}

function checkSearch(form)
{
    if(form){
        if(form.keyword.value == '' || form.keyword.value == '搜索成员' || form.keyword.value == '请输入关键字' || form.keyword.value == '图书、书评、小组、会员')
        {
            alert("请输入关键字！");
            form.keyword.focus();
            return false;
        }
    }else{
        if($("keyword").value == '' || $("keyword").value == '搜索成员' || $("keyword").value == '请输入关键字' || $("keyword").value == '图书、书评、小组、会员')
        {
            alert("请输入关键字！");
            $("keyword").focus();
            return false;
        }
    }
    return true;
}
function checkDriftSearch () {
    searchType = $('searchtype').value;
    switch(searchType) {
        case '1' :
            if($("key").value == '') {
                alert("请输入关键字！");
                $("key").focus();
                return false;
            }
            return true;
            break;
        case '2' :
            if($("bookkey").value == '') {
                alert("请输入关键字！");
                $("bookkey").focus();
                return false;
            }
            var len = document.getElementsByName('bookarea[]');
            for(var i = 0; i< len.length; i++)
            {
                if(len[i].checked == true)
                {
                    return true;
                }
            }
            alert("请选择搜索范围！");
            return false;
            break;
        case '3' :
            if($("province").value == '') {
                alert("请选择所在省份！");
                return false;
            }
            if($("city").value == '') {
                alert("请选择所在城市！");
                return false;
            }
            if($("area").value == '') {
                alert("请选择所在地区！");
                return false;
            }
            return true;
            break;
        case '4' :
            if($("school").value == 'none') {
                alert("请选择学校！");
                return false;
            }
            return true;
            break;
        default :
            return false;
    }
}
function checkSmallSearch() {
    if($("smallsearch").value == '') {
        alert("请输入搜索关键字！");
        return false;
    }
    return true;
}
function checkDriftThemeSearch() {
    if($("key").value == '') {
        alert("请输入搜索关键字！");
        return false;
    }
    if($("bySearch").value == 'none') {
        alert("请选择搜索方式！");
        return false;
    }
    return true;
}
function clear_value(id, value)
{
    if (document.getElementById(id).value == value)
    {
        document.getElementById(id).value = '';
    }
}

function reset_value(id, value)
{
    if (document.getElementById(id).value == '')
    {
        document.getElementById(id).value = value;
    }
}

function search_fc()
{
    if(document.getElementById('search_btn').style.display == 'none')
    {
        document.getElementById('search_btn').style.display = 'block';
        document.getElementById('search_arrow').style.background = 'url(images/common/arrow02.gif)';
        document.getElementById('search_arrow').title = '收起';
    }else{
        document.getElementById('search_btn').style.display = 'none';
        document.getElementById('search_arrow').style.background = 'url(images/common/arrow01.gif)';
        document.getElementById('search_arrow').title = '展开';
    }
}
function changeSearch(str) {
    if (str == 'book') {
        document.getElementById('search_action').value = 'book';
        document.getElementById('search_submit').value = '图 书';
    } else if(str == 'review') {
        document.getElementById('search_action').value = 'review';
        document.getElementById('search_submit').value = '书 评';
    } else if(str == 'group') {
        document.getElementById('search_action').value = 'group';
        document.getElementById('search_submit').value = '小 组';
    }
    document.getElementById('search_btn').style.display = 'none';
}