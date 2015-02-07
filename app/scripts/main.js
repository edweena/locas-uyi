
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

		

		$(window).bind('scroll', function(){
			$('.col-right').css('top', (calculateScrollSpeed()));
		});

		function calculateScrollSpeed(){
			var leftPanelHeight = $('.col-left').height();
			var rightPaneHeight = $('.col-right').height();
			var browserHeight = $(window).height();
			console.log(leftPanelHeight, rightPaneHeight, browserHeight);

			

			var leftPaneScrollTop = $(window).scrollTop();

			var diff = (browserHeight - rightPaneHeight) / (browserHeight - leftPanelHeight);

			return -$(window).scrollTop() * diff;
		}


		
	}
};

new Piece();


// 7cols left
// 11 right