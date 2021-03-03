import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import cartplus from '../cartplus.svg';
import styled from 'styled-components';
import {ButtonContainer} from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Navbar extends Component {
    render() {
        return (
            
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            { /*https://www.iconfinder.com/icons/1243689/call_phone_iconCreative Commons (Attribution 3.0 Unported);https://www.iconfinder.com/Makoto_msk */ }
            <Link to='/'>
                <FontAwesomeIcon icon="flag" size="lg" />
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Product
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    {/* <img src={cartplus} alt="store" className="navbar-brand" /> */}
                    <FontAwesomeIcon icon="cart-plus" />
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
        </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
        }
`