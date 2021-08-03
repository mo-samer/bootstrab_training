$(document).ready(function(){
	$('.carousel').carousel({
		interval:2500
	});
	//Show Color Option Div When Click
	$(".fa-dice").click(function()
	{
       $(".color-option").fadeToggle();
	});
});
// Change Theme Color By Click


var colorLi = $(".color-option ul li");

colorLi
.eq(0).css("backgroundColor","#2a8e0d").end()
.eq(1).css("backgroundColor","#e87a09").end()
.eq(2).css("backgroundColor","#3e0448").end()
.eq(3).css("backgroundColor","#e2d13d").end()
.eq(4).css("backgroundColor","#5f5a5a");


colorLi.click(function()
{
	$("link[href*='theme']").attr("href",$(this).attr("data-value"));
});

//Loading Screen
$(window).ready(function()
{

  $(".loading-overlay, .spinner").fadeOut(2000,function()
   {
    });
});

//The Scroll Button
var scrollButton = $("#scroll-top");
$(window).scroll(function()
{

	  $(this).scrollTop() >=700 ? scrollButton.show(): scrollButton.hide();
	
	
	});
scrollButton.click(function()
	{
		$("html,body").animate({ scrollTop:0},1000);
		});
