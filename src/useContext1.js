import React from 'react';
import { useState, createContext, useContext } from "react";

const UseContext1 = () => {
    const user = useContext(UserContext);

    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  
}

export default UseContext1;