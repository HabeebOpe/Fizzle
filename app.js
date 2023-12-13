const body = document.querySelector("body")
const profileDisplay = document.querySelector(".side-profile")
const profileClose = document.querySelector(".close-profile")
const searchClick = document.querySelectorAll("#search-click")
const navClick = document.querySelector("#nav-click")


/*------------NAVIGATION DISPLAY------------*/
navClick.addEventListener("click", ()=>{
  body.classList.toggle("show-nav")
})

/*-----------SEAERCH BAR DISPLAY------------*/
searchClick.forEach(searchClicki =>{
  searchClicki.addEventListener("click", ()=>{
    body.classList.toggle("show-search")
  })
})

/*----------NAV DISPLAY SCRIPT--------------*/
function scroll(){
   var  scrollValue = window.scrollY;
   
   if(scrollValue--){
     body.classList.remove("show-nav")
     body.classList.remove("retweetpop")
   }
   if(scrollValue++){
     body.classList.remove("show-nav")
     body.classList.remove("retweetpop")
   }
   const btn = document.querySelector(".btn");
   if(scrollValue < 50){
       body.classList.remove("navdis")
   }
   else{
       body.classList.add("navdis")
   }
   if(scrollValue > 150){
     body.classList.add("shad")
   }
   else{
     body.classList.remove("shad")
   }
   
}
window.addEventListener("scroll", scroll)


/*------------IMAGE REVIEW SCRIPT-----------*/
const img = document.querySelectorAll("img")
const mage = document.querySelector(".mage")

img.forEach(image =>{
  image.addEventListener("click", ()=>{
    
    var cla = image.src
    body.classList.add('review-mag');
    mage.src = cla
    body.classList.add("fix")
    if(image.classList.contains("logoimg")){
      body.classList.remove('review-mag')
      body.classList.remove("fix")
    }
  })
})

const reviewClose = document.querySelector(".img-review-flex")
reviewClose.addEventListener("click", ()=>{
  body.classList.toggle("show-back")
})
const reviewClosebtn = document.querySelector(".review-close")
reviewClosebtn.addEventListener("click", ()=>{
  if(body.classList.contains("fix")){
    body.classList.toggle("fix")
  }
  body.classList.remove("review-mag")
})




/*--------------MESSAGE OPEN---------------*/
const openMessage = document.querySelectorAll(".message-open")
openMessage.forEach(openMess =>{
  openMess.addEventListener("click", ()=>{
    if(body.classList.contains("open-notification")){
    body.classList.remove("open-notification")
    body.classList.remove("fix")
    }
    if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
    body.classList.remove("fix")
    }
    
    body.classList.toggle("open-message")
    body.classList.remove("show-nav")
    body.classList.toggle("message-active")
    body.classList.remove("notification-active")
    body.classList.remove("trend-active")
    body.classList.toggle("fix")
  })
})
/*--------------FOR YOU OPEN---------------*/
const openTrending = document.querySelectorAll(".trending-open")
openTrending.forEach(openTrend =>{
  openTrend.addEventListener("click", ()=>{
    if (body.classList.contains("open-notification")) {
      body.classList.remove("open-notification")
      body.classList.remove("fix")
    }
    if (body.classList.contains("open-message")) {
      body.classList.remove("open-message")
      body.classList.remove("fix")
    }
    
    body.classList.toggle("open-trend")
    body.classList.remove("show-nav")
    body.classList.toggle("trend-active")
    body.classList.remove("notification-active")
    body.classList.remove("message-active")
    body.classList.toggle("fix")
  })
})



/*------------NOTIFICATION OPEN-------------*/
const openNotification = document.querySelectorAll(".notification-open")
openNotification.forEach(openNotif =>{
  openNotif.addEventListener("click", ()=>{
  if(body.classList.contains("open-message")){
    body.classList.remove("open-message")
    body.classList.remove("fix")
  }
  if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
    body.classList.remove("fix")
  }
  
  body.classList.toggle("open-notification")
  body.classList.remove("show-nav")
  body.classList.toggle("notification-active")
  body.classList.remove("trend-active")
  body.classList.remove("message-active")
  body.classList.toggle("fix")
})
})
/*------------HOME CLICK FUNCTION-------------*/
const homeClick = document.querySelector(".home-click")
homeClick.addEventListener("click", ()=>{
  if(body.classList.contains("open-message")){
    body.classList.remove("open-message")
  }
  if(body.classList.contains("open-notification")){
    body.classList.remove("open-notification")
   }
   if(body.classList.contains("open-trend")){
    body.classList.remove("open-trend")
   }
   body.classList.remove("show-nav")
   body.classList.remove("message-active")
   body.classList.remove("notification-active")
   body.classList.remove("trend-active")
   body.classList.remove("fix")
})




/*-------------THEME SWITH----------------*/
const themeOpen = document.querySelectorAll(".theme-open")
const themeClose = document.querySelector(".theme-close")
const theme = document.querySelectorAll(".theme")

themeOpen.forEach(themeOpenc =>{
  themeOpenc.addEventListener("click", ()=>{
  body.classList.add("open-theme")
  body.classList.add("fix")
  })
})

themeClose.addEventListener("click", ()=>{
  body.classList.remove("open-theme")
  body.classList.remove("fix")
})

theme.forEach(themeBtn =>{
  themeBtn.addEventListener("click", ()=>{
    if(themeBtn.classList.contains("dark")){
      body.classList.remove("dim")
      body.classList.add("dark")
    }
    else if(themeBtn.classList.contains("dim")){
      body.classList.remove("dark")
      body.classList.add("dim")
    }
    else if(themeBtn.classList.contains("light")){
      body.classList.remove("dark")
      body.classList.remove("dim")
    }
  })
})


/*-------------SCROLL TO REMOVE THE SIDENAV----------------*/

const redi = document.querySelectorAll(".love");
const medi = document.querySelectorAll(".message");
const retwi = document.querySelectorAll(".retweet");
const shari = document.querySelectorAll(".share");

const rered = document.querySelectorAll(".fa-heart")
const reblue = document.querySelectorAll(".fa-message")
const regreen = document.querySelectorAll(".fa-retweet")
const repurple = document.querySelectorAll(".fa-share")


