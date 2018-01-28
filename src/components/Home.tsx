import * as propTypes from 'prop-types';
import * as React from 'react';

import ExpertiseDisplay from './ExpertiseDisplay';
import HomeHeader from './HomeHeader';
import ProjectDisplay from './ProjectDisplay';

interface IHomeProps {
    toggleScrollMenu: any;
}

interface IHomeState {
    projectOrder: string[];
}

class Home extends React.Component<IHomeProps, IHomeState> {
    public static propTypes = {
        toggleScrollMenu: propTypes.func.isRequired
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
                <HomeHeader toggleScrollMenu={this.props.toggleScrollMenu}/>
                <ExpertiseDisplay />
                <ProjectDisplay orderOfProjects={this.state.projectOrder} />
            </div>
        );
    }
}

export default Home;
