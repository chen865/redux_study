import React, { Component } from 'react'

export default class Count extends Component {


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
