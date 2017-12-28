import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import {
    Container,
    Menu,
    Segment
} from 'semantic-ui-react';

interface INavProps {
    text: string;
}

export default class Nav extends React.Component<INavProps, any> {
    public render() {
        return (
            <Segment
                inverted={true}
                textAlign='center'
                style={{ minHeight: 50, padding: '1em 0em' }}
                vertical={true}
            >
            <Container>
                <Menu
                    inverted={true}
                    pointing={true}
                    size='large'
                >
                    <Menu.Item>{this.props.text}</Menu.Item>
                    <Menu.Item as={Link} to='/'>
                        <Menu.Item>Home</Menu.Item>
                    </Menu.Item>
                    <Menu.Item as={Link} to='/resume'>
                        <Menu.Item>Resume</Menu.Item>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to='https://github.com/Mike-Stupich/React_Website'>
                            <Menu.Item>Source Code</Menu.Item>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </Segment>
        );
    }
}
