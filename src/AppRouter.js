import React from 'react'
import { HashRouter, BrowserRouter, Route, Redirect, Switch } from 'react-router-dom' //

import config from './_config'

import DashboardLayout from '_layouts/DashboardLayout'
import { Auth } from './Auth'
import { Administration } from './Administration'
import { Dashboard } from './Dashboard'
import Home from './MLMComponents/Home'
import  Program  from './MLMComponents/Program/Program'
import  ChangeRequests  from './MLMComponents/Program/ChangeRequests'
import  ProgramHistory  from './MLMComponents/Program/History'

// Use different router type depending on configuration
const AppRouterComponent =
  config.navigationType === 'history' ? BrowserRouter : HashRouter

const AppRouter = () => (
  <AppRouterComponent>
    <Switch>
    <RouteWithLayout exact path={`/`} component={Home} layout={DashboardLayout} />

      {/* <Route exact path="/" render={() => <Redirect to="/sales/dashboard" />} /> */}
      <Route path="/auth" component={Auth} />
      <RouteWithLayout
        path={"/program/master-data"}
        component={Program}
        layout={DashboardLayout}
      />

<RouteWithLayout
        path={"/program/requests"}
        component={ChangeRequests}
        layout={DashboardLayout}
      />

<RouteWithLayout
        path={"/program/history"}
        component={ProgramHistory}
        layout={DashboardLayout}
      />
      <RouteWithLayout
        path={"*"}
        component={Error}
        layout={DashboardLayout}
      />
      {/* <Route path="/" component={DashboardLayout} /> */}
      {/* <RoutePrivate path="/" component={LoggedInRouter} /> */}
    </Switch>
  </AppRouterComponent>
)

const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (Layout) {
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        )
      } else {
        return <Component {...props} />
      }
    }}
  />
)

export default AppRouter
