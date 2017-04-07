///<reference path="_references.js"/>
var i=0;
var timer;
$(function(){

	//$("#igs").hover(function(){$(".btn").show();},function(){$(".btn").hide();});
$(".ig").eq(0).show().siblings().hide();
ShowTime();
$(".tab").hover(function(){
	i=$(this).index();
	Show();
	clearInterval(timer);//清除轮播
},function(){
	ShowTime();

});
$(".btn1").click(function(){
	clearInterval(timer);
	if(i==0)
	{
		i=6;
	}
	i--;
	Show();
	ShowTime();
});
$(".btn2").click(function(){
	clearInterval(timer);
	if(i==5)
	{
		i=-1;
	}
	i++;
	Show();
	ShowTime();
});

});

function Show(){

	$(".ig").eq(i).fadeIn(300).siblings().fadeOut(300);
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}

function ShowTime(){
	timer=setInterval(function(){
       i++;
  if(i==6){
  	i=0;
  }
  
    Show();
	},4000);
}