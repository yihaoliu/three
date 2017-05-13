import React from 'react';

import './index.less';
class theme extends React.Component {
  constructor(props,context){
    super(props,context);
    this.state = {
      btnDetail:false,
    }
    this.bottomClick = this.bottomClick.bind(this);
  }

  themeClick(data){
    let {onclick} = this.props;
    onclick && onclick(data)
  }
  bottomClick(){
    let {btnDetail} = this.state;

    this.setState({
      btnDetail:!btnDetail
    })
  }
    render() {
      let {data} = this.props;
      let {btnDetail} = this.state;
        return (
          <div className = "ui-theme" onClick = {this.themeClick.bind(this,data)}>

              <img className = "ui-theme-author-img" src={data.img||imgUrl}/>
                <div className= "ui-theme-author">

                      <div className = "ui-theme-author-title">{data.title||"无题"}</div>
                      <div className ="ui-theme-author-other ">
                        <div className = "ui-theme-author-read">{(data.articleCount||"0")+"篇文章"}</div>.
                        <div className = "ui-theme-author-look">{(data.attentionCount||"0")+"人关注"}</div>
                      </div>

                </div>
              <div className= {btnDetail?"ui-theme-bottom":"ui-theme-bottom-active"} onClick = {this.bottomClick}>{btnDetail?"不关注":"关注"}</div>

            </div>
        )
    }
}

//导出组件
export default theme;
