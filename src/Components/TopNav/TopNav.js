import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { RiEnglishInput } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { FiFacebook ,FiInstagram} from 'react-icons/fi';
import {CiTwitter} from 'react-icons/ci';
import {ImPinterest2} from 'react-icons/im';
import {FaYoutube} from 'react-icons/fa';

function TopNav() {


  const [lang, setLang] = useState('English')

  function handleAddrTypeChange(e) {
    setLang(e.target.value);
    console.log(setLang)
  }


  const toSale = useNavigate()
  return (


    <Row>
      <Col>
        <select defaultValue={lang} onChange={handleAddrTypeChange}>
          <option value="English"> English</option>
          <option value="Urdu"> Urdu</option>
          <option value="telugu"> Telugu</option>
        </select>
        <select >
          <option value="English"> English</option>
          <option value="Urdu"> Urdu</option>
          <option value="telugu"> Telugu</option>
        </select>
      </Col>

      <Col>
        <p>FINAL CLEARANCE: Take 40% Discount ‘Sale Must-Haves' <a type="button" onClick={() => toSale('/sale')}> Click Here</a></p>
      </Col>

      <Col className='socio-col'>
      <div className='social-link'>
       <a href=""><FiFacebook/></a> 
       <a href=""><CiTwitter/></a> 
       <a href=""><ImPinterest2/></a> 
       <a href=""><FiInstagram/></a> 
       <a href=""><FaYoutube/></a> 
      </div>
      </Col>


    </Row>



  )
}

export default TopNav