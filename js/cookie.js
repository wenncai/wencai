/*
    设置cookie
    @param {string} name
    @param {string} value
    @param {number} time
*/
function setCookie(name, value, time) {
    //先判断设置了过期时间
    if (time) {
        let d = new Date()
        d.setDate(d.getDate() + time)
        //把北京时间转成世界（系统）标准时间
        d = d.toUTCString()
        //设置cookie
        document.cookie = `${name}=${value}; expires=${d}; path=/`
    } else {
        document.cookie = `${name}=${value}; path=/`
    }
}

/*
    获取cookie
    @param {string} name
*/
function getCookie(name) {
    //username=张三; password=666
    //把获取到的cookie内容字符串切割成数组形式
    let arr = document.cookie.split('; ')
    //声明一个空的对象
    let obj = {}
    //遍历数组
    arr.forEach(item => {
        let newArr = item.split('=')
        //给对象进行赋值操作
        obj[newArr[0]] = newArr[1]
    })
    //把结果返回给外界
    return obj[name]
}

/*
     删除cookie
     @param {string} name
*/
function delCookie(name) {
    setCookie(name, 1, -1)
}