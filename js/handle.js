function li(size){
	var obj = $(".pd"+size);
	var lihtml = obj.html();
	if(lihtml==""){
		$("#rows li div").css("border","1px solid #FFF");
		$("#rows li div").removeClass("xz");
		var objBorCor = obj.css("border-bottom-color");
		if(objBorCor=="rgb(200, 200, 200)"){
			$("#rows li").css("border","1px solid #FFF");
			$("#rows li").css("border-bottom","1px solid #C8C8C8");
			obj.css("border","1px solid #000");
			//重置所有名为xzli的class
			$("#rows li").removeClass("xzli");
			obj.addClass("xzli");
//			$("#name").show(500);
			restore();
		}
		else if(objBorCor=="rgb(0, 0, 0)"){
			obj.css("border","1px solid #FFF");
			obj.css("border-bottom","1px solid #C8C8C8");
			obj.removeClass("xzli");
//			$("#name").hide(500);
			//保存方法
			
			//全部清空方法
			restore();
		}
	}
	
}
function hold(){
	var condiv = $("#rows").html();
	$(".viewDiv").html(condiv).unbind("onclick");
}
function s(isthis){
	var clik = "#rows li ."+isthis;//被选中元素的class
	var clikhtml = $(clik).html();//被选中元素内的代码
	var clikborcolor = $(clik).css("border-bottom-color")
	var clikid = $(clik).attr("id");//根据class得到id
	/*alert(isthis);
	alert(clikborcolor);
	alert(clikid);*/
	//格式化所有元素的边框
	$("#rows li div").css("border","1px solid #fff");
	//格式化父层li的边框
	$("#rows li").css("border","1px solid #FFF");
	$("#rows li").css("border-bottom","1px solid #C8C8C8");
	$("#rows li").removeClass("xzli");
	if(clikborcolor == "rgb(255, 255, 255)")
	{
		$(clik).css("border","1px solid #000");
		//重置所有名为xz的class
		$("#rows li div").removeClass("xz");
		$(clik).addClass("xz");
	}else if(clikborcolor == "rgb(0, 0, 0)"){
		$(clik).css("border","1px solid #fff");
		$(clik).removeClass("xz");
		fhide();//隐藏右侧元素
		return;
	}
	fhide();//隐藏右侧元素
	//重置表单内文本框
	restore();
	var sdate = 200;
	//纯文本
	if(clikid == "text"){
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
	}
	//
	else if(clikid == "selleft"){//单选左
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
	}
	else if(clikid == "selright"){//单选右
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);		
	}
	else if(clikid == "selsleft"){//复选左
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
	}
	else if(clikid == "selsright"){//复选右
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
	}
	else if(clikid == "isopenleft"){//开关左
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
	}
	else if(clikid == "isopenright"){//开关右
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
	}
	else if(clikid == "listleft"){//下拉列表左
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
	}
	else if(clikid == "listright"){//下拉列表右
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
	}
	else if(clikid == "menu"){//按钮
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#url").show(sdate);
		$("#name").show(sdate);
	}
	else if(clikid == "onetext"){//单行文本输入
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
		$("#inputtype").show(sdate);
		$("#maxlength").show(sdate);
		
	}
	else if(clikid == "manytext"){//多行文本输入
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
		$("#maxlength").show(sdate);
	}
	else if(clikid == "textlist"){
		
	}
	
}

$(document).ready(function(){
	//复选框操作
	$(".iptimg").click(function(){
		var srcurl = $(this).attr("src");//得到路径地址
		if(srcurl=="img/choicen.png"){
			$(this).parent().siblings("label").children().attr("src","img/choicen.png");
			$(this).parent().siblings("label").children().removeClass("xzimg");
			$(this).attr("src","img/choicey.png");
			$(this).addClass("xzimg");
		}
		
	});
	var bodyhei = $(window).height();
	var bodywid = $(window).width();
	$(".viewDiv").css("top",(bodyhei/2)-(890/2)+"px");
	$(".viewDiv").css("left",(bodywid/2)-(600/2)+"px");

})
//重置右侧表单
function restore(){
	$("#size label label img").attr("src","img/choicen.png");
	$("#size label label img").first().attr("src","img/choicey.png");
	$("#inputtype label label img").attr("src","img/choicen.png");
	$("#inputtype label label img").first().attr("src","img/choicey.png");
	$("#required label label img").attr("src","img/choicen.png");
	$("#required label label img").first().attr("src","img/choicey.png");
	$("#labelinp").val("");
	$("#nameinp").val("");
	$("#urlinp").val("");
	$("#systemidinp").val("");
	$("#maxlengthinp").val("");
}
//右侧表单全部隐藏
function fhide(){
	$(".box").hide(200);
}
//设置元素宽度
function ssize(width){
	if(width == '100'){
		var sibwidth = $(".xz").siblings().width();
		if(sibwidth==null){
			$(".xz").animate({width:'596px'});
		}else{
			alert("设置的宽度超过总宽度");
		}
	}else if(width == '50'){
		var siblength = $(".xz").siblings().length;
		if(siblength <= 1){
			$(".xz").animate({width:'296px'});
		}else{
			alert("设置的宽度超过总宽度");
		}
	}else{
		$(".xz").animate({width:'197px'});
	}
}
//删除元素
function del(){
	var xz = $(".xz").html();
	if(xz != null)
	{
		$(".xz").hide(500,function(){
			$(".xz").remove();
		})
	}else{
		$(".xzli").hide(500,function(){
			$(".xzli").remove();
		})
	}
	fhide();
}
//得到选择的单选框
function getStr(idStr){
	var val = $("#"+idStr+" label label .xzimg").attr("onclick");
	if(idStr=="size"){
		if(val.indexOf("100")>0){
			val = 100;
		}else if(val.indexOf("50")>0){
			val = 50;
		}else{
			val = 30;
		}
	}else if(idStr == "required"){
		if(val.indexOf("是")>0){
			val = "是";
		}else{
			val = "否";
		}
	}else{
		if(val.indexOf("文本")>0){
			val = "文本";
		}else if(val.indexOf("数字")){
			val = "数字";
		}else{
			val = "日期";
		}
	}
	return val;
}
//查看该元素是否被隐藏，隐藏返回false，显示返回true
function getdisplay(divId){
	if($("#"+divId).css("display")=="black"){
		return true;
	}else{
		return false;
	}
}
//保存元素及元素到各项属性
function holdjs(){
	//获取选中元素
	var xl = $(".xz").html();
	if(getdisplay("size")){//size
		var size = getStr("size");
	}
	
	var label = $("#labelinp").val();//label
	var url = $("#urlinp").val();//url
	var systemid = $("#systemidinp").val();//systemid
	var name = $("#nameinp").val();//name
	var required = getStr("required");
	var inputtype = getStr("inputtype");
	var maxlength = $("#maxlengthinp").val();//maxlength
	
	var urldisplay = $("#url").css("display");
	alert(urldisplay);
	
	$(".xz").append("<div style='display:none'>"+
	
	+"	ss	</div>");
}
/*	var s = '{
    "return_code": 0,
    "return_message": "success",
    "data": {
        "data": [
            {
                "id": "1",
                "question": "公主令牌在哪交？"
            },
            {
                "id": "2",
                "question": "公主护使有什么用？"
            }
        ]
    }
}';
strToJson(s);*/
//json
function strToJson(str){
	var jsonStr = JSON.parse(str);
	return jsonStr;
	//解析
//	alert(s["name"]);
}