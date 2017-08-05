import './body.html';
import './body.css';
import '../../components/grid/grid.html';

Template.App_body.onCreated(function () {
   $(document).on('scroll', function() {
   	 $('.main-header').addClass('on-scroll')
	   console.log('scrolling'); // you *really* don't want to alert in a scroll
	   // $fixedHeader.css("top", getScrollTop()); 
	});
});
