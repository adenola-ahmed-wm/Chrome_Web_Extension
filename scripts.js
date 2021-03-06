/**
 * Created by session2 on 2/23/16.
 */
var lastHr,
    lastMin;
function leTime(){
    this.fullDate = new Date();
    this.secs = this.fullDate.getSeconds();
    this.mins = this.fullDate.getMinutes();
    this.hrs = this.fullDate.getHours() % 12;
    return this;
}
function leClock(){
    var sec = document.getElementById("seconds"),
        min = document.getElementById("minutes"),
        hr = document.getElementById("hours");
    if(leTime().secs == 0){
        TweenMax.to(sec, 0.1, {rotation: 360, ease: Power1.easeIn, clearProps: "all"});
    } else {
        TweenMax.to(sec, 0.1, {rotation: leTime().secs*6, ease: Power1.easeIn});
    }
    if(leTime().mins !== lastMin){
        if(leTime().mins == 0){
            TweenMax.to(min, 0.1, {rotation: 360, ease: Power1.easeIn, clearProps: "all"});
        } else {
            TweenMax.to(min, 0.1, {rotation: leTime().mins*6, ease: Power1.easeIn});
        }
    }
    if(leTime().hrs !== lastHr){
        if(leTime().hrs == 0){
            TweenMax.to(hr, 0.1, {rotation: 360, ease: Power1.easeIn, clearProps: "all"});
        } else {
            TweenMax.to(hr, 0.1, {rotation: leTime().hrs*30, ease: Power1.easeIn});
        }
    }
    //------------------------------------------
    // notes for making a version that doesn't use GSAP
    //------------------------------------------
    // sec.style.transform = 'rotate(' + leTime().secs*6 + 'deg)';
    //------------------------------------------
    lastHr = leTime().hrs;
    lastMin = leTime().mins;
    setTimeout("leClock()", 1000);
}
window.onload = leClock();