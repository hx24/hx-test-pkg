import React, { Component } from 'react'
import './style.css'

export default class extends Component {
  render() {
    return (
      <div
        // className={styles.box}
        className={'box'}
        // style={{ width: 100, height: 100, backgroundColor: 'red' }}
        onClick={() => {
          alert('hi, success')
        }}
      >
        click me!
      </div>
    )
  }
}
