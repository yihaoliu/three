import React from 'react';

import './index.less';
class Loadding extends React.Component {
  constructor(props,context){
    super(props,context);

  }
    render() {

        return (
          <div className = "ui-loadding">
            <div className="spinner">
              <div className="double-bounce1"></div>
              <div className="double-bounce2"></div>
            </div>
          </div>
        )
    }
}

//导出组件
export default Loadding;
