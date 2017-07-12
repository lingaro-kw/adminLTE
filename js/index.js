$(function() {
	var iNow = 0;
	var bNow = 0;
	var oldH = 0;
	$('.treeview').on('click', 'a', function() {
		for(var i = 0; i < $('.treeview-menu').length; i++) {
			$('li.treeview').eq(i).css({ 'margin-bottom': 0, 'border-left': '3px solid transparent' });
			$('.treeview-menu').eq(i).css('height', 0);
		}
		iNow++;
		if(iNow % 2) {
			$(this).parent().css({ 'margin-bottom': 50, 'border-left': '3px solid #3C8DBC' });
			$(this).next().css('height', 50);
		} else {
			$('li.treeview').css('margin-bottom', 0);
			$('.treeview-menu').css('height', 0);
		};
	});
	$('.bar-left').on('click', function() {
		bNow++;
		if(bNow % 2) {
			$('.sidebar').css('width', '50');
			$('.sidebar p,.sidebar span,.sidebar .header,.sidebar form,.sidebar .info').css('display', 'none');
			$('.content-wrapper').css('border-left', '50px solid #222d32');
			$('.user-panel img').css('width', 30);
			$('.lg1').css('display', 'none');
			$('.lg-min').css('display', 'block');
			$('.navtop').css('padding-left', 35);
		} else {
			//$('.sidebar p,.sidebar span,.sidebar .header,.sidebar form,.sidebar .info').css('display', 'none');
			$('.sidebar p,.sidebar .header,.sidebar form,.sidebar .info').css('display', 'block');
			$('.sidebar span').css('display', 'inline-block');
			$('.sidebar .formtext').css({
				'display': 'block',
				'width': '172'
			});
			$('.sidebar').css('width', '230');
			$('.content-wrapper').css('border-left', '230px solid #222d32');
			$('.user-panel img').css('width', 45);
			$('.lg1').css('display', 'block');
			$('.lg-min').css('display', 'none');
			$('.navtop').css('padding-left', 215);
		}

	});
	//fa-plus
	$('.fa-minus').on('click', function() {
		oldH=$(this).parent().parent().parent().parent().height();
		$(this).attr('class', 'fa fa-plus');
		var footer = $(this).parent().parent().parent().next().next();
		$(this).parent().parent().parent().next().css({ 'overflow': 'hidden', 'height': 0 });
		if(footer.length) footer.css({ 'overflow': 'hidden', 'height': 0 });
	});
	
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});
});