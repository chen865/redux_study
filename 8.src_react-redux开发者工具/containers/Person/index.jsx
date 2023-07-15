import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import { createPerson } from '../../redux/actions/person';

class Person extends Component {

    addPerson = () => {
        const name = this.name.value;
        const age = this.age.value;
        const person = {name,age,id:nanoid()}
        console.log(person)
        this.props.jiaren(person)
        this.name.value = ''
        this.age.value = ''
    }

    render() {
        return (
            <div>
                <h1>我是person组件,上面组件的和是：{this.props.he}</h1>
                <input ref={c => { this.name = c }} type='text' placeholder='输入名字' />
                <input ref={c => { this.age = c }} type='text' placeholder='输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.yiduiren.map((p)=>{
                            return <li key={p.id}>{p.name}---{p.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state => ({
        yiduiren:state.people,
        he:state.count})
    ,{jiaren:createPerson}

)(Person)
