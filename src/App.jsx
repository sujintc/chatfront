


import axios from "axios";
import React from "react";
import { UserContextProvider } from "./UserContext";
import Routes from "./Routes";

// Configure Axios base URL
axios.defaults.baseURL = 'https://chatcorrectedback.onrender.com';

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;

