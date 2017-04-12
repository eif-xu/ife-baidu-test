var apiDate=[
		["北京", 90],
		["上海", 50],
		["福州", 10],
		["杭州", 50],
		["成都", 90],
		["西安", 100]
	];
(function(){
			/*
	  在注释下方编写代码
	  遍历读取aqiData中各个城市的数据
	  将空气质量指数大于60的城市显示到aqi-list的列表中
	  */

	var len=apiDate.length;
	var box=[];
	var lg=box.length;
	var nwlist=document.getElementById('api-list');
	// 超过60的城市选出
	for (var i=0;i<=len;i++) {
		if (apiDate[i][1]>60){
			console.log('!!!!!!');
			box.push([apiDate[i][0],apiDate[i][1]])
		}
	}
	console.log(box);

	// 把超过60的城市插入
	for (var j=0;j<=lg;i++) {
		nwlist.innerHTML='<li>'+box[j]+'</li>'
	}

})();

