import * as propTypes from 'prop-types';
import * as React from 'react';

import ExpertiseDisplay from './ExpertiseDisplay';
import HomeHeader from './HomeHeader';
import ProjectDisplay from './ProjectDisplay';

interface IHomeProps {
    toggleScrollMenu: any;
}

class Home extends React.Component<IHomeProps> {
    public static propTypes = {
        toggleScrollMenu: propTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <HomeHeader toggleScrollMenu={this.props.toggleScrollMenu} />
                <ExpertiseDisplay />
                <ProjectDisplay />
            </div>
        );
    }
}

export default Home;
