import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import SinglePost from "./SinglePost.js";
import YouTube from "./Youtube.js";
import Project from "./Project.js";
import NavBar from "./NavBar";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={SinglePost} path='/post/:slug' />
        <Route component={YouTube} path='/youtube' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
