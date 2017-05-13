var Mock = require('mockjs')
var Random = Mock.Random;
//生成图片
Random.dataImage('80x80', 'Hello Mock.js!')
//生成姓
Random.cfirst();
// 生成名
Random.cname();
//生成标题
Random.csentence();
//生成颜色
Random.color();
//生成时间
Random.datetime();
//生成段落
Random.cparagraph()
var data = [];
for(let i=0;i<100;i++){
  let obj={};
  let content =[];
  let color = Random.color();
  let nameFirst = Random.cfirst();
  let nameLast = Random.cname();
  let name = nameFirst+nameLast;
  let title = Random.csentence();
  let time = Random.datetime();
  let img = Random.image('80x80', color, '#FFF', nameFirst);
  let len = Random.natural(5, 10);
  let loveNum = Random.natural(0, 10000);
  let readNum = Random.natural(0, 10000);
  let commentsNum = Random.natural(0, 10000);
  let authorId = Random.natural(0, 10000);
  for(let j=0;j<len;j++){
    let text = Random.cparagraph(3,5);
    content.push({text:text});
  }
  for(let v=0;v<len-3;v++){
    let colors = Random.color();
    let height = Random.natural(50, 100);
    let world = Random.word();
    let imgs =  Random.image('100x'+height, colors, '#FFF', world);
    content.push({img:imgs});
  }
  content = content.sort(function(){ return 0.5 - Math.random() })
  obj= {
    id:i,
    img:img,
    title :title,
    name : name,
    time : time,
    color :color,
    content :content,
    loveNum:loveNum,
    readNum:readNum,
    commentsNum:commentsNum,
    authorId:authorId,
  }
  data.push(obj);
}
export default data;
