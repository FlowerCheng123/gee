// JavaScript Document
function imgSlider(id,opt) {
	
           var MoveObj;
           var size1=opt.size1;
		   var size2=opt.size2;
		   var size3=opt.size3;
		   var pageWidth=opt.pageWidth;
           var oDiv = document.getElementById(id);
           var oChild = oDiv.parentNode.children;
           var oLeft = oChild[0];
           var oRight = oChild[2];
		   var PageWidth=$('#'+pageWidth).width(); 
		   var lock=false;
		   var fillMax=$(document.body).width()>size1?opt.fillMax2:opt.fillMax1;
		   var space;
		   space=$(document.body).width()>size1?opt.Space1:opt.Space;
		   
         /*  function getPageWidth(){
			   if($(document.body).width()>size1){ PageWidth=}
			   
		   }*/
		  // alert(fillMax)
		  
		   $(window).bind('resize',function(){
			   
			   	$('.cont_layout2').removeClass('cont_layout6_2');
	            $('.cont_layout3').removeClass('cont_layout6_2');
			   PageWidth=$('#'+pageWidth).width(); 
			   if($(document.body).width()>size1){ fillMax=opt.fillMax2; }
			   else fillMax=opt.fillMax1;
			   oDiv.scrollLeft=0;
			   opt.fill=0;
			   space=$(document.body).width()>size1?opt.Space1:opt.Space;
			  });
		   /*$('.nav_slide_right').bind('click',a);
		   function a(){$('#rightBtn').trigger('click');}*/
//========================================================================//
   $(function() {
             var startX,  endX;
             var width;
             document.getElementById("Con").addEventListener("touchstart", touchStart, false);
             document.getElementById("Con").addEventListener("touchmove", touchMove, false);
             document.getElementById("Con").addEventListener("touchend", touchEnd, false);
             function touchStart(event) {
                 var touch = event.touches[0];
                 
                 startX = touch.screenX;
				 
            }
            function touchMove(event) {
                 var touch = event.touches[0];
                 //endY = (startY - touch.pageY);
                endX = touch.screenX;
				
             }
             function touchEnd(event) {
				
              
				 var dis=startX-endX;
				 endX=0;
				 startX=0;
				 if(dis>150){
					$('#rightBtn').trigger('click'); }
				  else if(dis<-150){$('#leftBtn').trigger('click');}
				  else{return;}
				 
              
				
                
             }
			 
  })
  //==============================================================//
		   
           oLeft.onclick = function () {
			 
			//alert(PageWidth+"==="+$("#Con").width())
			  if(lock==false)
               TurnRight();
			   else return;
           }

           oRight.onclick = function () {
			 
			   if(lock==false)
               TurnLeft();
			   else return;
           }


           function TurnRight() {
			   //alert(oDiv.scrollLeft);
			   lock=true;
               MoveObj = setInterval(MoveRight, 1);
			   
			 
           }
           function TurnLeft() {
			 
			   lock=true;
               MoveObj = setInterval(MoveLeft, 1);
		        //alert(oDiv.scrollLeft);
           }
           function MoveLeft() {
			   
			  //alert(PageWidth)
			  
               if (oDiv.scrollLeft==0){
                   opt.fill=0;
                   oDiv.scrollLeft+=space;
				   
               }
			   else  if(opt.fill>=fillMax){
					  clearInterval(MoveObj);
					  lock=false;}
			    else if ((PageWidth*(opt.fill+1)-oDiv.scrollLeft)==0 ) {
					lock=false;
                    opt.fill += 1;
                    clearInterval(MoveObj);
               } else oDiv.scrollLeft+=space;
		
           }

           function MoveRight() {
              
               if (oDiv.scrollLeft == 0) {
				   opt.fill=0;
                   clearInterval(MoveObj);
				   lock=false;
               }

               else  {
                  
				   if(oDiv.scrollLeft-(PageWidth*(opt.fill-1))==0){
					   opt.fill-=1;
					   clearInterval(MoveObj);
					   lock=false;}
					else  oDiv.scrollLeft-=space;
                  
               }

           }

      function fillPlus(){fill+=1;}
	  function fillmins(){fill-=1;}

       }
function slidePage(id,opt){
	

	var oDiv=$('.'+id);
	var time=opt.time;
	var preObj;
	var cont_num=opt.cont_num;
	$('.pic').click(function(){
		if(preObj!=null){preObj.removeClass('class1');}
		$(this).addClass('class1');
		value=$(this).attr('value');
		preObj=$(this);
    for(i=1;i<=cont_num;i++)
	{
		
		if(!$('#container'+i).is(':hidden')){
			if(value!=i){
			$('#container'+i).hide(time);}
			else{ indexForward(); }
			}
		
		}
	$('#container'+value).show(time);
		})}
		
 function indexForward(){
		$('#page0').show();
		$('#p0').show();
		for(i=1;i<=4;i++){
			$('#page'+i).hide();
			$('#p'+i).hide();
			}
		} 
