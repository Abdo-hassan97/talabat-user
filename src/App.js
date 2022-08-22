import './App.css';
import Home from './components/Home/home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicDetail from './components/Basic detail/basicDetail';
import SearchByLocation from './components/searchByLocation/searchByLocation'
import AddToCard from './components/addToCart/addToCard'
import Login from './components/Login/Login' 
import AllRestrants from './components/all-restaurant/all-restaurant'
import BasicDeta from './components/Basic detail/basicDetail'
import Rigester from './components/Rigester/Rigester';
import Myaccount from './components/MyAccount/myaccount';
function App() {
  return (
    <div className="App">
      

      <Router>
      <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route  path="/BasicDetail" exact component={BasicDetail}/>
        <Route  path="/searchToLocation" exact component={SearchByLocation}/>
        <Route  path="/AddToCard" exact component={AddToCard}/>
        <Route  path="/Login" exact component={Login}/>
        <Route  path="/AllRestrants" exact component={AllRestrants}/>
        <Route  path="/BasicDeta" exact component={BasicDeta}/>
        <Route  path="/Rigester" exact component={Rigester}/>
        <Route  path="/Myaccount" exact component={Myaccount}/>

        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
