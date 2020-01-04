import '../index.css'
import React from 'react'
import { Breadcrumb} from 'antd'

const Path = ({ paths }) => (
    <div className="Header-container Path-text">
        <Breadcrumb separator=">">
            <Breadcrumb.Item href="/thongke">Home</Breadcrumb.Item>
            <Breadcrumb.Item >{paths[0]}</Breadcrumb.Item>
            <Breadcrumb.Item >{paths[1]}</Breadcrumb.Item>
        </Breadcrumb>
    </div>
)

export default Path