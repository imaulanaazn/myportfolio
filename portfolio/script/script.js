
const close_btn = document.querySelector('.close_menu');
const menu = document.querySelector('.menu');
const menu_div = document.querySelectorAll('.menu a');
const menu_btn = document.querySelector('.menu_btn');
const bodyClass = document.querySelector('body');

function myAnime(){
	gsap.from('.jumbo .hello p',{
		opacity: '0',
		x: '100px',
		stagger: '.05',
		duration: '.5'
	})
	gsap.from('.jumbo .world p',{
		opacity: '0',
		x: '-100px',
		stagger: {
			each: '0.1',
			from: 'end'
		},
		duration: '.5'
	})
	gsap.from('#job',{
		opacity: '0',
		duration: '2'
	})
	gsap.from('.jumbo .socmed',{
		y: '100%',
		duration: '.5',
		opacity: '0'
	})
}

function lMenuToggle(){
	menu_btn.addEventListener('click',()=>{
		gsap.to('.menu',{
			y:0,
			duration: 0.8
		})
	})

	close_btn.addEventListener('click',()=>{
		gsap.to('.menu',{
			y:'-101%',
			duration: 0.8
		})
	})
} 

function lLoadedAnim(){
	gsap.from('.hello',{
	  	y: 100,
	  	duration: 1
	})
	gsap.from('.world',{
	  	y: -100,
	  	duration: 1
	  })
	gsap.from('.socmed img',{
	  	opacity: 0,
	  	y: 25,
	  	stagger: 0.2,
	})
	gsap.from('.menu_btn',{
	  	opacity: 0,
	  	duration: 1
	})
}

if(window.innerWidth >768){
	lMenuToggle()
	lLoadedAnim()
}else if(window.innerWidth >375){
	lMenuToggle()
	lLoadedAnim()
}else{

	const tl = gsap.timeline({paused: true})
		tl.to('.jumbo .socmed',{
			y: '100%',
			duration: '.5',
			opacity: '0'
		})

	menu_btn.addEventListener('click',()=>{
		gsap.fromTo('.menu',{
			y: '0',
			x: '100%',
			opacity: '0'
		},{
			x: '0',
			opacity: '1',
			duration: '.5'
		})
		tl.play()
		
	})

	close_btn.addEventListener('click',()=>{
		gsap.to('.menu',{
			x: '100%',
			duration: '0.5'
		})
		tl.reverse()
	})

}
