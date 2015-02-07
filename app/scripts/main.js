
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
	colLeft: $('.col-left'),
	colRight: $('.col-right'),
	container: $('.container'),


	init: function(){

		var self = this;

		$(window).bind('resize', function() {
			console.log('resize');
			self.colRight.css('top', (self.scrollSpeed()));
		});

		

		$(window).bind('scroll', function(){
			self.colRight.css('top', (self.scrollSpeed()));
		});

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
