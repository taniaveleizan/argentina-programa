let toggle = document.getElementById('container');
let curriculum = document.querySelector('article');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  curriculum.classList.toggle('active');
}