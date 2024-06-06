window.onload=function(){
	setInterval("getCurrentTime()",1000);
}

document.getElementById("getChart").onclick = getChartHandler;
document.getElementById("getToday").onclick = getTodayHandler;
document.getElementById("getFoodList").onclick = getFoodListHandler;