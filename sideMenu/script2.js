
var tap = document.querySelector("#nav i");
var tap2 = document.querySelector("#sideDiv i");


var tl =gsap.timeline(); 

    tl.to("#sideDiv",{
        right:0,
        duration:0.6,
    
    })
    
    tl.from("#sideDiv h2",{
    
        x:150,
        duration:0.5,
        stagger:0.26,
        opacity:0,
    })
    
    tl.from("#sideDiv i",{
    
        opacity:0,
        
    })
    tl.pause();

tap.addEventListener("click",function(){
tl.play();
})

tap2.addEventListener("click",function(){
    tl.reverse();
})