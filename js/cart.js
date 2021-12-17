class Cart{
    constructor() {
        //获取数据
        this.list = JSON.parse(localStorage.getItem('cart')) || []

        //获取元素
        this.cartTable = document.querySelector('.cartTable')
        this.tbody = document.querySelector('tbody')
        this.totalNum = document.querySelector('.totalNum')
        this.money = document.querySelector('.money')
        this.selectAll = document.querySelector('.selectAll')

        //初始化函数调用
        this.init()
    }
    //初始化函数
    init() {
        this.render()
        this.bindHtml()
        this.total()
    }
    //渲染页面
    render() {
        if (!this.list.length) {
            this.tbody.innerHTML = `
                <tr height="100px">
                    <td colspan="6" style="border:none;">
                        <h1>亲，你的购物车空空如也！赶紧去购物吧！<a href="../index.html">Go</a></h1>
                    </td>
                </tr>
            `
        } else {
            //渲染新数据之前先把之前的给清除掉
            this.tbody.innerHTML = ''
            this.list.forEach(item => {
                this.tbody.innerHTML += `
                 <tr>
                    <td><input type="checkbox" value="" class="select" data-id=${item.goods_id} ${item.is_select && "checked"}/></td>
                    <td>
                        <img src="${item.img_small_logo}">
                        <span class="hide">${item.title}</span>
                    </td>
                    <td><span class="price">${item.price}</span></td>
                    <td>
                        <span class="sub" data-id=${item.goods_id}>-</span>
                        <input type="text" value="${item.cart_number}" class="txt" />
                        <span class="add" data-id=${item.goods_id}>+</span>
                    </td>
                    <td><span class="subTotal">${item.price * item.cart_number}元</span></td>
                    <td><span class="del" data-id=${item.goods_id}>删除</span></td>
                </tr>
            `
            })
        }
        //数据持久化
        localStorage.setItem('cart', JSON.stringify(this.list))
    }
    //绑定事件（各种事件委派）
    bindHtml() {
        this.cartTable.addEventListener('click', (e)=>{
            e = e || window.event
            let target = e.target || e.srcElement
            //全选功能
            if (target.className == 'selectAll') {
                //先把自己的状态拿到
                let type = target.checked
                //改变数据的状态
                this.list.forEach(item => {
                    item.is_select = type
                })
                //重新渲染数据
                this.render()
                this.total()
            }
            //单选功能
            if (target.className == 'select') {
                //拿到id
                let id = target.dataset.id - 0
                //拿到对应的数据
                let goods = this.list.find(item => { return item.goods_id == id })
                //修改拿到的数据
                goods.is_select = !goods.is_select
                //重新渲染数据
                this.render()
                this.total()
            }
            //商品数据自增
            if (target.className == 'add') {
                //拿到id
                let id = target.dataset.id - 0
                //拿到对应的数据
                let goods = this.list.find(item => { return item.goods_id == id })
                //修改拿到的数据
                if (goods.cart_number == goods.goods_number) {
                    alert('亲，只能买这么多哦！')
                    return false
                }
                goods.cart_number++
                //重新渲染数据
                this.render()
                this.total()
            }
            //商品数据自减
            if (target.className == 'sub') {
                //拿到id
                let id = target.dataset.id - 0
                //拿到对应的数据
                let goods = this.list.find(item => { return item.goods_id == id })
                //修改拿到的数据
                if (goods.cart_number == 1) {
                    return false
                }
                goods.cart_number--
                //重新渲染数据
                this.render()
                this.total()
            }
            //删除操作
            if (target.className == 'del') {
                //拿到id
                let id = target.dataset.id - 0
                //拿到对应的数据
                let index = this.list.findIndex(item => { return item.goods_id == id })
                //删除数组里面的数据
                this.list.splice(index, 1)
                //判断数组是不是为空
                if (!this.list.length) {
                    this.selectAll.checked = false
                }
                //重新渲染数据
                this.render()
                this.total()
            }
            //清空购物车
            if (target.className == 'dlAll') {
                //拿到id
                let id = target.dataset.id - 0
                //通过过滤拿到的是没有选中的，会返回一个新的数组给咱们
                let res = this.list.filter(item => {
                    return item.is_select == false
                })
                //使用新的数组把之前的数组给覆盖掉
                this.list = res
                
                //清空购物车
                //this.list = []

                //判断数组是不是为空
                if (!this.list.length) {
                    this.selectAll.checked = false
                }
                //重新渲染数据
                this.render()
                this.total()
            }
        }, false)
    }
    //计算总价和商品数量
    total() {
        //商品数量
        let num = 0
        //商品总价
        let price = 0
        this.list.forEach(item => {
            //当商品是选中的状态才计算
            if (item.is_select == true) {
                num += item.cart_number
                price += item.price * item.cart_number

                //让全选按钮选中或者不选中
                let res = this.list.every(item => { return item.is_select == true })
                if (res) {
                    this.selectAll.checked = true
                } else {
                    this.selectAll.checked = false
                }
            }
        })
        //进行赋值操作
        this.totalNum.innerHTML = num
        this.money.innerHTML = price.toFixed(2)
    }
}
new Cart()