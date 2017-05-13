import React from 'react';
import IconMenu from '../IconMenu/index.js'

import './index.less';
class Dialog extends React.Component {
  constructor(props,context){
    super(props,context);
    this.backClick = this.backClick.bind(this);
    this.dialogClose = this.dialogClose.bind(this);
  }
  backClick(){
    let {onclick} = this.props;
    onclick && onclick();
  }
  dialogClose(){
    let {close} = this.props;
    close && close();
  }
    render() {
      let {childer,open,content,data,close,navColor,title} = this.props;
      let show="100%";
      if(!open){
        show = "0%";
      }
        return (
            <div className= "ui-dialog" style= {{height:show}}>
                <div className = 'ui-dialog-nav' style = {{background : navColor||"#000"}}>
                    <div className = "ui-dialog-back" onClick ={this.dialogClose} ></div>
                    <span className = 'ui-dialog-title'>{title||""}</span>
                    <div className = 'ui-dialog-right-icon'>
                      <IconMenu lists = {["node","vue","react","angular","svg","canvas"]} />
                    </div>
                </div>
                <div className = 'ui-dialog-content'>
                {content}
                </div>
            </div>
        )
    }
}

//导出组件
export default Dialog;
