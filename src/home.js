import React, {  useState } from "react";

const Home = () => {

        const [count, setCount] = useState("Ghulam mustafa");

        return(
        <>
        <h1>{`Hello ${count}`}</h1>
        </>
           
           
           
           )
    };

export default Home;
