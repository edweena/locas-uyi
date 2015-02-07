
'use strict';

var Piece = function(){
	var self = this;

	self.init();
};

Piece.prototype = {
	scrolled: false,
	contentHeight: 0,
	prefix: null,
	introVisible: true,
	rightHeight: 0,
	leftHeight: 0,
	container: $('.container'),


	init: function(){

		var self = this;


		setTimeout(function(){
			self.rightHeight = $('.col-right').height();
			self.leftHeight = $('.col-left').height();


			//container should only be as big as small column
			// $('.container').css({
			// 	height: self.leftHeight
			// });

			self.setScroll(self.leftHeight, self.rightHeight);

		},200);

		
	},

	setScroll: function(left, right){

		var self = this;

		self.container.css({
			'height': left
		});

		

		$(document).on('scroll', function(event){
			var scrollTop = $(document).scrollTop();
			var rightOff = $('.col-right').offset().top;
			var leftOff = $('.col-left').offset().top;
			var posDiff = rightOff - leftOff;
			var diff = scrollTop - (Math.abs(posDiff));
			console.log(scrollTop, diff);

			var avg = diff - Math.abs(posDiff);
		
			
			
			$('.col-right').transition({
				y: Math.floor(-diff * (left/right))
			},0);

			// $('.col-right').offset({top: });
		});

		
	}
};

new Piece();


// 7cols left
// 11 right