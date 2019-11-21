import React from 'react'
import {InputGroup, Button, FormControl} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

export const SearchAddForm = ({onShowModal=f=>f, onInputSearchKey=f=>f}) =>
    <InputGroup className="mb-3 InputBorder">
        <FormControl
        placeholder="Tìm kiếm"
        aria-label="Tìm kiếm"
        aria-describedby="basic-addon2"
        style={{border: '0px solid #00000000', boxSizing: 'border-box'}}
        onChange={onInputSearchKey}/>

        <InputGroup.Append>
            <Button variant="light"  style={{backgroundColor:'#333333', border: '0px solid #00000000', boxSizing: 'border-box'}}>
                <FontAwesomeIcon icon={faSearch} style={{color:'#ffffff'}}/>
            </Button>
        </InputGroup.Append>

        <InputGroup.Append >
            <Button variant="black" style={{border: '0px solid #00000000', boxSizing: 'border-box'}} onClick={onShowModal}>
                <FontAwesomeIcon icon={faPlus} style={{color:'#000000'}}/>
            </Button>
        </InputGroup.Append>
    </InputGroup>