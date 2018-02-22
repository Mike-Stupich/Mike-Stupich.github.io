import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react';

import Project from './Project';

const styles = {
    segmentStyle: {
        paddingTop: '2em',
        paddingBottom: '2em',
        paddingRight: '1em',
        paddingLeft: '1em',
    },
    dividerStyle: {
        margin: '1em',
        fontSize: '2em',
    }
};
class ProjectDisplay extends React.Component<{}> {
    public render() {
        return (
            <Segment
                vertical
                className='segment'
            >
                <Divider
                    name='projects'
                    horizontal
                    style={styles.dividerStyle}
                    content='Some of my work'>
                </Divider>
                <Grid
                    container
                    stackable
                    verticalAlign='middle'
                    textAlign='justified'
                >
                    {...this.determineOrder().map((name) => (
                        <Project key={name} projectName={name} />
                    ))}
                </Grid>
            </Segment>
        );
    }

    private determineOrder = () => {
        // return (this.props.orderOfProjects
        //     ? this.props.orderOfProjects
        //     : ['typ3', 'discordBot', 'website']);
        return ['typ3', 'discordBot', 'website'];
    }
}

export default ProjectDisplay;
