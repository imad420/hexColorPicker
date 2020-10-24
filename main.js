const colorArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const divArray = ['one', 'two', 'three']
const change = document.querySelector(".color__boxes")
const color__box__one = document.querySelector('.one');
const color__box__two = document.querySelector('.two');
const color__box__three = document.querySelector('.three');
const color__box__four = document.querySelector('.four')
const tag__one = document.querySelector('.tag__one')
const tag__two = document.querySelector('.tag__two')
const tag__three = document.querySelector('.tag__three')
const tag__four = document.querySelector('.tag__four')
const btn__auto = document.querySelector('.btn')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const choice__one = document.querySelector('.choice__1')
const choice__two = document.querySelector('.choice__2')
const choice__three = document.querySelector('.choice__3')
const choice__four = document.querySelector('.choice__4')

let run__one = true;
let run__two = true;
let run__three = true;
let run__four = true;

choice__one.addEventListener('click',()=>{
  if(!run__one){
    run__one = true;
  }else{
    run__one = false;
  }
})

choice__two.addEventListener('click', () => {
  if (!run__two) {
    run__two = true;
  } else {
    run__two = false;
  }
})
    
choice__three.addEventListener('click', () => {
  if (!run__three) {
    run__three = true;
  } else {
    run__three = false;
  }
})
 
choice__four.addEventListener('click', () => {
  if (!run__four) {
    run__four = true;
  } else {
    run__four = false;
  }
})
    
function dd(){
  if (run__one) {
    divOne()
  }
  if (run__two) {
    divTwo()
  }
  if (run__three) {
    divThree()
  }
  if (run__four) {
    divFour()
  }
}

change.addEventListener('click', () => {
  dd()
});

window.addEventListener('DOMContentLoaded',() => {
  divOne()
  divTwo()
  divThree()
  divFour()
});
    
function randomNumber() {
  return Math.floor(Math.random() * 16);
};

//auto button functionality 
let auto__btn__counter = 0;
let interval__id = 0;

btn1.addEventListener('click', () => {
  auto__btn__counter++;
  if (auto__btn__counter < 2) {
    interval__id  = setInterval(() => {
      dd();
      change.classList.add('btn2'); 
      btn1.textContent = 'stop';
    },1000)
  }else{
    clearInterval(interval__id);
    auto__btn__counter = 0;
    btn1.textContent = 'auto';
  };
});

function divOne() {
  let color__code = '#';
  for (let i = 0; i < 6; i++) {
    color__code += colorArray[randomNumber()];
  }
  color__box__one.style.background = color__code;
  document.querySelector('.hex__one').innerHTML = color__code;
}

function divTwo() {
  color__code = '#'
  for (let i = 0; i < 6; i++) {
    color__code += colorArray[randomNumber()];
  }
  color__box__two.style.background = color__code;
  document.querySelector('.hex__two').innerHTML = color__code;
}

function divThree() {
  color__code = '#'
  for (let i = 0; i < 6; i++) {
    color__code += colorArray[randomNumber()];
  }
  color__box__three.style.background = color__code;
  document.querySelector('.hex__three').innerHTML = color__code;
}

function divFour() {
  color__code = '#'
  for (let i = 0; i < 6; i++) {
    color__code += colorArray[randomNumber()];
  }
  color__box__four.style.background = color__code;
  document.querySelector('.hex__four').innerHTML = color__code;
}






