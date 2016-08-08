function Pic(){
	var oUl = document.getElementById("pic");
	var aLi = oUl.children;
	var len = aLi.length;
	for(var i = 0; i < len; i++){
		var d = 360/len*i;
		aLi[i].style.transition = "1s all ease "+200*(len-i)+"ms";
		aLi[i].style.transform = "rotateY("+d+"deg) translateZ(300px)";
	}
	aLi[0].addEventListener("transitionend",function(){
		setMove();
		setOpacity();	
	},false);
	function setMove(){
		for(var i = 0; i < len; i++){
			aLi[i].style.transition = "1s all ease";
		}
	}
	function clearMove(){
		for(var i = 0; i < len; i++){
			aLi[i].style.transition = "none";
		}
	}
	function setOpacity(){
		for(var i = 0; i < len; i++){
			var d = Math.abs(360/len*i + y/10)%360; 
			if(d > 180){
				d = 360 - d;
			}
			d = (180 - d)/180;
			d < 0.3 && (d = 0.3);
			aLi[i].style.opacity = d;
	    }
	}
	var timer = null;
	var speedX = 0;
	var speedY = 0;
	var lastX = 0;
	var lastY = 0;
	var y = 0;
	var x = 150;
	document.onmousedown = function(ev){
		clearMove();
		var disX = ev.clientX - y;
		var disY = ev.clientY - x;
		document.onmousemove = function(ev){
			y = ev.clientX - disX;
			x = ev.clientY - disY;
			if(x > 600){
				x = 600;
			} else if(x < -600){
				x = -600;
			}
			oUl.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";
			speedX = x - lastX;
			speedY = y - lastY;
			lastX = x;
			lastY = y;
			setOpacity();
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			clearInterval(timer);
			timer = setInterval(function(){
				x += speedX;
				y += speedY;
				speedX *= 0.8;
				speedY *= 0.8;
				if(Math.abs(speedX) < 1){
					speedX = 0;
				}
				if(Math.abs(speedY) < 1){
					speedY = 0;
				}
				if(speedX == 0 && speedY == 0){
					clearInterval(timer);
				} 
				oUl.style.transform = "perspective(800px) rotateX("+-x/10+"deg) rotateY("+y/10+"deg)";
			},30);
		};
		return false;
	};
}