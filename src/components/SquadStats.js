import React , { Component } from 'react';
import {connect } from 'react-redux';

class SquadStats extends Component {
    strength(){
        let strength = 0;
        this.props.heroes.forEach(hero => {
            return strength += hero.strength;
        });
        return strength;
    }
    intelligence() {
        let intelligence = 0;
        this.props.heroes.forEach(hero => {
            return intelligence += hero.intelligence;
        });
        return intelligence;
    }
    speed() {
        let speed = 0;
        this.props.heroes.forEach(hero => {
            return speed += hero.speed;
        });
        return speed;
    }
    render() {
        console.log("new COmponent ", this.props)
        return (
            <div>
                <h3 style={{ color:'#808000', fontWeight: 'bold'}}>Squad Stats</h3>
                <ul className="list-group">
                    <li className="list-group-item charList">   
                        <b>Overall Strength:</b> {this.strength()}
                    </li>
                    <li className="list-group-item charList">
                        <b>Overall Intelligence:</b> {this.intelligence()}
                    </li>
                    <li className="list-group-item charList">
                        <b>Overall Speed:</b> {this.speed()}
                    </li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        heroes: state.heroes
    }
}
export default connect(mapStateToProps, null) (SquadStats);