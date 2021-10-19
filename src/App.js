import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Components/Paths/About/About';
import Blog from './Components/Paths/Blog/Blog';
import Doctor from './Components/Paths/Doctor/Doctor';
import Home from './Components/Paths/Home/Home';
import Login from './Components/Paths/Login/Login';
import NotFound from './Components/Paths/NotFound/NotFound';
import PrivateRoute from './Components/Paths/PrivateRoute/PrivateRoute';
import Service from './Components/Paths/Service/Service';
import ServiceDetail from './Components/Paths/ServiceDetails/ServiceDetail';
import AuthProvider from './ContextApi/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/service">
            <Service></Service>
          </PrivateRoute>
          <Route path="/doctor">
            <Doctor></Doctor>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/serviceDetail/:serviceID">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <PrivateRoute path="/blog">
            <Blog></Blog>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
