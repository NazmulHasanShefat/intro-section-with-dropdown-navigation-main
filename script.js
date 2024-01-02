let openBtn = document.querySelector(".manu-bar-container");
let mobileNav = document.querySelector(".all-nav-items");
let closeBtn = document.querySelector(".close-btn");
// open manu items 
let showDrop1 = document.querySelector(".manu-item");
let showDrop2 = document.querySelector(".manu-item2");
// This is sub manu
let showDrop_manu = document.querySelector(".sub_manu");
let showDrop_manu2 = document.querySelector(".sub_manu2");
// This is for drop icon
let arrow = document.querySelector(".arrow-icon");
let arrow2 = document.querySelector(".arrow_2");

// This is for toggle 
 openBtn.addEventListener("click", function(){
    openBtn.style.display = "none";
    mobileNav.classList.toggle("open");
    document.body.style.backgroundColor = "#cfcfcf";
    document.body.classList.toggle("hidden-scroling");
  });
 closeBtn.addEventListener("click", function(){
    openBtn.style.display = "block";
    mobileNav.classList.remove("open");
    document.body.style.backgroundColor = "#fff";
  });
  // drop down 1
  let isActive = false;
  showDrop1.addEventListener("click", function(){
    showDrop_manu.classList.toggle("active_drop");
     if(!isActive){
      arrow.style.transform = "rotate(180deg)";
      isActive = true;
     }
     else{
      arrow.style.transform = "rotate(0deg)";
      isActive = false;
     };
  });
  // dropdown 2
  showDrop2.addEventListener("click", function(){
    showDrop_manu2.classList.toggle("active_drop");
    if(!isActive){
      arrow2.style.transform = "rotate(180deg)";
      isActive = true;
    }
    else{
      arrow2.style.transform = "rotate(0deg)";
      isActive = false;
    }
  });