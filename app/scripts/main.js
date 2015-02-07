
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


	init: function(){

		var self = this;


		setTimeout(function(){
			self.rightHeight = $('.col-right')[0].scrollHeight;
			self.leftHeight = $('.col-left')[0].scrollHeight;
			console.log(self.rightHeight, self.leftHeight);

			self.setScroll(self.leftHeight, self.rightHeight);

		},200);

		
	},

	setScroll: function(left, right){

		$('.container').on('scroll', function(event){
			console.log($('.col-right').offset().top);
			var scrollTop = $('.container').scrollTop();
			
			var leftDiff = left - containerHeight;
			var leftRatio = (1 / leftDiff) * scrollTop;

			var rightDiff = right - containerHeight;
			var rightScroll = leftRatio * rightDiff;

			console.log(rightScroll);
			
			// $('.col-right').transition({
			// 	y: -rightScroll / 3
			// },0);

			$('.col-right').offset({top: -scrollTop * (right / left)});
		});
		var containerHeight = $('.container').height();
		console.log(containerHeight);

		
	}
};

new Piece();


// 7cols left
// 11 right