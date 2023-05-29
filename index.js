//detecting the buttons pressed

for(var n=0;  n < document.querySelectorAll(".drum").length ;n++) {
document.querySelectorAll(".drum")[n].addEventListener("click",function(){

var values= this.innerHTML;
mySound(values);
animation(values);

  });
}
//detecting the keys pressed
document.addEventListener("keydown",function(event){
  mySound(event.key);
  animation(event.key);
})
function  mySound(key){
switch (key) {
  case "w":
    var  tom1= new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
      var  tom2= new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      case "s":
        var  snare= new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case "d":
          var  tom3= new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
          case "j":
            var  tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "k":
              var  kick= new Audio("sounds/kick-bass.mp3");
              kick.play();
              break;
              case "l":
                var  crash= new Audio("sounds/crash.mp3");
                crash.play();
                break;
  default:
  console.log(values);
}
}
function animation(currentkey){
  var buttonActive= document.querySelector("."+ currentkey);
  buttonActive.classList.add("pressed");
  setTimeout( function(){
     buttonActive.classList.remove("pressed")} ,100);


}
