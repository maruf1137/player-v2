let slider = document.getElementById('slider');
let fill = document.querySelector('.bar .fill');
function fillw() {
	fill.style.width = slider.value + '%';
}
slider.addEventListener('input', fillw);

// create dropdown

const dropBtn = document.querySelectorAll('.drop__link');
// const dropItem = document.querySelector()
dropBtn.forEach((el) => {
	el.addEventListener('click', (e) => {
		e.preventDefault();
		const targetEl = el.closest('.drop__item');
		targetEl.classList.toggle('show-drop');
	});
});

/*
// show playlis and settings
const allplaylist = document.querySelector(".dropdown__item--1");

allplaylist.addEventListener("click", function () {
  showDark()
});

const newPlaylistBtn = document.querySelector('.dropdown__item--2');
// console.log(newPlaylistBtn);
newPlaylistBtn.addEventListener('click', ()=>{
  showDark()
  // console.log(e.target);
})

function showDark(){
  const body = document.querySelector("body");
  body.classList.add("dark");
  body.style.background = "#cecece";
  // body.classList.add("overlay");
  // console.log(e.target);
}
*/

// const openSidebarBtn = document.querySelector('.bar')
// openSidebarBtn.addEventListener('click', ()=>{
//   sidebar()
// })

function sidebar() {
	const mobileMenu = document.querySelector('body');
	mobileMenu.classList.toggle('show-nav');
	console.log(mobileMenu);
}
