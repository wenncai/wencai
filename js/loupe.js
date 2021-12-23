let smallBox = document.querySelector('#smallBox');
			let mask = document.querySelector('#smallBox>span');
			let bigBox = document.querySelector('#bigBox');
			let pic = document.querySelector('#bigBox>img');
			
			let smallImg = document.getElementById('smallImg');
			let bigImg = document.getElementById('bigImg');
			// let aBtn = document.querySelectorAll('.navpic>div');

			// var imgArr = [
			// 	"img/1.jpg",
			// 	"img/2.jpg",
			// 	"img/3.jpg",
			// 	"img/4.jpg",
			// 	"img/5.jpg"
			// ]


			//实现放大效果
			smallBox.onmouseover = function() {
				bigBox.style.display = 'block';
				mask.style.display = 'block';
			}
			smallBox.onmouseout = function() {
				bigBox.style.display = 'none';
				mask.style.display = 'none';
			}
			smallBox.onmousemove = function(e) {
				e = e || window.event;
				let x = e.clientX - smallBox.offsetParent.offsetLeft - mask.offsetWidth / 2;
				let y = e.clientY - smallBox.offsetParent.offsetTop - mask.offsetHeight / 2;

				if (x <= 0) {
					x = 0;
				} else if (x >= smallBox.offsetWidth - mask.offsetWidth) {
					x = smallBox.offsetWidth - mask.offsetWidth;
				}
				if (y <= 0) {
					y = 0;
				} else if (y >= smallBox.offsetHeight - mask.offsetHeight) {
					y = smallBox.offsetHeight - mask.offsetHeight;
				}

				mask.style.left = x + 'px';
				mask.style.top = y + 'px';


				let w = x / (smallBox.offsetWidth - mask.offsetWidth);
				let h = y / (smallBox.offsetHeight - mask.offsetHeight);

				pic.style.left = -w * (pic.offsetWidth - bigBox.offsetWidth) + 'px';
				pic.style.top = -h * (pic.offsetHeight - bigBox.offsetHeight) + 'px';
			}

			//图片切换
			// for (var i = 0; i <= aBtn.length; i++) {
			// 	aBtn[i].index = i;
			// 	aBtn[i].onclick = function() {
			// 		var index = this.index;
			// 		for (var j = 0; j <= imgArr.length; j++) {
			// 			smallImg.setAttribute('src', imgArr[index]);
			// 			bigImg.setAttribute('src', imgArr[index]);
			// 		}
			// 	}
			// }