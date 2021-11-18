$(document).ready(function() {

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

    

    //ACCORDION

    if(window.location.href.indexOf('about') > -1){
        $("#accordion").accordion();
    }

    });