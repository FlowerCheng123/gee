// JavaScript Document
<!--NavSlide Start-->	
function navSlider(id,opt) {
	
           var MoveObj;
		   var PageWidth=opt.givenWidth;
           var oDiv = document.getElementById(id);
           var oChild = oDiv.parentNode.children;
           var oLeft = oChild[0];
           var oRight = oChild[2];
		   var lock=false;
		   var fillMax=opt.fillMax1;
           oLeft.onclick = function () {
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
                   oDiv.scrollLeft+=opt.Space;
				   
               }
			   else  if(opt.fill>=fillMax){
					  clearInterval(MoveObj);
					  lock=false;}
			    else if ((PageWidth*(opt.fill+1)-oDiv.scrollLeft)==0 ) {
					lock=false;
                    opt.fill += 1;
                    clearInterval(MoveObj);
               } else oDiv.scrollLeft+=opt.Space;
		
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
					else  oDiv.scrollLeft-=opt.Space;
                  
               }

           }

      $(window).resize(function(){
		  oDiv.scrollLeft=0;
		 })	  

       }
<!--NavSlide End-->	
<!--=======================================================================-->
<!--Nav DropDown Start-->	   
 $(function(){
	  var navFlag=0;
	  $('.nav_handler').click(function(){
		  if(navFlag==0){
		 $('.nav-collapse ul').slideDown(500);navFlag=1;
		 $(this).removeClass('nav_handler');
		 $(this).addClass('nav_handler_1');
		  }else{
			  $('.nav-collapse ul').slideUp(500); navFlag=0;
			  $(this).removeClass('nav_handler_1');
		      $(this).addClass('nav_handler');}
  
		  })
		  $(window).resize(function(){navDropDownFlagChange()});
          function navDropDownFlagChange(){
			 
			   var width=$('.container_nav').width();
			   if(width>768){
				  
			  $('.nav-collapse ul').show(10);
				 navDropDownFlag=0;
			   }
			
			   else {
				 $('.nav-collapse ul').hide(10); navDropDownFlag=0;  }
				 $('#nav_flag').removeClass('nav_handler_1');
				 $('#nav_flag').addClass('nav_handler');
				 
			   }	
	  
})


<!--Nav DropDown End-->