var renderer;
var stats;
function initThree() {
    width = document.getElementById('canvas-frame').clientWidth;
    height = document.getElementById('canvas-frame').clientHeight;
    renderer = new THREE.WebGLRenderer({
        antialias : true
    });
    renderer.setSize(width, height);
    document.getElementById('canvas-frame').appendChild(renderer.domElement);
    renderer.setClearColor(0xFFFFFF, 1.0);

    // stats = new stats();
    // stats.domElement.style.position = 'absolute';
    // stats.domElement.style.left = '0px';
    // stats.domElement.style.top = '0px';
    // document.getElementById('canvas-frame').appendChild(stats.domElement);

    /*
    Stats到底做了什么事情呢？我们来分析一下。

    1、setMode函数

    参数为0的时候，表示显示的是FPS界面，参数为1的时候，表示显示的是MS界面。

    2、stats的domElement

    stats的domElement表示绘制的目的地（DOM），波形图就绘制在这上面。

    3、begin

    begin，在你要测试的代码前面调用begin函数，在你代码执行完后调用end()函数，这样就能够统计出这段代码执行的平均帧数了。
    */


}

function initStats() {

    var stats = new Stats();

    stats.setMode(0); // 0: fps, 1: ms

    // Align top-left
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '50px';

    document.getElementById("Stats-output").appendChild(stats.domElement);

    return stats;
}
var camera;
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 600;
    camera.up.x = 0;
    camera.up.y = 1;
    camera.up.z = 0;
    camera.lookAt({
        x : 0,
        y : 0,
        z : 0
    });
}
var scene;
function initScene() {
   scene = new THREE.Scene();
}

var light;
function initLight() {
   light = new THREE.AmbientLight(0xFFFFFF);
   light.position.set(100, 100, 200);
   scene.add(light);
   light = new THREE.PointLight(0x00FF00);
   light.position.set(0, 0,300);
   scene.add(light);
}

var cube;
function initObject() {

   var geometry = new THREE.CylinderGeometry( 100,150,400);
   var material = new THREE.MeshLambertMaterial( { color:0xFFFF00} );
   var mesh = new THREE.Mesh( geometry,material);
   mesh.position = new THREE.Vector3(0,0,0);
   scene.add(mesh);
}

function threeStart() {
  initStats();
   initThree();
   initCamera();
   initScene();
   initLight();
   initObject();
   animation();

}
function animation()
{
   //renderer.clear();
   camera.position.x =camera.position.x +1;
   renderer.render(scene, camera);
   requestAnimationFrame(animation);
}
threeStart();
