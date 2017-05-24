var elem = document.getElementById("head");
var demos = ['demo1','demo2','demo3','demo4','demo5'];
var elems = demos.map(function(item,index){
    return '<a href = "./'+item+'.html">'+item+'</a>'
})
elem.innerHTML = elems.join('');
