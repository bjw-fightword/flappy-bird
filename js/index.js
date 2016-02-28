window.onload=function(){
	var canvas=document.querySelector('#canvas');
	var ctx=canvas.getContext("2d");
	 var bird ={x:140,y:100,w:40,h:40}
	var guandaos=[
		{x:300,y:0,w:80,h:150},
		{x:300,y:338,w:80,h:550},
		{x:530,y:0,w:80,h:150},
		{x:530,y:308,w:80,h:500}
		];
 	a=1;
start=function(){
 	m = Math.random()*100
  	ctx.clearRect(0,0,320,528);
//画鸟
	a+=0.05;
	bird.y += a*a;
	var img=new Image();
	img.src='./images/bird-mid.png';
	img.onload=function(){
		ctx.drawImage(img,bird.x,bird.y);
	}
//管道
for(var i=0;i<guandaos.length;i++){
	var d=guandaos[i];
	d.x-=3;
	if(d.x<=-80){
		d.x=400;
		if(i%2==0){
		d.h=Math.random()*300;
		x=d.h;
		}else{
		d.y=x+160;
	}
}
//管道背景图
var guandaoImg=new Image();
	if(d.y==0){
		guandaoImg.src='./images/g-up.png';
	}else{
		guandaoImg.src='./images/g-down.png';
	}
guandaoImg.onload=function(){
	ctx.drawImage(guandaoImg,d.x,d.y,d.w,d.h);
}
ctx.drawImage(guandaoImg,d.x,d.y,d.w,d.h);
	if(recvsrec(bird,d)){
		var vs=true;
	}
}
var gameOver=document.querySelector(".game-over");
	if(vs){
		gameOver.style.display='block';
		return;
	}
	if(bird.y>=528-40){
		ctx.fillRect(140,528,bird.w,bird.h);
		gameOver.style.display='block';
		return;
	}else if(bird.y<=0){
		gameOver.style.display='block';
		return;
	}else{
		window.requestAnimationFrame(start)
	}
	ctx.drawImage(img,bird.x,bird.y);
}
var starts=document.querySelector('.start');
starts.onclick=function(){
	starts.style.display='none';
	requestAnimationFrame(start);
}
var playAgain=document.querySelector('.play-again');
playAgain.onclick=function(){
	location.reload();
}
canvas.onclick=window.onkeydown=function(){
	a=0;
	bird.y-=40;
}
var recvsrec =  function(rect0,rect1){
    if (rect0.x >= rect1.x && rect0.x >= rect1.x + rect1.w){
     		return false;
    	} 
    	else if (rect0.x <= rect1.x && rect0.x + rect0.w <= rect1.x){
     		return false;
    	}
     	else if (rect0.y >= rect1.y && rect0.y >= rect1.y + rect1.h){
      		return false;
    	}
    	else if (rect0.y <= rect1.y && rect0.y + rect0.h <= rect1.y){
      		return false;
    	}
    		return true;
  	}
}