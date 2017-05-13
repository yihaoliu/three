//ES6
import React from 'react';
import './index.less';
import {
  Loadding,
  Dialog,
  Item,
  Interval,
  Article,
  List,
  Tab,
  Nothing
} from '../../element/index.js';

class Message extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      messageTitle:"",
      messageOpen:false,
    }
    this.produceElem = this.produceElem.bind(this);
    this.listClick = this.listClick.bind(this);
    this.dialogClose = this.dialogClose.bind(this);
  }

  produceElem(){
    let {data} = this.state;
    var userDetail = ["评论","客服","喜欢和赞","评论","关注","其他"];
    var iconNames = ["ui-icon-pay","ui-icon-giving","ui-icon-identity","ui-icon-bank-card","ui-icon-sale-fill","ui-icon-read"];
    var nums = ['>','>','>','>','>','...']
    let _this = this;
    let elems = userDetail.map(function(item,index){
      return <List key = {index} index = {index} num = {nums[index]} userDetail = {item} iconName = {iconNames[index]||""} onclick = {_this.listClick.bind(item)}/>
    })
    return elems;
  }
    listClick(index){
      var userDetail = ["评论","客服","喜欢和赞","评论","关注","其他"];
      console.log(userDetail[index],">>>>");
      this.setState({
        messageTitle : userDetail[index],
        messageOpen:true

      })
    }
    dialogClose(){
      this.setState({
        messageOpen:false
      })
    }
    render() {
        let {messageOpen,messageTitle} = this.state;
        return (
            <div className= "ui-message">
            {this.produceElem()}
            <Dialog
              open ={messageOpen}
              close = {this.dialogClose}
              title = {messageTitle}
              navColor = {"#2F4F4F"}
              content = {<Nothing />}
            />
            </div>
        )
    }
}

//导出组件
export default Message;
