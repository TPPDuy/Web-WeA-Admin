import React from 'react'
import 'antd/dist/antd.css';
import { Modal } from 'antd'
import { Container, Row, Col } from 'react-bootstrap';
import { Select, Input } from 'antd';
import PropTypes from 'prop-types'
const { Option } = Select;
const { TextArea } = Input;
export const CategoryModal = ({ visibility = false, selectedCategory, onOk = f => f, onCancel = f => f, onTextChange=f=>f}) => {

    let title;
    const onSubmit = e => {
        e.preventDefault()
        onOk(selectedCategory, title.value)
        title.value = ''
    }
    return (
        <Modal
            title="Tạo mới / Chỉnh sửa danh mục"
            visible={visibility}
            onOk={onOk}
            onCancel={onCancel}
            footer={[
                <button key="cancel" className="cancel-button" onClick={onCancel}>
                    Huỷ bỏ
            </button>,
                <button key="submit" className="ok-button" style={{ marginLeft: '15px' }} onClick={onSubmit}>
                    Đồng ý
            </button>,
            ]}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
                <div style={{ color: '#000000' }}>Tên danh mục</div>
                <input style={{ border: '1px solid #E0E0E0', boxSizing: 'border-box', color: '#000000', marginTop: '16px', padding: '7px' }}
                    placeholder='Nhập tên danh mục'
                    ref={input => title = input}
                    value={selectedCategory ? selectedCategory.name : ''} 
                    onChange={e => onTextChange(e.target.value)} required></input>
                <img className="ImageThumbnail-modal"
                    style={{ marginTop: '24px' }}
                    src={(selectedCategory !== undefined && selectedCategory !== null && selectedCategory.img !== "" && selectedCategory.img !== null && selectedCategory.img !== undefined) ? selectedCategory.img : './images/imagePlaceholder.svg'} />
                <div style={{ margin: 'auto', marginTop: '16px' }}>Hình ảnh JPG, GIF, SVG hoặc PNG</div>
                <button className="normal-button" style={{ margin: 'auto', marginTop: '16px' }} name="Cập nhật">Cập nhật</button>
            </div>
        </Modal>)
}

export const DishModal = ({ visibility = true, selectedDish, categories, onOk = f => f, onCancel = f => f }) => {
    let name, price, categoryId, describe;

    const onSubmit = e => {
        e.preventDefault()
        console.log(selectedDish, name.value, price.value, categoryId, describe.value)
        onOk(selectedDish, name.value, price.value, categoryId, describe.value)
        name.value = ''
        price.value = ''
        describe.value = ''
    }
    console.log(selectedDish)
    const onSelectCategory = category => {
        categoryId = category.id
    }
    return (
        <Modal
            title="Tạo mới / Chỉnh sửa món ăn"
            visible={visibility}
            onOk={onOk}
            onCancel={onCancel}
            footer={[
                <button key="cancel" className="cancel-button" onClick={onCancel}>
                    Huỷ bỏ
                </button>,
                <button key="submit" className="ok-button" style={{ marginLeft: '15px' }} onClick={onSubmit}>
                    Đồng ý
                </button>,
            ]}>
            <Container fluid="true">
                <Row style={{ alignItems: 'center' }}>
                    <Col lg={4}>
                        Tên món ăn:
                </Col>
                    <Col lg={8}>
                        <input style={{ border: '1px solid #E0E0E0', boxSizing: 'border-box', color: '#000000', padding: '7px', width: '100%' }}
                            placeholder='Nhập tên món ăn'
                            value={selectedDish ? selectedDish.name : ''} required
                            ref={input => name = input}>
                        </input>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px', alignItems: 'center' }}>
                    <Col lg={4}>
                        Giá:
                </Col>
                    <Col lg={8}>
                        <input style={{ border: '1px solid #E0E0E0', boxSizing: 'border-box', color: '#000000', padding: '7px', width: '100%' }}
                            placeholder='Nhập giá'
                            inputMode="numeric"
                            value={selectedDish ? selectedDish.price : ''} required
                            ref={input => price = input}>
                        </input>
                    </Col>
                </Row>
                <Row style={{ marginTop: '16px', alignItems: 'center' }}>
                    <Col lg={4}>
                        Danh mục:
                </Col>
                    <Col lg={8}>
                        <Select
                            showSearch
                            onSelect={onSelectCategory}
                            style={{ width: '100%' }}
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

                <Row style={{ marginTop: '20px', paddingLeft: '15px' }}>Hình ảnh:</Row>
                <Row style={{ marginTop: '16px', paddingLeft: '15px' }}>
                    <img style={{ maxWidth: '90px', maxHeight: '90px' }}
                        src={(selectedDish !== undefined && selectedDish !== null && selectedDish.img !== "") ? selectedDish.img : './images/imagePlaceholder.svg'}></img>
                </Row>
                <Row style={{ marginTop: '16px', paddingLeft: '15px' }}>Mô tả:</Row>
                <Row style={{ marginTop: '16px', paddingLeft: '15px' }}>
                    <TextArea
                        placeholder="Nhập mô tả"
                        autoSize={{ minRows: 4, maxRows: 10 }}
                        style={{ paddingTop: '10px', border: '1px solid #BDBDBD' }}
                        ref={TextArea => describe = TextArea} />
                </Row>
            </Container>
        </Modal>)
}

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
