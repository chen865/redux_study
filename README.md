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

