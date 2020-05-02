import { get, post } from '../utils/request';
import baseUrl from "../config/config";

const url = baseUrl + '/mapService';
const newUrl = baseUrl + '/userService';

export function getLineMap(params) {
    const requestUrl = url + "/getLineMap?type=" + params;
    return get(requestUrl, params);
}

export function editUserInfo(params) {
    const requestUrl = newUrl + "/editUserInfo";
    return post(requestUrl, params);
}