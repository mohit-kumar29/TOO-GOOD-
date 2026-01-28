const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


let videocon = document.querySelector("#video")
let playbtn = document.querySelector("#play")

videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        opacity:1,
        scale:1
    })

})
videocon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        opacity:0,
        scale:0
    })

})
videocon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left:dets.x,
        top:dets.y,
        transform: `translate(-50%,-50%) scale(1)`
    })

})


gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    dealy:0.5,
    duration:0.6,
    stagger:0.3
})
gsap.from("#page1 #video-Container",{
    scale:0.9,
    opacity:0,
    dealy:1,
    duration:1.5,
    stagger:0.3
})

let box = document.querySelector("#page4")
let cursor = document.querySelector("#cursor")

box.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1
    })
})
box.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0

    })
})
box.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,
        transform: `translate(-50%,-50%) scale(1)`


    })
})



