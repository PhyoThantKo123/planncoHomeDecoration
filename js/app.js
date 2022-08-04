console.log('hey');

$(document).ready(function(){


	// start back to top
	$('.btn-backtotops').hide();
	$(window).scroll(function(){
		var getscrolltop = $(this).scrollTop();
		if(getscrolltop >= 370){
			$('.btn-backtotops').fadeIn(1000);
		}else{
			$('.btn-backtotops').fadeOut(1000);
		}
	})
	// end back to top
	// Start Header

	// Start Nav


	// forbugger

	$('.navbuttons').click(function(){
		$('.navbuttons').toggleClass('crossxs');
	})


	// fornav
	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();
		
		if(getscrolltop >= 200){
			$('.navbar').addClass('navmenus');
		}else{
			$('.navbar').removeClass('navmenus');
		};
		
	});

	// End Nav

	// End Header


	// Start Properties

	$('.propertylists').click(function(){

		// for activeitems
		$(this).addClass('activeitems');
		$(this).siblings().removeClass('activeitems');

		// for filter

		let getattrvalue = $(this).attr('data-filter');
		console.log(getattrvalue);

		// if(getattrvalue === 'all'){
		// 	$('.filters').show();
		// }else if(getattrvalue === 'house'){
		// 	$('.filters').hide();
		// 	$('.new').show();
		// }else if(getattrvalue === 'decoration'){
		// 	$('.filters').hide();
		// 	$('.decoration').show();
		// }else if(getattrvalue === 'furniture'){
		// 	$('.filters').hide();
		// 	$('.furniture').show();
		// }else{
		// 	$('.filters').hide();
		// 	$('.office').show();
		// };


		if(getattrvalue === 'all'){
			$('.filters').show('drop',1000);
		}else{
			$('.filters').hide();
			$('.filters').not('.'+getattrvalue).hide('slide',1000);
			$('.filters').filter('.'+getattrvalue).show('slide',1000);
		}

	});

	// for lightbox

	lightbox.option({
		'resizeDuration':200,
		'wrapAround':true,
		positionFromTop:200,
		'disableScrolling':true
	});

	// End Properties


	// Start Adv Section

	$(window).scroll(function(){
		let getscrolltop = $(this).scrollTop();

		if(getscrolltop >= 900){
			$('.advimgs').addClass('fromlefts');
			$('.advtexts').addClass('fromrights');
		}else{
			$('.advimgs').removeClass('fromlefts');
			$('.advtexts').removeClass('fromrights');
		};
		
	})

	// End Adv Section


	// Start footer
	const getyear = $('#getyear');
	const getfullyear = new Date().getUTCFullYear();
	getyear.text(getfullyear);
	// End footer


	
});