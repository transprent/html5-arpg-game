function Effect() {	this.images = new Array();	this.index = 1;	this.timer = null;	this.ctx = null;	this.x = 1000;	this.y = 300;}Effect.prototype.loadResource = function() {		var baseName = "img/effect/click/";		var imageExt = ".png";		var i = 0;		// վ����Դ		for(i = 1; i <= 16; i++){			this.images[i] = loader.addImage(baseName + "image_" + i.toString() + imageExt);		}}Effect.prototype.onMove = function(x, y) {	this.x = x;	this.y = y;	if(this.timer != null)		clearInterval(effect.timer);	this.timer = setInterval(showDestEffect, 100);	this.index = 1;};var effect = new Effect();function showDestEffect(){	effect.ctx.clearRect(0, 0, 1200, 600);	var width = effect.images[effect.index].width;	var height = effect.images[effect.index].height;	effect.ctx.drawImage(effect.images[effect.index], effect.x - width / 2, effect.y - height);	effect.index ++;	if(effect.index == 17){		effect.index = 1;		effect.ctx.clearRect(0, 0, 1200, 600);		clearInterval(effect.timer);		effect.timer = null;	}}