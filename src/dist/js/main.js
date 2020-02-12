$(window).scroll(function() {
  var link = $("#link-1, #link-2, #link-3, #link-4");
  if ($("#menu").offset().top > 85) {            
    $("#menu").addClass("bg-dar");        
    $("#menu").removeClass("bg-trasparency");            
    $("#menu").addClass("menu-shadow");            
    $("#img-menu").removeClass("logo-menu");
    $("#img-menu").addClass("logo-small");
  } else {    
    $("#menu").removeClass("bg-dar");                 
    $("#menu").addClass("bg-trasparency");                                        
    $("#menu").removeClass("menu-shadow");
    $("#img-menu").removeClass("logo-small");
    $("#img-menu").addClass("logo-menu");
  }                     
});