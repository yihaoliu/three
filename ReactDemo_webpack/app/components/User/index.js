//ES6
import React from 'react';
var userImg = require('./images/user-img.jpg');
import './index.less';
import {
  push,
  userData
} from '../../data/index.js'
import {
  Loadding,
  Dialog,
  Item,
  Interval,
  Article,
  List,
  Tab,
  End
} from '../../element/index.js';
import Theme from './Theme.js'
import UserDetail from './UserDetail.js'

class User extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {

      data:userData(),
      openTheme:false,
      openUserDetail:false,
    }
    this.produceElem = this.produceElem.bind(this);
    this.themeClose = this.themeClose.bind(this);
    this.listClick = this.listClick.bind(this);
    this.openUserDetail = this.openUserDetail.bind(this);
    this.userDetailClose  = this.userDetailClose.bind(this);
    this.userDetailSubmit = this.userDetailSubmit.bind(this);


  }
  listClick(){
    this.setState({
      openTheme:true
    })
  }
  produceElem(){
    let {data} = this.state;
    var userDetail = ["公开文章","私密文章","收藏的文章","喜欢的文章","我的专题","我的文集","浏览记录"];
    var iconNames = ["ui-icon-pay","ui-icon-giving","ui-icon-identity","ui-icon-bank-card","ui-icon-sale-fill","ui-icon-read"];
    let _this = this;
    let elems = userDetail.map(function(item,index){
      return <List key = {index} index = {index} num = {data.detail[index]} userDetail = {item} iconName = {iconNames[index]||""} onclick = {_this.listClick}/>
    })
    return elems;
  }
  themeClose(){
    this.setState({
      openTheme:false
    })
  }
  userDetailClose(){
    this.setState({
      openUserDetail:false
    })
  }
  openUserDetail(){
    let {data} = this.state;
    this.setState({
      openUserDetail:true,
    })
  }
  userDetailSubmit(){

  }
    render() {
      let {data,openTheme,openUserDetail} = this.state;


        return (
            <div className= "ui-user">
              <div className = "ui-user-nav">
                <span>{data.name}</span>
              </div>
              <div className = "ui-user-content">
                  <img className = "ui-user-img" src = {userImg}/>

                  <div className = "ui-user-other">
                    <span className="ui-user-name">{data.name}</span>
                    <span>
                      写了{data.textNum}个字
                    </span>
                    <span className= "ui-user-love">
                      获得了{data.loveNum}个喜欢
                    </span>
                  </div>
                  <div className = "ui-user-change-msg" onClick = {this.openUserDetail}>
                    编辑个人资料
                  </div>


              </div>

              <Interval />
                {this.produceElem()}
                <End />
                <Dialog
                  open ={openTheme}
                  title = "专题"
                  close = {this.themeClose}

                  content = {<Theme />}
                />

                <Dialog
                  open ={openUserDetail}
                  title = "编辑个人资料"
                  close = {this.userDetailClose}
                  content = {<UserDetail data = {data}  onSubmit = {this.userDetailSubmit}/>}


                />
            </div>
        )
    }
}

//导出组件
export default User;
