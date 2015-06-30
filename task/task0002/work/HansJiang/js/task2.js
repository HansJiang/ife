/**
 * Created by jp on 2015/6/17.
 */
// �ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
function isArray(arr) {
   // console.log(Object.prototype.toString.call(arr));
    return Object.prototype.toString.call(arr) === '[object Array]';
}
function isNumber(num) {
     //console.log(Object.prototype.toString.call(num));
    return Object.prototype.toString.call(num) === '[object Number]';
}
// �ж�fn�Ƿ�Ϊһ������������һ��boolֵ
//�˷���null���������鷵�صĶ���object����
function isFunction(fn) {
    if(typeof(fn)=="function") {
        return true;
    }
    else
        return false;
}

// ʹ�õݹ���ʵ��һ����ȿ�¡�����Ը���һ��Ŀ����󣬷���һ����������
// �����ƵĶ������ͻᱻ����Ϊ���֡��ַ��������������ڡ����顢Object���󡣲��������������������
function cloneObject(src) {
    if(typeof(src) == "number"||typeof(src) == "string"||typeof(src) == "boolean"||isFunction(src))
    return src;
    if(isArray(src)) {
        var y = [];
        var len = src.length;
        var i = 0;
        for(;i<len;i++) {
            y[i] = src[i];
        }
        return y;
    }
    if(Object.prototype.toString.call(src) === '[object Object]') {
        var ob = {};
        var i;
        for(i in src) {
            ob[i] = cloneObject(src[i]);
        }
        return ob;
    }
}

// ����������
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";
//console.log(abObj.a);
//console.log(abObj.b.b1[0]);
//
//console.log(tarObj.a);      // 1
//console.log(tarObj.b.b1[0]);    // "hello"

// ���������ȥ�ز�����ֻ����������Ԫ��Ϊ���ֻ��ַ���������һ��ȥ�غ������
//function uniqArray(arr) {
//    var len = arr.length;
//    var  x = new Array(len);
//    console.log(x.length);
//    var i = 1;
//    var j = 0;
//    var k = 0;
//    var index;
//    var n = 0;
//    x[0] = arr[0];
//    for(;i < len;i++) {
//
//        index = arr[i];
//        for(;k< len;k++) {
//            if(index == x[i]) {
//                n = 1;
//                break;
//            }
//            n = 0;
//        }
//        if(!n){
//            j++;
//            x[j]=index;
//        }
//    }
//    return x;
//}
function uniqArray(arr) {
    var n = {},r = [];         //nΪhash��rΪ��ʱ����
    for(var i = 0; i < arr.length; i++) //������ǰ����
    {
        if (!n[typeof (arr[i])+arr[i]]) //���hash����û�е�ǰ��       ������ַ���5��������5������ͬ�����
        {
            n[arr[i]] = true; //����hash��
            r.push(arr[i]); //�ѵ�ǰ����ĵ�ǰ��push����ʱ��������
            n[typeof (arr[i])+arr[i]] =true;
        }
    }
    return r;
}
// ʹ��ʾ��
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
//console.log(b); // [1, 3, 5, 7]

// ʵ��һ���򵥵�trim����������ȥ��һ���ַ�����ͷ����β���Ŀհ��ַ�
// �ٶ��հ��ַ�ֻ�а�ǿո�Tab
// ��ϰͨ��ѭ�����Լ��ַ�����һЩ�����������ֱ�ɨ���ַ���strͷ����β���Ƿ��������Ŀհ��ַ�������ɾ�����ǣ���󷵻�һ�����ȥ�����ַ���
function simpleTrim(str) {
    // your implement
    var array = [];
    var len = str.length;
    var i = 0;
    for(;i<len;i++) {
        if(str.charAt(i)!=' ')
            array.push(str.charAt(i));
    }
    return array;

}

// �ܶ�ͬѧ�϶���������Ĵ��뿴����ȥ������������������ʵ��һ��trim
// ���ַ���ͷβ���пո��ַ���ȥ��������ȫ�ǰ�ǿո�Tab�ȣ�����һ���ַ���
// ����ʹ��һ�м���������ʽ��ɸ���Ŀ
function trim(str) {
    // your implement
    return str.replace(/(^\s*)|(\s*$)|(^\t*)|(\t*$)/,"")
}

