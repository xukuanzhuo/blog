// React.Fragment 解决React重复组件生成多余 DOM Tree Nood (DOM节点问题)
// 可以使用短语法<></>

import React from 'react'

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}

class Fragments extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Fragments
