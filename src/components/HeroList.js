import React, { Component } from 'react';
import {connect} from 'react-redux';
import { removeCharacterById } from '../actions';
import { bindActionCreators } from 'redux';


class HeroList extends Component{

    render(){
        return (
            <div>
                <h3 style={{ color:'#808000', fontWeight: 'bold'}}>Your Hero List </h3>

                <div className="charList">
                    <ul className="list-group order-list">
                        {
                            this.props.heroes.map((hero) => {
                                return (
                                    <li key={hero.id} className="list-group-item">
                                        <div className="list-item">{hero.name}</div>
                                        <div className= "list-item right-button" onClick= {() => this.props.removeCharacterById(hero.id)}>x</div>
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
function mapStateToProps(state) {
return {
    heroes: state.heroes
}
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCharacterById}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps ) (HeroList);