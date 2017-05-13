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
  Article
} from '../../element/index.js'
class Serch extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      dialogOpen :false,
      data:{},
      serchdata:[]
    }
    this.serchChange = this.serchChange.bind(this);
    this.produceElem = this.produceElem.bind(this);
    this.itemClick = this.itemClick.bind(this);
    this.dialogClose = this.dialogClose.bind(this);


  }
  dialogClose(){
    this.setState({
      dialogOpen:false
    })
  }
  serchChange(event){
    let val=event.target.value;
    let data = [];
    if(!val){
      return  data;
    }





     push.map(function(item,index){

        if(item.title.indexOf(val)!=-1){
          data.push(item);

        }
    })


    this.setState({
      serchdata:data
    })
  }
  itemClick(data){
    this.setState({
      dialogOpen:true,
      data:data
    })
  }
  produceElem(){
    let {serchdata} = this.state;
    let _this = this;
    let elems = serchdata.map(function(item,index){
      return <Item key = {index} data = {item} onclick = {_this.itemClick} />
    })
    return elems;
  }
    render() {
      let {dialogOpen,data} = this.state;
        return (
            <div className= "ui-serch">
                <div  className = "ui-serch-nav">
                  <input type = "text" placeholder="请收入你搜索的内容" onChange = {this.serchChange}/>
                </div>
                <div className = "ui-serch-content">
                {this.produceElem()}
                </div>
                <Dialog
                  open ={dialogOpen}
                  data = {data}
                  close = {this.dialogClose}
                  navColor = {data.color}
                  content = {<Article color = {data.color} data = {data} />}
                />
            </div>
        )
    }
}

//导出组件
export default Serch;
