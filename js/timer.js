var h1 = document.getElementById('h');
var p = document.getElementById('p1');
 function getTime(){ 
  var d = new Date();
  var year =transformation(parseInt(d.getFullYear()));
  var month =transformation(parseInt( d.getMonth()+1));
  var date = transformation(parseInt(d.getDate()));
  var hours = transformation(parseInt(d.getHours()));
  var  seecond = transformation(parseInt(d.getSeconds()));
  var minutes = transformation(parseInt(d.getMinutes()));
 var day = d.getDay();
 h1.innerText = year+'/'+month+'/'+date+'-'+hours+':'+minutes+':'+seecond;
 p.innerText = '周'+day;
  switch(day){
  case 1:
     p.innerText = '周一'; 
     break;
  case 2:
     p.innerText = '周二'; 
     break;
  case 3:
     p.innerText = '周三'; 
     break;
  case 4:
     p.innerText = '周四'; 
     break;
  case 5:
     p.innerText = '周五'; 
     break;
  case 6:
     p.innerText = '周六'; 
     break;
  case 7:
     p.innerText = '周日'; 
     break;
 }
 
}

function transformation(num){
            return num<10 ? num = '0' + num : num;
        }
  getTime();
  setInterval(getTime,1000);