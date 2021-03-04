
let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');
let counter = 0;

heart.onclick = function(){
  counter++
  likesNumber.textContent = counter;
  heart.classList.toggle('added');
};


/*
if (heart.classList.contains('added')){
    likesNumber.textContent--;
}
else{
    likesNumber.textContent++;
}
heart.classList.toggle('added');
*/
