// import {createContext, useEffect, useState} from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({children}) {
//   const [username, setUsername] = useState(null);
//   const [id, setId] = useState(null);
//   useEffect(() => {
//     axios.get('/profile').then(response => {
//       setId(response.data.userId);
//       setUsername(response.data.username);
//     });
//   }, []);
//   return (
//     <UserContext.Provider value={{username, setUsername, id, setId}}>
//       {children}
//     </UserContext.Provider>
//   );
// }

// import { createContext, useEffect, useState } from "react";
// import axios from "axios";

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [username, setUsername] = useState(null);
//   const [id, setId] = useState(null);

//   useEffect(() => {
//     const token = 'your_token_here'; // replace with your token
//     axios.get('/profile', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then(response => {
//         setId(response.data.userId);
//         setUsername(response.data.username);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <UserContext.Provider value={{ username, setUsername, id, setId }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
// UserContext.jsx

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://chatback-tdid.onrender.com/profile', {
          withCredentials: true,
        });
        setId(response.data.userId);
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ username, setUsername, id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
