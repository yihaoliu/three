//ES6
import React from 'react';
import './index.less';
import {
  Loadding,
  Dialog,
  Item,
  Interval,
  Article,
  ThemeItem,
  End,
  Drawer

} from '../../element/index.js'
import UserDetail from '../User/UserDetail.js'
class TopNav extends React.Component {

  constructor(props,context){
    super(props,context);
    this.state = {
      drawerOpen:false
    }
    this.drawerClose = this.drawerClose.bind(this);
    this.drawerOpen = this.drawerOpen.bind(this);
  }
    drawerClose(){
      this.setState({
        drawerOpen : false
      })

    }
    drawerOpen(){
      this.setState({
        drawerOpen : true
      })
    }
    render() {
        let {title,iconName} = this.props;
        let {drawerOpen} = this.state;
        return (
            <div className= "top-nav">
              <span className = {"top-nav-left-icon "+iconName} onClick = {this.drawerOpen}></span>
              <div className = "top-nav-title" >{title}</div>
              <span className = "top-nav-right-icon"></span>
              <Drawer
                open = {drawerOpen}
                close = {this.drawerClose}
                child = {<UserDetail imgHeight ="200" data = {{name:"我的"}} color="#000"/>}
              />
            </div>
        )
    }
}

//导出组件
export default TopNav;
