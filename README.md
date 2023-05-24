# Redux学习

## 1.求和按钮redux精简版
1. 去除`count`组件自身的状态

2. `src`下建立:
```
-src
    -redux
        -store.js
        -count_reducer.js
```
3. `store.js`:
    - 引入`redux`中的`configureStore`函数，创建一个`store`
    - `configureStore`调用的时候要传递一个为其服务的`reducer`
    - 记的暴露`store`

4. `count_reducer.js`:
    - `reducer`的本质是一个函数,接收`preState`,`action`,返回加工后的状态
    - `reducer`有两个作用:初始化状态,加工状态
    - `reducer`被第一次调用时,`store`自动触发,传递的`preState`是`undefined`

5. 在`index.js`中检测`store`的状态改变,一旦发生改变就重新渲染`<App/>`
    - 备注:`redux`只负责管理状态,至于状态的改变驱动页面的展示,要自己去解决。

## 2.求和案例redux完整版
新增文件：
1. `count_action.js` 专门用于创建action对象
2. `constant.js` 放置容易写错的type值

## 3.求和案例redux异步action版
1. 明确:延迟的动作不想交给组件自身,想交给action
2. 何时需要异步`action`:想要对状态进行操作,但是具体的数据靠异步任务返回
3. 具体实现:
- `npm add redux-thunk` 但是这个在我之前的改动中可能已经安装了，所以没有走这一步，安装了一个`@reduxjs/toolkit`，然后重新写了`store.js`文件
- 创建`action`的函数不在返回一般对象,返回的是函数,函数中写异步任务
- 异步任务有结果后,分发一个`action`去操作真正的数据
4. 备注:异步`action`不是必须的，完全可以自己等待异步任务的结果再分发给`action`

ps：3里之前的操作
```
createStore废弃 先npm i @reduxjs/toolkit安装，然后store.js写下面内容
import {configureStore} from '@reduxjs/toolkit'
import countReducer from './count_reducer'

// 暴露store
export default configureStore({
    reducer:{
        count : countReducer
    }
})
在组件里通过：store.getState().count;获取参数 其它内容不变
```