import { Container } from "react-bootstrap";

export const Category = () =>
<Container fluid="true">
    <Row>
    <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <FontAwesomeIcon icon={faFile} style={{color:'#333333'}}/>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Hình ảnh</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-left-align">
            <div>Tên danh mục</div>
        </Col>
        <Col lg ="1" md="1" sm="2" xs="2" className="TableTitle-center-align">
            <div>Trạng thái</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Khởi tạo</div>
        </Col>
        <Col lg ="2" md="2" sm="2" xs="2" className="TableTitle-center-align">
            <div>Cập nhật</div>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-right-align" onClick={onSort}>
            <FontAwesomeIcon icon={faSort}/>
        </Col>
        <Col lg ="1" md="1" sm="1" xs="1" className="TableTitle-center-align">
            <div>#</div>
        </Col>
    </Row>
</Container>