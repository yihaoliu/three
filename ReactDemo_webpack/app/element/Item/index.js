import React from 'react';
var imgUrl = require('./img/friend.svg');
import './index.less';
class Item extends React.Component {
  constructor(props,context){
    super(props,context);
  }

  itemClick(data){
    let {onclick} = this.props;
    onclick && onclick(data)
  }
    render() {
      let {data} = this.props;
        return (
          <div className = "ui-item" onClick = {this.itemClick.bind(this,data)}>

              <img className = "ui-item-author-img" src={data.img||imgUrl}/>
                <div className= "ui-item-author">

                      <div className = "ui-item-author-title">{data.title||"无题"}</div>
                      <div className = "ui-item-author-name">{data.name||"匿名"}</div>
                      <div className = "ui-item-author-time">{data.time||"很久以前"}</div>
                </div>
              <div className= "ui-item-species">{data.species||"node"}</div>

            </div>
        )
    }
}

//导出组件
export default Item;
