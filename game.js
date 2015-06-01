(
	function () {
		"use strict";

		var app = {
				"canvas": null,
				"context": null, //the drawing context of
				"width": 0,
				"height": 0
			};
		var _isCanvasSupported = function($canvasElt){//on se attend a avoir un bolean

			return !!$canvasElt.getContext;//pour returner la function
			
			/*euivaux a ceciif ($canvasElt.getContext) {
				return true;
			} else{
				return false;
			}*/

		};

		app.setup = function() {
			this.canvas = document.querySelector( "#game" );
			//detect support
			if (!_isCanvasSupported( this.canvas)) {
				return console.error( "Oops. Canvas isn't supported! Go get a life" )
			};
			//console.log( "youpi" );
			this.context = this.canvas.getContext( "2d" );// contxte 2d //web gl pour la 3d dans le web// webgl2 
			//on le affecte dans une variable
			this.width = this.canvas.width;
			this.height = this.canvas.height;
			//notes personnel = programation logo et scratch, pour aprendre a programer a preconfigurer flash
			var game = new window.Doodle(this);//this oapplication
		};

		app.setup();

})();