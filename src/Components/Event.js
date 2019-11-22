import React, {Component} from 'react';
import Axios from 'axios';



class Event extends Component{
    constructor(){
        super();
        this.state={
            event:''
        }
    }

    getData(){
        Axios.get('/api/data').then(res=>{
            this.setState({
                event:res.data
            })
        }).catch(err=> console.log(err))
    }

    render(){

    return(
        <header>
            <h1>hi</h1>
        </header>
    )
    }
}

export default Event;