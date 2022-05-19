import React from 'react'
import Header from './Header'
import RoutesBody from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
          <HashRouter>

            <Header/>

            <RoutesBody/>

         </HashRouter>
        </div>
    )
}

export default HW5
