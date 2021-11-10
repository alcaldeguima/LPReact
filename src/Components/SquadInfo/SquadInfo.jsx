import React, { Component } from 'react';
import Description from '../Description';
import Intro from '../Introduction';

class SquadInfo extends Component {
    render() {
        return(
            <>
                <Intro />
                <Description />
            </>
        )
    }
}

export default SquadInfo