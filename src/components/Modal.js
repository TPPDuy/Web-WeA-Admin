import React,{useState, useRef} from 'react'
import 'antd/dist/antd.css';
import { Modal, Spin } from 'antd'
import { Container, Row, Col } from 'react-bootstrap';
import { Select, Input } from 'antd';
import PropTypes from 'prop-types'
const { Option } = Select;
const { TextArea } = Input;


export const DepartmentModal = ({ visibility = false, selectedDepartment, onAddData = f => f, onEditData = f => f, onCancel = f => f, onTextChange=f=>f}) => {
    // const [loading, setLoading] = useState(false);
    let title;
    const onSubmit = e => {
        if(selectedDepartment !== undefined && selectedDepartment !== null && selectedDepartment.id != null)
            onEditData({...selectedDepartment, name: title.value})
        else
            onAddData(title.value)
            
        e.preventDefault()
        title.value = ''
        onCancel()
    }
    
    const onCloseModal = () => {
        onCancel();
    }
    return (
        <Modal
            title="Tạo mới / Chỉnh sửa bộ phận"
            visible={visibility}
            onOk={onSubmit}
            onCancel={onCancel}
            footer={[
                <button key="cancel" className="cancel-button" onClick={onCloseModal}>
                    Huỷ bỏ
            </button>,
                <button key="submit" className="ok-button" style={{ marginLeft: '15px' }} onClick={onSubmit}>
                    Đồng ý
            </button>,
            ]}>
            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '10px' }}>
                <div style={{ color: '#000000' }}>Tên bộ phận</div>
                <input style={{ border: '1px solid #E0E0E0', boxSizing: 'border-box', color: '#000000', marginTop: '16px', padding: '7px' }}
                    placeholder='Nhập tên bộ phận'
                    ref={input => title = input}
                    value={selectedDepartment ? selectedDepartment.name : ''} 
                    onChange={e => onTextChange(e.target.value)} required></input>
            </div>
        </Modal>)
}

