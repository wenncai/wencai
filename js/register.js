let username = document.getElementById("user");
let password = document.getElementById("pwd");
let repwd = document.getElementById("repwd");
let submit = document.getElementById("sub");
let p1 = document.getElementById("span1");
let p2 = document.getElementById("span2");
let p3 = document.getElementById("span3");
let p4 = document.getElementById("span4");
 
let telReg = /^1[3-9][0-9]{9}$/;
let pwdReg = /^[a-zA-Z]\w{5,17}$/;
let repwdReg = /^[a-zA-Z]\w{5,17}$/;

// 手机号正则
username.onblur = function() {
	if (telReg.test(username.value)) {
		p1.innerHTML = '*电话号格式正确*';
		p1.style.color = 'green';
		p1.style.right = '2px';
		p1.style.top = '6px';
		return true;
	} else {
		p1.innerHTML = '*电话格式不正确,重新输入*';
		p1.style.right = '-50px';
		p1.style.top = '6px';
		p1.style.color = 'red';
	}
}
username.onfocus = function() {
	p1.innerHTML = '*请输入正确的电话号嘛*'
	p1.style.top = '6px';
	p1.style.right = '-35px';
	p4.style.display = 'none';

}

// 密码正则
password.onfocus = function() {
	p2.innerHTML = '*请输入正确密码格式*'
	p2.style.right = '-20px';
	p2.style.top = '6px';
	p2.style.color = 'red';
	p4.style.display = 'none';
}
password.onblur = function() {
	if (pwdReg.test(password.value)) {
		p2.innerHTML = '*密码格式正确*';
		p2.style.color = 'green';
		p2.style.right = '14px';
		p2.style.top = '6px';
		return true;

	} else {
		p2.innerHTML = '*密码格式不正确,重新输入正确密码*';
		p2.style.right = '-98px';
		p2.style.top = '6px';
		p2.style.color = 'red';
	}
}


repwd.onfocus = function() {
	p3.innerHTML = '*请输入正确密码格式*'
	p3.style.right = '-20px';
	p3.style.top = '6px';
	p3.style.color = 'red';
	p4.style.display = 'none';
	return true;
}
repwd.onblur = function() {
	if (repwdReg.test(repwd.value)) {
		p3.innerHTML = '*密码格式正确*';
		p3.style.color = 'green';
		p3.style.right = '14px';
		p3.style.top = '6px';
	
	} else {
		p3.innerHTML = '*密码格式不正确,重新输入正确密码*';
		p3.style.right = '-98px';
		p3.style.top = '6px';
		p3.style.color = 'red';
	}
}

submit.onclick = async function() {
	let username = user.value;
	let pwd = password.value;
	let repassword = repwd.value;
	// console.log(repassword)
	let data = await axios.get('http://localhost:3000/user');
	// let datas = data.user;
	console.log(data)
	
	
	for(let i=0;i<data.data.length;i++){
		if(username==data.data[i].username){
		p4.innerHTML = '该账号已经被注册,换个试试哦！'; 
		p4.style.display = 'block';
		return;
		}
		
	}
	if(pwd!=repassword){
		p4.innerHTML = '两次密码输入不匹配，请重新输入!';
		p4.style.display = 'block';
		return;
	}
	
 axios.post('http://localhost:3000/user',{
	   username:username,
	   password:pwd,
	   repwd:repassword
 })
       .then(function(){
		   alert('注册成功！确认前往登录')
		   location.href = '../html/login.html'
	   })
	 
}


