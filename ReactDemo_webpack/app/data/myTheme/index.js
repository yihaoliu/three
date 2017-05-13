
var Mock = require('mockjs')
var Random = Mock.Random;
var theme = function(id){
  let datas = [];
  for(let i=0;i<7;i++){
    let data = {};
    let color = Random.color();
    let nameFirst = Random.cfirst();


    let id =  Random.natural(1, 100);
    let articleCount =  Random.natural(0, 100);
    let attentionCount =  Random.natural(0, 100);
    let img = Random.image('80x80', color, '#FFF', nameFirst);
    let title = Random.csentence();
      data = {
          id:id,
          //文章数
          articleCount:articleCount,
          //关注量
          attentionCount:attentionCount,
          //图片
          img:img,
          //标题
          title:title
      }
      datas.push(data);
  }

    return datas;
}


export default theme;
