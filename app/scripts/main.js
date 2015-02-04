
'use strict';

var Piece = function(){
	var self = this;

	self.init();
};

Piece.prototype = {
	scrolled: false,
	contentHeight: 0,
	introVisible: true,
	hero: $('.hero'),
	frame: $('.container'),
	left: $('.col-left'),
	right: $('.col-right'),
	scrollDist: 0,
	offset: 0,


	render: function(){
		var self = this;

		self.contentHeight = self.frame[0].scrollHeight;

		self.frame.bind('scroll', function(event){
			self.hero.hide();

			var scrollPos = self.frame.scrollTop();

			console.log(scrollPos);

			console.log(self.contentHeight);

			if (scrollPos < (self.contentHeight / 2)){
				
				self.offset = -scrollPos * 0.2;
				
				self.left.transition({
					y: self.offset
				},0);
			}

			else{
				self.offset = self.offset + (scrollPos * 0.2);
				self.left.transition({
					y: self.offset
				},0);
			}
			
		});
	},

	preload: function(){
		var self = this;
		var image = new Image();

		image.onload = function(){

			setTimeout(function(){
				self.render();
			}, 250);
		};

		//load image
		image.src = $('.hero').attr('src');
		self.hero.append(image);
	},
	

	init: function(){
		var self = this;
		console.log('setup');
		self.preload();
	}
};

new Piece();
