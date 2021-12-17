 var mySwiper = new Swiper ('.swiper-container', {
            //direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {
                autoplay:true,
                delay: 1000,//1秒切换一次
            },

            // 如果需要分页器
            pagination :{
                el: '.swiper-pagination',
                clickable :true,
            },
            
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            }
        })  
        //鼠标滑过pagination控制swiper切换
        for(i=0;i<mySwiper.pagination.bullets.length;i++){
        mySwiper.pagination.bullets[i].onmouseover=function(){
            this.click();
        };
        } 
        //如果你在swiper初始化后才决定使用clickable，可以这样设置
        mySwiper.params.pagination.clickable = true ;
        //此外还需要重新初始化pagination
        mySwiper.pagination.destroy()
        mySwiper.pagination.init()
        mySwiper.pagination.bullets.eq(0).addClass('swiper-pagination-bullet-active');
        //鼠标覆盖停止自动切换
        mySwiper.el.onmouseover = function(){
            mySwiper.autoplay.stop();
        }
        //鼠标离开开始自动切换
        mySwiper.el.onmouseout = function(){
             mySwiper.autoplay.start();
        }      