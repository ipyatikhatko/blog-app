import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import HomePage from './routes/home'
import './index.css'
import Layout from './components/Layout';
import LoginPage from './routes/login';
import RegisterPage from './routes/register';
import { Provider } from 'react-redux'
import { persistor, store } from './app/store';
import ConfirmedPage from './routes/confirmed';
import ProtectedRoute from './components/ProtectedRoute';
import BookmarksPage from './routes/bookmarks';
import ProfilePage from './routes/profile';
import CreatePage from './routes/create';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/confirmed' element={<ConfirmedPage/>}/>
      <Route path='/profile' element={
        <ProtectedRoute>
          <ProfilePage/>
        </ProtectedRoute>
      }/>
      <Route path='/create' element={
        // <ProtectedRoute>
          <CreatePage/>
        // </ProtectedRoute>
      }/>
      <Route path='/bookmarks' element={
        <ProtectedRoute>
          <BookmarksPage/>
        </ProtectedRoute>
      }/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
