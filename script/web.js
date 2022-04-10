
const webCloseBtn = document.querySelector('.show_close_btn')
const webOpenBtn = document.querySelector('.show_zoomout img.show_open_btn');
const scrollBtnIcon = document.querySelector('div.scrollbtn img.down');
const menu_btn = document.querySelector('.menu_btn');
const close_btn = document.querySelector('.close_menu');
const swiperSlide = document.querySelectorAll('.swiper-slide')
let scrollBtnPoint = 'down'
let isWebOpened = false

function webScroll(event){
	if(event.key == 'ArrowDown' && scrollBtnPoint == 'down' && isWebOpened == false){
		scrollBtnPoint = 'up'
		gsap.to('.web',{
			y: '-100vh',
			duration: '.6'
		})
		gsap.to('img.down',{
			rotate: '180deg',
			duration: '.6'
		})
	}else if(event.key == 'ArrowUp' && scrollBtnPoint == 'up' && isWebOpened == false){
		scrollBtnPoint = 'down'
		gsap.to('.web',{
			y: '0vh',
			duration: '.6'

		})
		gsap.to('img.down',{
			rotate: '0deg',
			duration: '.6'
		})
	}
}



scrollBtnIcon.addEventListener('click',()=>{
	
	if(scrollBtnPoint === 'down'){
		scrollBtnPoint = 'up'
		gsap.to('.web',{
			y: '-100vh',
			duration: '.6'
		})
		gsap.to('img.down',{
			rotate: '180deg',
			duration: '.6'
		})

	}else{
		scrollBtnPoint = 'down'
		gsap.to('.web',{
			y: '0vh',
			duration: '.6'

		})
		gsap.to('img.down',{
			rotate: '0deg',
			duration: '.6'
		})
	}
})

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

if(window.innerWidth >768){
	lMenuToggle()
	const tl = gsap.timeline({paused: true})
	.add('start')
	.to('.show_zoomout img.show_open_btn',{
		width: '0'
		})
	.to('.show_zoomout',{
		width: '100vw',
		height: '100vh',
		x: 'unset',
		overflowY: 'scroll',
		bottom: 'unset',

	},'start')
	.to('.show_open .grid_wrapper',{
		display: 'grid',
		duration: '0'
	},'start')
	.to('.show_close_btn',{
		x:'0',
		right: '45px',
		rotate: '-90',
		opacity: '1'
		})
	.to('.scrollbtn .down',{
		opacity: '0',
		x: '100%',
		right: '0',
		zIndex: '0',
	},'start')

webOpenBtn.addEventListener('click',()=>{
	tl.play()
	isWebOpened = true
})

webCloseBtn.addEventListener('click',()=>{
	tl.reverse()
	isWebOpened = false
})

const swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 25,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
});

}else if(window.innerWidth >375){
	lMenuToggle()
	const swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 25,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
	});
}else{
	menu_btn.addEventListener('click',()=>{
		gsap.fromTo('.menu',{
			y: '0',
			x: '100%',
			opacity: '0',
			duration: '.5'
		},{
			x: '0',
			opacity: '1',
			duration: '.5'
		})
	})

	close_btn.addEventListener('click',()=>{
		gsap.to('.menu',{
			x: '100%',
			duration: '.5'
		})
	})
}

// swiperSlide.forEach(card => card.style.width = `${((window.innerWidth*90/100) - 30*2)/3}px`)





