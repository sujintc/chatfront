import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";

function App() {
  axios.defaults.baseURL = 'https://chatback-tdid.onrender.com';

  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  )
}

export default App
