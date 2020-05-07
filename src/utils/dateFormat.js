/**
 * 把秒转为天时分秒
 * @param sec 秒
*/
export function formatSecond(sec) {
    let d = Math.floor(sec / (24 * 3600));
    let h = Math.floor((sec - d * 24 * 3600) / 3600);
    let m = Math.floor((sec - d * 24 * 3600 - h * 3600) / 60);
    let s = sec - d * 24 * 3600 - h * 3600 - m * 60;
    return d + "天" + h + "时" + m + "分" + s + "秒"
}

/**
 * 把天时分秒转为秒
 * @param day 时
 * @param hour 时
 * @param min 分
 * @param sec 秒
*/
export function formatTimeToSeconds(day ,hour, min, sec) {
    let daySec = day * 24 * 3600;
    let hourSec = hour * 60 * 60;
    let minSec = min * 60;
    return daySec + hourSec + minSec + sec
}
