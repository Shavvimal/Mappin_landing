import React, { useState } from 'react';
import {Home, Home2} from './pages';
import { Header, Modal} from './layout';
import './styles/app.css';


function App(){


    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }


    return (
        <>


            <Home2 />



        </>
    )
}

export default App;
