import * as propTypes from 'prop-types';
import * as React from 'react';

import HomeHeader from './HomeHeader';
import ProjectDisplay from './ProjectDisplay';

interface IHomeProps {
    greeting: string;
}

interface IHomeState {
    projectOrder: string[];
}

// TODO: Add something that will change the displayed projects depending on user
class Home extends React.Component<IHomeProps, IHomeState> {
    public static propTypes = {
        greeting: propTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            projectOrder: [
                'typ3', 'discordBot', 'website'
            ]
        };
    }

    public render() {
        return (
            <div>
                <HomeHeader />
                <ProjectDisplay orderOfProjects={this.state.projectOrder} />
            </div>
        );
    }
}

export default Home;
