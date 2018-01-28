import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Container,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

import DescriptorBox from './DescriptorBox';

interface IProps {

}

class AboutMe extends React.Component<IProps, any> {
    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Segment>
                <Container>
                    <Grid
                    container
                    verticalAlign='middle'
                    textAlign='justified'
                    >
                    <DescriptorBox descriptorContent={this.info()} />
                    </Grid>
                </Container>
            </Segment>
        );
    }

    private info = () => ({
        title: 'A bit about me',
        content: ``,
        image: require('../assets/MyPhoto.jpg')
    })
}

export default AboutMe;
