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
		let instance = {};

		instance.vertices = [
        ];

        // helper function
        function add_quad(v1, v2, v3, v4){
            instance.vertices.push(v1);
            instance.vertices.push(v2);
            instance.vertices.push(v3);
            instance.vertices.push(v4);

        }

        let num = 5 ; // * 12 is num of tringular polygons


        // creating a cube first
        for(let x = -num; x < num; x++){
            for(let y = -num; y < num; y++){
                for(let z = -num; z < num; z++){
                    // side 1
                    if(x == - num){
                        let vec1 = [x ,y ,z];
                        let vec2 = [x ,y ,z+1];
                        let vec3 = [x ,y+1 ,z+1];
                        let vec4 = [x ,y+1 ,z];
                        add_quad(vec1, vec2, vec3, vec4);
                    }
                    // side 2
                    if(x == num-1){
                        let vec1 = [x+1 ,y ,z];
                        let vec2 = [x+1 ,y ,z+1];
                        let vec3 = [x+1 ,y+1 ,z+1];
                        let vec4 = [x+1 ,y+1 ,z];
                        add_quad(vec1, vec2, vec3, vec4);
                    }
                    // side 3
                    if(y == - num){
                        let vec1 = [x ,y ,z];
                        let vec2 = [x ,y ,z+1];
                        let vec3 = [x+1 ,y ,z+1];
                        let vec4 = [x+1 ,y ,z];
                        add_quad(vec1, vec2, vec3, vec4);
                    }
                    // side 4
                    if(y == num-1){
                        let vec1 = [x ,y+1 ,z];
                        let vec2 = [x ,y+1 ,z+1];
                        let vec3 = [x+1 ,y+1 ,z+1];
                        let vec4 = [x+1 ,y+1 ,z];
                        add_quad(vec1, vec2, vec3, vec4);
                    }
                    // side 5
                    if(z == - num){
                        let vec1 = [x ,y ,z];
                        let vec2 = [x ,y+1 ,z];
                        let vec3 = [x+1 ,y+1 ,z];
                        let vec4 = [x+1 ,y ,z];
                        add_quad(vec1, vec2, vec3, vec4);
                    }
                    // side 6
                    if(z == num-1){
                        let vec1 = [x+1 ,y ,z+1];
                        let vec2 = [x+1 ,y+1 ,z+1];
                        let vec3 = [x ,y+1 ,z+1];
                        let vec4 = [x ,y ,z+1];
                        add_quad(vec1, vec2, vec3, vec4);
                    }
                }
            }
        }

        //Normalize to get a sphere
        for(let i = 0; i < instance.vertices.length; i++){
            let mag = Math.sqrt(Math.pow(instance.vertices[i][0],2)
                              + Math.pow(instance.vertices[i][1],2)
                              + Math.pow(instance.vertices[i][2],2)
                      );
            instance.vertices[i][0] = instance.vertices[i][0] / mag;
            instance.vertices[i][1] = instance.vertices[i][1] / mag;
            instance.vertices[i][2] = instance.vertices[i][2] / mag;
        }
        
		instance.polygonVertices = [
        ];	

        // adding quadrangle polys
        for(let i = 0; i < instance.vertices.length; i+=4){
            instance.polygonVertices.push([
                i,
                i+1,
                i+2,
                i+3,
            ]);
        }


        // Colors
        var c = 4; // key color
		instance.polygonColors = [];
        for(let i = 0; i < instance.polygonVertices.length; i++){
            instance.polygonColors.push(c);
        }
		
		data.applyScale.call(instance, scale);

		return instance;		
	};
});