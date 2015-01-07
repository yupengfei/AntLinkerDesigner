function li(size){
	var obj = $(".pd"+size);
	var lihtml = obj.html();
	if(lihtml==""){
		var objBorCor = obj.css("border-bottom-color");
		if(objBorCor=="rgb(200, 200, 200)"){
			obj.css("border","1px solid #000");
		}
		else if(objBorCor=="rgb(0, 0, 0)"){
			obj.css("border","1px solid #FFF");
			obj.css("border-bottom","1px solid #C8C8C8");
		}
	}
}
function hold(){
	var condiv = $("#rows").html();
	alert(condiv);
}
function s(isthis){
	alert($("#rows li #"+isthis).html());
}