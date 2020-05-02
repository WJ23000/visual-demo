import axios from 'axios';
import QS from 'qs';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json'
        }
        if(token){
          config.params = {'token':token}
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.errCode == 533) {
            router.push({
                path: "/Login",
                query: { redirect: router.currentRoute.fullPath } //从哪个页面跳转
            })
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
export function get(url, params={}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: QS.stringify(params)
        }).then(response => {
            resolve(response.data);
        })
        .catch(err => {
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
        axios.post(url, params)
        .then(response => {
            resolve(response.data);
        }, err => {
            reject(err)
        })
    })
}
