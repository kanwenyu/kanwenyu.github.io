function about(){
	var oDiv   = document.getElementById("aboutUs");
	var oPage  = oDiv.querySelector(".aboutUs1");
	var oFront = oPage.querySelector(".aboutUsF");
	var oBack  = oPage.querySelector(".aboutUsB");
	var oPage2 = oDiv.querySelector(".aboutUs2");
	var iNow = 1;
	oDiv.onclick = function(){
		iNow++;
		if(iNow == 4){
			iNow=1;
		}
		oPage.style.transition = "1s all ease";
		oPage.style.transform = "perspective(800px) rotateY(-180deg)";
	};
	oPage.addEventListener("transitionend",function(){
		oPage.style.transition = "none";
		oPage.style.transform = "perspective(800px) rotateY(0deg)";
		oDiv.style.backgroundImage = "url(images/ren/"+iNow+".jpg)";
		oFront.style.backgroundImage = "url(images/font/"+iNow+".png)";
	},false);
}