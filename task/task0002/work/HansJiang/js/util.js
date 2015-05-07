/**
 * Created by jp on 2015/4/28.
 */
// �ж�arr�Ƿ�Ϊһ�����飬����һ��boolֵ
function isArray(arr) {
    // your implement
    return Object.prototype.toString.call(arr) === '[object Array]';
}

// �ж�fn�Ƿ�Ϊһ������������һ��boolֵ
function isFunction(fn) {
    // your implement
    return Object.prototype.toString.call(fn) === '[object Function]';
}
// ʹ�õݹ���ʵ��һ����ȿ�¡�����Ը���һ��Ŀ����󣬷���һ����������
// �����ƵĶ������ͻᱻ����Ϊ���֡��ַ��������������ڡ����顢Object���󡣲��������������������
function cloneObject(src) {
    //�����������Ϊ���֡��ַ�������������ֱ�ӷ���
    if (typeof src == "number" || typeof src  == "string" || typeof src == "boolean") {
        return src;
    }
    //����������������飬��������ÿһ����Ա���и���
    if (isArray(src)) {
        var newsrc = new Array();
        for (var i = 0; i < src.length; i++) {
            newsrc[i] = src[i];
        }
        return newsrc;
    }
    //����������������ڣ���ȡԭ�������ڲ���ֵ
    if (src instanceof Date) {
        var newsrc = new Date();
        newsrc.setTime(src.getTime());
        return newsrc;
    }
    //�������������Object����������
    if (src instanceof Object) {
        var newsrc = new Object();
        for (var i in src) {
            if (src.hasOwnProperty(i))
                newsrc[i] = cloneObject(src[i]);
        }
        return newsrc;
    }
    //�������ͣ��쳣
    throw new error("Unable to copy!");
}

// ���������ȥ�ز�����ֻ����������Ԫ��Ϊ���ֻ��ַ���������һ��ȥ�غ������
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
// ʵ��һ���򵥵�trim����������ȥ��һ���ַ�����ͷ����β���Ŀհ��ַ�
// �ٶ��հ��ַ�ֻ�а�ǿո�Tab
// ��ϰͨ��ѭ�����Լ��ַ�����һЩ�����������ֱ�ɨ���ַ���strͷ����β���Ƿ��������Ŀհ��ַ�������ɾ�����ǣ���󷵻�һ�����ȥ�����ַ���
function simpleTrim(str) {
    // your implement
    var array = new Array();
    var j=0;
    for(var i = 0;i < str.length;i++) {
        if (str.charAt(i) != ' ' && str.charAt(i) != '\t') {
            array[j] = str.charAt(i);
            j++;
        }
        if(i>0&&i<str.length-1)
        {
            if((str.charAt(i)==' '||str.charAt(i)=='\t')&&str.charAt(i-1)!=' '&&str.charAt(i-1)!='\t')
            //ֻ�ǽ�����м京��1���ո��tab
        {
            array[j] = str.charAt(i);
            j++;
        }
        }
    }
    return array;
}
// �ܶ�ͬѧ�϶���������Ĵ��뿴����ȥ������������������ʵ��һ��trim
// ���ַ���ͷβ���пո��ַ���ȥ��������ȫ�ǰ�ǿո�Tab�ȣ�����һ���ַ���
// ����ʹ��һ�м���������ʽ��ɸ���Ŀ
function trim(str) {
    // your implement
    return  str.replace(/(^\s*)|(\s*$)|(^\u3000*)|(\u3000*$)/g,"");

}
// ʵ��һ����������ķ��������������ÿһ��Ԫ��ִ��fn��������������������Ԫ����Ϊ��������
function fn(a,b)
{
    console.log(b+ ': ' + a);
}
function each(arr, fn) {

    for (var i = 0; i < arr.length; i++) {
        fn(arr[i],i);
        }

}

function getObjectLength(obj) {
    var num = 0;
    for (var i in obj) {
            num++;
    }
    return num;
}
function isEmail(emailStr) {
    var pat=/w+@\w+\.\w+/;
    return pat.test(emailStr);
}

