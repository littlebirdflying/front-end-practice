import React from 'react'

export default class VoteFooter extends React.Component {
  render() {
    let { handle } = this.context
    return <div>
      <button onClick={ev => {
      }}>支持</button>
      <button onClick={ev => {
      }}>反对</button>
    </div>
  }
}