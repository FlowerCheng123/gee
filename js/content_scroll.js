// JavaScript Document


$(document).ready(function(){
	
	/*window.onload=function(){
		$('#page1').width($('.container_content').width());
		$('#page2').width($('.container_content').width());
		$('#page3').width($('.container_content').width());}
	window.onresize=function(){
		$('#page1').width($('.container_content').width());
		$('#page2').width($('.container_content').width());
		$('#page3').width($('.container_content').width());}	*/
	var page=0;
	$('#a1').click(function(){
		$('page1').css('display':none);
		})
    $('#a2').click(function(){
		scrollPage();
		})
		
	function scrollPage(){
	
	document.getElementById('test').scrollLeft+=$('.container_content').width();
     
	}
	
	
	
	})