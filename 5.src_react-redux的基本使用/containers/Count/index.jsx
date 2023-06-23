//引入count的ui组件
import CountUI from "../../components/Count"
import {
    createIncrementAction,
    createDncrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
// import redux
//import store from "../../redux/store"
// 引入connect用于连接 UI组件和 redux
import {connect} from 'react-redux'

// a函数的返回值作为状态传递给了ui组件
function a(state){
    return {count:state.count}
}

// b函数返回值作为状态传递给了ui组件
function b(dispatch){
    return {
        jia:(number)=>{dispatch( createIncrementAction(number))},
        jian:(number)=>{dispatch( createDncrementAction(number))},
        jianAsync:(number)=>{dispatch( createIncrementAsyncAction(number))}
    
    }
}

// 暴露组件
export default connect(a,b)(CountUI)
