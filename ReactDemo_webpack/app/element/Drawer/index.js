import React from 'react';

import './index.less'
class Drawer extends React.Component {
    constructor(props,context){
      super(props,context);
      this.close = this.close.bind(this);
    }
    close(){
      let {close} = this.props;
      close && close();
    }
    render() {
      let {open,child} = this.props;
      let style = {transform:"translateX(-100%)"}
      if(open){
        style = {
          transform:"translateX(0%)"
        }

      }
        return (
          <div className = "ui-drawer" >
            <div className = "ui-drawer-content" style = {style}>{child}</div>
            {open&&<div className = "ui-drawer-mask" onClick = {this.close}></div>}

          </div>
        )
    }
}

//导出组件
export default Drawer;
