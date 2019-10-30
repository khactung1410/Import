import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>Welcome to Home Page</div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = {
    
}

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage)
export {connectedHomePage as HomePage};