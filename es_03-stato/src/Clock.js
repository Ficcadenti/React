import React, { Component } from 'react'

class Clock extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            timezone: 1,
            secs: 1
        }
    }

    render(){
        const tempo = this.state.date.getTime() + this.props.timezone * 3600 * 1000;
        const data=new Date(tempo);

        return (<h2> In { this.props.nazione } sono  { data.toLocaleTimeString() } </h2>);
    }

    tick = () =>{ 
        this.setState({
            date: new Date()
        });

        /*this.setState((precState, props)=>{
            return {
                date: new Date()
            }
        });*/
    };


    
    componentDidMount(){
        console.log('componentDidMount');
        this.interval = setInterval(this.tick,this.props.secs*1000);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    }
}


export default Clock;