import React from 'react';
import './index.less';

class Article extends React.Component {
  constructor(props,context){
    super(props,context);

    this.produceContent = this.produceContent.bind(this);
  }
  produceContent(data){
    if(!data){
      return;
    }
    let elems = data.map(function(item,index){
      if(item.img){
        return <img key = {index} className ="ui-article-img" src={item.img} />
      }else{
        return (<div key = {index} className ="ui-article-text" >{item.text}</div>)
      }

    })
    return elems;
  }
    render() {
      let {data,color,content} = this.props;
        return (
            <div className = "ui-article">
              <div className = "ui-article-nav" style = {{background:color}}>
                <div className = "ui-article-title">
                {data.title}
                </div>
                <div className = "ui-article-message">
                  <span className = "ui-article-author">{data.name}</span>
                  <span className = "ui-article-time">{data.time}</span>
                </div>
              </div>
              <div className = "ui-article-content">
                {this.produceContent(data.content)}
              </div>
            </div>
        )
    }
}

//导出组件
export default Article;
