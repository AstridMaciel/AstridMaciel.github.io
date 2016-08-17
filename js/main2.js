$(document).ready(initPage);

function initPage()
{
	$("#main_menu a").click(navigatePage);
	initScrollMagic();
}

function navigatePage(evt)
{
	evt.preventDefault();
	$("#main_menu a").removeClass('active');
	$(this).addClass('active');

	var section = $(this).attr('href');
	var objSection = $(section);

	TweenMax.to('body', 1, {
		scrollTo:{y:objSection.position().top},
		ease:Quart.easeOut
	});
	console.log(objSection.position().top);
}

function initScrollMagic()
{
	var controller = new ScrollMagic.Controller();

	var blockTween = new TimelineMax();

	blockTween.to('#sobre-mi', 1.5);

	var portafolioTween = new TimelineMax();

	portafolioTween.to('#portafolio', 1.5, {scale: 0.8});


	var sobreMiScene = new ScrollMagic.Scene({
    	triggerElement: '#sobre-mi'
	})
	.setTween(sobre-miTween)

	var sobreMiScene = new ScrollMagic.Scene({
    	triggerElement: '#habilidades'
	})
	.setTween(habilidadesTween)

	var portafolioMiScene = new ScrollMagic.Scene({
    	triggerElement: '#portafolio'
	})
	.setTween(portafolioTween)

	var sobreMiScene = new ScrollMagic.Scene({
    	triggerElement: '#contacto'
	})
	.setTween(contactoTween)
}