import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Notfound from './Components/NotFound/Notfound';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Course from './Components/Course/Course';
import Details from './Components/Details/Details';
import Faq from './Components/Faq/Faq';



function App() {
  return (
    <div className="App">
      
     <Router>
     <Header></Header>
       <Switch>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route exact path="/home">
         <Home></Home>
         </Route>
         <Route exact path="/about">
        <About></About>
        </Route>
         <Route exact path="/courses">
      <Courses></Courses>
         </Route>
         <Route exact path="/courses/:id">
      <Details></Details>
         </Route>
         <Route exact path="/faq">
           <Faq></Faq>
         </Route>
         <Route path="*">
         <Notfound></Notfound>
         </Route>
       </Switch>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
