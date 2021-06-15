import React, { Fragment, Component } from 'react';
import { EyeInvisibleFilled } from '@ant-design/icons';
import "./index.css";


class SecurityItem extends Component {
  render() {
    return (
      <Fragment>
        <div>
          {this.props.enCodeData}
          <EyeInvisibleFilled onClick={this.props.clickNtn}/>
        </div>
      </Fragment>
    );
  }
  // 通过React绑定监听的onClick事件类型绑定的方法内的setState方法都是异步的
}

export default SecurityItem;