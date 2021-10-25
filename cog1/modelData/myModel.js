/**
 * 3D key model.
 * 
 * @namespace cog1.data
 * @module myModel
 */
 define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * Create an instance of the model defined in this module.
	 * 
	 * @parameter object with fields:
	 * @parameter scale is the edge length of the cube.
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		
        if(parameter) {
			var scale = parameter.scale;
			// var textureURL = parameter.textureURL;
			// Each face shows a different area of the given texture (e.g, a dice).
			// var sixFacesTexture = parameter.sixFacesTexture;
		}
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 200;
		}

		// Instance of the model to be returned.
		var instance = {};

		instance.vertices = [
			// bottom (y=-1)
            [0,-1,0],
            [0,-1,1],
            [0.5,-1,2],
            [0,-1,3],
            [0.5,-1,3],
            [0,-1,4],
            [0.5,-1,5],
            [0,-1,5],
            [0,-1,6],
            [-0.5,-1,6.5],
            [-1,-1,6],
            [-1,-1,-1],
            [-2,-1,-2],
            [-2,-1,-4],
            [-1,-1,-5],
            [0,-1,-5],
            [0,-1,-4],
            [-1,-1,-4],
            [-1,-1,-3],
            [1,-1,-3],
            [1,-1,-4],
            [0,-1,-4],
            [0,-1,-5],
            [1,-1,-5],
            [2,-1,-4],
            [2,-1,-2],
			// top (y=+1)
            [0,0,0],
            [0,0,1],
            [0.5,0,2],
            [0,0,3],
            [0.5,0,3],
            [0,0,4],
            [0.5,0,5],
            [0,0,5],
            [0,0,6],
            [-0.5,0,6.5],
            [-1,0,6],
            [-1,0,-1],
            [-2,0,-2],
            [-2,0,-4],
            [-1,0,-5],
            [0,0,-5],
            [0,0,-4],
            [-1,0,-4],
            [-1,0,-3],
            [1,0,-3],
            [1,0,-4],
            [0,0,-4],
            [0,0,-5],
            [1,0,-5],
            [2,0,-4],
            [2,0,-2],

        ];

		instance.polygonVertices = [
            [0,  1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
            [26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],
            [0,1,27,26],
            [1,2,28,27],
            [2,3,29,28],
            [3,4,30,29],
            [4,5,31,30],
            [5,6,32,31],
            [6,7,33,32],
            [7,8,34,33],
            [8,9,35,34],
            [9,10,36,35],
            [10,11,37,36],
            [11,12,38,37],
            [12,13,39,38],
            [13,14,40,39],
            [14,15,41,40],
            [15,16,42,41],
            [16,17,43,42],
            [17,18,44,43],
            [18,19,45,44],
            [19,20,46,45],
            [20,21,47,46],
            [21,22,48,47],
            [22,23,49,48],
            [23,24,50,49],
            [24,25,51,50],
            [25,0,26,51]
        ];	

        var c = 4; // key color
		instance.polygonColors = [c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c,c];
		
		data.applyScale.call(instance, scale);

		return instance;		
	};
});