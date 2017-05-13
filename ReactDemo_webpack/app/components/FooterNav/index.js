//ES6
import React from 'react';
import './index.less';

class FooterNav extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      iconClass:["ui-icon-home-active","ui-icon-serch","ui-icon-message","ui-icon-user"]
    }

  }
  iconClick(value){
    let {onclick} = this.props;
    var iconName=["home","serch","message","user"];
    var iconClass = iconName.map(function(item,index){

      if(value===item){
        return "ui-icon-"+item+"-active";
      }
      return "ui-icon-"+item;
    })
    this.setState({
      iconClass:iconClass
    });

    onclick && onclick(value);
  }
    render() {
        let {iconClass} = this.state;

        return (

            <div className= "ui-footr-nav">
              <div onClick={this.iconClick.bind(this,"home")}>
                  <span className={iconClass[0]}></span>
              </div>
              <div onClick={this.iconClick.bind(this,"serch")}>
                  <span className={iconClass[1]}></span>
              </div>
              <div  onClick={this.iconClick.bind(this,"message")}>
                  <span className={iconClass[2]}></span>
              </div>
              <div onClick={this.iconClick.bind(this,"user")}>
                  <span className={iconClass[3]}></span>
              </div>
            </div>
        )
    }
}

//导出组件
export default FooterNav;
