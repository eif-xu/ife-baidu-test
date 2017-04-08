		var btn=document.getElementById("button");
		var input=document.getElementById("api-inpnt");
		var value=document.getElementById("api-display");
		
		btn.onclick=function(){
			value.innerHTML=input.value;
		}