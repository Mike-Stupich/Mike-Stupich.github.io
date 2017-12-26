import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import {
    Button,
    Container,
    Menu,
    Segment,
} from 'semantic-ui-react';
import Home from './Home';
import Resume from './Resume';

const Nav = () => (
    <Segment
        inverted
        textAlign='center'
        style={{ minHeight: 700, padding: '1em 0em' }}
        vertical
    >
        <Container>
            <Menu
                inverted
                pointing
                secondary
                size='large'
            >
                <Menu.Item>
                    <Route exact path='/' component={Home} />
                </Menu.Item>
                <Menu.Item>
                    <Route exact path='/resume' component={Resume} />
                </Menu.Item>
            </Menu>
        </Container>
    </Segment>
);

export default Nav;
