//YAGNI
(function () {
	"use strict";
	window.Doodle = function(oApplication){//window this de canvas
		//global params pour le jeu
		//
		var oSpriteSheet = null,
			iAnimationRequestId = 0,
			aPlataforme = [],//pour garder une reference de nos plataforme
			oTime = {
				"start": null,
				"current": null
			};

		//background deux elements un frame 2 render on redesigne 60 fois par seconds
		//drawimage x y de la source et x y du cavas
		var oDoodle = {
			"render": function(x,y){
				oApplication.context.beginPath();
				oApplication.context.fillStyle = "#252458";
				oApplication.context.rect(x, y, 30, 30);
				oApplication.context.fill();
				oApplication.context.closePath();
			}
		};
		var plataformesn = [];
		
		var oPlataforme = {
			"render": function(x,y){
				this.x = x;
				this.y = y;
				x = 60;
				y = 120;
				oApplication.context.beginPath();
				var x =x*Math.round(Math.random());
				var y =y*Math.round(Math.random())+59;
				console.log("valeur de x ",x, "et valeur de y", y);
				for(var i=0;i<5;i++){
					y += 60;//if and else et un 
					x += Math.round(Math.random()) % 2 ? - 21 : +60;
					if (x < 0) {
						x = 0;
					}
					if (x+80 > 288){
						x = 208;
					}
					oApplication.context.fillStyle = "blue";
					oApplication.context.rect(x, y, 80, 15);
					console.log("valeur de x ",x, "et valeur de y", y);
					oApplication.context.fill();
					oApplication.context.closePath();

				}
			}
		};
		oPlataforme.render();
		oDoodle.render(60,270);
	};




})();