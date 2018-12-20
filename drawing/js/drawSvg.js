console.log(Snap);
let home = Snap('svg#home');


// 小树
var tree1 = home.paper.path('M-1.02,344.5H15.8l0.346-0.326c0,0,2.063-8.499,1.126-21.828c-1.126-0.386-2.251,1.545-3.939,0s-2.15-6.761-5.014-8.306  c-2.865-1.545-3.803-9.465-3.052-12.556c0.75-3.091-5.815-5.022-1.126-12.363c-1.313-2.511-4.041-6.497-0.188-12.464  c-3.189-8.978,2.938-11.296,3.626-11.296c0,0-0.882-12.942,4.405-12.749c-1.841-1.159,0-9.658,0-9.658s-3.717-4.628,2.661-11.2  c-1.501-7.344,4.315-17.173,9.192-5.788c1.876-1.364,9.755-0.591,4.127,12.931c3.564,0.579,6.003,5.896,2.626,15.118  c0,0,6.003-1.596,3.377,12.892c6.19,2.511,2.439,12.363,2.439,12.363s3.564,3.67-1.126,11.783c-1.313,9.852,5.628,4.636,0.75,13.329  c-2.814,4.346-4.502,2.898-5.628,15.067c-1.372,5.359-6.941,3.091-6.941,3.091s-1.501,15.454,0.75,21.635').attr({
  fill: "#fff",
  stroke: "#000",
  strokeWidth: 3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 10,
  strokeDashoffset: 400,
  strokeDasharray: 400
});
var h1 = home.paper.line(24.244, 344.5, 69.277, 344.5).attr({
  fill: "none"
});
var h2 = home.paper.path('M123.162,266.725c0,0-40.813,65.868-52.865,76.827').attr({
  fill: "none"
});;
var h3 = home.paper.path('M123.171,266.725c0,0-8.317-1.225-3.002-8.245c2.706-1.742,4.624-1.742,4.624-1.742h84.461c0,0,10.58,0.095,5.672,10.124  C203.502,267.588,123.171,266.725,123.171,266.725z').attr({
  fill: "none"
});;
var h4 = home.paper.path('M214.925,266.862c0,0,8.702,31.638,46.805,77.638h9.29').attr({
  fill: "none"
});;
var h5 = home.paper.path('M231.94,344.183c0,0-21.552-53.896-65.508-53.131S103.663,344.5,103.663,344.5h0.012H231.94V344.183z').attr({
  fill: "none"
});;
var h6 = home.paper.path('M210.817,256.738c0,0-18.437-30.419-19.572-64.06c4.83-0.766,8.082-8.941-0.046-10.725c0,0-40.931-0.021-44.192,0  s-12.194,8.176-1.56,10.342l45.799,0.382').attr({
  fill: "none"
});;
var h7 = home.paper.path('M146.019,192.3c0,0-3.852,38.867-20.849,64.346').attr({
  fill: "none"
});;
var h8 = home.paper.path('M176.499,209.498h-12.903c0,0-7.657,25.358-8.791,35.807c-0.028,0.643,27.082,0,27.082,0S176.783,218.801,176.499,209.498z').attr({
  fill: "none"
});;
var h9 = home.paper.path('M190.253,181.953c0,0-18.334-118.316-14.65-135.476c8.033-8.325,0.47-20.049-3.689-20.049s-13.422,12.409-5.104,20.558  c2.08,47.743-18.433,137.58-19.804,134.967').attr({
  fill: "none"
});;
var h10 = home.paper.polygon('164.656,174.921 176.452,174.921 170.554,109.109').attr({
  fill: 'none'
});
var h11 = home.paper.polygon('170.554,26.777 171.915,2.641 173.261,26.777');
var h12 = home.paper.path('M56.25,323.5').attr({
  fill: '#fff'
});


// 设置所有的path样式
// 放在后面是因为无法获取到新添加的
home.selectAll('polygon').attr({
  stroke: "#000",
  strokeWidth: 3,
  strokeDashoffset: 450,
  strokeDasharray: 450
})
home.selectAll('path').attr({
  stroke: "#000",
  strokeWidth: 3,
  strokeDashoffset: 450,
  strokeDasharray: 450
});

tree1.animate({strokeDashoffset: 0}, 1000);
setTimeout(()=>{
  h1.animate({strokeDashoffset: 0}, 1000);
  setTimeout(()=>{
    h2.animate({strokeDashoffset: 0}, 1000);
    setTimeout(()=>{
      h3.animate({strokeDashoffset: 0}, 1000);
      setTimeout(()=>{
        h4.animate({strokeDashoffset: 0}, 1000);
        setTimeout(()=>{
          h5.animate({strokeDashoffset: 0}, 1000);
        }, 800)
      }, 800)
    }, 800)
  }, 800)
}, 800)




// setTimeout(()=>{
//   h6.animate({strokeDashoffset: 0}, 1000);
// }, 800)
// setTimeout(()=>{
//   h7.animate({strokeDashoffset: 0}, 1000);
// }, 800)
// setTimeout(()=>{
//   h8.animate({strokeDashoffset: 0}, 1000);
// }, 800)
// setTimeout(()=>{
//   h9.animate({strokeDashoffset: 0}, 1000);
// }, 800)
// setTimeout(()=>{
//   h10.animate({strokeDashoffset: 0}, 1000);
// }, 800)
// setTimeout(()=>{
//   h11.animate({strokeDashoffset: 0}, 1000);
// }, 800)

// tree1.animate({strokeDashoffset: 0}, 1000, function (){
//   h1.animate({strokeDashoffset: 0}, 1000,function () {
//     h2.animate({strokeDashoffset: 0}, 1000,function () {
//       h3.animate({strokeDashoffset: 0}, 1000,function () {
//         h4.animate({strokeDashoffset: 0}, 1000,function () {
//           h5.animate({strokeDashoffset: 0}, 1000,function () {
//             h6.animate({strokeDashoffset: 0}, 1000,function () {
//               h7.animate({strokeDashoffset: 0}, 1000,function () {
//                 h8.animate({strokeDashoffset: 0}, 1000,function () {
//                   h9.animate({strokeDashoffset: 0}, 1000,function () {
//                     h10.animate({strokeDashoffset: 0}, 1000,function () {
//                       h11.animate({strokeDashoffset: 0}, 1000,function () {
//                         h12.animate({strokeDashoffset: 0}, 1000,function () {
//                         })
//                       })
//                     })
//                   })
//                 })
//                })
//              })
//           })
//         })
//       })
//     })
//   })
//   console.log('tree over...');
// });
