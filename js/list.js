class List{
    constructor() {
        //获取元素
        this.container = document.querySelector('#shops>ul')
        this.span = document.querySelector('#shops>a>.count>span')
		
        //初始化函数调用
        this.init()
    }
	 
    //页面初始化函数
    init() {
        this.request()
        this.count()
    }
    //请求数据
    request() {
        pAjax({ url: 'data/goods.json' })
        .then((res) => {
            let data = JSON.parse(res)
            data = data.slice(50,150 )
            this.render(data)
        })
    }
    //渲染页面
    render(data) {
        data.forEach(item => {
            this.container.innerHTML += `
                <li>
                    <a href="html/details.html?id=${item.goods_id}" style="text-decoration:none;color:black;">
                        <div class="pic">
                            <img src="${item.img_small_logo}">
                        </div>
                        <p class="title hide">${item.title}</p>
                        <p class="price">${item.price}元起</p>
                    </a>
                    <button data-id=${item.goods_id}>加入购物车</button>
                </li>
            `
        })
        this.bindHtml(data)
    }
    //绑定事件
    bindHtml(data) {
        //做事件委派
        this.container.addEventListener('click', (e)=> {
            e = e || window.event
            let target = e.target || e.srcElement
            if (target.nodeName == 'BUTTON') {
                //获取id
                let id = target.dataset.id - 0
                //拿到对应的数据
                let goods = data.find(item => { return item.goods_id == id })
                //从localStorage里面获取看有没有数据，没有返回一个数组
                let list = JSON.parse(localStorage.getItem('cart')) || []
                //判断
                if (!list.length) {
                    goods.cart_number = 1
                    list.push(goods)
                } else {
                    //判断数组里面有没有这条数据
                    let res = list.some(item => { return item.goods_id == id })
                    if (res) {
                        //把数据在数组里面的下标找到，对应数量++
                        let index = list.findIndex(item => { return item.goods_id == id })
                        list[index].cart_number++
                    } else {
                        goods.cart_number = 1
                        list.push(goods)
                    }
                }
                //把数据存储
                localStorage.setItem('cart', JSON.stringify(list))
                this.count()
            }
        }, false)
    }
    //计算数量
    count() {
        let list = JSON.parse(localStorage.getItem('cart')) || []
        let num = 0
        list.forEach(item => {
            num += item.cart_number
        })
        this.span.innerHTML = num
    }
}
new List()