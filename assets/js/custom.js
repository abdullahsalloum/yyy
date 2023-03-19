
const elements = document.querySelectorAll(".page").length;
var removerd = false;

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup ").classList.remove("active");
});


    for (let i = 0; i < elements; i++) {
        document.querySelectorAll(".page")[i].addEventListener("click",function (event){
            if (removerd) {
                document.querySelector(".popup").classList.add("active");
            }else{
                document.querySelectorAll(".page")[i].classList.remove("canvas");
                removerd = true;
            }
            
        });
        
    }





































// let canvas = document.getElementsByClassName("canvas");
// let context = canvas.getContext("2d");


// const init = () =>{
//     let gradientColor = context.createLinearGradient(0 , 0 ,135 , 135);
//     gradientColor.addColorStop(0 , "#c3a3f1");
//     gradientColor.addColorStop(1 , "#6414e9")
//     context.fillStyle = gradientColor;
//     context.fillRect(0 , 0 , 300 , 300);
// };

// //initially mouse X and mouse Y positions are 0

// let mouseX = 0;
// let mouseY = 0;


// //Event for touch and mouse

// let events = {
//     mouse: {
//         down: "mousedown",
//         move: "mousemove",
//         up:   "mouseup"
//     },
//     touch: {
//         down: "touchstart",
//         move: "touchmove",
//         up:   "touchend"
//     },
// };

// let deviceType = "";

// //Detouch touch device 

// const isTouchDevice = () =>{
//     try{
//         //We try to create TouchEvent. It would fail for desktops nd throw error,

//         document.createEvent("TouchEvent");
//         deviceType = "touch";
//         return true;
//     }catch (e){
//         deviceType = "mouse";
//         return false;
//     }
// };

// //get left and top of canvas

// let rectLeft = canvas.getBoundingClientRect().left;
// let rectTop = canvas.getBoundingClientRect().top;

// //Extract X and Y position of mouse/touch

// const getXY = (e) =>{
//     mouseX = (!isTouchDevice() ? e.pageX : e.touches[100].pageX) - rectLeft;
//     mouseY = (!isTouchDevice() ? e.pageY : e.touches[100].pageY) - rectTop;
// };

// isTouchDevice();

// //Start Scratch
 
// canvas.addEventListener(events[deviceType].down,(event) =>{
//     isDragged = true;
//     //get X and Y position
//     getXY(event);
//     scratch(mouseX , mouseY);
// });


// //mousemove/touchmove

// canvas.addEventListener(events[deviceType].move,
//     (event) =>{
//         if(isTouchDevice()){
//             event.preventDefault();
//         }
//         if(isDragged) {
//             getXY(event);
//             scratch(mouseX , mouseY);
//         }

//     });

//     // stop drawing
// canvas.addEventListener(events[deviceType].up , () => {
//     isDragged = false;
// });

// //If mouse leaves the squere
// canvas.addEventListener("mouseleave" , () =>{
//     isDragged = false;
// }) ;

// const scratch = (x , y) =>{
//     //destination-out draws new shapes behind the existing canvas content
//     context.globalCompositeOperation = "destination-out";
//     context.beginPath();

//     //arc makes circle - x,y,reduis,start angel,end angle

//     context.arc( x , y , 120 , 0 , 2 * Math.PI);
//     context.fill();
// }


// window.onload = init();