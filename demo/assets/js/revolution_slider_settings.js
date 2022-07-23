$(document).ready(function(){
    if ($.fn.cssOriginal!=undefined)   // CHECK IF fn.css already extended
    $.fn.css = $.fn.cssOriginal;
    $('fullwidthbanner').revolution({
        delay:9000,                                                
                            startheight:490,                            
                            startwidth:890,
                            
                            hideThumbs:200,
                            
                            thumbWidth:100,                            
                            thumbHeight:50,
                            thumbAmount:5,
                            
                            navigationType:"both",                  
                            navigationArrows:"nexttobullets",        
                            navigationStyle:"round",                
                            touchenabled:"on",                      
                            onHoverStop:"on",                        
                            
                            navOffsetHorizontal:0,
                            navOffsetVertical:20,
                            
                            shadow:1,
                            fullWidth:"off"  
    })
})