import React, { useState } from 'react'
import { Row, div } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { CiTwitter } from 'react-icons/ci';
import { ImPinterest2 } from 'react-icons/im';
import { FaYoutube } from 'react-icons/fa';

import '../TopNav/TopNav.css'

function TopNav() {


  const [lang, setLang] = useState('English')

  const [cuurency, setCurrency] = useState("Dollar")

  function handleAddrTypeChange(e) {
    setLang(e.target.value);
    console.log(setLang)
  }

  function handleCurrency(e) {
    setCurrency(e.target.value);

  }


  const toSale = useNavigate()
  return (

    <div className='top-nav'>


      <div>
        <select defaultValue={lang} onChange={handleAddrTypeChange}>
          <option value="English"> English</option>
          <option value="Urdu"> Urdu</option>
          <option value="telugu"> Telugu</option>
        </select>
        <select defaultValue={cuurency} onChange={handleCurrency} >
          <option value="English">Dollar</option>
          <option value="Urdu">Rupees</option>
          <option value="telugu">Euro</option>
        </select>
      </div>

      <div>
        <p>FINAL CLEARANCE: Take 40% Discount ‘Sale Must-Haves' <a type="button" onClick={() => toSale('/sale')}> Click Here</a></p>
      </div>

     
        <div className='social-link'>
          <a href=""><FiFacebook /></a>
          <a href=""><CiTwitter /></a>
          <a href=""><ImPinterest2 /></a>
          <a href=""><FiInstagram /></a>
          <a href=""><FaYoutube /></a>
        </div>
     


    </div>




  )
}

export default TopNav