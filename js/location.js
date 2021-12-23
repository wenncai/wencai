 var provinceArr = new Array(11);
      provinceArr["广东"] = ["广州","深圳","韶关","汕头","茂名"];
      provinceArr["湖南"] = ["长沙","张家界","株洲","岳阳","吉首"];
      provinceArr["湖北"] = ["武汉","宜昌","荆州","黄冈","仙桃"];
      provinceArr["安徽"] = ["合肥","黄山"];
      provinceArr["河南"] = ["郑州","开封","洛阳","信阳"];
	   provinceArr["云南"] = ["昆明","曲靖","大理","丽江"];
	    provinceArr["四川"] = ["成都","乐山","宜宾","信阳"];
		 provinceArr["浙江"] = ["杭州","金华","义乌","宁波"];
		 provinceArr["江苏"] = ["南京","开封","洛阳","信阳"];
		 provinceArr["河北"] = ["郑州","开封","洛阳","信阳"];
		  provinceArr["贵州"] = ["贵阳","开封","洛阳","信阳"];
       function getProvince(){
        var s = document.getElementById("province");
		var h = document.getElementById("h4");
	 
	 
	 
	 
        for(var v in provinceArr){
          //把数组键加入到省的下拉框
          s.add(new Option(v,v),null);
		  // var index=s.selectedIndex;
		  // var sheng = s.options[index].value;
		  // h4.innerHTML = sheng +'省'
        }
		
       }
 
      function getCity(){
        var s = document.getElementById("province");
        var c = document.getElementById("city");
        var v = s.value;//省份的名称，也是数组中的键
        c.options.length = 0;//把城市下拉框中的项清除
 
        //循环把某一个省的城市加入到市的下拉框
        for(var i in provinceArr[v] ){
          c.add(new Option(provinceArr[v][i],provinceArr[v][i]),null);
        }
 }
 
 
 
 
 
 