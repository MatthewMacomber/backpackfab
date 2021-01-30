import React from "react";
import "./../styles/global.scss";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import BackpackSamplePage from "./backpack-sample";
import FabricatorsPage from "./fabricators";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import { AuthProvider } from "./../util/auth.js";

function App(props) {
  return (
    <AuthProvider>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route
              exact
              path="/backpack-sample"
              component={BackpackSamplePage}
            />

            <Route exact path="/fabricators" component={FabricatorsPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            color="white"
            size="medium"
            backgroundImage=""
            backgroundImageOpacity={1}
            description="Providing amazing backpacks to everyone"
            copyright="© 2020 Company"
            logo="/logo.svg"
          />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
