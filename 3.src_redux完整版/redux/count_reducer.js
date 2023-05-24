/**
 * 该文件用于创建一个count组件服务等reducer,本质是一个函数
 * 接收两个参数：之前的状态(preState)，动作对象(action)
 * 
 */
import {INCREMENT,DECREMENT} from './constant'

export default function countReducer(preState, action) {
    if(preState === undefined){
        preState = 0;
    }
    //console.log(preState)
    // 从action对象中获取:type,data
    const { type, data } = action;
    // 根据type决定如何加工数据
    switch (type) {
        // 加
        case INCREMENT:
            return preState + data;
        // 减
        case DECREMENT:
            return preState - data;
        // 初始化
        default:
            return preState;
    }

}