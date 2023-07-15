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

## 4.求和案例react-redux基本使用
1. 明确两个概念：
- 1. `ui`组件：不能使用任何`redux`的`api`，只负责页面的呈现，交互
- 2. 容器组件:负责和`redux`的通信，将结果交给`ui`组件
2. 如何创建一个容器组件--靠`react-redux的connect`函数
- `connect(函数1，函数2)(ui组件)` 函数1和函数2返回值是一个对象。
3. 备注：容器组件中的`store`是靠`props`传进去的，而不是在容器中直接引用
4. 备注：函数2 也可以是一个对象

## 5.求和案例——react_redux优化
1. 容器组件和`ui`组件整合一个文件
2. 无需自己给容器组件传递store,给`<App/>`包裹一个`<Provider store={store}>`即可
3. 使用了`react-redux`后也不用再自己检查`redux`中状态的改变了，容器组件开业自动完成这个工作
4. `mapDispatchToProps`也可以简单的写成一个对象
5. 一个组件要和`redux`打交道要走几步
- 定义好`ui`组件----不暴露
- 引入`connect`生成一个容器组件，并暴露，写法如下
```
connect(
    state =>({key:value}), //映射状态
    {key:xxxxxAction} // 映射操作状态的方法
)(ui组件)
```
- 在`ui`组件中通过`this.props.xxxxx`读取和操作状态

## 6.求和案例 react-redux数据共享版
1. 定义一个`Person`组件,和`Count`组件通过`redux`共享数据
2. 为`Person`组件写:`reducer`,`action `配置`constant`常量
3. 重点 `Person`和`reducer`和`Count`的`reducer` 要使用`combineReducers`进行合并，ps：在`react18`中不是这样写的，可以直接写多个。
4. 交给`store`的是总`reducer` 最后注意在组件中取出状态的时候，记得取到位