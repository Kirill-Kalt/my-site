
  var block_show = false;
 
function scrollTracking(){
	if (block_show) {
		return false;
	}
 
	let wt = $(window).scrollTop();
	let wh = $(window).height();
	let et = $('.level').offset().top;
	let eh = $('.level').outerHeight();
	let dh = $(document).height();   
 
	if (wt + wh >= et || wh + wt >= dh || eh + et <= wh){
		block_show = true;
		
		{
  $( "#block" ).animate({
    width: "25%",
    fontSize: "16px",
    height:"20px"
  }, 1700);
  $( "#block2" ).animate({
      width: "75%",
      height:"20px"
    }, 1700);
};
		$('.active div:eq(0)').show('fast', function(){
			$(this).next().show('fast', arguments.callee);
		});
	}
}
 
$(window).scroll(function(){
	scrollTracking();
});
	
$(document).ready(function(){ 
	scrollTracking();
});
