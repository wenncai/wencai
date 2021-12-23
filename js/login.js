let user = document.querySelector("#user");
let password = document.querySelector("#pwd");
let loginBtn = document.querySelector("#loginBtn");
let hb1 = document.getElementById("helpBlock1");
let hb2 = document.getElementById("helpBlock2");
let hb3 = document.getElementById("helpBlock3");

 // 判断是否为空
user.onblur = function(){
	if (user.value == '') {
		hb1.style.display = 'block';
	}else{
		hb1.style.display = 'none';	 
	}
 
}
user.onfocus = function(){hb3.style.display = 'none';}
password.onfocus = function(){hb3.style.display = 'none';}
password.onblur = function(){
	if (user.value == '') {
		hb2.style.display = 'block';

	}else{
		hb2.style.display = 'none';	 
	}
}

//登录
loginBtn.onclick = async function() {
	let data = await axios.get(`http://localhost:3000/user?username=${user.value}&password=${password.value}`);
	let datas = data.data;
	console.log(datas)
	if(datas.length!=0){
		alert('登录成功')
		location.href = "../index.html"
	}else{
		hb3.style.display = 'block';
	}
		// 	if (user.value == datas[i].username && password.value == datas[i].password){
		// 		alert('登录成功')
		// 		// location.href = "../index.html"
			 
		// }
// 		 setCookie('username', user.value, 7)
 }

 // function getValue(){
 //            //判断cookie是否存在，如果存在就赋值，不存在让value值为空
 //            if(getCookie('username') == undefined || getCookie('password') == undefined){
 //                 user.value = ''
 //                 password.value = ''
 //            }else{
 //                user.value = getCookie('username')
 //                password.value = getCookie('password')
               
 //            }
 //        }
 //        getValue()

 