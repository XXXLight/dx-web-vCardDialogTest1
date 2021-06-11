import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";


class SecurityItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enCodeData: props.enCodeDataOut,
      perLevel:props.perLevelOut
    }
  }

  render() {

    return (
      <Fragment>
        <div>
          {this.state.enCodeData}
          <button onClick={this.handleBtnClick}>按钮</button>
        </div>
      </Fragment>
    );
  }
  // 通过React绑定监听的onClick事件类型绑定的方法内的setState方法都是异步的
  getDecodeData=(personLevel)=>{
      if(!this.state.perLevel){     // 权限阈值小于3
        return this.state.enCodeData
      }
      else {    //  权限足够，显示完整字段
        var res = "肖小亮";
        return res
      }

  }
  handleBtnClick = () => {
    this.setState({
      enCodeData: this.getDecodeData(this.state.perLevel)
    });
  }

}

const element = document.getElementById('root');

ReactDOM.render(<SecurityItem enCodeDataOut="肖**" perLevelOut={true} />, element);