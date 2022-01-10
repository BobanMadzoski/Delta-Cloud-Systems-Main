gsap.registerPlugin(ScrollTrigger);
//Loading Animations
$(window).on('load',function(){
        var Cont={val:0} , NewVal = 100 ;

        TweenLite.to(Cont,2,{val:NewVal,roundProps:"val",onUpdate:function(){
          document.getElementById("counter").innerHTML=Cont.val
        }});
        
        var preloaderAnimation = new TimelineMax()
        .to(".bar-progress", {width: "100%", duration: 2})
        .to(".loading-content", {y: 100, duration: 1, stagger: 1})
        .to(".preloader", {height: 0, duration: 0.5})
        .fromTo(".brand", {opacity: 0}, {opacity: 1, duration: 0.5})
        .from(".gradient-wrapper div", {width: 0, duration: 0.5, stagger: 0.1}, "<")
        .fromTo(".headline-block div", {opacity: 0, y: 30}, {y:0, opacity: 1, duration: 0.3, stagger: 0.2}, "<")
        .fromTo(".info-animate-line-1", {y: "50px"}, {y: 0, duration: 0.2}, "-=0.5")
        .fromTo(".info-animate-line-2", {y: "50px"}, {y: 0, duration: 0.2}, "-=0.3")
        .fromTo(".info-card .tel", {y: "20px"}, { y: 0, duration: 0.2}, "<")
        .fromTo(".info-card .email", {y: "20px"}, { y: 0, duration: 0.2})
        .fromTo(".link-selector", {y:50}, {y:0, duration:0.5, stagger: 0.1}, "-=1.5")
});
//Loading Animations


//Services Animations
let serviceAnimations = gsap.timeline({scrollTrigger:{
	trigger:".services-list",
}})
.from(".service-line", {width: 0, duration: 1, ease: "power4.inOut", stagger: 0.1})
.from(".service", {opacity: 0, duration: 0.5, ease: "power4.inOut", stagger: 0.15}, "<")
//Services Animations


//Hamburger Menu Animations
var $hamburger = $('#hamb-button');
        var hamburgerMotion = new TimelineMax()
        .fromTo(".nav-menu", {height: "0vh",}, {height: "100vh", duration: 0.4,})
        .fromTo(".sidebar-link-mobile", { delay:-2, y: 50, opacity: 0, }, { duration: 0.2, y:0, opacity: 1,  stagger: 0.05,})
        .fromTo(".company-info", { opacity: 0, y: 50,}, { duration: 0.3, opacity: 1, y:0, stagger: 0.1,})
        .restart()

        $hamburger.on('click', function(e) {
        hamburgerMotion.restart(!hamburgerMotion.restart());
        });
//Hamburger Menu Animations


//Images Animations
ScrollTrigger.batch(".image-reveal", {onEnter: batch => gsap.to(batch, {delay:0.5, duration:0.5 , height: 0})});
// Images Animations

// Insight Images Reveal
let insightimgReveals = gsap.timeline({scrollTrigger: {
        trigger: ".insight-block",
        start: 'top 80%'
}})
.to(".insight-image-reveal", {height: 0, duration: 0.5, stagger: 0.2})
// Insight Images Reveal

// Counter
let counter = gsap.timeline({scrollTrigger:{
	trigger:".count-block",
}})
.to("#number-count-1", {innerText: 40000, duration: 1, snap: {
        innerText: 10
}})
.to("#number-count-2", {innerText: 800, duration: 1, snap: {
        innerText: 10
}}, "<")
.to("#number-count-3", {innerText: 250, duration: 1, snap: {
        innerText: 10
}}, "<")
// Counter


//Footer Gradient Animations
ScrollTrigger.batch(".footer-gradient-wrapper div", {onEnter: batch => gsap.from(batch, {  width: 0 , duration: 0.5, stagger: 0.1 }), once: "true"});
//Footer Gradient Animations