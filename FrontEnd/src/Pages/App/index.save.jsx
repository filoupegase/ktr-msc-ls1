import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header';
import Home from '../../Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../../components/Login';
import Register from '../../components/register';
import Profile from '../../components/profile';


class App extends Component {
  render() {
    const { advertisementsList } = this.props;
    /*
        console.log('App advertisementsList :', advertisementsList);
    */
    return (
        <>
          <div className="container">
            <Header/>
            <Routes>
              <Route path="/" element={
                <Home/> }/> } strict exact/>
              <Route path="/login" element={
                <Login/> } strict exact/>
              <Route path="/register" element={
                <Register/> } strict exact/>
              <Route path="/profile" element={
                <Profile/> } strict exact/>
              <Route path="/create-card" element={
                <Home/> } strict exact/>
              <Route path="*" element={
                <Home/> }
              />
            </Routes>
          </div>
        </>
    );
  };
}

export default App;
