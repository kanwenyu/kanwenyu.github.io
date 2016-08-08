function blast(){
	var oDiv   = document.getElementById("blast"); 
	var R = 4;
	var C = 7;
	var len = R*C;
	var bReady = true;
	for(var r = 0; r < R; r++){
		for(var c = 0; c < C; c++){
			var oSpan = document.createElement("span");
			oDiv.appendChild(oSpan);
			oSpan.style.width = oDiv.offsetWidth/C + "px";
			oSpan.style.height = oDiv.offsetHeight/R + "px";
			
			oSpan.style.left = oSpan.offsetWidth*c + "px";
			oSpan.style.top  = oSpan.offsetHeight*r + "px";
oSpan.style.backgroundPosition = -oSpan.offsetLeft+"px -"+oSpan.offsetTop+"px";
		}
	}
	var iNow = 0;
	var aSpan = oDiv.children;
	oDiv.onclick = function(){
		if(!bReady) return ;
		bReady = false;
		iNow++;
		for(var i = 0; i < len; i++){
			var x = aSpan[i].offsetLeft + aSpan[i].offsetWidth/2 - oDiv.offsetWidth/2;
			var y = aSpan[i].offsetTop + aSpan[i].offsetHeight/2 - oDiv.offsetHeight/2;
			aSpan[i].style.transition = "1s all ease";
			aSpan[i].style.transform = "translate("+x+"px,"+y+"px) rotateX("+rnd(-180,180)+"deg)  rotateY("+rnd(-180,180)+"deg)";
			aSpan[i].style.opacity = "0";
		}
	}
	aSpan[0].addEventListener("transitionend",function(){
		 for(var i = 0; i < len; i++){
		 	aSpan[i].style.opacity = 1;
			aSpan[i].style.transition = "none";
			aSpan[i].style.transform = "translate(0px,0px) rotateX(0deg)  rotateY(0deg)";
			aSpan[i].style.backgroundImage = "url(images/baozha/"+iNow%3+".jpg)";
		 } 
		 oDiv.style.backgroundImage = "url(images/baozha/"+(iNow+1)%3+".jpg)";
		 bReady = true;
	},false);
	function rnd(n,m){
		return Math.floor(Math.random()*(m-n)+n);
	}
}