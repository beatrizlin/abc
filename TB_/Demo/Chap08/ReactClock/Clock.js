import React from 'react';

class Clock extends React.Component {
    constructor() {
        super();
        this.state = { time: new Date() }; 
    }

    componentDidMount() { 
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1000); 
    }

    componentWillUnmount() { 
        clearInterval(this.update);
    }

    render() {
        const { time } = this.state; 
        return (
            <h2>{time.toLocaleTimeString()}</h2>
        );
    }
}

export default Clock;