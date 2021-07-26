for(var i=0;i<7;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var holdinnerHTML=this.innerHTML;
    makeSound(holdinnerHTML);
    animate(holdinnerHTML);
  });

}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  animate(event.key);
})

function makeSound(keys){
  switch (keys) {
    case "w":
      var sound=new Audio('sounds/tom-1.mp3');
      sound.play();
      break;
    case "a":
      var sound=new Audio('sounds/tom-2.mp3');
      sound.play();
      break;
    case "s":
      var sound=new Audio('sounds/tom-3.mp3');
      sound.play();
      break;
    case "d":
    var sound=new Audio('sounds/tom-4.mp3');
    sound.play();
    break;
    case "j":
    var sound=new Audio('sounds/snare.mp3');
    sound.play();
    break;
    case "k":
    var sound=new Audio('sounds/crash.mp3');
    sound.play();
    break;
    case "l":
    var sound=new Audio('sounds/kick-bass.mp3');
    sound.play();
    break;
    default:
      alert("Press only the displayed keys");
      break;
  }
}

function animate(bt){
  var activebt=document.querySelector("."+bt);
  activebt.classList.add("pressed");
  setTimeout(function(){
    activebt.classList.remove("pressed");
  },100);

}
