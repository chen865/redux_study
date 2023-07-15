// createStore 已被废弃使用configureStore替代,该文件暴露store
import {configureStore} from '@reduxjs/toolkit'
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 暴露store
export default configureStore({
    reducer:{
        count : countReducer,
        people : personReducer
    }
})