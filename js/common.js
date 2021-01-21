Splitting();
const gnbTL = gsap.timeline({paused:true});
gnbTL.to("#gnb",{
    top:0,
    duration:1,
    ease:"power4",
})
.from("#gnb li",{
    opacity:0,
    x:500,
    ease:"power4",
    duration:1,
    stagger:{
        each:0.05
    },
    onReverseComplete:()=>{
        //$("#header").removeClass("on");
    }
});

$(".btnAll").on("click",function(){
    $("#header").toggleClass("on");
    if($("#header").hasClass("on")){
        gnbTL.timeScale(1);
        gnbTL.play();
    } else {
        gnbTL.timeScale(1.8);
        gnbTL.reverse();

    }
});

const typed = new Typed(".slogan .mask", {
    //stringsElement:"#typing",
    strings: [
        '<span><strong>i</strong></span><span class="dot"><strong>·</strong></span><span>programming</span><span class="dot"><strong>·</strong></span><span><strong>javascript</strong></span>',
        '<span><strong>i</strong></span><span class="dot">·</span><span>markup</span><span class="dot">·</span><span><strong>html5</strong></span>',
        '<span><strong>i</strong></span><span class="dot">·</span><span>designing</span><span class="dot">·</span><span><strong>scss/css</strong></span>',
        '<span><strong>i</strong></span><span class="dot">·</span><span>prototyping</span><span class="dot">·</span><span><strong>figma</strong,></span>',
        '<span><strong>i</strong></span><span class="dot">·</span><span>loving</span><span class="dot">·</span><span><strong>you</strong></span>'
    ],
    startDelay: 1000,
    typeSpeed: 20,
    backSpeed: 10,
    //fadeOut: true,
    backDelay: 3000,
    loop: true,
    //showCursor: false,
});


// var typed2 = new Typed('.slogan .mask', {
//     strings: ['Some <i>strings</i> with', 'Some <strong>HTML</strong>', 'Chars &times; &copy;'],
//     typeSpeed: 0,
//     backSpeed: 0,
//     fadeOut: true,
//     loop: true
//   });
    



particlesJS.load("particle", "../js/particlesjs-config.json", function() {
    //console.log('callback - particles.js config loaded');
});
function makeBlobs() {
    const blobs = $(".blobs");
    for(let i=0;i<7;i++){
        blobs.append(`<div class="blob"></div>`);
    }
    const blob = blobs.find(".blob");
    const total = blob.length;
    const harf = Math.ceil(total/2);
    const w = 300;
    blob.each(function(i,item){
        gsap.set(item,{
            width:w,
            height:w,
            left:(i-harf)*w/2,
            top:-w/2,
        });
        gooey(item,w);
    })
}
makeBlobs();
function gooey(mc,w) {
    gsap.to(mc,{
        duration:()=>{
            return Math.random()*3+3
        },
        x:()=> {
            return Math.random()*w-w/2
        },
        y:()=> {
            return Math.random()*w-w/2
        },
        rotation:()=> {
            return Math.random()*360-180
        },
        
        scale:()=> {
            return Math.random()*0.5+0.5
        },
        onComplete:()=> {
            gooey(mc,w)
        }
    })
};
/*
gooey(".blobs .blob:nth-child(1)");
gooey(".blobs .blob:nth-child(2)");
gooey(".blobs .blob:nth-child(3)");
gooey(".blobs .blob:nth-child(4)");
gooey(".blobs .blob:nth-child(5)");
*/
const txt = document.querySelector("#circleTxt")
const circleType = new CircleType(txt)

