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
        const response = await axios.get('https://chatcorrectedback.onrender.com', {
          withCredentials: true,
        });
        setId(response.data.id);
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // handle error here, e.g., clear local state or redirect to login
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
