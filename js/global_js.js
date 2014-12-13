// JavaScript Document
/*======================shortcuts Start======================*/
 function shortcuts(id,opt){
	 var block=id;
	 var content_shortcuts=opt.showObj;
	 var height=opt.transObj;
	 var height1=opt.height1;
	 var height2=opt.height2;
	 var time=opt.time;
	  var flag=1;
	  $('.'+block).click(function(){
		 if(flag==0){ 
		 $('.'+content_shortcuts).animate({height:height1},time);
		 $('.'+block).children().eq(0).attr("src", 'image/contract3.png');
		 flag=1;
		 return;
		 }
		 if(flag==1){
			 $('.content_shortcuts').animate({height:height2},time);
			 $('.'+block).children().eq(0).attr("src", 'image/contract4.png');
			 flag=0; }
		  })
 }
 /*======================shortcuts End======================*/
 
 