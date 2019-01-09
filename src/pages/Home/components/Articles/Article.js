import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Article.css'

class Article extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }

  render() {
    return (
      <article styleName="articleContainer">
        <header>
          <h1 styleName="articleHeaderTitle">JavaScript 中的 LHS 和 RHS 查询</h1>
        </header>
        <section styleName="articleSubContent">
          编译原理
          程序中的源代码在执行之前会经历三个步骤:

          1、分词/词法分析；

          2、解析/语法分析(此步骤包含AST)；

          3、代码生成；

          LHS 和 RHS
          Example:

          var a = 2
          编译器会做如下处理:

          1、var a编译器会询问作用域是否已经存在该名称的变量，如果存在，编译器会忽略该声明，否则在当前作用域中声明一个新的变量，命名为a。

          2、a = 2赋值操作，会询问当前作用域是否存在a变量，如果存在使用当前变量进行赋值操作。
        </section>
        <div styleName="articleFooter">
          <span>xkz</span>
          <span> on 10 Jul 2018</span>
        </div>
      </article>
    )
  }
}

export default CSSModules(Article, styles)
