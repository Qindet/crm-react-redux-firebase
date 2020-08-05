import React from 'react'
import MainHeader from "../main-header";
import classes from './app.scss'
import Customers from "../customers/customers";

const App = () => {


    return (
        <div>
            <MainHeader/>
            <Customers />
        </div>

        )
}

export default App