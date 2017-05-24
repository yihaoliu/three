var scene = new THREE.Scene(); //实例化一个场景
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); //实例化一个摄像头

var renderer = new THREE.WebGLRenderer(); //实例化一个渲染器
renderer.setSize( window.innerWidth, window.innerHeight ); //设置渲染的范围
document.body.appendChild( renderer.domElement ); //将场景插入页面

//下边是一个几何体的方法
//CubeGeometry(width, height, depth, segmentsWidth, segmentsHeight, segmentsDepth, materials, sides)

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
    /*render( scene, camera, renderTarget, forceClear )
    scene：前面定义的场景

    camera：前面定义的相机

    renderTarget：渲染的目标，默认是渲染到前面定义的render变量中

    forceClear：每次绘制之前都将画布的内容给清除，即使自动清除标志autoClear为false，也会清除。*/
};

render();
