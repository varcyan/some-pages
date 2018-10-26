$(function (){
  // 获取元素
  var startBg = $('.start .content .con-img');  // start 动图
  var start = $('.start');      // 开始游戏
  var startBtn = $('.start .con-btn');  // 开始按钮
  var again = $('.again');      // 再次游戏
  var againBtn = $('.again .con-btn');  // 再次游戏
  var intro = $('.intro');      // 游戏介绍
  var introBtn = $('.intro .con-btn');  // 介绍按钮
  var about = $('.start .con-info a');
  var agGrade = $('.again .coll-num');
  var loading = $('.loading');  // loading
  var stage = $('.stage');
  var tree = $('.stage .tree'); // 小树
  var eggs = $('.stage .stage-eggs');   // 鸡蛋的容器
  var readyBg = $('.stage .ready .rd-rabbit');  // 入场兔子
  var readyNum = $('.stage .ready .rd-number'); // 倒计时
  var readyBiddy = $('.stage .ready .rd-biddy');// 一只上方的鸡
  var readyGo = $('.stage .go');    // 奔跑的兔子
  var grade = $('.grade');
  var grades = $('.grade .grade-num');          // 计分板
  var over = $('.over');  //结束的兔子
   
  // loading 结束后 start出现
  setTimeout(function(){
    loading.hide();
    toTop(start);
    bgPst(startBg, 292, 34);
  },1500)
  
  // 游戏介绍
  about.on('click', function (){
    toBtm(start, intro);
    // toTop(intro);
    return false;
  })
  // 介绍按钮
  introBtn.on('click', function (){
    toBtm(intro, start);
    return false;
  })
  
  // 开始游戏
  startBtn.on('click', function () {
    game(start);
  })
  // 再次游戏
  againBtn.on('click', function () {
    game(again);
  })
    
  
  function game(entry) {
    // 初始化
    readyGo.n = 0;
    readyGo.col = 0;
    grades.html(readyGo.n);
    grade.css('top', -46);
    stage.css('opacity', 0);
    readyBiddy.css('left', 257);
    readyBiddy.show();
    // start到底部 stage界面出现
    toBtm(entry, function (){
      stage.show(); 
      TweenMax.to (stage, .2, {
        opacity: 1
      })
      grade.show();
      TweenMax.to(grade, .3, {
        top: 70
      })
      // 鸡妈妈运动
      bgPst(readyBiddy, 256, 14, true);
      // 兔子入场
      setTimeout(function (){
        readyBg.show();
        bgPst(readyBg, 167, 61);
      },1000)
      // 倒计时
      readyNum.show();
      readyNumC(readyNum, function (){
        go();
      });
    });
  }
  

  
  function go(){
    // 上下移动事件 只执行一次
    if (!readyGo.run) {
      runKey(readyGo);
      readyGo.run = true;
    }
    // 一直上面的鸡妈妈
    readyBiddy.css('left', 257);
    TweenMax.to(readyBiddy, 3, { 
      left: -257,
      onComplete () {
        readyBiddy.hide();
      }
    });
    readyNum.hide();
    readyBg.hide();
    readyGo.show();
    readyGo.css({
      left: 100,
      top: -10
    })
    bgPst(readyGo, 324, 12, true);
    // treeMove(tree,10);
    eggGo(6, 800);
  }
  
  
  // 随机生成鸡蛋
  function eggGo(dur, time){
    // dur 鸡蛋运动的总时间
    // time 每一列出现的间隔时间
    
    var w=0,bad=0,g=0;
    var arrClass = ['egg-green', 'egg-white', 'egg-golden'];
    var timer = setInterval(()=>{
      var initObj = {
        arrDom: [],         // 存放dom
        arrTop: [1,2,3,4],  // 存放top
        len: 0,             // 每一列的个数 1-2条dom
        spanClass: '',       // span的class
        dur: dur/2,
        grade: 0
      };
      var n = Math.round(Math.random()*10);   //随机数
      // 每一列生成的个数（随机 0-2个）
      if (n === 1) {
        initObj.len = 0;
        return;
      } else if (n % 2) {
        initObj.len = 2;
      } else {
        initObj.len = 1;
      }
      // 生成元素随机class
      for (let i = 0; i<initObj.len; i++) {
        var ran = Math.ceil(Math.random()*10-1);
        if (ran>=0 && ran<=3) {
          // 绿色
          initObj.spanClass = arrClass[0]
          bad++;
        } else if (ran>3 && ran<=8) {
          // 白色
          initObj.spanClass = arrClass[1]
          // w++;
        } else {
          // 金色
          // console.log(ran);
          initObj.spanClass = arrClass[2]
          g++;
        }
        // 把生成好的元素放入数组中
        initObj.arrDom.push($('<span class="'+ initObj.spanClass +'">'));
      }
      // 通过遍历数组把元素放入界面中 随机TOP值
      initObj.arrDom.forEach(function(item){
        var top = parseInt(Math.random()*(initObj.arrTop.length)); ;
        // console.log(top,initObj.arrTop);
        eggs.append(item);
        item.css('top', initObj.arrTop[top]*100 + 15);
        // 避免重复top值
        initObj.arrTop.splice(top,1);
        // 碰撞检测
        var sTimer = setInterval(()=>{
          if (isDuang(readyGo, item, grade, over) === 'green') {
            // console.log('game over');
            clearInterval(sTimer);
            clearInterval(timer);
            return;
          };
           if (!item || item.offsetParent().left < 10) {             
             clearInterval(sTimer);       
           }
        },100)
        // 运动 （从右至左）
        TweenMax.to(item, initObj.dur, {
          left: 0,
          ease: Linear.easeNone,  //直线运动
          onComplete (){
            if (item) {
              item.remove();
            }
          }
        })
        // 碰撞检测
        if (initObj.grade === 5) {
          clearInterval(timer);
        }
      })
    },time)
  }
  // 检测兔子
  function isDuang(rabbit,target) {
    if (duang(rabbit, target)) {
      var cls = target.attr('class');
      target.remove();
      target.duang = true;
      if (cls === 'egg-white') {
        rabbit.n++;
      } else if (cls === 'egg-golden') {
        rabbit.n+=5;
      } else if (cls === 'egg-green'){   
        over.show();
        over.css({
          left: parseInt(readyGo.css('left')) + 200 + 'px',
          top: parseInt(readyGo.css('top')) + 30 + 'px'
        })
        readyGo.hide();
        bgPst(over, 127, 21, true);
        TweenMax.to(stage, 0.5, {
          delay: 2,
          opacity: 0,
          onComplete(){
            stage.hide();
            grade.hide();
            agGrade.html(rabbit.n);
            toTop(again, function (){
              over.hide();
            });
          }
        })
        
        return 'green';
      }
      grades.html(rabbit.n);
    }
  }
  
  
  

})
