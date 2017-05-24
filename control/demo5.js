/*
  初始化WebGL绘图上下文
  初始化着色器程序
  建立模型和数据缓存
  完成绘制和动画
*/




var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//设置相机的位置
camera.position.x = 1;//相机的位置
camera.position.y = 0;
camera.position.z = 100;
// camera.up.x = 0;//相机以哪个方向为上方
// camera.up.y = 1;
// camera.up.z = 0;
camera.lookAt({//相机看向哪个坐标
                    x : 10,
                    y : 10,
                    z : 10
                });
var geometry = new THREE.BoxBufferGeometry( 1, 1, 1);
var material = new THREE.MeshBasicMaterial( { color: 0xafc0ca} );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
var geometry = new THREE.BoxBufferGeometry( 3, 4, 0.01,2,3,4 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  cube.rotation.x =90;
  cube.rotation.y = 0;

  renderer.render(scene, camera);
};
function positionXAdd(){
  camera.position.x += 0.1;

}
function positionXSub(){
  camera.position.x -= 0.1;

}
function positionYAdd(){
  camera.position.y += 0.1;

}
function positionYSub(){
  camera.position.y -= 0.1;

}
function positionZAdd(){
  camera.position.z += 0.1;

}
function positionZSub(){
  camera.position.z -= 0.1;

}

function upXAdd(){
  camera.up.x = 1;//相机以哪个方向为上方
  camera.up.y = 0;
  camera.up.z = 0;
  console.log("ll");
}
function upYAdd(){
  camera.up.x = 0;//相机以哪个方向为上方
  camera.up.y = 1;
  camera.up.z = 0;
}
function upZAdd(){
  camera.up.x = 0;//相机以哪个方向为上方
  camera.up.y = 0;
  camera.up.z = 1;
}
render();
