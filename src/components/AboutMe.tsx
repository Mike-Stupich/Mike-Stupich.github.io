import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Container,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

import DescriptorBox from './DescriptorBox';

interface IAboutMeProps {

}

class AboutMe extends React.Component<IAboutMeProps, any> {
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
