import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import {
    Container,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react';

interface INavProps {
    text: string;
}

interface INavState {
    visible: boolean;
}

export default class Nav extends React.Component<INavProps, INavState> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    public render() {
        return (
            <div>
                {this.state.visible ? <this.FixedMenu /> : null }
            <Visibility
                onBottomPassed={this.showFixedMenu}
                onBottomVisible={this.hideFixedMenu}
                once={false}
            >
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
                            <Menu.Item as={Link} to='/projects'>
                                <Menu.Item>My Projects</Menu.Item>
                            </Menu.Item>
                            <Menu.Item as={Link} to='/aboutme'>
                                <Menu.Item>About Me</Menu.Item>
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Menu.Item as='a' href='https://github.com/Mike-Stupich/React_Website'>
                                    <Menu.Item>Source Code</Menu.Item>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Container>
                </Segment>
            </Visibility>
            </div>
        );
    }
    private hideFixedMenu = () => {
        this.setState({
            visible: false
        });
    }
    private showFixedMenu = () => {
        this.setState({
            visible: true
        });
    }
    private FixedMenu = () => (
        <Menu
        fixed='top'
        size='large'
        >
            <Menu.Item>{this.props.text}</Menu.Item>
            <Menu.Item as={Link} to='/'>
                <Menu.Item>Home</Menu.Item>
            </Menu.Item>
            <Menu.Item as={Link} to='/resume'>
                <Menu.Item>Resume</Menu.Item>
            </Menu.Item>
            <Menu.Item as={Link} to='/projects'>
                <Menu.Item>My Projects</Menu.Item>
            </Menu.Item>
            <Menu.Item as={Link} to='/aboutme'>
                <Menu.Item>About Me</Menu.Item>
            </Menu.Item>
            <Menu.Menu position='right'>
                <Menu.Item as='a' href='https://github.com/Mike-Stupich/React_Website'>
                    <Menu.Item>Source Code</Menu.Item>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )

}
