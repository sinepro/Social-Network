
import './App.scss';
import Home from './Components/Home';
import Registration from './Components/Registration';
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/registration" element={<RegistrationPage />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
  routes for.  */}
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary >
  );
}

function HomePage() {
  return (
    <div>
      <Home />
    </div>
  );
}

function RegistrationPage() {
  return (
    <div>
      <Registration />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here.</h1>
    </div>
  );
}

export default App;