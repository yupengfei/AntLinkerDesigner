// JavaScript Document

//IE6-9
document.body.onselectstart = document.body.ondrag = function(){return false;}
var r=null;
	window.onload=function()
	{
//		r=document.getElementById('item').innerHTML;
		startDrag();
	}

	function addRowa() {//添加一行
	//	var obj=document.getElementById('item');
	//	obj.innerHTML=obj.innerHTML+r;
		startDrag();
	}
	function addrow(){
		var lisize = $("#rows").children("li").length;
		if(lisize<=10){
			$("#rows").append("<li onClick='li("+(lisize+1)+")' class='pd"+(lisize+1)+"'></li>");
			startDrag();
		}else{
			alert("超出最大行数");
		}
	}
 
	function startDrag()
	{
		//.drag li 里面的元素对应的放置位置是 .drop li, 完成后回调change函数,默认限制拖动范围是窗口内部
		$('.drag li').Drag({drop:'.drop li',finish:change});
		//.drag li 里面的元素对应的放置位置是 .drop li和.drag li(自身), 完成后回调change函数,默认限制拖动范围是窗口内部
//		$('.drop li').Drag({drop:'.drop li, .drag li',finish:change});
		//document.getElementById('ravl').value=document.getElementById('item').innerHTML;
	}
	<!--
	//拖放插件DragDrop
	$.fn.Drag=function (options) {
		var defaults={
			limit : window,//是否限制拖放范围,默认限制当前窗口内
			drop:false,//是否drop
			handle:false,//拖动手柄
			finish:function () {}//回调函数
		};
		var options=$.extend(defaults,options);
		this.X=0;//初始位置
		this.Y=0;
		this.dx=0;//位置差值
		this.dy=0;
		var This=this;
		var ThisO=$(this);//被拖目标
		var thatO;
		
		if (options.drop) {
			var ThatO=$(options.drop);//可放下位置
			ThisO.find('div').css({cursor:'pointer'});
			
			var tempBox=$('<div id="tempBox" class="grid"></div>');
		}else {
			options.handle ? ThisO.find(options.handle).css({cursor:'move','-moz-user-select':'none'}) : ThisO.css({cursor:'move','-moz-user-select':'none'});
		}
		//拖动开始
		
		this.dragStart=function (e) {
			var cX=e.pageX;
			var cY=e.pageY;
			var date = new Date().getTime();
			if (options.drop) {
				ThisO=$(this);
				if (ThisO.find('div').length!=1) {return}//如果没有拖动对象就返回
				This.X=ThisO.find('div').offset().left;
				This.Y=ThisO.find('div').offset().top;
				tempBox.html(ThisO.html());
				//ThisO.html('');
				$('body').append(tempBox);
				tempBox.css({left:This.X,top:This.Y});
			}else {
				This.X=ThisO.offset().left;
				This.Y=ThisO.offset().top;
				ThisO.css({margin:0})
			}
			This.dx=cX-This.X;
			This.dy=cY-This.Y;
			if (!options.drop) {ThisO.css({position:'absolute',left:This.X,top:This.Y})}
			$(document).mousemove(This.dragMove);
			$(document).mouseup(This.dragStop);
			if ($.browser.msie) {ThisO[0].setCapture();}//IE,鼠标移到窗口外面也能释放
		}
		//拖动中
		this.dragMove=function (e) {
			var cX=e.pageX;
			var cY=e.pageY;
			if (options.limit) {//限制拖动范围
				
				//容器的尺寸
				var L=$(options.limit)[0].offsetLeft ? $(options.limit).offset().left : 0;
				var T=$(options.limit)[0].offsetTop ? $(options.limit).offset().top : 0;
				var R=L+$(options.limit).width();
//				var B=T+$(options.limit).height();
				var B=document.body.scrollHeight;//网页可见区域高度

				//获取拖动范围
				var iLeft=cX-This.dx, iTop=cY-This.dy;
				//获取超出长度
				var iRight=iLeft+parseInt(ThisO.innerWidth())-R, iBottom=iTop+parseInt(ThisO.innerHeight())-B;
				//alert($(window).height())
				//先设置右下, 再设置左上
				if(iRight > 0) iLeft -= iRight;
					
				if(iBottom > 0) iTop -= iBottom;
				if(L > iLeft) iLeft = L;
				if(T > iTop) iTop = T;
				if (options.drop) {
					tempBox.css({left:iLeft,top:iTop})
				}else {
					ThisO.css({left : iLeft,top : iTop})
				}
			}else {
				//不限制范围
				if (options.drop) {
					tempBox.css({left:cX-This.dx,top:cY-This.dy})
				}else {
					ThisO.css({left:cX-This.dx,top:cY-This.dy});
				}
			}
		}
		//拖动结束
		this.dragStop=function (e) {
			if (options.drop) {
				var flag=false;
				var cX=e.pageX;
				var cY=e.pageY;
				var oLf=ThisO.offset().left;
				
				var oRt=oLf+ThisO.width();
				var oTp=ThisO.offset().top;
				var oBt=oTp+ThisO.height();
//				var date = new Date().getTime();
				if (!(cX>oLf && cX<oRt && cY>oTp && cY<oBt)) {//如果不是在原位
					for (var i=0; i<ThatO.length; i++) {
						var XL=$(ThatO[i]).offset().left;
						var XR=XL+$(ThatO[i]).width();
						var YL=$(ThatO[i]).offset().top;
						var YR=YL+$(ThatO[i]).height();
						
						if (XL<cX && cX<XR && YL<cY && cY<YR) {//找到拖放目标 交换位置
							var newElm=$(ThatO[i]).html();
							
							$(ThatO[i]).css("border","1px solid #FFF");
							$(ThatO[i]).css("border-bottom","1px solid #C8C8C8");
			//重置边框颜色
							//$(ThatO[i]).html(tempBox.html());
							//alert(tempBox.html());
							
							//jsq(sj);
							//alert($(ThatO[i]).attr('class'));
							//alert(tempBox.attr('class'));
							//tempBox.attr("class","d"+date);
							
							//if($(ThatO[i]).html().indexOf(tempBox.html())<0){
								var getclass = $(ThatO[i]).children().last().attr("class");
								//alert(getclass);
								if(typeof(getclass) == "undefined"){
									$(ThatO[i]).append(tempBox.html());
									var date = new Date().getTime()+"";
									$(ThatO[i]).children().last().attr("onclick","s('"+date+"')");
									$(ThatO[i]).children().last().addClass(date);

								}else{
									var getclasslength = getclass.length;
									var date = new Date().getTime()+"";
									var datelength = date.length;
									getclass = getclass.substr(getclasslength-6,getclasslength);
									date = date.substr(datelength-6,datelength);
									var s = date - getclass;
									if(s>1000){
										$(ThatO[i]).append(tempBox.html());
										var date = new Date().getTime()+"";
										$(ThatO[i]).children().last().attr("onclick","s('"+date+"')");
										$(ThatO[i]).children().last().addClass(date);
									}
								}

							//}
							
							//ThisO.html(newElm);
							thatO=$(ThatO[i]);
							tempBox.remove();//取消显示漂浮层
							flag=true;
							break;//一旦找到 就终止循环
						}
					}
				}
				if (!flag) {//如果找不到拖放位置,归回原位
					tempBox.css({left:This.X,top:This.Y});

					ThisO.html(tempBox.html());
					tempBox.remove();
				}
			}
			$(document).unbind('mousemove');
			$(document).unbind('mouseup');
			options.finish(e,ThisO,thatO);
			if ($.browser.msie) {ThisO[0].releaseCapture();}
		}
		//绑定拖动
		options.handle ? ThisO.find(options.handle).mousedown(This.dragStart) : ThisO.mousedown(This.dragStart);
		
		//IE禁止选中文本
		//document.body.onselectstart=function(){return false;}
	}
	//下面是例子
	//.drag li 里面的元素对应的放置位置是 .drop li, 完成后回调change函数,默认限制拖动范围是窗口内部
	//$('.drag li').Drag({drop:'.drop li',finish:change});
	//.drag li 里面的元素对应的放置位置是 .drop li和.drag li(自身), 完成后回调change函数,默认限制拖动范围是窗口内部
	//$('.drop li').Drag({drop:'.drop li, .drag li',finish:change});
	//$('#test').Drag({handle:'h2',finish:change});//不限制拖动范围 可设置limit:false
	var change=function (e,oldElm,newElm) {
		
	}
	//-->
	
function isok(date){
	var s = date;
	var date1=new Date();  //开始时间
	var date3=s.getTime()-date1.getTime()  //时间差的毫秒数
	alert(date3);
}