import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from './App';
import Page1 from './Page1';

export default function Home() {
  return (

    <Router>
    <Route path="/home" render={() => <div>Home</div>} />
  </Router>
  );
}

