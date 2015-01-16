function li(size){
	var obj = $("#rows .pd"+size);
	var lihtml = obj.html();
	if(lihtml==""){
		$("#rows li div").css("border","1px solid #FFF");
		$("#rows li div").removeClass("xz");
		var objBorCor = obj.css("border-bottom-color");
		if(objBorCor=="rgb(200, 200, 200)"){//选中了
			$("#rows li").css("border","1px solid #FFF");
			$("#rows li").css("border-bottom","1px solid #C8C8C8");
			obj.css("border","1px solid #000");
			//重置所有名为xzli的class
			$("#rows li").removeClass("xzli");
			obj.addClass("xzli");
			$("#size").hide(200);
			$("#label").hide(200);
			$("#url").hide(200);
			$("#systemid").hide(200);
			$("#name").hide(200);
			$("#required").hide(200);
			$("#inputtype").hide(200);
			$("#maxlength").hide(200);
			$("#label").show(200);
			$("#name").show(200);
			$("#holdid").show(200);
			restoreli(size);
		}
		else if(objBorCor=="rgb(0, 0, 0)"){//取消选中了
			obj.css("border","1px solid #FFF");
			obj.css("border-bottom","1px solid #C8C8C8");
			obj.removeClass("xzli");
//			$("#name").hide(500);
			//保存方法
			//全部清空方法
			$("#label").hide(200);
			$("#name").hide(200);
			$("#nameinp").val("");
			$("#labelinp").val("");
			$("#holdid").hide(200);
			return;
		}
//		alert(size);
	}
	
}
//重置右侧表单
function restoreli(isthis){
	if($(".hiderig .pd"+isthis+"  .label").html()!=null){
		$("#labelinp").val($(".hiderig .pd"+isthis+"  .label").html().trim());
	}else{
		$("#labelinp").val("");
	}
	if($(".hiderig .pd"+isthis+"  .name").html()!=null){
		$("#nameinp").val($(".hiderig .pd"+isthis+"  .name").html().trim());
	}else{
		$("#nameinp").val("");
	}
}
function hold(){
	//格式化li
	$("#rows").children("li").css("border","1px solid #FFF");
	$("#rows").children("li").css("border-bottom","1px solid #C8C8C8");
	$("#rows").children("li").removeClass("xzli");
	//格式化div
	$("#rows").children("li").children("div").css("border","1px solid #FFF");
	$("#rows").children("li").children("div").removeClass("xz");
	$(".rig div").hide(200);
	var li = $("#rows").children("li");
	var lilen = $("#rows").children("li").length;
	var div = $("#rows").children("li").children("div");
	var divlen = $("#rows").children("li").children("div").length;
	var con = new Object();
	var lis = new Array();
	for(var i = 0; i <lilen;i++){
		var limodel = new Object();
		limodel.row = i+1;
		var licla = li.eq(i).attr("class");
		limodel.id = licla;
		if($(".hiderig ."+licla+"  .label").html()!=null){
			limodel.label = $(".hiderig ."+licla+"  .label").html().trim();
		}
		if($(".hiderig ."+licla+"  .name").html()!=null){
			limodel.name = $(".hiderig ."+licla+"  .name").html().trim();
		}
		lis[i] = limodel
	}
	con.Li = lis;
	var tags = new Array();
	for(var i = 0; i<divlen;i++){
		var model = new Object();
		model.type = div.eq(i).attr("id");//ID
		re(div.eq(i).attr("id"),div.eq(i).parent().attr("class"),div.eq(i).attr("class"));
		model.lid = div.eq(i).parent().attr("class");//父id
		model.id = div.eq(i).attr("class");//添加时间
		if(div.eq(i).children().children(".size").html()!=null){
			model.size = div.eq(i).children().children(".size").html();
		}
		if(div.eq(i).children().children(".label").html()!=null){
			model.label = div.eq(i).children().children(".label").html();
		}
		if(div.eq(i).children().children(".url").html()!=null){
			model.url = div.eq(i).children().children(".url").html();
		}
		if(div.eq(i).children().children(".systemid").html()!=null){
			model.systemid = div.eq(i).children().children(".systemid").html();
		}
		if(div.eq(i).children().children(".name").html()!=null){
			model.name = div.eq(i).children().children(".name").html();
		}
		if(div.eq(i).children().children(".required").html()!=null){
			model.required = div.eq(i).children().children(".required").html();
		}
		if(div.eq(i).children().children(".inputtype").html()!=null){
			model.inputtype = div.eq(i).children().children(".inputtype").html();
		}
		if(div.eq(i).children().children(".maxlength").html()!=null){
			model.maxlength = div.eq(i).children().children(".maxlength").html();
		}
		
		tags[i] = model;
	}
	con.Element = tags;
	var json = JSON.stringify(con,100);
//	alert(json);
	submitjs(json);
}
function re(id,lid,cla){
	var size = $("#rows ."+lid+" ."+cla+" .divno .size").html();
	var label = $("#rows ."+lid+" ."+cla+" .divno .label").html();
	var name = $("#rows ."+lid+" ."+cla+" .divno .name").html();
	var name = $("#rows ."+lid+" ."+cla+" .divno .required").html();
	if(id=="text"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
	}
	if(id=="selleft"||id=="selright"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
		if(required==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='required'>是</div>");
		}
	}
	if(id=="selsleft"||id=="selsright"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
		if(required==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='required'>是</div>");
		}
	}
	if(id=="isopenleft"||id=="isopenright"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
		if(required==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='required'>是</div>");
		}
	}
	if(id=="listleft"||id=="listright"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
		if(required==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='required'>是</div>");
		}
	}
	if(id=="menu"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(url==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='url'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
	}
	if(id=="onetext"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
		if(required==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='required'>是</div>");
		}
		if(inputtype==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='inputtype'>文本</div>");
		}
		if(maxlength==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='maxlength'></div>");
		}
	}
	if(id=="manytext"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
		if(required==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='required'>是</div>");
		}
		if(maxlength==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='maxlength'></div>");
		}
	}
	if(id=="textlist"){
		if(size==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='size'>30</div>");
		}
		if(label==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='label'></div>");
		}
		if(name==null){
			$("#rows ."+lid+" ."+cla+" .divno").append("<div class='name'></div>");
		}
	}
	
}
function re2(){
	
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
		$("#holdid").show(200);
	}else if(clikborcolor == "rgb(0, 0, 0)"){
		$(clik).css("border","1px solid #fff");
		$(clik).removeClass("xz");
		$("#holdid").hide(200);
		fhide();//隐藏右侧元素
		return;
	}
	fhide();//隐藏右侧元素
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
		$("#required").show(sdate);
	}
	else if(clikid == "listright"){//下拉列表右
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
		$("#required").show(sdate);
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
	else if(clikid == "textlist"){//列表
		$("#size").show(sdate);
		$("#label").show(sdate);
		$("#name").show(sdate);
	}
	//重置表单内文本框
	restore(isthis);
}

