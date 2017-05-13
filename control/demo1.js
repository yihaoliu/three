


var scene = new THREE.Scene(); //实例化一个场景
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); //实例化一个摄像头

var renderer = new THREE.WebGLRenderer(); //实例化一个渲染器
renderer.setSize( window.innerWidth, window.innerHeight ); //设置渲染的范围
document.body.appendChild( renderer.domElement ); //将场景插入页面

var geometry = new THREE.BoxGeometry( 1, 1, 1 ); //实例化一个骨架
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } ); //选择材质
var cube = new THREE.Mesh( geometry, material );//讲骨架与材质融合生成一个物体
scene.add( cube ); //将物体放入场景

camera.position.z = 5;

var render = function () {
    requestAnimationFrame( render );

    cube.rotation.x += 0.1;  //改变物体的坐标
    cube.rotation.y += 0.1;

    renderer.render(scene, camera);//渲染世界
};

render();
