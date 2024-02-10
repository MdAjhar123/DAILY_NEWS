import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner

// business
// entertainment
// general
// health
// science
// sports
// technology
// 6ba3ad295a2e4db69de29164cba07c47
