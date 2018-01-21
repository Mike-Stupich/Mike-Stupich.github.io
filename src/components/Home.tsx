import { propTypes } from 'prop-types';
import * as React from 'react';

import HomeHeader from './HomeHeader';
import MyProjects from './MyProjects';

interface IHomeProps {
    greeting: string;
}

interface IHomeState {
    height: string;
    width: string;
}

class Home extends React.Component<IHomeProps, IHomeState> {
    constructor(props) {
        super(props);
        this.state = {
            height: '0px',
            width: '0px'
        };
    }

    // Get the dimensions of the user's screen on mount
    public componentDidMount() {
        this.setState({
            width: '1340px',
            height: '3440px'
        });
    }

    public render() {
        return (
            <div>
                <HomeHeader screenWidth={this.state.width} screenHeight={this.state.height}/>
                <MyProjects />
            </div>
        );
    }
}

export default Home;
