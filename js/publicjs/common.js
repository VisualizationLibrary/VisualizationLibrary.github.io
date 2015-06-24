$(document).ready(function() {
	var navLabel = new Array('简要介绍', '文档', '列表', "地图", '饼图', '饼图', '漏斗图', '图片滑动', '列表滑动', "下拉框", '模态窗口', '分页', '折线图', '导航', "按钮", '雷达图');
	$('#main').pageScroller({
		navigation: navLabel
	});
});

$(document).ready(function(){
	$(".listSampleGraph").load("sourceCode/list.html"); 
	$(".listSourceCode").load("sourceCode/list.html"); 
	$(".mapSampleGraph").load("sourceCode/map.html"); 
	$(".mapSourceCode").load("sourceCode/map.html"); 
}); 