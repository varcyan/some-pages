// 背景图定位动画
function bgPst(ele, width, n, infinite){
  // ele : jq元素       jq对象
  // width : 基础宽度   number
  // n : 张数（用于停止） numeber
  // infinite : 是否循环  true | 不传
  let m = 0;
  var timer = setInterval(()=>{
    m++;
    // console.log(-m*width);
    ele.css('background-position-x', -m*width);
    if (m === n-1) {
      if (!infinite) {
        ele.css('background-position-x', 0);
        clearInterval(timer);
      } else {
        if (ele.css('display') === 'none') {
          // console.log('nonenonnnnenoeneo');
          ele.css('background-position-x', 0);
          clearInterval(timer);
        }
        m = 0;
      }
    }
  }, 60);
}

// 向上运动
function toTop(ele, backFn){
  // ele 元素
  // 恢复初始值
  ele.css({
    'top': 800,
    'opacity': 0
  });
  ele.show();
  // 向上运动
  TweenMax.to(ele, 0.5, {
      top: 100,
      opacity: 1,
      ease: Back.easeOut,
      onComplete: function (){
        if (backFn) {
          backFn();
        }
      }
  })
}
// 向下运动
function toBtm (ele, topEle, backFn) {
  if ($.isFunction(topEle)) {
    backFn = topEle;
    topEle = false;
  }
  TweenMax.to(ele, 0.5, {
    top: 800,
    ease: Back.easeIn,
    onComplete() {
      if (backFn) {
        backFn();
      }
      if (topEle) {
        toTop(topEle);
      }
    }
  })
}



// 小树运动
function treeMove(ele,dur){
  // ele 元素
  // dur 运动间隔时间
  // ele.css('left', '100%');
  TweenMax.to(ele, dur, {
    left: '-2%',
    ease:Linear.easeNone,
    repeat: -1
  })
}

// ready 数字
function readyNumC (ele, backFn) {
  ele.html('');
  var arr = [3,2,1,'GO!'];
  var n = -1;
  var timer = setInterval(()=>{
    n++;
    ele.html(arr[n]);
    if (n === arr.length-1) {
      if (backFn) {
        setTimeout(backFn, 500);
      }
      clearInterval(timer);
    }
  },1000)
}

// keydown
function runKey(ele){
  ele.col = 0;
  $(window).on('keydown', function (e){
    
    if (e.keyCode === 38) {
      ele.col = ele.col===0? 0 : --ele.col;
      // console.log(ele);
    } else if (e.keyCode === 40) {
      ele.col = ele.col===3? 3 : ++ele.col;
    }
    TweenMax.to(ele, 0.1, {
      top: ele.col*100-10,
      onComplete () {
        // console.log('上');
      }
    })
  })
}


// function isDuang(rabbit,target, w) {
//   // console.log(target);
//   for (let i=0; i<target.length; i++) {
//     // console.log(target.eq(i));
//     if (duang(rabbit, target.eq(i))) {
//       console.log(target.eq(i).attr('class'));
//       target.eq(i).remove();
//       w++;
//       console.log(w);
//     }
//   }
// }








