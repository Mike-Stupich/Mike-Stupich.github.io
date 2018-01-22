import * as propTypes from 'prop-types';
import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react';

import Project from './Project';

interface IProjectDisplayProps {
    orderOfProjects: string[];
}

interface IProjectDisplayState {

}

const styles = {
    segmentStyle: {
        padding: '8em',
    },
    dividerStyle: {
        margin: '1em',
        fontSize: '2em',
    }
};

class ProjectDisplay extends React.Component<IProjectDisplayProps, IProjectDisplayState> {
    public static propTypes = {
        orderOfProjects: propTypes.arrayOf(propTypes.string).isRequired
    };

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Segment
            vertical
            style={styles.segmentStyle}
            >
            <Divider
            horizontal
            style={styles.dividerStyle}
            name='myWork'
            content='Some of my work'>
            </Divider>
                <Grid
                container
                stackable
                verticalAlign='middle'
                textAlign='justified'
                >
                    {...this.determineOrder().map((name) => (
                        <Project key={name} projectName={name}/>
                    ))}
                </Grid>
            </Segment>
        );
    }

    private determineOrder = () => {
        return (this.props.orderOfProjects
            ? this.props.orderOfProjects
            : ['typ3', 'discordBot', 'website']);
    }
}

export default ProjectDisplay;
