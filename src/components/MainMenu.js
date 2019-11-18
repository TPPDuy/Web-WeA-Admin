import React from 'react'
import { div } from 'react-router-dom'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChartBar, faReceipt, faTable, faList,faFish, faMale, faPlaceOfWorship} from '@fortawesome/free-solid-svg-icons'

// const MainMenuItemActive = {
//     backgroundColor: '#333333',
//     color: '#ffffff'
// }

export const MainMenu = () =>
    <div className="MainMenu-container">
        <div className="MainMenu-item-title">Quản lý</div>
        <nav>
            <div /*to="/" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faChartBar}/>
                    </div>
                    <div>Thống kê</div>
                </div>
            </div>
            <div /*to="/orders" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faReceipt}/>
                    </div>
                    <div>Hoá đơn</div>
                </div>
            </div>
        </nav>

        <div className="MainMenu-item-title">Nhà hàng</div>
        <nav>
            <div /*to="/departments" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faPlaceOfWorship}/>
                    </div>
                    <div>Bộ phận</div>
                </div>
            </div>
            <div /*to="/tables" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faTable}/>
                    </div>
                    <div>Bàn</div>
                </div>
            </div>
            <div /*to="/categories" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faList}/>
                    </div>
                    <div>Danh mục</div>
                </div>
            </div>
            <div /*to="/dishes" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faFish}/>
                    </div>
                    <div>Món ăn</div>
                </div>
            </div>
        </nav>

        <div className="MainMenu-item-title">Nhân sự</div>
        <nav>
            <div /*to="/employees" activeStyle={MainMenuItemActive}*/>
                <div className="MainMenu-item">
                    <div className="MainMenu-icon">
                        <FontAwesomeIcon icon={faMale}/>
                    </div>
                    <div>Nhân viên</div>
                </div>
            </div>
        </nav>
    </div>