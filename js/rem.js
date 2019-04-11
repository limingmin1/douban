
(function(doc,win){
    var docEl =doc.documentElement,   // 根节点   获取html
    resizeEvt='orientationchange' in window?'orientationchange':'resize',
    relalc=function(){
        var clientWidth=docEl.clientWidth;
        if(!clientWidth) return;
        docEl.style.fontSize=clientWidth/3.75+"px";
    };
    if(!addEventListener) return
    win.addEventListener(resizeEvt,relalc,false);  
    doc.addEventListener("DOMContentLoaded",relalc,false)
})(document,window);

(function(){
      var w= window.screen.width;
      var target=375;
      var scale=w/target;
      var meta=document.createElement("meta");
      meta.name="viewport";
      meta.content='initial-scale='+scale+',minimum-scale='+scale+',maximum-scale='+scale+',user-scalable=no';
      document.head.appendChild(meta);
})();
