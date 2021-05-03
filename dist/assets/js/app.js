if (document.querySelector('.slimg')) {
  new Splide( '.slimg',{
    type:'fade',
    rewind:true,
  }).mount();
}
document.addEventListener( 'DOMContentLoaded', function () {
	var secondarySlider = new Splide( '#secondary-slider', {
		fixedWidth  : 71,
		height      : 541,
		gap         : 10,
		cover       : true,
		isNavigation: true,
		focus       : 'center',
    direction: 'ttb',

    perPage    : 5,

		breakpoints : {
			'600': {
				fixedWidth: '33.3%',
				direction: 'ltr',
				pagination:false,

				perPage    : 3,
			}
		},
	} ).mount();
	
	var primarySlider = new Splide( '#primary-slider', {
		type       : 'fade',
		heightRatio: 0.5,
		pagination : false,
		arrows     : false,
		cover      : true,
		height:378,
		fixedWidth:383,
		breakpoints: {
			'600': {
				height:228
			}
		}
	} ); 
	primarySlider.sync( secondarySlider ).mount();
} );