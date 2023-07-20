import logo from './logo.svg';
import './App.css';
import { Route } from 'express';





function App() {
  return ( //Maggie video 64 
    <Router>                                       
      <div className="App"> 
        <Header /> 
        <div className="container container-fluid">
          <Route path="/" component={Home} exact />
          <Route path="/search/:Keyword" component={Home} />
          <Route path="/product/:id" component={ProductDetails} exact />
        </div>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
