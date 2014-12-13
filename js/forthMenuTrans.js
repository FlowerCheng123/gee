// JavaScript Document
$(function(){
	$('.cont_inner').find('div').click(function(){
		
	  var index=$(this).index();
	  for(var i=0;i<=7;i++)
	  {
		  //alert($('.level4m').find('div').eq(i).attr('value'));
		  if(!$('.level4m').find('div').eq(i).is(":hidden"))
		  $('.level4m').find('div').eq(i).slideUp(500);
		  
		  }
	  $('.level4m').find('div').eq(index).slideDown(500);
	 
	 
	 })
	 });
	 
function forthMenuSlide(id,opt) {
	   
           var MoveObj;
		   var pageHeight=opt.pageHeight;
		  
		   
           var oDiv = document.getElementById(id);
		  
           var oChild = oDiv.parentNode.children;
		  
           var oUp = oChild[2];
		   
           var oDown = oChild[0];
		   var PageHeight=$("#"+pageHeight).height()+2; 
		  
		   var lock=false;
		   var fillMax=opt.fillMax;
		 
  
		   
		   
           oUp.onclick = function () {
			//alert(PageWidth+"==="+$("#Con").width())
			
			  if(lock==false)
               TurnUp();
			   else return;
           }

           oDown.onclick = function () {
			
			   if(lock==false)
               TurnDown();
			   else return;
           }


           function TurnDown() {
			   //alert(oDiv.scrollLeft);
			   lock=true;
               MoveObj = setInterval(MoveDown, 1);
           }
           function TurnUp() {
			 
			   lock=true;
			   
               MoveObj = setInterval(MoveUp, 1);
		        //alert(oDiv.scrollLeft);
           }
           function MoveUp() {
			   
			  //alert(PageWidth)
			 //alert(oDiv.scrollTop)
               if (oDiv.scrollTop==0){
                   opt.fill=0;
                   oDiv.scrollTop+=opt.Space;
				   
               }
			   else  if(opt.fill>=fillMax){
					  clearInterval(MoveObj);
					  lock=false;}
			    else if ((PageHeight*(opt.fill+1)-oDiv.scrollTop)==0 ) {
					lock=false;
                    opt.fill += 1;
                    clearInterval(MoveObj);
               } else oDiv.scrollTop+=opt.Space;
		
           }

           function MoveDown() {
              
               if (oDiv.scrollTop == 0) {
				   opt.fill=0;
                   clearInterval(MoveObj);
				   lock=false;
               }

               else  {
                  
				   if(oDiv.scrollTop-(PageHeight*(opt.fill-1))==0){
					   opt.fill-=1;
					   clearInterval(MoveObj);
					   lock=false;}
					else  oDiv.scrollTop-=opt.Space;
                  
               }

           }

    

       }
	   
	   
