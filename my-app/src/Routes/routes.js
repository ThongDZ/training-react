import React from 'react';
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import DeleteScreen from './DeleteScreen';
import PostScreen from './PostScreen';
import NotFoundScreen from './NotFoundScreen';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomeScreen/>
  },
  {
    path: '/detail/:id',
    exact: true,
    main: ({match}) => <DetailScreen match={match}/>
  },
  {
    path: '/post',
    exact: true,
    main: () => <PostScreen/>
  },
  {
    path: '/delete/:id',
    exact: false,
    main: ({match}) => <DeleteScreen match={match}/>
  },
  {
    path: '',
    exact: false,
    main: () => <NotFoundScreen/>
  }
];

export default routes;