$(document).ready( function() {
let position = $( document ).scrollTop();

if ( position >1) {
	
$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');
$('#navbar-brand img').attr('src', ' img/logo-dark.svg');
$('#nav-search').attr('src', ' img/search.png');
$('#nav-buy').attr('src', ' img/buy.png');
$('#nav-menu').attr('src', ' img/menu.png')
$('.navbar').addClass('navbarScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('#navbar-brand').addClass('navbar-brandScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
}

}
);



$(document).scroll( function() {
let position = $( document ).scrollTop();

if ( position >1) {
	
$('.navbar').removeClass('bg-light');
$('#navbar-brand').removeClass('navbar-brand');
$('#nav-icon').removeClass('nav-icon');
$('#navbar-brand img').attr('src', ' img/logo-dark.svg');
$('#nav-search').attr('src', ' img/search.png');
$('#nav-buy').attr('src', ' img/buy.png');
$('#nav-menu').attr('src', ' img/menu.png');
$('#navbar-brand').addClass('navbar-brandScroll');
$('#nav-icon').addClass('nav-iconScroll');
$('.navbar').addClass('navbarScroll');
$('.navbar-light .navbar-nav .nav-link').css('color', '#000000');	
}

else {
	$('.navbar').removeClass('navbarScroll');
	$('#navbar-brand').removeClass('navbar-brandScroll');
	$('#nav-icon').removeClass('nav-iconScroll');
	$('#nav-icon').addClass('nav-icon');
	$('#navbar-brand').addClass('navbar-brand');
	$('#nav-search').attr('src', ' img/search-wh.png');
	$('#nav-buy').attr('src', ' img/buy-wh.png');
$('#nav-menu').attr('src', ' img/menu-wh.png');
$('#navbar-brand img').attr('src', ' img/logo-white.svg');
	$('.navbar').addClass('bg-light' );

$('.navbar-light .navbar-nav .nav-link').css('color', '#ffffff');
}
}
);




var options = {
		  strings: ['makes work easier', 'makes work more efficient', 'moves work forward!'],
		  typeSpeed: 100,
		    backSpeed: 10,
			backDelay: 1150,
			showCursor: false,
			 loop: false,
			    
			
		};

var typed = new Typed('#element', options);



$('.carousel').carousel({
  interval: 3000
});



$('#first-butn').on('click', function() {
	
	$('#third-block').removeClass('active');
	$('#second-block').removeClass('active');
		$('#third-butn').removeClass('active-btn');
	$('#second-butn').removeClass('active-btn');
	$('#first-butn').addClass('active-btn');
	$('#first-block').addClass('active');

})

$('#second-butn').on('click', function() {
	
	
	$('#first-block').removeClass('active');
	$('#third-block').removeClass('active');
	$('#first-butn').removeClass('active-btn');
	$('#third-butn').removeClass('active-btn');
	$('#second-butn').addClass('active-btn');
	$('#second-block').addClass('active');


})

$('#third-butn').on('click', function() {
	$('#first-block').removeClass('active');
	$('#second-block').removeClass('active');
	$('#first-butn').removeClass('active-btn');
	$('#second-butn').removeClass('active-btn');
	$('#third-butn').addClass('active-btn');
	$('#third-block').addClass('active');


})







function showSlides() {

    let slides = $("#carousel-list").children();


		
setInterval(function(){ 
	
			




			$(slides[0]).addClass ('none-car');
		
			$(slides[6]).removeClass ('none-car');

			$(slides[6]).addClass ('active-car');
			
			
			

		let buffer0 = slides[0];
		let buffer1 = slides[1];
		let buffer2 = slides[2];
		let buffer3 = slides[3];
		let buffer4 = slides[4];
		let buffer5 = slides[5];
		let buffer6 = slides[6];
		let buffer7 = slides[7];
		
		

		
			
		slides[7] = buffer0;
		slides[6] = buffer7;
		slides[5] = buffer6;
		slides[4] = buffer5;
		slides[3] = buffer4;
		slides[2] = buffer3;
		slides[1] = buffer2;
		slides[0] = buffer1;
		
		
		document.getElementById("carousel-list").appendChild(buffer0);
		

	}, 2000);
	
   
};
showSlides();

$(document).ready( function() {
let position = $( document ).scrollTop();
if ( position >400) {
	$('.scroll-top').css('display', 'block');
}

	
});

$(document).scroll( function() {
let position = $( document ).scrollTop();
if ( position >400) {
	$('.scroll-top').css('display', 'block');
}
else {
	$('.scroll-top').css('display', 'none');
}
	
});






