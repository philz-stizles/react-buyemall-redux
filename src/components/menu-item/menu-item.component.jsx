import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.styles.css'

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {
    return (
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="content">
                <h2 className="title">{title}</h2>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
