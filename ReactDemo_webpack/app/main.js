/**
 * Created by 14566 on 2016/10/16.
 */
import React from 'react';
import ReactDom from 'react-dom';
import {
  FooterNav,
  Home,
  Serch,
  Message,
  User,TopNav
} from './components/index.js';

import {
  Loadding,
  Dialog,
  Item,
  Interval
} from './element/index.js'

import {
  push
} from './data/index.js'
class Content extends React.Component {
  constructor(props,context){
      super(props,context);
        this.state = {
          open:[true,false,false,false],
          title:"首页"
        }
        this.footerClick = this.footerClick.bind(this);
        this.navTitle = this.navTitle.bind(this);
  }
  footerClick(value){
    var {open} = this.state;
    var iconName=["home","serch","message","user"];
    var _this = this;
    iconName.map(function(item,index){

      if(item==value){
        open[index] = true;

      }else{
        open[index] = false;

      }

    })
    this.setState({
      open:open
    },function(){
      _this.navTitle();
    })

  }
  navTitle(){
    let {open} = this.state;
    let title = "";
    if(open[0]){
      title = "首页"
    }else if(open[1]){
      title = "搜索"
    }else if(open[2]){
      title = "消息"
    }else if(open[3]){
      title = "我的"
    }
    this.setState({
      title
    })
  }
    render() {

      let {open,title} = this.state;
        return (

            <div style ={{height:'100%',position:"relative"}}>
                <TopNav title = {title} iconName = "ui-icon-sidebar"/>
                <div style = {{
                  marginTop: "0.83rem",
                  position: "absolute",
                  top: 0,
                  bottom: 42,
                  left: 0,
                  overflow:'scroll',
                  right: 0}}>
                {open[0]&&<Home />}
                {open[1]&&<Serch />}
                {open[2]&&<Message />}
                {open[3]&&<User />}
                </div>
                <FooterNav onclick = {this.footerClick} />

            </div>
        )
    }
}

ReactDom.render(
    <Content />
,
    document.getElementById('content')
);
