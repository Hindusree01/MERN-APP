import React , {useState} from 'react';

import './MainNavigation.css';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';


const MainNavigation = props => {
    const [sideDrawer, setSideDrawer] = useState(false);

    const OpenDrawer = ()=>{
        setSideDrawer(true);
    };

    const CloseDrawer = ()=>{
        setSideDrawer(false);
    };

    return (
        <React.Fragment>
            {sideDrawer && <Backdrop onClick={CloseDrawer}/>}
            <SideDrawer show = {sideDrawer} onClick={CloseDrawer}>
                <nav className='main-navigation__drawer-nav'>
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={OpenDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
};

export default MainNavigation;