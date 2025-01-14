/*!
Basado en plantilla: Argon by Creative Tim Copyright 2019. Check MIT License here (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md).  
*/
import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import AdminFooter from "../components/Footers/AdminFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import routes from "../routes.js";

class Admin extends React.Component {
  componentDidUpdate(e) {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.mainContent.scrollTop = 0;
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/cloud") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  render() {
    return (
      <>
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/cloud/index",
            imgSrc: require("../assets/img/brand/marshmallow_brand.png"),
            imgAlt: "..."
          }}
        />
        <div className="main-content" ref="mainContent">
        
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Container fluid>
            
            <AdminFooter />
          </Container>
        </div>
        <NotificationContainer />
      </>
    );
  }
}

export default Admin;
