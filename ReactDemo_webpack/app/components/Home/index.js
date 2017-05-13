//ES6
import React from 'react';
import './index.less';
import {
  push
} from '../../data/index.js'
import {
  Loadding,
  Dialog,
  Item,
  Interval,
  Article,
  ThemeItem,
  End
} from '../../element/index.js'
class Home extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      dialogOpen:false,
      data:{}
    }
    this.produceElem = this.produceElem.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.dialogClose = this.dialogClose.bind(this);

  }
  itemClick(data){
    this.setState({
      dialogOpen:true,
      data:data
    })
  }
  dialogClose(){
    this.setState({
      dialogOpen:false
    })
  }
  produceElem (){
    let _this = this;
    var elems = push.map(function(item,index){
      return <Item key = {index} data = {item} onclick = {_this.itemClick} />
    })
    return elems;
  }
    render() {
        if(!push){
          return <Loadding/>
        }
        let {dialogOpen,data} = this.state;

        return (

            <div className= "ui-home">
              {this.produceElem()}
              <End />
              <Dialog
                open ={dialogOpen}
                close = {this.dialogClose}
                navColor = {data.color}
                content = {<Article color = {data.color} data = {data} />}
              />
            </div>
        )
    }
}

//导出组件
export default Home;
