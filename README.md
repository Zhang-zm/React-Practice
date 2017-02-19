本笔记基于“百度传课” React Native 课程[《React Native零基础入门到项目实战》](http://www.chuanke.com/v4702151-196697-1122541.html)、[React 官方文档](https://facebook.github.io/react/)以及[React-Native 官方文档](http://reactnative.cn/)等整理，感谢各位老师及大神。

另，此笔记较demo 会延迟一些更新，因为需要整理 :P

## 简介

![image](/notes-img/7BA56D55-DE0A-461F-8E21-FD75247327D0.png)

React - 基础理念；
React.js - web 前端框架；
React Native - 移动应用开发框架


## React 与 React Native 的关系



	1. React 用于Web 应用开发, React Native 采用React 方式进行移动应用开发。

	2. React Native 采用React 语法，用于运行JavaScript 跨终端应用开发，既拥有原生Native 的交互体验，有能够保留React 自由的开发效率，使用灵活的HTML 和CSS 布局，使用React 语法构建组件，然后同时运行在iOS 和Android 平台上。 “Learn once, write anywhere.”




## React 开发环境配置


react.js, react-dom.js，browser.min.js


## 创建React 工程

## React 组件

### 创建
React.createClass();

### 渲染
ReactDOM.render([DOM],[element]);

### 组件样式

 - 内联
 - 对象
 - 选择器

注意： ** React 中，如果选择用选择器样式设置组件，属性名不能使用class, 它是一个保留字，需要用className 替换；
			 类似得，使用htmlFor 替换for 属性。 **

## 复合组件

ReactDOM.render() 只要在父组件调用一次。

## lifeCycle 组件的生命周期


### 1. 组件的生命周题分为三个状态

Mounting - 组件挂载，已插入真实DOM
Updating - 组件更新，正在被重新渲染
Unmounting - 组件移出，已移出真实DOM


### 2. 组件的生命周期分为四个阶段

创建、实例化、更新、销毁


### 3. 组件的生命周期的方法

[1] Mount / 组件挂载相关：

	- componentWillMount

		组件将要挂载
		在render 之前执行，但只执行一次，即使多次重复渲染该组件，或者改变了组件的state.

	- componentDidMount

		组件已经挂载
		在render 之后执行，同一个组件重复渲染只执行一次

[2] Updating / 组件更新相关

	- componentWillReceiveProps(object nextProps)

		已家在组件收到新的props 之前的的调用。注意，组件初始化渲染时不会执行。

	- shouldComponentUpdate(object nextProps, object nextState)

		判断是否重新渲染。该接口实际是在组件接收到了新的props 或者新的state 时立即调用，然后通过

	- componentWillUpdate(object nextProps, object nextState)

		组件将要更新

	- componentDidUpdate(object prevProps, object prevState)

		组件已经更新

[3] Unmounting / 组件移除相关

- componentWillUnmount

	组件将被移除之前的时间点触发，可以利用该方法来执行一些必要的清理组件的工作。

4. 与props 和state 有关的方法

[1] getDefaultProps

		设置props 默认值

[2] getInitialState

		设置state 属性初始值
