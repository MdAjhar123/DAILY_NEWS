import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top HeadLines</h1>

        <div className="row">
          <div className="col-md-3">
            <NewsItems title="myTitle" description = "myDescription" />
          </div>
          <div className="col-md-3">
            <NewsItems title="myTitle" description = "myDescription" />
          </div>
          <div className="col-md-3">
            <NewsItems title="myTitle" description = "myDescription" />
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default News