// ʹ��ʾ��
var str = '  hi!         ';
str =  trim(str);
//console.log(str); // 'hi!'

// ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
function each(arr, fn) {
   var len = arr.length;
    var i = 0;
    for(;i<len;i++) {
        fn(arr[i],i);
    }
}

// ����fn�������Խ�������������item��index

// ʹ��ʾ��
//var arr = ['java', 'c', 'php', 'html'];
//function output(item) {
//    console.log(item)
//}
//each(arr, output);  // java, c, php, html

// ʹ��ʾ��
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    //console.log(index + ': ' + item)
}
each(arr, output);  // 0:java, 1:c, 2:php, 3:html

// ��ȡһ�����������һ��Ԫ�ص�����������һ������
function getObjectLength(obj) {
    var i;
    var count = 0;
    for(i in obj) {
        count++;
    }
    return count;
}
// ʹ��ʾ��
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
//console.log(getObjectLength(obj)); // 3

// �ж��Ƿ�Ϊ�����ַ
function isEmail(emailStr) {
     var pattern = /\w+@\w+\.\w+/
    return pattern.test(emailStr);
}

function isMobilePhone(phone) {
    // your implement
    console.log("zx");
    var pat =/1(3|5|4|8)[0-9]{9}]/;
    return pat.test(phone);
}


// Ϊelement����һ����ʽ��ΪnewClassName������ʽ
function addClass(element, newClassName) {
    if(element.className)
        element.className  = element.className + " " + newClassName;
    else
        element.className = newClassName;

}

// �Ƴ�element�е���ʽoldClassName
function removeClass(element, oldClassName) {
    if(element.className)
        element.className.replace(/oldClassName/g,"")
    else
        return false;
}

// �ж�siblingNode��element�Ƿ�Ϊͬһ����Ԫ���µ�ͬһ����Ԫ�أ�����boolֵ
function isSiblingNode(element, siblingNode) {
    return siblingNode.parentNode == element.parentNode;
}

// ��ȡelement�������������ڵ�λ�ã�����һ������{x, y}
function getPosition(element) {
   var position = {x:0,y:0};

}
// your implement


// ʵ��һ���򵥵�Query
function $(selector) {

}

// ����ͨ��id��ȡDOM����ͨ��#��ʾ������
$("#adom"); // ����idΪadom��DOM����

// ����ͨ��tagName��ȡDOM��������
$("a"); // ���ص�һ��<a>����

// ����ͨ����ʽ���ƻ�ȡDOM��������
$(".classa"); // ���ص�һ����ʽ�������classa�Ķ���

// ����ͨ��attributeƥ���ȡDOM��������
$("[data-log]"); // ���ص�һ����������data-log�Ķ���

$("[data-time=2015]"); // ���ص�һ����������data-time��ֵΪ2015�Ķ���

// ����ͨ���򵥵������߲�ѯ�����ԣ�����
$("#adom .classa"); // ����idΪadom��DOM�������������ӽڵ��У���һ����ʽ�������classa�Ķ���




// �ж��Ƿ�ΪIE�����������-1���߰汾��
function isIE() {
  var navigatorName = "Microsoft Internet Explorer";
    if(navigator.appName == navigatorName) {
        console.log(navigator.appVersion);
        return navigator.appVersion;
    }
    else
    {
        //console.log("not");
    return -1;
    }
}
isIE();
// ����cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=cookieName+ "=" +escape(cookieValue)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

// ��ȡcookieֵ
function getCookie(cookieName)
{
    if (document.cookie.length>0)
    {
        c_start=document.cookie.indexOf(cookieName + "=")
        if (c_start!=-1)
        {
            c_start=c_start + cookieName.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

//
function ajax(url, options) {
    // your implement
}

// ʹ��ʾ����
ajax(
    'http://localhost:8080/server/ajaxtest',
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);
