import React, {Component} from 'react';


class About extends Component {

    state = {
        time: new Date()
    };

    componentDidMount () {
        this.interval =  setInterval( () => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }

    tick () {
        this.setState({
            time: new Date()
        })

    }

    render () {
        return (
            <p> time - {this.state.time.toLocaleTimeString()} </p>
        )
    }
}

export default About;