export const CategoryModal = ({ visibility = false, selectedCategory, onAddData = f => f, onEditData = f => f, onCancel = f => f, onTextChange=f=>f}) => {
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    let title;
    const onSubmit = e => {
        e.preventDefault()
        if(selectedCategory !== undefined && selectedCategory !== null && selectedCategory.id != null)
            onEditData({...selectedCategory,
            name: title.value,
            image: image != null && image != undefined ? image : null 
            })
        else
            onAddData(title.value, image)
        title.value = ''
        onCancel()
    }
    const onUploadFileBTNClick = e => {
        inputRef.current.click();
    }
    const onUploadFile = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    const onCloseModal = () => {
        setImage(null);
        onCancel();
    }
    return (
        <Modal
            title="Tạo mới / Chỉnh sửa danh mục"
            visible={visibility}
            onOk={onSubmit}
            onCancel={onCancel}
            footer={[
                <button key="cancel" className="cancel-button" onClick={onCloseModal}>
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
                {image ?
                <img className="ImageThumbnail-modal"
                    style={{ marginTop: '24px' }}
                    src={URL.createObjectURL(image)} />
                :
                <img className="ImageThumbnail-modal"
                    style={{ marginTop: '24px' }}
                    src={(selectedCategory !== undefined && selectedCategory !== null && selectedCategory.image !== "" && selectedCategory.image !== null && selectedCategory.image !== undefined) ? selectedCategory.image : './images/imagePlaceholder.svg'} />
                }
                <div style={{ margin: 'auto', marginTop: '16px' }}>Hình ảnh JPG, GIF, SVG hoặc PNG</div>
                <input 
                    type="file" 
                    ref={inputRef} 
                    className="hidden-input" 
                    accept="image/jpeg, image/gif, image/svg, image/png" 
                    onChange={onUploadFile}
                />
                <button className="normal-button" style={{ margin: 'auto', marginTop: '16px' }} name="Cập nhật" onClick={onUploadFileBTNClick}>Cập nhật                    
                </button>
            </div>
        </Modal>)
}

export const DishModal = ({ visibility = false, selectedDish, categories, onAddData = f => f, onEditData = f => f, onCancel = f => f, onTextChange=f=>f }) => {
    let name, price;
    var category
    const [image, setImage] = useState(null);
    const inputRef = useRef(null);
    // {
    //     selectedDish ? category = selectedDish.category : category = undefined
    // }
    const onSubmit = e => {
        e.preventDefault()
        console.log("info", selectedDish, name.value, price.value, category)
        if(selectedDish !== undefined && selectedDish !== null && selectedDish._id!=null){
            onEditData({...selectedDish, 
                name: name.value, 
                category: {
                    ...selectedDish.category,
                    _id: category
                }, 
                price: price.value, 
                image: image != null && image != undefined ? image : null 
            })
        }
        else
            onAddData(name.value, price.value, category, image, '')
        name.value = ''
        price.value = ''
        onCancel()
    }
    console.log("selected dish", selectedDish)
    const onSelectCategory = c => {
        console.log("selected category: ", c)
        category = c
    }
    const onUploadFileBTNClick = e => {
        inputRef.current.click();
    }
    const onUploadFile = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    const onCloseModal = () => {
        setImage(null);
        onCancel();
    }
    return (
        <Modal
            title="Tạo mới / Chỉnh sửa món ăn"
            visible={visibility}
            onOk={onSubmit}
            onCancel={onCancel}
            footer={[
                <button key="cancel" className="cancel-button" onClick={onCloseModal}>
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
                            ref={input => name = input}
                            onChange={e=>onTextChange(e.target.value, 'name')}>
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
                            ref={input => price = input}
                            onChange={e=>onTextChange(e.target.value, 'price')}>
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
                            //value={category ? category : categories[0]}
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            {
                                categories.map(c => <Option value={c.id}>{c.name}</Option>)
                            }
                        </Select>
                    </Col>
                </Row>

                <Row style={{ marginTop: '20px', paddingLeft: '15px' }}>Hình ảnh:</Row>
                <Row style={{ marginTop: '16px', paddingLeft: '15px' }} onClick={onUploadFileBTNClick}>
                    <input 
                        type="file" 
                        ref={inputRef} 
                        className="hidden-input" 
                        accept="image/jpeg, image/gif, image/svg, image/png" 
                        onChange={onUploadFile}
                    />
                    {image ? 
                    <img style={{ maxWidth: '90px', maxHeight: '90px' }}
                        src={URL.createObjectURL(image)}></img>
                    :
                    <img style={{ maxWidth: '90px', maxHeight: '90px' }}
                        src={(selectedDish !== undefined && selectedDish !== null && selectedDish.img && selectedDish.img !== '') ? selectedDish.img : './images/imagePlaceholder.svg'}></img>
                    }
                </Row>
            </Container>
        </Modal>)
}

export const TableModal = ({ visibility = false, selectedTable, departments, onAddData, onEditData = f => f, onCancel = f => f, onTextChange=f=>f }) => {
    let name;
    var departmentId;
    const onSubmit = e => {

        if(selectedTable !== undefined && selectedTable !== null && selectedTable.id!=null){
            onEditData({...selectedTable, 
                name: name.value, 
                department: {
                    ...selectedTable.department,
                    id: departmentId
                }, 
            })
        }
        else
            onAddData(name.value, departmentId)

        e.preventDefault()
        name.value = ''
        onCancel()
    }
    const onSelectDepartment = department=> {
        departmentId = department.id
    }
    const onCloseModal = () => {
        onCancel();
    }
    return (
        <Modal
            title="Tạo mới / Chỉnh sửa bàn"
            visible={visibility}
            onOk={onSubmit}
            onCancel={onCancel}
            footer={[
                <button key="cancel" className="cancel-button" onClick={onCloseModal}>
                    Huỷ bỏ
                </button>,
                <button key="submit" className="ok-button" style={{ marginLeft: '15px' }} onClick={onSubmit}>
                    Đồng ý
                </button>,
            ]}>
            <Container fluid="true">
                <Row style={{ alignItems: 'center' }}>
                    <Col lg={4}>
                        Tên bàn:
                </Col>
                    <Col lg={8}>
                        <input style={{ border: '1px solid #E0E0E0', boxSizing: 'border-box', color: '#000000', padding: '7px', width: '100%' }}
                            placeholder='Nhập tên bàn'
                            value={selectedTable ? selectedTable.name : ''} required
                            ref={input => name = input}
                            onChange={e=>onTextChange(e.target.value)}>
                        </input>
                    </Col>
                </Row>
            
                <Row style={{ marginTop: '16px', alignItems: 'center' }}>
                    <Col lg={4}>
                        Bộ phận:
                </Col>
                    <Col lg={8}>
                        <Select
                            showSearch
                            onSelect={onSelectDepartment}
                            style={{ width: '100%' }}
                            placeholder="Chọn bộ phận"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                            {
                                departments.map(department => <Option value={department.id}>{department.name}</Option>)
                            }
                        </Select>
                    </Col>
                </Row>
            </Container>
        </Modal>)
}

export const AddEmployeeModal = ({visibility = true, selectedEmployee, typesOfEmployee, onOK = f => f, onCancel = f => f, loading}) => {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [level, setLevel] = useState("")
    return (
        <Modal
                title="Tạo mới nhân viên"
                visible={visibility}
                onOk={onOK}
                onCancel={onCancel}
                footer={[
                    <button key="cancel" className="cancel-button" onClick={onCancel}>
                    Huỷ bỏ
                    </button>,
                    <button key="submit" className={loading? "ok-button ok-button-loading": "ok-button"} style={loading? {marginLeft:'15px', padding: '10px 25px'}: {marginLeft:'15px'} } onClick={() => onOK(fullname, username, password, level)}>
                    {loading? <div><Spin size="small"/></div> :"Đồng ý"}
                    </button>,
                ]}>
                <Container fluid="true">
                    <Row>
                        <Col lg={4}>
                            Tên đầy đủ:
                        </Col>
                        <Col lg={8}>
                            <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} placeholder='Nhập tên đầy đủ' inputMode="text" value={fullname} onChange={(e) => setFullname(e.target.value)}>
                            </input>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'16px'}}>
                        <Col lg={4}>
                            Tên đăng nhập:
                        </Col>
                        <Col lg={8}>
                            <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} placeholder='Nhập tên đăng nhập' inputMode="text" value={username} onChange={(e) => setUsername(e.target.value)}>
                            </input>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'16px'}}>
                        <Col lg={4}>
                            Mật khẩu:
                        </Col>
                        <Col lg={8}>
                            <input type="password" style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} placeholder='Nhập mật khẩu' inputMode="text" value={password} onChange={(e) => setPassword(e.target.value)}>
                            </input>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'16px'}}>
                        <Col lg={4}>
                            Loại nhân viên:
                        </Col>
                        <Col lg={8}>
                            <Select
                                showSearch
                                style={{ width: '100%'}}
                                placeholder="Chọn loại nhân viên"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                onChange={(value) => setLevel(value)}
                                >
                                {
                                    typesOfEmployee.map((type, index) => <Option key={index} value={type.level}>{type.name}</Option>)
                                }
                            </Select>
                        </Col>
                    </Row>

                </Container>
        </Modal>)
}
AddEmployeeModal.propTypes = {
    typesOfEmployee: PropTypes.array
}
AddEmployeeModal.defaultProps = {
    typesOfEmployee: [
        {
            level: 0,
            name: 'Nhân viên'
        },
        {
            level: 1,
            name: 'Quản lí'
        },
        {
            level: 2,
            name: 'Quản trị'
        }
    ]
}

