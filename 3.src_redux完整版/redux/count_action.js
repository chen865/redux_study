/**
 * 该文件为count组件生成action对象
 */
import { INCREMENT, DECREMENT } from "./constant"

export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDncrementAction = data => ({ type: DECREMENT, data })