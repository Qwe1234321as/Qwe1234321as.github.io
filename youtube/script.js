var menuIcon =document.querySelector(".menu");
var itemsdownleft =document.querySelector(".items-down-left");
var container=document.querySelector(".container");

menuIcon.onclick= function(){
      itemsdownleft.classList.toggle("small-itemsdownlist");
      container.classList.toggle("large-container");
}

