import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import SecurityItem from './SecurityItem'
import "./index.css";



class VCard extends Component {//组件名首字母必须大写，要不然会被认为是html标签
    constructor(props){
        super(props);//必须是分号
        this.state={
            enCodeData:"肖**",
            personAccess:true
        }
    }
    render() { 
        return ( 
            <div>
                <SecurityItem 
                enCodeData={this.state.enCodeData}
                personAccess={this.state.personAccess} 
                clickNtn={this.handleBtnClick}
                />
            </div>
         );
    }
    handleBtnClick =async () => {
        if(this.state.personAccess){     // 权限阈值小于3
            this.setState({
                enCodeData:"肖小亮"
            })
        }
    }
}
 

const element=<VCard />;
ReactDOM.render(element,document.getElementById('root'));