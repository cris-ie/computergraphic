/**
 * Empty object for groups in scenegraph.
 *
 * @namespace cog1.data
 * @module empty
 */
define(["exports", "data"], function (exports, data) {
  "use strict";

  /**
   * Create an instance of the model defined in this module.
   *
   * @parameter object with fields:
   * @returns instance of this model.
   */

  // Vertex indices:
  //   7----6
  //	/|   /|
  // 4----5 |
  // | 3--|-2
  // |/   |/
  // 0----1
  var polyCount = 0;

  const createBar = (size, sx, sy, sz) => {
    var x = size *sx;
    var y = size* sy;
    var z = size* sz;
    var vertices = [];
    var polygonVertices = [
      [3 + polyCount, 2 + polyCount, 1 + polyCount, 0 + polyCount],
      [4 + polyCount, 5 + polyCount, 6 + polyCount, 7 + polyCount],
      [4 + polyCount, 0 + polyCount, 1 + polyCount, 5 + polyCount],
      [1 + polyCount, 2 + polyCount, 6 + polyCount, 5 + polyCount],
      [6 + polyCount, 2 + polyCount, 3 + polyCount, 7 + polyCount],
      [3 + polyCount, 0 + polyCount, 4 + polyCount, 7 + polyCount],
    ];

    for (var i = 0; i < 8; i++) {
      let t1 = x;
      let t2 = y;
      let t3 = z;
      if (i == 0 || i == 3 || i == 4 || i == 7) {
        t1 = -1 * t1;
      }
      if (i < 4) {
        t2 = -1 * t2;
      }
      if (i == 2 || i == 3 || i == 6 || i == 7) {
        t3 = -1 * t3;
      }
      vertices.push([t1, t2, t3]);
    }
    polyCount += 8;
    return [vertices, polygonVertices];
  };
  const createCube = (size) => {
    return createBar(size, 1, 1, 1);
  };

//   const scaleCube = (direction, amount, object) => {
//     if (direction == "x") {
//       object[0][1][0] += amount;
//       object[0][2][0] += amount;
//       object[0][5][0] += amount;
//       object[0][6][0] += amount;
//     }
//     if (direction == "y") {
//       object[0][2][1] += amount;
//       object[0][3][1] += amount;
//       object[0][6][1] += amount;
//       object[0][7][1] += amount;
//     }
//     if (direction == "z") {
//       object[0][4][2] += amount;
//       object[0][5][2] += amount;
//       object[0][6][2] += amount;
//       object[0][7][2] += amount;
//     }
//     return object;
//   };

  const translate = (direction, amount, object) => {
    if (direction == "x") {
      for (var i = 0; i < object[0].length; i++) {
        object[0][i] = [
          object[0][i][0] + amount,
          object[0][i][1],
          object[0][i][2],
        ];
      }
    }
    if (direction == "y") {
      for (var i = 0; i < object[0].length; i++) {
        object[0][i] = [
          object[0][i][0],
          object[0][i][1] + amount,
          object[0][i][2],
        ];
      }
    }
    if (direction == "z") {
      for (var i = 0; i < object[0].length; i++) {
        object[0][i] = [
          object[0][i][0],
          object[0][i][1],
          object[0][i][2] + amount,
        ];
      }
    }
    return object;
  };

  const scaleObject = () => {};

  exports.create = function (parameter) {
    if (parameter) {
      var scale = parameter.scale;
      // var textureURL = parameter.textureURL;
      // Each face shows a different area of the given texture (e.g, a dice).
      // var sixFacesTexture = parameter.sixFacesTexture;
    }
    // Set default values if parameter is undefined.
    if (scale == undefined) {
      scale = 200;
    }
    // Instance of the model to be returned.
	// createBar(size, vorne,höhe,breite)
    var instance = {};
    var head = createBar(3,1,1,1.25);
	var leftEar = translate ("z", 3, translate("y", 6, createBar(3,0.25,1,0.25)));
	var rightEar = translate ("z", -3, translate("y", 6, createBar(3,0.25,1,0.25)));
	var leftEye = translate ("z", 2.5, translate("x",3 -0.5, createBar(3,0.125,0.75,0.125)));
	var rightEye = translate ("z", -2.5, translate("x", 3 - 0.5, createBar(3,0.125,0.75,0.125)));
	var body = translate("y", -6, createCube(3));
	var leftPaw = translate ("z", 4, translate("y", -6, createCube(1)));
	var rightPaw = translate ("z", -4, translate("y", -6, createCube(1)));
	var leftHindPaw = translate ("z", 2, translate("y", -10, createCube(1)));
	var rightHindPaw = translate ("z", -2, translate("y", -10, createCube(1)));

    instance.vertices = [...head[0], ...leftEar[0], ...leftEye[0], ...rightEye[0],...body[0], ...rightEar[0], ...leftPaw[0], ...rightPaw[0], ...leftHindPaw[0], ...rightHindPaw[0]];
    instance.polygonVertices = [...head[1], ...leftEar[1], ...leftEye[1], ...rightEye[1],...body[1], ...rightEar[1], ...leftPaw[1], ...rightPaw[1], ...leftHindPaw[1], ...rightHindPaw[1]];
    instance.polygonColors = [];

    // Colors
    var c = 4; // key color
    instance.polygonColors = [];
    for (let i = 0; i < instance.polygonVertices.length; i++) {
      instance.polygonColors.push(c);
    }

    data.applyScale.call(instance, scale);

    return instance;
  };
});
