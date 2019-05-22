import React , {Component} from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 style={{ color:'#808000', fontWeight: 'bold'}}>SuperSquad</h1>
                <div className="container">
                    <div className="row" style={{marginTop: '60px'}}>
                        <div className="col-md-4">
                            <CharacterList />
                        </div>
                        <div className="col-md-4">
                        <HeroList />
                        </div>
                        <div className="col-md-4">
                            <SquadStats />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }   
}

export default App;