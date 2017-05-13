var Mock = require('mockjs')
var Random = Mock.Random;

var userData = function(){
  let color = Random.color();
  var data = {
    id:1,
    name:Random.cfirst()+Random.cname(),
    src:Random.image('100x100', color, '#FFF', Random.cfirst()),
    detail:[Random.natural(0, 10000),Random.natural(0, 10000),Random.natural(0, 10000),Random.natural(0, 10000),Random.natural(0, 10000),Random.natural(0, 10000),Random.natural(0, 10000)],
    textNum:Random.natural(0, 10000),
    loveNum:Random.natural(0, 10000)


  }
  return data;
}
export default userData;
