/** 
 * 根据name获取指定属性的值
 * @param name 属性名
*/
export function getQstr(name) {
    let reg = new RegExp("" + name + "=([^&]+?)(#|&|$)");
    let url = window.location.href;
    let index = url.indexOf('?');
    let r = url.substr(index).match(reg);
    if (r !== null) {
        return decodeURIComponent(r[1]);
    }
    return null;
}

/** 
 * 去除url中不需要的属性返回一个新的url
 * @param name 属性名
 * @param str 页面url
*/
export function removeQstr(name, str = window.location.href) {
    let reg1 = new RegExp('' + name + '=(.*?)&')
    let reg2 = new RegExp('[&?]?' + name + '=(.*?)#')
    let url = str
    if (url.match(reg1) !== null) { // 匹配&结尾的则去除字段包含&
        return url.replace(reg1, '');
    } else if (url.match(reg2) !== null) { // 匹配#结尾的则去除字段包含#
        return url.replace(reg2, '#');
    }
    return url;
}

/**
 * 截取url后部分
 * @param name 属性名
*/
export function urlToObj(name) {
    var obj = '';
    var arr1 = name.split("?");
    var arr2 = arr1[1].split("&");
    for (var i = 0; i < arr2.length; i++) {
        var res = arr2[i].split("=");
        obj = res[1];
    }
    return obj;
}