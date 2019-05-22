import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions'

class CharacterList extends Component {
    
    render (){
        return (
            <div>
                <h3 style={{ color:'#808000', fontWeight: 'bold'}}>
                    Characters
                </h3>
                <div className="charList">
                <ul className="list-group order-list">
                    {
                        this.props.characters.map((character) =>{
                            return (
                                <li key={character.id} className="list-group-item">
                                    <div className="list-item">{character.name}</div>
                                    <div className="list-item right-button" onClick={()=> this.props.addCharacterById(character.id)}>+</div>
                                </li>
                            )
                        })  
                    }
                </ul>


                </div>
                            </div>
        )
    }
}
function mapStateToProps(state){
    console.log('state',state);
    return {
        characters: state.characters
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById}, dispatch)
}


 export default connect(mapStateToProps,mapDispatchToProps)(CharacterList); 