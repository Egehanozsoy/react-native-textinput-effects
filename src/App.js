import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from './components'
import { BorrowerPage, HomePage, LenderPage } from './pages';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/Lender' exact component={LenderPage} />
        <Route path='/Borrower' exact component={BorrowerPage} />
      </Switch>
    </Router>

  );

}

export default App;