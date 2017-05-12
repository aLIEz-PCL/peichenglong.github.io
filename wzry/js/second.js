window.onload = function(){
	var w = document.getElementsByTagName('body')[0]
	function orientInit(){  
	    var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';  
	    if(orientChk =='landscape'){  
	        //这里是横屏下需要执行的事件  
	        w.style.margin= '0';
			w.style.padding= '0';
			w.style.width='100%';
			w.style.height = '100%';
	    }else{  
	        //这里是竖屏下需要执行的事件
//	        w.style.backgroundColor= 'black';
//			w.style.margin= '0';
//			w.style.padding= '20% 0';
//			w.style.width='100%';
//			w.style.height = '60%';
	    }  
	}    
	orientInit();
	
	window.addEventListener('onorientationchange' in window?'orientationchange':'resize', function(){  
	    setTimeout(orientInit, 100);  
	},false);
    
    setTimeout(function(){
    	window.location.href = "../pages/third.html";
    },5000);
}
