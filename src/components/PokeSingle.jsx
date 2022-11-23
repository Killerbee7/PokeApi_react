import React, { Component } from 'react';

class PokeSingle extends Component {

    state={
        data:[],
        isLoading: false,
    }

    componentDidMount(){
        this.setState({isLoading:true});

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
        .then((res) => res.json())
        .then(data) => this.setState({data: data, isLoading: false})

        
    }
    render() {
        console.log(this.props.params.pokesingle)
        return (
            
            <div>
                <h>{this.state.data.name}</h>
                <img src={this.state.data.sprites?.other.dream.world} alt="" />
            </div>
        );
    }
}

export default Pokesingle;