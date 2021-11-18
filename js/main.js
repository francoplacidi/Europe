$(document).ready(function(){

	//Slider

	$('.gallery').bxSlider({
			mode: 'fade',
			captions: false,
			/*slideWidth: 1200,
			slideHeight: 1200,*/
			responsive: false,
			startSlide: 0,
			pager: true,
			auto: true,
			speed: 20,
			autoDelay: 2000
		});

	if(window.location.href.indexOf('/', 'index') > -1){	
		$('.gallery').bxSlider({
			mode: 'fade',
			captions: false,
			/*slideWidth: 1200,
			slideHeight: 1200,*/
			responsive: false,
			startSlide: 0,
			pager: true,
			auto: true,
			speed: 20,
			autoDelay: 2000
		});
    }



    //Posts (json objects)	

	var posts = [
		{
			title: 'Diorama',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
			content: 'El diorama fue un entretenimiento popular muy común en la sociedad del siglo XVIII, amante del teatro. Fue inventado en 1781 por Philippe Jacques de Loutherbour en Londres, considerado como una alternativa de los famosos "Panoramas". Jacques quería convertir el arte del decorado a rango de un verdadero espectáculo, en 1822 con su socio Bouton desarrolló unos montajes de gran realismo que los denominarían dioramas.'
		},
		{
			title: 'Coliseo',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
			content: 'El Coliseo o Anfiteatro Flavio​ es un anfiteatro de la época del Imperio romano, construido en el siglo I. Está ubicado en el este del Foro Romano, y fue el más grande de los que se construyeron en el Imperio romano. Conocido originalmente como Anfiteatro Flavio pasa a ser llamado Coliseo porque a su lado había una gran estatua, el Coloso de Nerón, un monumento dedicado al emperador Nerón que posteriormente sufrió transformaciones y llegó a desaparecer.'
		},
		{
			title: 'Italia',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
			content: 'Italia, país europeo con una larga costa mediterránea, influyó considerablemente en la cultura y la cocina occidental. Su capital, Roma, es hogar del Vaticano, de ruinas antiguas y de obras de arte emblemáticas. Otras ciudades importantes son Florencia, con obras maestras del renacimiento, como el "David" de Miguel Ángel y el Domo de Brunelleschi; Venecia, la ciudad de los canales; y Milán, la capital italiana de la moda.'
		},
		{
			title: 'Cala-comte',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
			content: 'Formada por finas y nacaradas arenas y aguas de un intenso color turquesa, Cala Conta (Cala Comte) ofrece un paisaje idílico que la convierte en una de las playas preferidas por los turistas y los habitantes de San Antonio.'
		},
		{
			title: 'Venecia',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
			content: 'La clásica embarcación veneciana es la góndola, actualmente usada fundamentalmente para turistas, bodas, funerales y otras ceremonias. La mayoría de los venecianos viajan en vaporetto, que cubren rutas regulares a lo largo del Gran Canal y entre las distintas islas lagunares. Además muchos de ellos poseen barcas o lanchas motoras a modo de automóvil.'
		},	
	];
	posts.forEach((item, index) => {
		var post = `
				<article class="post">
				    <h2>${item.title}</h2>
				    <span class="date">${item.date}</span>
				    <p>
						${item.content}
				    </p>
					<a href="#" class="button-more">Leer mas</a>
			    </article>
		`;

		$("#posts").append(post);
	});

	if(window.location.href.indexOf('/', 'index') > -1){		
		var posts = [
			{
				title: 'Diorama',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'El diorama fue un entretenimiento popular muy común en la sociedad del siglo XVIII, amante del teatro. Fue inventado en 1781 por Philippe Jacques de Loutherbour en Londres, considerado como una alternativa de los famosos "Panoramas". Jacques quería convertir el arte del decorado a rango de un verdadero espectáculo, en 1822 con su socio Bouton desarrolló unos montajes de gran realismo que los denominarían dioramas.'
			},
			{
				title: 'Coliseo',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
				content: 'El Coliseo o Anfiteatro Flavio​ es un anfiteatro de la época del Imperio romano, construido en el siglo I. Está ubicado en el este del Foro Romano, y fue el más grande de los que se construyeron en el Imperio romano. Conocido originalmente como Anfiteatro Flavio pasa a ser llamado Coliseo porque a su lado había una gran estatua, el Coloso de Nerón, un monumento dedicado al emperador Nerón que posteriormente sufrió transformaciones y llegó a desaparecer.'
			},
			{
				title: 'Italia',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
				content: 'Italia, país europeo con una larga costa mediterránea, influyó considerablemente en la cultura y la cocina occidental. Su capital, Roma, es hogar del Vaticano, de ruinas antiguas y de obras de arte emblemáticas. Otras ciudades importantes son Florencia, con obras maestras del renacimiento, como el "David" de Miguel Ángel y el Domo de Brunelleschi; Venecia, la ciudad de los canales; y Milán, la capital italiana de la moda.'
			},
			{
				title: 'Cala-comte',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
				content: 'Formada por finas y nacaradas arenas y aguas de un intenso color turquesa, Cala Conta (Cala Comte) ofrece un paisaje idílico que la convierte en una de las playas preferidas por los turistas y los habitantes de San Antonio.'
			},
			{
				title: 'Venecia',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),  
				content: 'La clásica embarcación veneciana es la góndola, actualmente usada fundamentalmente para turistas, bodas, funerales y otras ceremonias. La mayoría de los venecianos viajan en vaporetto, que cubren rutas regulares a lo largo del Gran Canal y entre las distintas islas lagunares. Además muchos de ellos poseen barcas o lanchas motoras a modo de automóvil.'
			},	
		];
		posts.forEach((item, index) => {
			var post = `
					<article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>
							${item.content}
						</p>
						<a href="#" class="button-more">Leer mas</a>
					</article>
			`;

			$("#posts").append(post);
		});
	}	



	//THEME SELECTOR

	var theme = $("#theme");
	$("#to-green").click(function(){
	 	theme.attr("href", "css/green.css");
	});
	$("#to-blue").click(function(){
	 	theme.attr("href", "css/blue.css");
	});
	$("#to-red").click(function(){
	 	theme.attr("href", "css/red.css");
	});



	//SCROLL UP OMN THE WEB

	$('.upload').click(function(e){   //Cuando le de click
	 	e.preventDefault();

	 	$('html, body').animate({	//hago una animacion, que es
	 		scrollTop: 0               //subir hasta arriba de la pagina. 	
	 	}, 1000);					    //en 0.5 segundos.

	 	return false;
	 });



	//FAKE LOGIN

	$('#login form').submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem('form_name', form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != undefined){
	 	var about_paragraph	= $("#about p");
	 	about_paragraph.html("<strong>Bienvenido, "+form_name+"</strong><br/>");
	 	about_paragraph.append("<a href='#' id='logout'>Cerrar sesion</a>");
	 	$('#login').hide();
	 	$('#logout').click(function(){
	 	 	localStorage.clear();
	 	 	location.reload();      //Me aparece de nuevo el formulario para completar mis datos.
	 	});  
	}



	//VALIDATION

	if(window.location.href.indexOf('contact') > -1){

	 	$("form input[name='date']").datepicker({
	 	 	dateFormat: 'dd-mm-yy'
	 	});

	 	$.validate({
	 		lang:'es',
	 	 	errorMessagePosition: 'top',
	 	 	scrollToTopOnError: true
	 	}); 
	}
});