export const EditEmployeeModal = ({visibility, selectedEmployee, typesOfEmployee, onOK = f => f, onCancel = f => f, loading}) => {
    const [fullname, setFullname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [level, setLevel] = useState("")
    return(
        <Modal
                title="Chỉnh sửa nhân viên"
                visible={visibility}
                onOK={onOK}
                onCancel={onCancel}
                footer={[
                    <button key="cancel" className="cancel-button" onClick={onCancel}>
                    Huỷ bỏ
                    </button>,
                    <button key="submit" className={loading? "ok-button ok-button-loading": "ok-button"} style={loading? {marginLeft:'15px', padding: '10px 25px'}: {marginLeft:'15px'} } onClick={() => onOK(selectedEmployee.id, fullname, username, password, level)} >
                    {loading? <div><Spin size="small"/></div> :"Đồng ý"}
                    </button>,
                ]}>
                <Container fluid="true">
                    <Row>
                        <Col lg={4}>
                            Tên đầy đủ:
                        </Col>
                        <Col lg={8}>
                            <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} value={fullname} placeholder={selectedEmployee.fullname} onChange={(e) => setFullname(e.target.value)} inputMode="text" >
                            </input>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'16px'}}>
                        <Col lg={4}>
                            Tên đăng nhập:
                        </Col>
                        <Col lg={8}>
                            <input style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} value={username} placeholder={selectedEmployee.username} onChange={(e) => setUsername(e.target.value)} inputMode="text" >
                            </input>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'16px'}}>
                        <Col lg={4}>
                            Mật khẩu:
                        </Col>
                        <Col lg={8}>
                            <input type="password" style={{border: '1px solid #E0E0E0', boxSizing: 'border-box', color:'#000000', padding:'7px', width:'100%'}} value={password} placeholder={selectedEmployee.password} onChange={(e) => setPassword(e.target.value)} inputMode="password">
                            </input>
                        </Col>
                    </Row>
                    <Row style={{marginTop:'16px'}}>
                        <Col lg={4}>
                            Loại nhân viên:
                        </Col>
                        <Col lg={8}>
                            <Select
                                showSearch
                                style={{ width: '100%'}}
                                placeholder="Chọn loại nhân viên"
                                optionFilterProp="children"
                                value={level !== "" ? parseInt(level) : parseInt(selectedEmployee.level)}
                                onChange={(value) => setLevel(value)}
                                filterOption={(input, option) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                                {
                                    typesOfEmployee.map((type, index) => <Option key={index} value={type.level}>{type.name}</Option>)
                                }
                            </Select>
                        </Col>
                    </Row>
                </Container>
        </Modal>)
}
EditEmployeeModal.propTypes = {
    typesOfEmployee: PropTypes.array
}
EditEmployeeModal.defaultProps = {
    typesOfEmployee: [
        {
            level: 0,
            name: 'Nhân viên'
        },
        {
            level: 1,
            name: 'Quản lí'
        },
        {
            level: 2,
            name: 'Quản trị'
        }
    ]
}
