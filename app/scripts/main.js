
'use strict';

var Piece = function(){
	var self = this;

	self.init();
};

Piece.prototype = {
	scrolled: false,
	introVisible: true,
	colLeft: $('.col-left'),
	colRight: $('.col-right'),
	container: $('.container'),
	loader: $('.loader'),
	loaderVisible: true,
	lastCall: 0,


	init: function(){

		var self = this;

		self.preload();


	},

	render: function(){

		var self = this;

		self.loader.addClass('hidden');
		self.loaderVisible = false;


		$(window).bind('resize', function() {
			self.colRight.transition({
				'top': self.scrollSpeed()
			},0);
		});


		$(window).bind('scroll', function(){
			var now = new Date().getTime();
			var diff = now - self.lastCall;
			console.log(diff);

			if (diff >= 30){
				self.colRight.transition({
					'top': self.scrollSpeed()
				},0, function(){
					self.lastCall = now;
				});
			}
		});



	},

	preload: function(){

		var self = this;

		var image = new Image();

		image.onload = function(){

			setTimeout(function(){
				self.render();
			},200);
		};

		image.src = $('.key').attr('src');

	},



	scrollSpeed: function(){

		var self = this;

		var leftPanelHeight = self.colLeft.height();
		var rightPaneHeight = self.colRight.height();
		var browserHeight = $(window).height();


		var diff = (browserHeight - rightPaneHeight) / (browserHeight - leftPanelHeight);

		return -$(window).scrollTop() * diff;

	},


};




new Piece();
