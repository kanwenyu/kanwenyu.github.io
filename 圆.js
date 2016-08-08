function y(id){
    function d2a(n){
            return n*180/Math.PI;
        }
        //角度转弧度
        function a2d(n){
            return n/180*Math.PI;
        }
        var oBox=document.getElementById(id);
            var N=5;
            var R=oBox.offsetWidth/2;
            for(var i=0;i<N;i++){
                var oSpan=document.createElement('span');

                oBox.appendChild(oSpan);
            };
            var aSpan=oBox.children;
            var bSys=true;
            setTimeout(function(){
                for(var i=0;i<aSpan.length;i++){
                    var a=-210/N*i;
                    if(bSys){
                        doMove(aSpan[i],a);
                    }else{
                        doMove(aSpan[i],0);
                    }
                }
                bSys=!bSys;
            },1000);
            function doMove(obj,iTarget){
                clearInterval(obj.timer);
                var R=oBox.offsetWidth/2;
                var a=0;
                var start=obj.a || 0;
                var dis=iTarget-start;
                var time=800;
                var count=Math.ceil(time/30);
                var n=0;

                obj.timer=setInterval(function(){
                    n++;
                    var a=1-n/count;
                    var cur=start+dis*(1-a*a*a);
                    var l=R+R*Math.sin(a2d(cur));
                    var t=R-R*Math.cos(a2d(cur));
                    obj.a=cur;
                    obj.style.left=l+'px';
                    obj.style.top=t+'px';
                    if(n==count){
                        clearInterval(obj.timer);
                    }
                },30)
            }
}
        