import React, { Component } from 'react'

export default class Count extends Component {


    increment = () => {
        const { value } = this.selectnumber;
       
    }

    decrement = () => {
        const { value } = this.selectnumber;
    }

    incrementIfOdd = () => {
        const { value } = this.selectnumber;
        

    }

    incrementAsync = () => {
        const { value } = this.selectnumber;
    
    }

    render() {
        return (
            <div>

                <h1>当前求和为:？？？</h1>
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
