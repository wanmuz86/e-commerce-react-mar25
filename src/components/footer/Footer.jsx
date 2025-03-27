import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  return (
   <footer className='bg-dark text-light p-5 mt-3'>
    <div className='container'>
        <div className='row'>
            <div className='col-3'>
                <ul className='list-unstyled'>
                    <li className='list-unstyled-item'><Link to="#">About</Link></li>
                    <li className='list-unstyled-item'><Link to="#">FAQ</Link></li>
                    <li className='list-unstyled-item'><Link to="#">Privacy Policy</Link></li>
                    <li className='list-unstyled-item'><Link to="#">Terms and Conditions</Link></li>
                </ul>

            </div>
            <div className='col-3'>
            <ul className='list-unstyled'>
                    <li className='list-unstyled-item'><Link to="#">About</Link></li>
                    <li className='list-unstyled-item'><Link to="#">FAQ</Link></li>
                    <li className='list-unstyled-item'><Link to="#">Privacy Policy</Link></li>
                    <li className='list-unstyled-item'><Link to="#">Terms and Conditions</Link></li>
                </ul>
                
            </div>
            <div className='col-3'>
            <ul className='list-unstyled'>
                    <li className='list-unstyled-item'><Link to="#">Facebook</Link></li>
                    <li className='list-unstyled-item'><Link to="#">Instagram</Link></li>
                    <li className='list-unstyled-item'><Link to="#">Tiktok</Link></li>
                    <li className='list-unstyled-item'><Link to="#">X</Link></li>
                </ul>
                
            </div>
            <div className='col-3'>
                <h6>Iverson Associates Sdn Bhd</h6>
                <p>Suites T113-T114, 3rd Floor<br/>
                 Centrepoint, Lebuh Bandar Utama<br/>
                  Bandar Utama, 47800 Petaling Jaya<br/>
                   Selangor, Malaysia</p>
                
            </div>
        </div>
    </div>

   </footer>
  )
}

export default Footer