import React from 'react'
import './DisplayCard.css'

const DisplayCard = ({data}) => {

  const {title, description, detail, genre, image, link} = data

  return (
    <>
    <div className="rcard-container">
      <div className="rcard-text">
        <div className="rcard-title">
          <h1>{title}</h1>
        </div>
        <div className="rcard-desc">
          <p>{description}</p>
        </div>
        <div className="rcard-detail">
          <h2>Purpose:</h2><p>{detail}</p>
        </div>
        <div className="rcard-genre">
          <p>{genre}</p>
        </div>
      </div>
      <div className="rcard-image">
        {
          link ? (
            <a href={link}>
              <img src={image} alt="image" />
            </a>
          ) : (
            <img src={image} alt="image" />
          )
        }
      </div>
    </div>
    </>
  )
}

export default DisplayCard