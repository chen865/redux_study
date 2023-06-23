/**
 * 该文件为count组件生成action对象
 */
import { INCREMENT, DECREMENT } from "./constant"
import store from "./store"

// 同步action action的值为object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDncrementAction = data => ({ type: DECREMENT, data })

// 异步action,action的值为函数,异步action不是必须使用的。
export const createIncrementAsyncAction = (data,time) =>{
    return ()=>{
        setTimeout(() => {
            store.dispatch(createIncrementAction(data))
        }, time);
    }
}