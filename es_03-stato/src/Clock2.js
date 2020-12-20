import React, { Component } from 'react'

class Clock2 extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            timestamp: Date.now(),
            timezone: 1,
            secs: 1
        }
    }

    render(){
        const d= new Date(this.state.timestamp);
        const tempo = d.getTime() + this.props.timezone * 3600 * 1000;
        const data=new Date(tempo);

        return (<h2 className="yellow"> In { this.props.nazione } sono  { data.toLocaleTimeString() } </h2>);
    }

    tick = () =>{ 
        this.setState((precState, props)=>{
            return {
                timestamp: precState.timestamp + this.props.secs*1000,
            }
        });
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


export default Clock2;