$( document ).ready(function( ) {

  $('#fullpage').fullpage({
          resize : false,
          slidesColor : ['#006363', "white", '#006363','#006363','#006363','#006363','#006363','#006363','#006363'],
          anchors : ['Home', 'Index', 'WTC', 'Lehigh', 'NoMA', 'NMAH', 'FourMile', 'NewRiver', 'Seametrey'],
          scrollingSpeed : 300,
          navigation: true, 
          slidesNavigation: true
  });
});
