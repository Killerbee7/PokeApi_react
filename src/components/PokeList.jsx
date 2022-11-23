
import Card from './Card';
import classes from './PokeList.module.css';
import React, { Component } from 'react';

class PokeList extends Component {

    state={
        data:[],
        isLoading: false,
    };

    componentDidMount(){
        this.setState({isLoading: true});
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        .then((res)=>res.json())
        .then((data) => {const fetches = data.results.map((p) =>{
            return fetch(p.url).then((res) => res.json());
        });
        Promise.all(fetches).then((res)=>
            this.setState({
                data:res,
                isLoading: false })
        );
    });
    }
    render() {
console.log(this.state.data)
        if(this.state.isLoading){
            return <h1>Pokemons are loading...... </h1>
        }

        
        return (
            <div className={classes.card_container}>
                {this.state.data.map((card) =>(
                    <Card name={card.name}
                    key={card.name}
                    image={card.sprites.other["official-artwork"].front_default}/>

                ))}
                
                
           
            
            </div>
        );
    }
}

export default PokeList;