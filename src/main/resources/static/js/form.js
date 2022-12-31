// JavaScript Document
function $(id){return document.getElementById(id);}

function changeInput(object, type, i) {
    if(type) {
        object.style.border="1px solid #eaeeef";
        if(object.parentNode.childNodes.length > 1 && i) object.parentNode.lastChild.style.display="none";
    } else {
        object.style.border="1px solid #99ccff";
        if(object.parentNode.childNodes.length > 1 && i) object.parentNode.lastChild.style.display="inline";
    }
}

// checkform

function checkLogin() {
    if($('username').value == '') {
        alert('请填写用户名！');
        $('username').focus;
        return false;
    }
    if($('password').value == '') {
        alert('请填写密码！');
        $('password').focus;
        return false;
    }
}

function checkRegForm() {
    if($('username').value == '') {
        alert('请填写用户名！');
        $('username').focus;
        return false;
    }
    if($('password').value == '') {
        alert('请填写密码！');
        $('password').focus;
        return false;
    }
    if($('password2').value != $('password').value) {
        alert('两次填写的密码不一致！');
        $('password').focus;
        return false;
    }
    if($('email').value == '') {
        alert('请填写Email！');
        $('email').focus;
        return false;
    }
}

function checkCreditAdd() {
    if($('fullname').value == '') {
        alert('请填写您的真实姓名！');
        $('fullname').focus;
        return false;
    } else if($('bday').value == 0 || $('bmonth').value == 0 || $('byear').value == 0) {
        alert('请选择您的出生日期！');
        return false;
    } else if($('residesubcity').value == '') {
        alert('请选择您所在的城市和地区！');
        return false;
    } else if($('school').value == '') {
        alert('请填写您（或您的孩子）所在的学校！');
        $('school').focus;
        return false;
    } else if($('grade').value == '') {
        alert('请填写您（或您的孩子）所在的年级！');
        $('grade').focus;
        return false;
    } else if($('mobile').value == '') {
        alert('请填写您的联系电话！');
        $('mobile').focus;
        return false;
    } else if($('code').value == '') {
        alert('请填写阅读体验卡密码！');
        $('code').focus;
        return false;
    } else {
        $('submit').value = '操作中，请稍候…';
        $('submit').disabled = 'disabled';
        return true;
    }
}