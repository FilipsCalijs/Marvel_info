import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoudary from "../errorBoundary/ErrorBoudary" 
import { useState } from "react";


import decoration from '../../resources/img/vision.png';



const App = () =>{
    const [selectedChar, setChar] = useState(null);

    
    const onCharSelected = (id) =>{
        setChar(id);
    }
    return (
        <div className="app">
            <AppHeader/>
            <main>
                <ErrorBoudary>
                    <RandomChar/>
                </ErrorBoudary>
                <div className="char__content">
                <ErrorBoudary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoudary>
                    <ErrorBoudary><CharInfo charId={selectedChar}/></ErrorBoudary>
                    
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
        )
    
    
}

export default App;