function animation(ele, target, attr, callback){
    clearInterval(ele.timer);
    ele.timer = setInterval(function(){
        //获取开始位置
        var begin = parseFloat(getStyle(ele, attr));
        //设置步长
        var step = (target - begin)/10;
        //取整
        step = step>0 ? Math.ceil(step) : Math.floor(step);
        //把开始位置和步长相加
        var res = begin + step;
        //把值赋给div的left
        ele.style[attr] = res + 'px';
        //判断到达目标值让它停止
        if(res==target){
            clearInterval(ele.timer);
            //当两个条件都成立的时候才执行
            // if(callback){
            //     callback()
            // }
            callback && callback();
        }
    }, 30)
}
//获取样式
function getStyle(ele, attr){
    if(window.getComputedStyle){
        return getComputedStyle(ele, null)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}