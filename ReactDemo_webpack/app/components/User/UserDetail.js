//ES6
import React from 'react';
var userImg = require('./images/user-img.jpg');
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
class UserDetail extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      messageTitle:""
    }
    this.close = this.close.bind(this);
    this.produceElem = this.produceElem.bind(this);
    this.listClick = this.listClick.bind(this);

  }
  produceElem(){
    var userDetail = ["评论","客服","喜欢和赞","评论","关注","其他"];
    var iconNames = ["ui-icon-pay","ui-icon-giving","ui-icon-identity","ui-icon-bank-card","ui-icon-sale-fill","ui-icon-read"];
    var nums = ['>','>','>','>','>','...']
    let _this = this;
    let elems = userDetail.map(function(item,index){
      return <List key = {index} index = {index} num = {nums[index]} userDetail = {item} iconName = {iconNames[index]||""} onclick = {_this.listClick.bind(index)}/>
    })
    return elems;
  }

  listClick(index){
    var userDetail = ["评论","客服","喜欢和赞","评论","关注","其他"];
    this.setState({
      messageTitle : userDetail[index],
    })
  }

  close(){
    let  {close} = this.props;
    close && close();
  }


    render() {
      let {data,imgHeight,color} = this.props;
        return (
          <div className = "user-detail">
            <div className = "user-bg-img user-detail-bg" style = {{height:imgHeight||250}}></div>
            <img className = "user-detail-img" src = {userImg} style = {{top:imgHeight || 250}} />
            <div className = "user-detail-name" style = {{color:color||"#000"}}>{(data && data.name)||""}</div>
            <div className = "user-detail-signature">{this.produceElem()}</div>

          </div>
        )
    }
}

//导出组件
export default UserDetail;