function isMobilePhone(phone) {

    var pat=/1(3|4|5|8)[0-9]{9}$/;
    return pat.test(phone);
}
// Ϊelement����һ����ʽ��ΪnewClassName������ʽ
function addClass(element, newClassName) {
    if (element.className)
        element.className = element.className + newClassName;
    else
        element.className = newClassName;
}
// �Ƴ�element�е���ʽoldClassName
function removeClass(element, oldClassName) {
    element.className = null;
}
// �ж�siblingNode��element�Ƿ�Ϊͬһ����Ԫ���µ�ͬһ����Ԫ�أ�����boolֵ
function isSiblingNode(element, siblingNode)
{
    return element.parentNode === siblingNode.parentNode;
}
// ��ȡelement�������������ڵ�λ�ã�����һ������{x, y}
function getPosition(e) {
    // your implement
    var offsetcol=e.offsetTop;
    if(e.offsetParent!=null)
        offsetcol+=getTop(e.offsetParent);
    var offsetrow=e.offsetLeft;
    if(e.offsetParent!=null)
        offsetrow+=getLeft(e.offsetParent);
    var wz;
    wz.x=offsetrow;
    wz.y=offsetcol;
    return wz;
}

// ʵ��һ���򵥵�Query
function $(selector) {

}

//// ����ͨ��id��ȡDOM����ͨ��#��ʾ������
//$("#adom"); // ����idΪadom��DOM����
//
//// ����ͨ��tagName��ȡDOM��������
//$("a"); // ���ص�һ��<a>����
//
//// ����ͨ����ʽ���ƻ�ȡDOM��������
//$(".classa"); // ���ص�һ����ʽ�������classa�Ķ���
//
//// ����ͨ��attributeƥ���ȡDOM��������
//$("[data-log]"); // ���ص�һ����������data-log�Ķ���
//
//$("[data-time=2015]"); // ���ص�һ����������data-time��ֵΪ2015�Ķ���
//
//// ����ͨ���򵥵������߲�ѯ�����ԣ�����
//$("#adom .classa"); // ����idΪadom��DOM�������������ӽڵ��У���һ����ʽ�������classa�Ķ���


// ��һ��element��һ�����event�¼�����Ӧ����Ӧ����Ϊlistener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
    else {
        element.attachEvent("on"+event, listener);
    }
}
// �Ƴ�element�������event�¼�����ʱִ��listener����Ӧ
function removeEvent(element, event, listener) {
    if(element.removeEventListener){
        element.removeEventListener(event.type,listener,false);
    }
    else if(element.detachEvent) {
        element.detachEvent('on'+event.type,listener);
    }
    else {
        element['on'+event.type]=null;
    }
}

// ʵ�ֶ�click�¼��İ�
function addClickEvent(element, listener) {
    if (element.addEventListener) {
        element.addEventListener("click", listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("onclick", listener);
    } else {
        element["onclick"] = listener;
    }
}

// ʵ�ֶ��ڰ�Enter��ʱ���¼���
function addEnterEvent(element, listener) {
    element["onkeydown"] = function(event) {
        if (event.keyCode == 13) {
            listener();
        }
    };
}
//
//$.on(selector, event, listener) {
//    var element = $(selector);
//    addEvent(element, event, listener);
//}
//
//$.click(selector, listener) {
//    var element = $(selector);
//    addClickEvent(element, listener);
//}
//
//$.un(selector, event, listener) {
//    var element = $(selector);
//    removeEvent(element, event, listener);
//}
//
//$.delegate(selector, tag, event, listener) {
//    var element = $(selector);
//    delegateEvent(element, tag, eventName, listener);
//}


// �ж��Ƿ�ΪIE�����������-1���߰汾��
function isIE() {
    // your implement
    var navigatorName = "Microsoft Internet Explorer";
    if( navigator.appName == navigatorName ) {
        return navigator.appVersion;
        console.log(navigator.appVersion);
    }
    else
       return -1;
}

// ����cookie
  function setCookie(cookieName,value,expiredays)
    {
        var exdate=new Date()
        exdate.setDate(exdate.getDate()+expiredays)
        document.cookie=cookieName+ "=" +escape(value)+
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
