/*
    ajax请求get方法
    @param {string} url 请求地址
    @param {object} query 请求地址
    @param {function} success 请求成功回调函数
    @param {function} error 请求失败回调函数
*/
function ajax_get(options) {
    //判断不能让地址为空
    if (!options.url) {
        alert('哥们儿，咱们没有这么玩的？')
        return;
    }
    //创建ajax对象
    let xhr = new XMLHttpRequest()
    //参数处理判断
    if (options.query) {
        let str = ''
        for (let key in options.query) {
            str += `${key}=${options.query[key]}`
            str += '&'
        }
        str = '?' + str.slice(0, -1)
        //请求信息
        xhr.open('get', options.url + str)
    } else {
        xhr.open('get', options.url)
    }
    //发送请求
    xhr.send()
    //监听状态
    xhr.onreadystatechange = function () {
        //先判断ajax请求状态
        if (xhr.readyState == 4) {
            //判断返回的请求状态码
            if (xhr.status == 200) {
                options.success && options.success(xhr.responseText)
            } else {
                options.error && options.error()
            }
        }
    }
}
/*
    ajax请求post方法
    @param {string} url 请求地址
    @param {object} query 请求地址
    @param {function} success 请求成功回调函数
    @param {function} error 请求失败回调函数
*/
function ajax_post(options) {
    //判断不能让地址为空
    if (!options.url) {
        alert('哥们儿，咱们没有这么玩的？')
        return;
    }
    //创建ajax对象
    let xhr = new XMLHttpRequest()
    //请求信息
    xhr.open('post', options.url)
    //设置请求头信息
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    //参数处理判断
    if (options.query) {
        let str = ''
        for (let key in options.query) {
            str += `${key}=${options.query[key]}`
            str += '&'
        }
        str = str.slice(0, -1)
        //发送请求
        xhr.send(str)
    } else {
        //发送请求
        xhr.send(null)
    }
    //监听状态
    xhr.onreadystatechange = function () {
        //先判断ajax请求状态
        if (xhr.readyState == 4) {
            //判断返回的请求状态码
            if (xhr.status == 200) {
                options.success && options.success(xhr.responseText)
            } else {
                options.error && options.error()
            }
        }
    }
}
//通过Promise封装ajax
function pAjax(options) {
    return new Promise(function (resolve, reject) {
        //判断不能让地址为空
        if (!options.url) {
            alert('哥们儿，咱们没有这么玩的？')
            return;
        }
        //创建ajax对象
        let xhr = new XMLHttpRequest()
        //参数处理判断
        if (options.query) {
            let str = ''
            for (let key in options.query) {
                str += `${key}=${options.query[key]}`
                str += '&'
            }
            str = '?' + str.slice(0, -1)
            //请求信息
            xhr.open('get', options.url + str)
        } else {
            xhr.open('get', options.url)
        }
        //发送请求
        xhr.send()
        //监听状态
        xhr.onreadystatechange = function () {
            //先判断ajax请求状态
            if (xhr.readyState == 4) {
                //判断返回的请求状态码
                if (xhr.status == 200) {
                    resolve(xhr.responseText)
                } else {
                    reject()
                }
            }
        }
    })
}