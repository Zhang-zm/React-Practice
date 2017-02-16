本笔记基于“百度传课” React Native 课程[《React Native零基础入门到项目实战》](http://www.chuanke.com/v4702151-196697-1122541.html)、[React 官方文档](https://facebook.github.io/react/)以及[React-Native 官方文档](http://reactnative.cn/)等整理，感谢各位老师及大神。

## 简介

![image](/notes-img/7BA56D55-DE0A-461F-8E21-FD75247327D0.png)

React - 基础理念；
React.js - web 前端框架；
React Native - 移动应用开发框架


## React 与 React Native 的关系



	1. React 用于Web 应用开发, React Native 采用React 方式进行移动应用开发。

	2. React Native 采用React 语法，用于运行JavaScript 跨终端应用开发，既拥有原声Native 的交互体验，有能够保留React 自由的开发效率，使用灵活的HTML 和CSS 布局，使用React 语法构建组件，然后同时运行在iOS 和Android 平台上。 “Learn once, write anywhere.”




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
