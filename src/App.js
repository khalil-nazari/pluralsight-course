import React from "react";
import { Route, Switch } from "react-router-dom";
import aboutPage from "./components/about/aboutPage";
import Header from "./components/common/Header";
import CoursesPage from "./components/courses/coursesPage";
import ManageCoursePage from "./components/courses/ManageCoursePage";
import homePage from "./components/home/homePage";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={homePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={aboutPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
