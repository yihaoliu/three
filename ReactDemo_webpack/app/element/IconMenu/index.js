import React from 'react';

import './index.less';
class IconMenu extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      open:false
    }
    this.maskClick = this.maskClick.bind(this);
    this.elements = this.elements.bind(this);
  }
  maskClick(){
    let {open} = this.state;
    this.setState({
        open:!open
    })

  }
  elements (){
    let {lists} = this.props;
    let eles = [];
    lists.map(function(item,index){
      eles.push(  <div className = "ui-menu-icon-every" style = {{color:"#000",}}>
          {item}
        </div>)
    })
    return eles;
  }
    render() {
      let {open} = this.state;
      let {lists} = this.props;

        return (
          <div className = "ui-menu-icon ui-icon-management" onClick= {this.maskClick}>
              {open && <div className = "ui-menu-mask" onClick= {this.maskClick}></div>}
              {open &&
                <div className = "ui-menu-content content-show" onClick = {this.maskClick}>
                {this.elements()}
                </div>
              }
          </div>
        )
    }
}

//导出组件
export default IconMenu;
