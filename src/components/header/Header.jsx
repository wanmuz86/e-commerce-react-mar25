import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const Header = () => {

    const {totalItemsInCart} = useCart()
    return (
        <>
            <header className='p-5 bg-danger text-warning text-center'>
                <h1>Lazamall</h1>
            </header>
            {/* navbar-light : Navbar is light colour you want the text to be dark
              , navbar-dark : Navbar is dark colour, you want the text to be light */}
            <nav className="navbar navbar-expand-lg bg-success navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Lazamall</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/men's clothing">Men's Clothing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/women's clothing">Women's Clothing</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/jewelery">Jewelery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/categories/electronics">Electronics</NavLink>
                            </li>  
                        </ul>
                    </div>
                    <div className="d-flex">
                        <NavLink className="btn btn-outline-light" to="/cart"><i class="bi bi-cart"></i><span> ( {totalItemsInCart} )</span></NavLink>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header