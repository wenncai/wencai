class Details{
    constructor() {
        //获取元素
        this.pic = document.querySelector('#smallBox>img')
		this.pic1 =  document.querySelector('#bigBox>img')
        this.details = document.querySelector('#details')
		
        this.init()
    }
    init() {
        this.request()
    }
 
    //查询字符串转成对象处理
    getQuery(name) {
        let id = location.search.slice(1)
        let arr = id.split('&')
        let obj = {}
        arr.forEach(item => {
            let newArr = item.split('=')
            obj[newArr[0]] = newArr[1]
        })
        return obj[name]
    }
    //拿到数据
    request() {
        let id = this.getQuery('id')
        if (!id) {
            location.href = '../index.html'
            return false
        } else {
            pAjax({ url: '../data/goods.json' })
            .then((res) => {
                let data = JSON.parse(res)
                data = data.slice(50, 160)
                this.render(data, id)
            })
        }
    }
	
	 
	
	
    //进行赋值
    render(data, id) {
        let goods = data.find(item => { return item.goods_id == id })
        this.pic.src = goods.img_big_logo;
		this.pic1.src = goods.img_big_logo;
        this.details.innerHTML = goods.goods_introduce;
    }
}
new Details()