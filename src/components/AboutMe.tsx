import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Container,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

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
                    <Header
                    as='h1'
                    content='About Me'/>
                </Container>
            </Segment>
        );
    }
}

export default AboutMe;
