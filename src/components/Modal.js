import React from 'react'
import 'antd/dist/antd.css';
import {Modal} from 'antd'
import { Container, Row, Col } from 'react-bootstrap';
import { Select, Input} from 'antd';
import PropTypes from 'prop-types'
const { Option } = Select;
const {TextArea} = Input;
export const CategoryModal = ({visibility = false, selectedCategory, onOk=f=>f, onCancel=f=>f}) =>
    <Modal
          title="Tạo mới / Chỉnh sửa danh mục"
          visible={visibility}
          onOk={onOk}
          onCancel={onCancel}
          footer={[
            <button key="cancel" className="cancel-button" onClick={onCancel}>
              Huỷ bỏ
            </button>,
            <button key="submit" className="ok-button" style={{marginLeft:'15px'}} onClick={onOk}>
              Đồng ý
            </button>,
          ]}>
          <div style={{display:'flex', flexDirection:'column', paddingLeft:'10px'}}>
            <div style={{color:'#000000'}}>Tên danh mục</div>
            <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', marginTop:'16px', padding:'7px'}} placeholder='Nhập tên danh mục'></input>
            <img style={{marginTop:'24px'}} src={(selectedCategory!==undefined && selectedCategory.image!=="") ? 'selecedCategory.image' : './images/imagePlaceholder.svg'}></img>
            <div style={{margin:'auto', marginTop: '16px'}}>Hình ảnh JPG, GIF, SVG hoặc PNG</div>
            <button className="normal-button" style={{margin:'auto', marginTop: '16px'}} name="Cập nhật">Cập nhật</button>
          </div>
    </Modal>

export const DishModal = ({visibility = true, selectedDish, categories, onOk=f=>f, onCancel=f=>f}) =>
<Modal
        title="Tạo mới / Chỉnh sửa món ăn"
        visible={visibility}
        onOk={onOk}
        onCancel={onCancel}
        footer={[
            <button key="cancel" className="cancel-button" onClick={onCancel}>
              Huỷ bỏ
            </button>,
            <button key="submit" className="ok-button" style={{marginLeft:'15px'}} onClick={onOk}>
              Đồng ý
            </button>,
          ]}>
        <Container fluid="true">
            <Row>
                <Col lg={4}>
                    Tên món ăn:
                </Col>
                <Col lg={8}>
                    <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} placeholder='Nhập tên món ăn'>
                    </input>
                </Col>
            </Row>
            <Row style={{marginTop:'16px'}}>
                <Col lg={4}>
                    Giá:
                </Col>
                <Col lg={8}>
                    <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} placeholder='Nhập giá' inputMode="numeric">
                    </input>
                </Col>
            </Row>
            <Row style={{marginTop:'16px'}}>
                <Col lg={4}>
                    Danh mục:
                </Col>
                <Col lg={8}>
                    <Select
                        showSearch
                        style={{ width: '100%'}}
                        placeholder="Chọn danh mục"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        {
                            categories.map(category => <Option value={category.id}>{category.name}</Option>)
                        }
                    </Select>
                </Col>
            </Row>

            <Row style={{marginTop:'16px', paddingLeft:'15px'}}>Hình ảnh:</Row>
            <Row style={{marginTop:'16px', paddingLeft:'15px'}}>
                <img style={{maxWidth:'90px', maxHeight:'90px'}} src={(selectedDish!==undefined && selectedDish.image!=="") ? 'selecedDish.image' : './images/imagePlaceholder.svg'}></img>
            </Row>
            <Row style={{marginTop:'16px', paddingLeft:'15px'}}>Mô tả:</Row>
            <Row style={{marginTop:'16px', paddingLeft:'15px'}}>
                <TextArea
                    placeholder="Nhập mô tả"
                    autoSize={{ minRows: 4, maxRows: 10 }}
                    style={{paddingTop:'10px', border: '1px solid #BDBDBD'}}/>
            </Row>
        </Container>
</Modal>

DishModal.propTypes = {
    categories: PropTypes.object
}
DishModal.defaultProps = {
    categories: [
        {
            id: '01',
            img: 'http://bit.ly/37dkZr3',
            name: 'Rau củ',
            isActive: 1,
            createdTime: 1574192100000,
            updatedTime: 1574195700000,
        },
        {
            id: '02',
            img: 'http://bit.ly/37n9CN5',
            name: 'Thịt',
            isActive: 1,
            createdTime: 1574196100000,
            updatedTime: 1574199700000,
        },
        {
            id: '03',
            img: 'http://bit.ly/35kKsgb',
            name: 'Hải sản',
            isActive: 1,
            createdTime: 1574113100000,
            updatedTime: 1574117700000,
        }
    ]
}
