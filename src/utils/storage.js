/** 
 * 设置h5缓存
 * @param key 键
 * @param value 值
*/
export function setStorage(key,value) {
    localStorage.setItem(key,value);
}


/** 
 * 根据key获取h5缓存指定属性的值 
 * @param key 键
*/
export function getStorage(key) {
    return localStorage.getItem(key);
}

/** 
 * 根据key删除指定的h5缓存 
 * @param key 键
*/
export function removeStorage(key) {
    localStorage.removeItem(key);
}