import * as React from "react";
import {
  BrowserRouter as Router,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Ledger from "./pages/ledger";
import Settings from "./pages/settings";

import Billboard from "@components/billboard";
import Docs from "@components/docs";
import Layout from "@components/layout";

import Header from '@components/header/header'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ledger" element={<Ledger />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
