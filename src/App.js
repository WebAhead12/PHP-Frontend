import "./App.css";
import React from "react";

import AccountComponent from "./components/account/accountComponent.jsx";
import PersonalizedPageComponent from "./components/personalizedPage/personalizedPageComponent.jsx";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  return <main className="App">{isLoggedIn ? <PersonalizedPageComponent /> : <AccountComponent />}</main>;
}

export default App;
