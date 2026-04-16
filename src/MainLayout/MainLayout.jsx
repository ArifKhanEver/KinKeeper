import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import { MyContext } from '../FriendsContext/FriendsContext';
import ContextProvide from '../FriendsContext/ContextProvide';

const MainLayout = () => {
    return (
        <div>
            <ContextProvide>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ContextProvide>
        </div>
    );
};

export default MainLayout;