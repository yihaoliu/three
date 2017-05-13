//ES6
import React from 'react';
var userImg = require('./images/user-img.jpg');
import './index.less';
import {
  push,
  myTheme
} from '../../data/index.js'
import {
  Loadding,
  Dialog,
  Item,
  Interval,
  Article,
  List,
  ThemeItem,
} from '../../element/index.js'

class Theme extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {

      data:myTheme(),
      openTheme:false,
    }
    this.produceElem = this.produceElem.bind(this);


  }
  produceElem(){
    let {data} = this.state;
    let elems = data.map(function(item,index){
      return <ThemeItem key = {index} data = {item} />
    })
    return elems;
  }

    render() {
      let {data} = this.state;
        return (
          <div>
            {this.produceElem()}
          </div>
        )
    }
}

//导出组件
export default Theme;
