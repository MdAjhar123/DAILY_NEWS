import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0',
        }
        }>
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
          <img src={!imageUrl ? "https://cdn.mos.cms.futurecdn.net/27APpc5D5KTe7jmBBinq3o-1200-80.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text text-danger"><small className="text-danger">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
