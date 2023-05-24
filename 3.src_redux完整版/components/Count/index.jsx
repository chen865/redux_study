import React, { Component } from 'react'
import store from '../../redux/store';
// 引入action creator
import { createDncrementAction, createIncrementAction } from '../../redux/count_action';

export default class Count extends Component {



    // componentDidMount() {
    //     // 检查redux中状态变化，变化就调用render
    //     store.subscribe(() => {
    //         // 有任何变化都会调用
    //         this.setState({})
    //     })
    // }


    increment = () => {
        const { value } = this.selectnumber;
        store.dispatch(createIncrementAction(value * 1))
    }

    decrement = () => {
        const { value } = this.selectnumber;
        store.dispatch(createDncrementAction(value * 1))
    }

    incrementIfOdd = () => {
        const { value } = this.selectnumber;
        const count = store.getState().count;
        if (count % 2 !== 0) {
            store.dispatch(createIncrementAction(value * 1))
        }

    }

    incrementAsync = () => {
        const { value } = this.selectnumber;
        setTimeout(() => {
            store.dispatch(createIncrementAction(value * 1))
        }, 500)

    }

    render() {
        return (
            <div>

                <h1>当前求和为:{store.getState().count}</h1>
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
