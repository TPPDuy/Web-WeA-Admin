import React from 'react'
import { Spin } from 'antd'

const Frame = ({ title, value, bgColor, url, alt, loading }) => (
    <div className="StatisticFrame"
        style={{
            backgroundColor: bgColor
        }}
    >
        <img className="StatisticFrameLogo" src={process.env.PUBLIC_URL + url} alt={alt}/>
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
                {loading ? <Spin /> : value}
        </span>
    </div>
)

export default Frame