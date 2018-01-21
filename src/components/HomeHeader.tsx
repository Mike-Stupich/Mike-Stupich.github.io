import * as propTypes from 'prop-types';
import * as React from 'react';
import * as Dimensions from 'react-dimensions';
import {
    Container,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';
// TODO: Change to import syntax
const Background = require('../assets/background.jpg');

interface IHomeHeaderProps {
}

interface IHomeState {
}

const styles = {
    backgroundStyle: {
        backgroundImage: `url(${Background})`,
        width: null,
        height: null,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    } as React.CSSProperties,
    headerStyle: {
        fontSize: '6em',
        fontWeight: 'normal',
        marginBottom: '5em',
        marginTop: '5em',
    }
};

class HomeHeader extends React.Component<IHomeHeaderProps, IHomeState> {
    constructor(props) {
        super(props);
    }

    public render() {
        // TODO: Fix sizing - This is reliant on marginTop and marginBottom of headerStyle
        // TODO: Change text font and color

        return (
            <div style={styles.backgroundStyle}>
                <Container
                text
                >
                <Header
                    as='h1'
                    content='Welcome to my website!'
                    inverted={true}
                    style={styles.headerStyle}/>
                </Container>
            </div>
        );
    }
}

export default HomeHeader;
