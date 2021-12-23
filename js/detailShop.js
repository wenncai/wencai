// let container = document.querySelector('#detail_shop');
//  let car = document.querySelector('#detail_shop>.add_cart');
  
//   //拿到数据
//   request() {
//       let id = this.getQuery('id')
//       if (!id) {
//           location.href = '../index.html'
//           return false
//       } else {
//           pAjax({ url: '../data/goods.json' })
//           .then((res) => {
//               let data = JSON.parse(res)
//               data = data.slice(50, 160)
//               render(data, id)
//           })
//       }
//   }
  class DetailsShop{
      constructor() {
          //获取元素
		  this.tittle = document.querySelector('#detail_shop>h3');
          this.price = document.querySelector('#detail_shop>.price');
		  this.currentPrice =  document.querySelector('#detail_shop>.current');
          this.cart = document.querySelector('#detail_shop>.add_cart');
		  
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
          this.tittle.innerHTML = goods.title;
  		this.price.innerHTML= '原价：'+goods.price+'元';
          this. currentPrice.innerHTML ='折扣价：'+ goods.current_price+'元';
      }
  }
  new DetailsShop() 
  //拿到数据
 //  ajax_get({
 //              url: '../data/goods.json',
 //              success: function(res){
 //                 let data = JSON.parse(res)
	// 			  data = data.slice(50, 160)
 //                  console.log(data)
	// //渲染页面
	//   function render(){
	//     data.forEach(item => {
	//         container.innerHTML += `
	// 			<h3>${item.title}</h3>
	// 			<div class="price"><h3>${item.price}</h3></div>
	// 			<div class="current">${item.current_price}</div>
	// 			<div class="color"></div>
	//             <div class="size"></div>
	// 			<div class="add_number"></div>
	// 			<div class="add_cart"><button data-id=${item.goods_id}>加入购物车</button></div>
	//         `
	//     })
	     
	// }
 // render()
 // // <li>
 // //     <a href="html/details.html?id=${item.goods_id}" style="text-decoration:none;color:black;">
 // //         <div class="pic">
 // //             <img src="${item.img_small_logo}">
 // //         </div>
 // //         <p class="title hide">${item.title}</p>
 // //         <p class="price">${item.price}元起</p>
 // //     </a>
 // //     <button data-id=${item.goods_id}>加入购物车</button>
 // // </li>
 
 
 // // container.innerHTML = `${data[1].goods_introduce}`
 //     }
 // })