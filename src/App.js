import "./App.css";
import React from "react";

import AccountComponent from "./components/account/accountComponent.jsx";
import PersonalizedPageComponent from "./components/personalizedPage/personalizedPageComponent.jsx";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const token = window.localStorage.getItem("access_token");

  React.useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <main className="App">
      {isLoggedIn ? (
        <PersonalizedPageComponent sx={{ backgroundColor: "#4D4D54" }} />
      ) : (
        <AccountComponent setLoggedIn={setLoggedIn} />
      )}
    </main>
  );
}

export default App;
