/**
 * xls文件下载
 * @param content 文件内容
 * @param filename 文件名
*/
export function exportFile(content, filename) {
    // 创建下载链接
    let a = document.createElement('a');
    // 设置下载的名称
    a.download = `${filename}.xls`;
    // 隐藏的可下载链接
    a.style.display = 'none';
    // 字符内容转变成blob地址
    var blob = new Blob([content]);
    a.href = URL.createObjectURL(blob);
    // 绑定点击时间
    document.body.appendChild(a);
    a.click();
    // 然后移除
    document.body.removeChild(a);
};