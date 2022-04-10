import React, { useState } from 'react';
import {Home} from './pages';
import { Header, Modal} from './layout';
import './styles/app.css';


function App(){


    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }


    return (
        <>


            <Home />



        </>
    )
}

export default App;
