import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { RiEnglishInput } from 'react-icons/ri'; 

function TopNav() {


    const [lang , setLang] =useState()


  return (
     

    <Row>
        <Col>
         <select onClick={lang} onChange={setLang(e=> e.target.value)}>
            <option value=""><RiEnglishInput/> English</option>
        </select>
         </Col>
    </Row>


   
  )
}

export default TopNav