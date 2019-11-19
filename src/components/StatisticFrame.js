import React from 'react'
import { Col } from 'react-bootstrap'

const Frame = ({ title, value, bgColor, url }) => (
    <div className="StatisticFrame"
        style={{
            backgroundColor: bgColor
        }}
    >
        <img className="StatisticFrameLogo" src={process.env.PUBLIC_URL + url} />
        <span style={{
            fontSize: '20px',
            marginTop: '18px',
            marginBottom: '24px'
        }}>
            {title}
        </span>
        <span
            style={{
                fontSize: '24px'
            }}>
                {value}
        </span>
    </div>
)

export default Frame