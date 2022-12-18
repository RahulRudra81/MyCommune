//Importing React files
import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";

//Importing bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';

import Home from "./pages/Home";
import RequestList from "./pages/provider/RequestList";
import ServiceList from "./pages/customer/ServiceList";
import Profile from "./pages/Profile";
import Signup from "./pages/SignIn";
import Login from "./pages/LogIn";
import YourReqList from "./pages/customer/YourReqList";
import AcceptedServiceList from "./pages/customer/AcceptedServiceList";
import AcceptedRequestList from "./pages/provider/AcceptedRequests";
import YourServices from "./pages/provider/YourServices";
import ServiceDetails from "./pages/ServiceDetails";
import CreateRequest from "./pages/customer/CreateRequest";
import CreateService from "./pages/provider/CreateService";
// import { AuthProvider } from "./AuthProvider";

const App = () => {
  return (
    <BrowserRouter>
     {/* <AuthProvider> */}
       <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route element={<Signup/>} path="/signIn" />
        <Route element={<Login/>} path="/login" />

        <Route element={<Profile/>} path="/profile" />     

        <Route element={<AcceptedServiceList/>} path="/customer/service/accepted/list" />
        <Route element={<YourReqList/>} path="/customer/request/list" />
        <Route element={<ServiceList/>} path="/customer/service/list" />
        <Route element={<CreateRequest/>} path="/create/request" />
        <Route element={<CreateService/>} path="/create/services" />

        <Route element={<ServiceDetails/>} path="/service/details" />

        <Route element={<AcceptedRequestList/>} path="/provider/request/accepted/list" />
        <Route element={<RequestList/>} path="/provider/request/list" />
        <Route element={<YourServices/>} path="/provider/service/list" />
      </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
}

export default App;