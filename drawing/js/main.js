// 获取元素
var views = $('.main .views');
var robot = $('#robot');
var pencil = $('#pencil');
var navs = $('.hd-nav').children();
var doc = document.documentElement;
var airport = $('airport');

views.hash = window.location.hash;
if (views.hash === '') {
    views.p = 0;
    pHash();
}

// 初始化
views.len = views.children().length;
views.p = 0;			// 当前页
views.status = true;	// 是否可以翻页

// airport
airport.onclick = function () {
    views.p = 3;
    pHash();
}
// window.onhashchange = function () {
//     views.hash = window.location.hash.substr(1);
//     console.log(views.hash);
//     switch (views.hash) {
//         case 'Home':
//             views.p = 0;
//             break;
//         case 'Skill':
//             views.p = 1;
//             break;
//         case 'Project':
//             views.p = 2;
//             break;
//         case 'Thanks':
//             views.p = 3;
//             break;
//         default:
//             break;
//     }
//     movePage();
// }

// 滚动鼠标翻页
$(window).on('mousewheel', function(event) {
    if (!views.status) {
        return;
    }
    // 刚进来就把可滚动的状态关掉
    views.status = false;
    views.pages = 'scroll';
    if (event.deltaY === -1) {
    	addP();
        robot.css('left', views.p * doc.clientWidth);        
    } else if (event.deltaY === 1) {
    	minusP();
        robot.css('left', views.p * doc.clientWidth + doc.clientWidth - 50);        
    }
    console.log(views.p);
    movePage();
});


// ----------------------------------------------
// robot 机器人

var box = document.getElementById('robot');

// 机器人移动
function KeyMove(ele){
    this.ele = ele;
    this.speed = 10;
    this.doc = document.documentElement;
    this.w = this.ele.offsetWidth;
    this.dw = this.doc.clientWidth;
    this.direction = {
        oTop: false,
        oRight: false,
        oLeft: false,
        oBottom: false
    };
    this.init();
}
KeyMove.prototype = {
    constructor: KeyMove,
    init () {
        // console.log(this);
        var this_ = this;
        requestAnimationFrame(this.move.bind(this,this_));  
        window.onkeydown = function (e) {
            views.pages = '';
            var key = e.keyCode
            switch (key) {
                case 37:
                    this_.ele.style.transform = 'rotate(-10deg)';
                    this_.oLeft = true;
                    break;
                case 39:
                    this_.ele.style.transform = 'rotate(10deg)';
                    this_.oRight = true;
                    break;
            }
        }
        window.onkeyup = function (e) {
            views.pages = 'scroll';
            var key = e.keyCode;
            switch (key) {
                case 37:
                    this_.ele.style.transform = 'rotate(0deg)';
                    this_.oLeft = false;
                    break;
                case 39:
                    this_.ele.style.transform = 'rotate(0deg)';
                    this_.oRight = false;
                    break;
            }
        }
    },
    move (this_) {
        // console.log(this_);
        // console.log(this_.ele);
        var x = this_.ele.offsetLeft;
        var y = this_.ele.offsetTop;
        if (this_.oLeft) {
            this_.ele.style.left = x <= 0 ? 0 : x - this_.speed + 'px';
        } else if (this_.oRight) {
            // 限定范围
            // this_.ele.style.left = x + this_.w >= this_.dw ? this_.dw - this_.w + 'px' : x + this_.speed + 'px';
            this_.ele.style.left = x + this_.speed + 'px';
        }
        var nowLeft = this_.ele.offsetLeft / this_.dw;
        // console.log(nowLeft);
        // console.log(views.pages);
        // 机器人移动翻页
        if (views.pages === '') {
            console.log('进入空的判断了');
            if (nowLeft >= views.p + 1) {
                views.p += 1;
                movePage();
            }
            if ((nowLeft < views.p) && views.p) {
                views.p -= 1;
                movePage();
            }
        }
        // 最后
        if (views.p === 3) {
            if (this_.ele.offsetLeft >= doc.clientWidth * 3 + 286) {
                this_.ele.style.left = doc.clientWidth * 3 + 286 + 'px';
            }
        }
        
        requestAnimationFrame(this_.move.bind(this_, this_))
        
    }
}
// KeyMove的实例
// var a = new KeyMove(box);

// 窗口大小设置
window.onresize = function (){
    console.log('窗口大小变化了');
    let h = doc.clientHeight;
    let w = doc.clientWidth;
    if (h <= 660) {
        console.log('h nononono');
    }
    if (w <= 1120) {
        console.log('w nonononon');
    }
}



// 下一页
function addP() {
    views.p = views.p === views.len - 1 ? views.len - 1 : ++views.p;
}
// 上一页
function minusP() {
    views.p = views.p === 0 ? 0 : --views.p;
}
// 页面运动
function movePage() {
    console.log('views.p  =>  ' + views.p);
    views.animate({
        "left": -views.p * 100 + '%'
    }, 1000, function () {
        // 动画完成后把可滚动状态恢复
        views.status = true;
    });
    pHash();
}
function pHash() {
    switch (views.p) {
        case 0:
            views.hash = 'Home'
            break;
        case 1:
            views.hash = 'Skill'
            break;
        case 2:
            views.hash = 'Project'
            break;
        case 3:
            views.hash = 'Thanks'
            break;
        default:
            break;
    }
    window.location.hash = '#' + views.hash;
    navs.removeClass('active');
    navs.eq(views.p + 1).addClass('active');
}
