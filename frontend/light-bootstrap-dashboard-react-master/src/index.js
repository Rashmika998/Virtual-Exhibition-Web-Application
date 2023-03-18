/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import CustomizeAvatar from "views/CustomizeAvatar";
import Landing from "layouts/Landing";
import Login from "views/Login";
import RegisterAttendee from "views/RegisterAttendee";
import RegisterOwner from "views/RegisterOwner";
import RegisterAdmin from "views/RegisterAdmin";
import RegisterExhibitor from "views/RegisterExhibitor";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
    <Route exact path='/home' component={Landing}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/registerAttendee' component={RegisterAttendee}/>
      <Route exact path='/registerOwner' component={RegisterOwner}/>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      <Route  
      path='/registerAdmin' 
      render={(props) => <RegisterAdmin {...props} />} />
      
      <Route  
      path='/registerExhibitor' 
      render={(props) => <RegisterExhibitor {...props} />} />

      <Route
        path="/customize-avatar"
        render={(props) => <CustomizeAvatar {...props} />}
      />

      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>
);
