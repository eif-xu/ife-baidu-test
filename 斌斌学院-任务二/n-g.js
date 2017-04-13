var apiDate=[
		["北京", 90],
		["上海", 50],
		["福州", 10],
		["杭州", 50],
		["成都", 90],
		["西安", 100]
	];
(function(){
	var len=apiDate.length;
	var box=[];
	// 超过60的城市选出
	for (var i=0;i<len;i++){
		if (apiDate[i][1]>60){
			box.push('<li>',[apiDate[i][0],apiDate[i][1]],'</li>');
		}
	}
	var lg=box.length;
	var list=document.getElementById('api-list');
	list.innerHTML=box.join('');


	// var str='';
	//  for(var g=0;g<box.length;g++){
 	//            str+='<li>'+box[g][0]+ '第' + (g+1) + '名:' + box[g][1] +'</li>'
 	//        }

 	//    list.innerHTML=str;
	

})()

