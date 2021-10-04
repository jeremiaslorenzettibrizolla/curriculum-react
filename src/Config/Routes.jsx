import { Route, Switch } from "react-router";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Resume from "../Pages/Resume";
import Projects from "../Pages/Projects";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <Route path="/resume" exact>
        <Resume />
      </Route>
      <Route path="/projects" exact>
        <Projects />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Switch>
  );
}
