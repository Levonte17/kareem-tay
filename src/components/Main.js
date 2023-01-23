
import { Routes, Route } from 'react-router-dom';
///////PAGES///////////////////

import Homepage from '../pages/Homepage';

function Main(props) {
    return(
<main>
<Routes>
    <Route path="/" element={
        <Homepage/>
    } />
</Routes>
</main>

    )
};

export default Main;