
// 碰撞检测
// function duang(current, target){
// 	var currentRect = current.getBoundingClientRect();
// 	var targetRect = target.getBoundingClientRect();
// 	var currentLeft = currentRect.left, 
// 		currentTop = currentRect.top,
// 		currentRight = currentRect.right,
// 		currentBottom = currentRect.bottom;
// 	var targetLeft = targetRect.left, 
// 		targetTop = targetRect.top,
// 		targetRight = targetRect.right,
// 		targetBottom = targetRect.bottom;
// 	return currentRight > targetLeft && currentBottom > targetTop && currentLeft < targetRight && currentTop < targetBottom;
// };

// 碰撞检测
function duang(current, target){
  // console.log(current.offset());
	var currentRect = current.offset();
	var targetRect = target.offset();
	var currentLeft = currentRect.left + 68, 
		currentTop = currentRect.top + 100,
		currentRight = currentRect.left + 285,
		currentBottom = currentRect.top + 236;
	var targetLeft = targetRect.left + 18, 
		targetTop = targetRect.top + 12,
		targetRight = targetRect.left + 70,
		targetBottom = targetRect.top + 75;
    // console.log(currentRight);
    // console.log(targetLeft);
	return currentRight > targetLeft && currentBottom > targetTop && currentLeft < targetRight && currentTop < targetBottom;
};