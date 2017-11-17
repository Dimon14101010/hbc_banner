document.addEventListener('DOMContentLoaded' , function () {
    var tl = new TimelineMax({repeat:-1,repeatDelay:2});
    var logo = document.getElementsByClassName('avatar');
    var img = document.getElementById('image');
    var mainText = document.getElementsByClassName('main-text');
    var icoBlock = document.getElementsByClassName('ico');
    var startBlock = document.getElementsByClassName('start');
    var endBlock = document.getElementsByClassName('end');
    var lendBlock = document.getElementsByClassName('lend');
    var lendBlockStart = document.getElementsByClassName('lendStart');
    var profit = document.getElementsByClassName('profit');
    var referral = document.getElementsByClassName('referral');
    var join = document.getElementsByClassName('join');

    tl.from (logo , 2 , {left:-90, ease: Elastic.easeOut});
    tl.from (mainText , 1 , {top:-135, ease:Bounce.easeOut},0);
    tl.to (mainText , 1 , {fontSize:12, left:5, top:82});
    tl.to (img , 1 , {height:70},'-=1');
    tl.to (logo , 1 , {left:25},'-=1');
    tl.from (icoBlock , 1 , {autoAlpha:0, top:135,ease: Back.easeInOut.config(2)});
    tl.from (startBlock , 0.75 , {autoAlpha:0,top: -100,ease: Back.easeInOut.config(2)});
    tl.from (endBlock , 0.75 , {autoAlpha:0,top:90,ease: Back.easeInOut.config(2)});
    tl.to (icoBlock , 0.5 , {top: -90,ease: Back.easeInOut.config(2)},'+=1');
    tl.to (startBlock , 0.5 , {left: -300,ease: Back.easeInOut.config(2)});
    tl.to (endBlock , 0.5 , {left: 728,ease: Back.easeInOut.config(2)});
    tl.from (lendBlock , 1 , {top: 130,ease:Elastic.easeOut.config(1, 0.75)});
    tl.from (lendBlockStart , 0.75 , {top:130,ease:Elastic.easeOut.config(1, 0.75)});
    tl.to (lendBlockStart , 0.75 , {top: -130,ease:Back.easeInOut.config(1, 0.75)},'+=1');
    tl.from (profit , 0.75 , {top:130,ease:Back.easeInOut.config(1, 0.75)});
    tl.to (profit , 0.5 , {top:-130,ease:Back.easeInOut.config(1, 0.75)},'+=1');
    tl.to (lendBlock , 0.5 , {top:-130,ease:Back.easeInOut.config(1, 0.75)},'-=0.5');
    tl.from(referral , 1.5 , {top:-130,ease: Elastic.easeOut});
    tl.to(referral , 1 , {top:130,ease: Back.easeIn},'+=1');
    tl.from(join, 1.5 , {left:728,ease: Elastic.easeOut});
    tl.to (logo , 20 , {directionalRotation:'360_cw'},'-=20');
});