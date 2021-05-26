import React, {Component} from 'react'

export default class App extends Component {
    state = {
        astronauts: []
    }
    
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                astronauts: json.people.map(astro => `${astro.name} `)
            })
        })
    }
    
    render() {
        return (
            <div>
                <p>{this.state.astronauts}</p>
            </div>
        )
    }
}