$(document).ready(function(){
	//复选框操作
	$("#required .itlab label .iptimg").click(function(){
		var srcurl = $(this).attr("src");//得到路径地址
		if(srcurl=="img/choicen.png"){
			$(this).parent().siblings("label").children().attr("src","img/choicen.png");
			$(this).parent().siblings("label").children().removeClass("xzimg");
			$(this).attr("src","img/choicey.png");
			$(this).addClass("xzimg");
		}
		
	});
	$("#inputtype .itlab label .iptimg").click(function(){
		var srcurl = $(this).attr("src");//得到路径地址
		if(srcurl=="img/choicen.png"){
			$(this).parent().siblings("label").children().attr("src","img/choicen.png");
			$(this).parent().siblings("label").children().removeClass("xzimg");
			$(this).attr("src","img/choicey.png");
			$(this).addClass("xzimg");
		}
	});
})
function imgtacitly(isthis,classstr){
	var varstr = $("#rows li ."+isthis+" div ."+classstr+"").html();
	if(varstr==null){
		if(classstr=="size"){
			$("#"+classstr+" label label img").attr("src","img/choicen.png");
			$("#"+classstr+" label label img").last().attr("src","img/choicey.png");
		}
		else{
			$("#"+classstr+" label label img").attr("src","img/choicen.png");
			$("#"+classstr+" label label img").first().attr("src","img/choicey.png");
		}
	}else{
		var slen =$("#"+classstr+" label label").change("img").length;
		for(i=0;i<slen;i++){
			if($("#"+classstr+" label label").eq(i).html().indexOf(varstr)>0){
				$("#"+classstr+" label label img").attr("src","img/choicen.png");
				$("#"+classstr+" label label img").eq(i).attr("src","img/choicey.png");
			}
		}
	}
	
}
//重置右侧表单
function restore(isthis){
	imgtacitly(isthis,"size");
	imgtacitly(isthis,"inputtype");
	imgtacitly(isthis,"required");
	$("#labelinp").val($(".xz .divno .label").html());
	$("#nameinp").val($(".xz .divno .name").html());
	$("#urlinp").val($(".xz .divno .url").html());
	$("#systemidinp").val($(".xz .divno .systemid").html());
	$("#maxlengthinp").val($(".xz .divno .maxlength").html());
}
//右侧表单全部隐藏
function fhide(){
	$(".box").hide(200);
}
//设置元素宽度
function ssize(width){
	if($(".xz .divno .size").html()==null){
		$(".xz .divno").append("<div class='size'></div>");
	}
	if(width == '100'){
		var sibwidth = $(".xz").siblings().width();
		if(sibwidth==null){
			$(".xz").animate({width:'596px'});
			$(".xz .divno .size").html("100");
			var imglength = $("#size .itlab label").change("img").length;
			$("#size .itlab label img").attr("src","img/choicen.png");
			for(var i = 0;i<imglength;i++){
				var im = $("#size .itlab label img").eq(i).attr("onclick");
				if(im.indexOf("100")>1){
					$("#size .itlab label img").eq(i).attr("src","img/choicey.png");
				}
			}
		}else{
			alert("设置的宽度超过总宽度");
		}
	}else if(width == '50'){
		var siblength = $(".xz").siblings().length;
		if(siblength <= 1){
			$(".xz").animate({width:'296px'});
			$(".xz .divno .size").html("50");
			var imglength = $("#size .itlab label").change("img").length;
			$("#size .itlab label img").attr("src","img/choicen.png");
			for(var i = 0;i<imglength;i++){
				var im = $("#size .itlab label img").eq(i).attr("onclick");
				if(im.indexOf("50")>1){
					$("#size .itlab label img").eq(i).attr("src","img/choicey.png");
				}
			}
		}else{
			alert("设置的宽度超过总宽度");
		}
	}else{
		$(".xz").animate({width:'197px'});
		$(".xz .divno .size").html("30");
		var imglength = $("#size .itlab label").change("img").length;
			$("#size .itlab label img").attr("src","img/choicen.png");
			for(var i = 0;i<imglength;i++){
				var im = $("#size .itlab label img").eq(i).attr("onclick");
				if(im.indexOf("30")>1){
					$("#size .itlab label img").eq(i).attr("src","img/choicey.png");
				}
			}
	}
}
//设置元素是否必填
function srequired(str){
	if($(".xz .divno .required").html()==null){
		$(".xz .divno").append("<div class='required'></div>");
	}
	if(str == '是'){
		$(".xz .divno .required").html("是");
	}else{
		$(".xz .divno .required").html("否");
	}
}
function sinputtype(str){
	if($(".xz .divno .inputtype").html()==null){
		$(".xz .divno").append("<div class='inputtype'></div>");
	}
	if(str == '文本'){
		$(".xz .divno .inputtype").html("文本");
	}else if(str == '数字'){
		$(".xz .divno .inputtype").html("数字");
	}else{
		$(".xz .divno .inputtype").html("日期");
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
			var liclass = $(".xzli").attr("class");
			var clasize = liclass.indexOf("xzli");
			liclass = liclass.substr(0,clasize).trim();
			$(".hiderig ."+liclass+"").remove();
			$(".xzli").remove();
		})
	}
	$("#holdid").hide(200);
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
	if($("#"+divId).css("display")=="block"){
		return true;
	}else{
		return false;
	}
}
function texthold(){
	holdjs();
}
//保存元素及元素到各项属性
function holdjs(){
	//获取选中元素 div
	var xl = $(".xz").html();
	if(xl!=null){
		//要保存的区域的div
		var keep  = "";
		var size = "";
		if(getdisplay("size")){//size
			size = getStr("size");
			keep += "<div style='display:none' class='size'>"+size+"</div>";
		}
		var label = "";
		if(getdisplay("label")){
			label = $("#labelinp").val();//label
			keep += "<div style='display:none' class='label'>"+label+"</div>";
			$(".xz span").html(label);
		}
		var url = "";
		if(getdisplay("url")){
			url = $("#urlinp").val();//url
			keep += "<div style='display:none' class='url'>"+url+"</div>";
		}
		var systemid = "";
		if(getdisplay("systemid")){
			systemid = $("#systemidinp").val();//systemid
			keep += "<div style='display:none' class='systemid'>"+systemid+"</div>";
		}
		var name = "";
		if(getdisplay("name")){
			name = 	$("#nameinp").val();//name
			keep += "<div style='display:none' class='name'>"+name+"</div>";
		}
		var required = "";
		if(getdisplay("required")){
			required = getStr("required");
			keep += "<div style='display:none' class='required'>"+required+"</div>";
		}
		var inputtype = "";
		if(getdisplay("inputtype")){
			inputtype = getStr("inputtype");
			keep += "<div style='display:none' class='inputtype'>"+inputtype+"</div>";
		}
		var maxlength = "";
		if(getdisplay("maxlength")){
			maxlength = $("#maxlengthinp").val();//maxlength
			keep += "<div style='display:none' class='maxlength'>"+maxlength+"</div>";
		}
		$(".xz div").html(keep);
		return;
	}
	//获取选中元素的行的class li的class
	var xzli = $(".xzli").html();
	if(xzli==""){
		var liclass = $(".xzli").attr("class");
		var label = $("#labelinp").val();
		var name = $("#nameinp").val();
		var clasize = liclass.indexOf("xzli");
		liclass = liclass.substr(0,clasize).trim();
		if($(".hiderig ."+liclass+" .label").html()==null){
			$(".hiderig ."+liclass+"").append("<div class='label'>"+label+"</div>");
		}else{
			$(".hiderig ."+liclass+" .label").html(label);
		}
		if($(".hiderig ."+liclass+" .name").html()==null){
			$(".hiderig ."+liclass+"").append("<div class='name'>"+name+"</div>");
		}else{
			$(".hiderig ."+liclass+" .name").html(name);
		}
	}
}
//json
function strToJson(str){
	var jsonStr = JSON.parse(str);
	return jsonStr;
	//解析
//	alert(s["name"]);
}
function test(){
	var student = new Object();
	student.name = "Lanny";
	var json = JSON.stringify(student,100);
	alert(json);
}
function view(){
	var bodyhei = $(window).height();
	var bodywid = $(window).width();
	$(".outer").css("height",bodyhei);
	$(".outer").css("width",bodywid);
	$(".outer").show(200);
	$(".viewHtml").css("top",(bodyhei/2)-(890/2)+"px");
	$(".viewHtml").css("left",(bodywid/2)-(600/2)+"px");
	$(".viewHtml").show(200);
	$(".viewDiv").html($("#rows").html());
}
function tc(){
	$(".viewHtml").hide(200);
	$(".outer").hide(200);
}
//解析json
function jsonStr(json){
for(var i = 0; i < json["Li"].length; i++){
		var id = json["Li"][i]["id"];//pd1
		var cla = id.substr(2,id.length);//1
		var name = json["Li"][i]["name"];
		var label = json["Li"][i]["label"];
		$("#rows").append("<li class='"+id+"' onclick='li("+cla+")'></li>");
		$(".hiderig").append("<div class='"+id+"'></div>");
		if(name!=null){
			$(".hiderig ."+id+"").append("<div class='name'>"+name+"</div>");
		}
		if(label!=null){
			$(".hiderig ."+id+"").append("<div class='label'>"+label+"</div>");
		}
	}
	var length = json["Li"].length*1-1;
	var id = json["Li"][length]["id"];//pd1
	var cla = id.substr(2,id.length);//1
	$(".lisize").html(cla);
	for(var i = 0; i < json["Element"].length; i++){
		var type = json["Element"][i]["type"];
		var lid = json["Element"][i]["lid"];
		var id = json["Element"][i]["id"];
		var size = json["Element"][i]["size"];
		var label = json["Element"][i]["label"];
		var url = json["Element"][i]["url"];
		var systemid = json["Element"][i]["systemid"];
		var name = json["Element"][i]["name"];
		var required = json["Element"][i]["required"];
		var inputtype = json["Element"][i]["inputtype"];
		var maxlength = json["Element"][i]["maxlength"];
		if($("#rows ."+lid+" ."+id+"").html()==null){
			$("#rows ."+lid+"").append("<div id='"+type+"' class=\'"+id+"\' onclick='s(\""+id+"\")'><span></span><div class='divno' style='display:none'></div></div>");
		}
		if(size!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='size'>"+size+"</div>");
			if(size=="100"){
				$("#rows ."+lid+" ."+id+"").css("width","596px");
			}
			if(size=="50"){
				$("#rows ."+lid+" ."+id+"").css("width","296px");
			}
			if(size=="30"){
				$("#rows ."+lid+" ."+id+"").css("width","197px");
			}
		}
		if(label!=null){
			$("#rows ."+lid+" ."+id+" span").append(label);
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='label'>"+label+"</div>");
		}
		if(url!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='url'>"+url+"</div>");
		}
		if(systemid!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='systemid'>"+systemid+"</div>");
		}
		if(name!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='name'>"+name+"</div>");
		}
		if(required!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='required'>"+required+"</div>");
			
		}
		if(inputtype!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='inputtype'>"+inputtype+"</div>");
		}
		if(maxlength!=null){
			$("#rows ."+lid+" ."+id+" .divno").append("<div class='maxlength'>"+maxlength+"</div>");
		}
		//img
		if(type=="selleft"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='ir' src='img/choicey.png'>");
		}
		if(type=="selright"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sr");
			$("#rows ."+lid+" ."+id+"").prepend("<img class='il' src='img/choicey.png'>");
		}
		
		if(type=="selsleft"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='ir' src='img/choicesel.png'>");
		}
		if(type=="selsright"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sr");
			$("#rows ."+lid+" ."+id+"").prepend("<img class='il' src='img/choicesel.png'>");
		}
		if(type=="isopenleft"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='ir' src='img/longbtny.png'>");
		}
		if(type=="isopenright"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sr");
			$("#rows ."+lid+" ."+id+"").prepend("<img class='il' src='img/parkimg.png'>");
		}
		if(type=="listleft"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='ir' src='img/lowerbtn2.png'>");
		}
		if(type=="listright"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sr");
			$("#rows ."+lid+" ."+id+"").prepend("<img class='il' src='img/lowerbtn2.png'>");
		}
		if(type=="onetext"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='ir' src='img/inputimg1.png'>");
		}
		if(type=="manytext"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='mar20 ir' src='img/inputsel1.png'>");
		}
		if(type=="textlist"){
			$("#rows ."+lid+" ."+id+" span").attr("class","sl");
			$("#rows ."+lid+" ."+id+"").append("<img class='mar20 ir' src='img/textlist.png'>");
		}
	}	
}
