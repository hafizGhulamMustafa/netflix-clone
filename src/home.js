import React, { useState, useContext, createContext } from "react";
import Usecontexts from "./useContexts";
import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext()


const Home = () => {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Usecontexts user={user} />
      </UserContext.Provider>
    );
};

export default Home;
