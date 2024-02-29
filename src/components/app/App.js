import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {MainPage, ComicsPage, Page404} from '../pages';
import AppHeader from "../appHeader/AppHeader";

const App = () => {
    
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route exact path="/" element={<MainPage/>}></Route>
                        <Route exact path="/comics" element={<ComicsPage/>}></Route>
                        <Route exact path="*" element={<Page404/>}></Route>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;