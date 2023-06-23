import React, { Component } from 'react'
import {
    createIncrementAction,
    createDncrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
// 引入connect用于连接 UI组件和 redux
import {connect} from 'react-redux'


// 定义ui组件
class Count extends Component {


    increment = () => {
        const { value } = this.selectnumber;
        this.props.jia(value*1)
       
    }

    decrement = () => {
        const { value } = this.selectnumber;
        this.props.jian(value*1)
    }

    incrementIfOdd = () => {
        const { value } = this.selectnumber;
        if(this.props.count % 2 !== 0){
            this.props.jia(value*1)
        }
    
    }

    incrementAsync = () => {
        const { value } = this.selectnumber;
        this.props.jianAsync(value*1)
    }

    render() {
        //console.log('count收到',this.props);
        //console.log('count',this.props.count);
        const ss = this.props.count;
        //console.log(ss);
        return (
            <div>

                <h1>当前求和为:{ss}</h1>
                <select ref={c => { this.selectnumber = c }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>&nbsp;
            </div>
        )
    }
}


// 暴露组件
export default connect(
    state =>({count:state.count}),
//     dispatch =>({
//         jia:(number)=>{dispatch( createIncrementAction(number))},
//         jian:(number)=>{dispatch( createDncrementAction(number))},
//         jianAsync:(number)=>{dispatch( createIncrementAsyncAction(number))}
// })
    {
        jia:createIncrementAction,
        jian:createDncrementAction,
        jianAsync:createIncrementAsyncAction
    }
)(Count)
