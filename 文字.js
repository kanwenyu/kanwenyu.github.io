function font(id){
    var str='What is happiness, happiness is the flying white yarn dance in the wind! Happiness, is the brilliant smile of joy in the face to stay! Happiness is to hold your hand, and son drops. Today, your hand pulled her hand, tomorrow is the grey-haired through each of you!';
    var timer=null;
    var oD=document.getElementById(id);
    for(var i=0;i<str.length;i++){
        var oSpan=document.createElement('span');
        oSpan.innerHTML=str.charAt(i);
        oD.appendChild(oSpan);
        oSpan.style.opacity=0;
        }
    var aSpan=oD.children;
    var i=0;
    
    timer=setInterval(function(){
          aSpan[i].style.display='inline-block';
          aSpan[i].style.width='15px';
          //$('aSpan').animate({opacity:1},{easing:'easeOutBounce'});
          startMove(aSpan[i],{opacity:1},{easing:'easeOutBounce'});
          i++;
          if(i==aSpan.length){
             clearInterval(timer);
                }
            },100);

}
function getStyle(obj,name){
    return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function startMove(obj,json,options){
    clearInterval(obj.timer);   
    options=options || {};
    options.type=options.type || 'ease-out';
    options.time=options.time || 3000;
    
    var count=Math.floor(options.time/300);
    var start={};
    var dis={};
    
    for(var name in json){
        start[name]=parseFloat(getStyle(obj,name));
        
        dis[name]=json[name]-start[name];
    }
    var n=0;
    
    obj.timer=setInterval(function(){
        n++;
        
        for(var name in json){
            
            switch(options.type){
                case 'linear':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a=n/count;
                    var cur=start[name]+dis[name]*a*a*a;
                    break;
                case 'ease-out':
                    var a=1-n/count;
                    var cur=start[name]+dis[name]*(1-a*a*a);
                    break;
            }
            
            if(name=='opacity'){
                obj.style.opacity=cur;
                obj.style.filter='alpha(opacity:'+cur*100+')';  
            }else{
                obj.style[name]=cur+'px';
            }
        }
        
        if(n==count){
            clearInterval(obj.timer);
            options.end && options.end.call(obj);   
        }
    },100);
}