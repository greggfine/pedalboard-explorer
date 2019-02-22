import React from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import Creator from './containers/Creator';
import MyBoards from './containers/MyBoards';

export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <h1>Pedalboard Explorer</h1>
                        <Link to="/">Create</Link> <br/>
                        <Link to="/my-boards">myBoards</Link>
                    </nav>
                    <Route exact path='/' component={Creator} />
                    <Route path='/my-boards' component={MyBoards} />
                </div>
            </BrowserRouter>
            
        )
    }
}