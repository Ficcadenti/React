import React, { Component } from 'react'


class Clock extends Component
{
    constructor(props) {
        super(props);
        //this.toggleWatch=this.toggleWatch.bind(this);
        this.state = {
            date: new Date(),
            timezone: 1,
            secs: 1,
            stopped: false
        }
    }


    render(){
        const tempo = this.state.date.getTime() + this.props.timezone * 3600 * 1000;
        const data=new Date(tempo);

        return <li> In { this.props.nazione }  is  <br/>
        <span className="clock"> {data.toLocaleTimeString() }</span><br/>
        <button onClick={this.toggleWatch}>{this.state.stopped ? 'Start' : 'Stop'}</button>
        </li>
    }


    toggleWatch = (e) => {
        //e.target.style.color='blue';
       
        this.setState((precState,props)=> {
            console.log("Stato precedente: "+precState.stopped);
            if (precState.stopped) 
            {
                this.startWatch();
            }else
            {
                this.stopWatch();
            }
            console.log("Stato attuale: "+!precState.stopped);
            return {stopped: !precState.stopped}
        })
    };

    tick = () =>{ 
        this.setState((precState, props)=>{
            return {
                date: new Date()
            }
        });
    };

    stopWatch()
    {
        clearInterval(this.interval);
        console.log("STOP "+this.interval);
        this.interval=null;
    }

    startWatch()
    {
        if(this.interval==null)
        {
            this.interval = setInterval(this.tick,this.props.secs*1000);
            console.log("START "+this.interval);
        }
    }
    
    componentDidMount(){
        console.log('componentDidMount');
        this.startWatch();
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        this.stopWatch();
    }
}


export default Clock;