import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import CarouselBox from './Pages/CarouselBox';
import Home from './Pages/Home';
import TopRated from './Pages/TopRated';
import Premiere from './Pages/Premiere';
import Random from './Pages/Random';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App(props) {


  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/carousel" component={CarouselBox} />
          <Route exact path="/" component={Home} />
          <Route exact path="/toprated" component={TopRated} />
          <Route exact path="/premiere" component={Premiere} />
          <Route exact path="/random" component={Random} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
