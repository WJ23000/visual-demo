import axios from 'axios';
import QS from 'qs';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token") ? localStorage.getItem("token") : "aa 227979840803202";
        // config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'rentId': 'CMS'
        }
        if (token) {
            config.headers = { 'token': token }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        let code = response.data.status;
        if (code && code != 400200) {
            if (code === 400403) { // token失效
                router.push({
                    path: "/Login",
                    query: { redirect: router.currentRoute.fullPath } // 从哪个页面跳转
                })
            }
            if (code === 400406) { // 无页面访问权限跳指定页面
                window.location.replace(window.location.href.replace(/#\/.*/, '#/401'));
            }
        }
        return response;
    },
    error => {
        return Promise.reject(error)
    }
);

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
*/
export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: QS.stringify(params)
        }).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param params
 * @returns {Promise}
*/
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response.data);
        }).catch(err => {
            reject(err)
        })
    })
}
