import React from 'react'
import { div } from 'react-router-dom'
import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar, faReceipt, faTable, faList, faFish, faMale, faPlaceOfWorship } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const MainMenu = () => (
    <div className="MainMenu-container">
        <div className="MainMenu-item-title">Quản lý</div>
        <nav>
            <NavLink className="MainMenu-item" to="/thongke" activeClassName="MainMenuItemActive">
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faChartBar} />
                </div>
                <div>Thống kê</div>
            </NavLink>

            <NavLink className="MainMenu-item" to="/hoadon" activeClassName="MainMenuItemActive">
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faReceipt} />
                </div>
                <div>Hoá đơn</div>
            </NavLink>
        </nav>

        <div className="MainMenu-item-title">Nhà hàng</div>
        <nav>
            <NavLink className="MainMenu-item" to="/bophan" activeClassName="MainMenuItemActive">
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faPlaceOfWorship} />
                </div>
                <div>Bộ phận</div>
            </NavLink>
            <NavLink className="MainMenu-item" to="/ban" activeClassName="MainMenuItemActive">
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faTable} />
                </div>
                <div>Bàn</div>
            </NavLink>
            <NavLink className="MainMenu-item" to="/danhmuc" activeClassName="MainMenuItemActive">
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faList} />
                </div>
                <div>Danh mục</div>
            </NavLink>
            <NavLink className="MainMenu-item" to="/monan" activeClassName="MainMenuItemActive">
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faFish} />
                </div>
                <div>Món ăn</div>
            </NavLink>
        </nav>

        <div className="MainMenu-item-title">Nhân sự</div>
        <nav>
            <NavLink className="MainMenu-item" to="/nhanvien" activeClassName="MainMenuItemActive">  
                <div className="MainMenu-icon">
                    <FontAwesomeIcon icon={faMale} />
                </div>
                <div>Nhân viên</div>
            </NavLink>
        </nav>        
    </div>
)

export default MainMenu