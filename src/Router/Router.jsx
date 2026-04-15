import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../MainLayout/MainLayout';
import HomePage from '../Pages/HomePage';
import TimeLine from '../Pages/TimeLine';
import Stats from '../Pages/Stats';
import FriendsDetails from '../Pages/FriendsDetails';
import ErrorPage from '../Pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path:'/timeline',
                element: <TimeLine></TimeLine>
            },
            {
                path:'/stats',
                element: <Stats></Stats>
            },
            {
                path:'/friend/:Id',
                element: <FriendsDetails></FriendsDetails>
            }
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
])