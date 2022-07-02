import React from 'react';
import { useState, createContext, useContext } from "react";
import UseContext1 from './useContext1';

const Usecontexts = (props) => {
  return (
    <div>
        <h1>hello its useContext</h1>
        {props.name}
        <UseContext1 />
        </div>
  )
}

export default Usecontexts;