import React from 'react';

import './index.less';
class List extends React.Component {
  listClick (data){
    let {onclick} =this.props;
    onclick && onclick (data);
  }
    render() {
      let {iconName,userDetail,num,index} = this.props;
        return (
          <div className = "ui-list" onClick= {this.listClick.bind(this,index)}>
          <span className = {"ui-list-icon "+iconName}></span>
          <span className = "ui-list-text">{userDetail}</span>
          <span className = "ui-list-num">{num}</span>
          </div>
        )
    }
}

//导出组件
export default List;
