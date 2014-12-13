// JavaScript Document
	 
function threePageSlide(id,opt) {
	var parentIndex;
	var flagIndex;
	var TIME1=opt.TIME1;
	var tag0=opt.tag0;
	var oDiv=$("#"+id);
	var oChild0=oDiv.siblings().eq(0);
	var oChild1=oDiv.siblings().eq(1);
	var oChild2=oDiv.siblings().eq(2);
	var oChild3=oDiv.siblings().eq(3);
	
    $(oDiv).children().eq(0).find('div').click(function() {
		
      var index=$(this).index();
	  $(this).parent().hide(100);
	  $(this).parent().siblings().eq(index).show(100);
	  oChild0.hide(TIME1);
	  oDiv.siblings().eq(index+1).show(TIME1);
	  
	  
    });
	
	
	 $(oDiv).children().eq(1).find('div').click(function() {
		 var index=$(this).index()+1;
       $(this).parent().hide(100);
	   $(this).parent().siblings().eq(index).show(100);
	   oChild1.hide(TIME1);
	   oDiv.siblings().eq(index+1).show(TIME1);
	 });
	 
	 $(oDiv).children().eq(2).find('div').click(function() {
      var index=$(this).index()+1;
	  $(this).parent().hide(100);
	   $(this).parent().siblings().eq(index).show(100);
	   oChild2.hide(TIME1);
	   if(index==1) oChild1.show(TIME1)
	    else oChild3.show(TIME1);
	 });
	 
	 $(oDiv).children().eq(3).find('div').click(function() {
      var index=$(this).index()+1;
	   $(this).parent().hide(100);
	  $(this).parent().siblings().eq(index).show(100);
	  oChild3.hide(TIME1);
	  oDiv.siblings().eq(index).show(TIME1);
	 });
}

<!--三级菜单箭头控制 Start-->
$(function(){
var isContract;

$(window).load(function(){switchContract()});
$(window).resize(function(){switchContract()});
function switchContract(){
	var width=$('.cont_layout7').width();
	if(width!=20){
		
		$(".cont_layout8").children().eq(0).attr("src", 'image/contract.png');isContract=false;
	}else{
		$(".cont_layout8").children().eq(0).attr("src", 'image/contract1.png');isContract=true;}
}



$('#aside0').bind('click',contract1);
$('#aside1').bind('click',contract1);
$('#aside2').bind('click',contract1);
$('#aside3').bind('click',contract1);
function contract1(){
	var width=$(document.body).width();
	$(this).parent().toggleClass('cont_layout6_2');
	if(isContract){
		$(this).children().eq(0).attr("src", 'image/contract.png');isContract=false;}
	else{
		$(this).children().eq(0).attr("src", 'image/contract1.png');isContract=true;}		
}

})
<!--三级菜单箭头控制 End-->