function UM_Member_Grid( container ) {
	container.masonry({
		itemSelector: '.um-member',
		columnWidth: '.um-member',
		gutter: '.um-gutter-sizer',
	});

}

jQuery(document).ready(function() {

	/* Members wall JS */
	jQuery('.um-members').each(function(){
		UM_Member_Grid( jQuery(this) );
	});
	
	/* Users with empty user meta */
	jQuery('.um-member-meta-main').each(function(){
		if ( jQuery(this).find('.um-member-metaline').length == 0 ) {
			jQuery(this).remove();
		}
	});
	
	/* Users with empty user social */
	jQuery('.um-member-connect').each(function(){
		if ( jQuery(this).find('a').length == 0 ) {
			jQuery(this).remove();
		}
	});
	
	/* load member's meta */
	jQuery(document).on('click', '.um-member-more a', function(e){
		e.preventDefault();

		var block = jQuery(this).parents('.um-member');
		var container = jQuery(this).parents('.um-members');
		block.find('.um-member-more').hide();
		block.find('.um-member-meta').slideDown( function(){ UM_Member_Grid( container ) } );
		block.find('.um-member-less').fadeIn( );
		
		setTimeout(function(){ UM_Member_Grid( container ) }, 100);

		return false;
	});
	
	/* hide member's meta */
	jQuery(document).on('click', '.um-member-less a', function(e){
		e.preventDefault();

		var block = jQuery(this).parents('.um-member');
		var container = jQuery(this).parents('.um-members');
		block.find('.um-member-less').hide();
		block.find('.um-member-meta').slideUp( function() {
			block.find('.um-member-more').fadeIn();
			UM_Member_Grid( container );
		});

		return false;
	});
	
	/* submit search form */
	jQuery(document).on('click', '.um-do-search', function(e){
		e.preventDefault();
		jQuery(this).parents('form').submit();
		return false;
	});

});