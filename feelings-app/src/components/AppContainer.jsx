import React, { Component } from 'react'
import PersonStats from './PersonStats'
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
    
    
                <PersonStats />
            </div>
        );
    }
}



export default AppContainer;