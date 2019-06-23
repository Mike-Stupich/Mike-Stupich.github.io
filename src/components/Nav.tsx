import * as propTypes from 'prop-types';
import * as React from 'react';
import * as Scroll from 'react-scroll';
import {
    Container,
    Menu,
    Segment,
    Visibility
} from 'semantic-ui-react';
import Home from './Home';

interface IProps {
    text?: string;
    displayScrollMenu: boolean;
}

interface IState {
    visible: boolean;
}

const scroll = Scroll.animateScroll;

export default class Nav extends React.Component<IProps, IState> {
    public static propTypes = {
        text: propTypes.string,
        displayScrollMenu: propTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
    }

    public componentDidMount() {
        Scroll.scrollSpy.update();
    }

    public render() {
        return (
            <Scroll.Element name='top'>
                {this.state.visible ? <this.TopMenu /> : <this.FixedMenu />}
                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                />
            </Scroll.Element>
        );
    }
    private FixedMenu = () => (
        <Menu
            className='nav'
            fixed='top'
            size='large'
            borderless
            stackable
        >
            <Container>
                <Scroll.Link
                    className='nav-scroller'
                    activeClass='active'
                    to='top'
                    smooth={true}
                    duration={500}
                    isDynamic={true}
                >
                    <Menu.Item
                        header
                        content={'Mike Stupich'}
                        className='nav-header'>
                    </Menu.Item>
                </Scroll.Link>
                <Menu.Menu position='right'>
                    <Menu.Item as='a'>
                        <Scroll.Link
                            className='nav-scroller'
                            activeClass='active'
                            to='top'
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                        >
                            <Menu.Item>Home</Menu.Item>
                        </Scroll.Link>
                    </Menu.Item>
                    <Menu.Item as='a' download='Mike_Stupich_Resume.pdf' href={require('../assets/resume.pdf')}>
                        <Menu.Item>Resume</Menu.Item>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Scroll.Link
                            className='nav-scroller'
                            activeClass='active'
                            to='expertise'
                            smooth={true}
                            offset={-100}
                            duration={500}
                            isDynamic={true}
                        >
                            <Menu.Item>About Me</Menu.Item>
                        </Scroll.Link>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Scroll.Link
                            className='nav-scroller'
                            activeClass='active'
                            to='projects'
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                        >
                            <Menu.Item>Projects</Menu.Item>
                        </Scroll.Link>
                    </Menu.Item>
                    <Menu.Item as='a' href='https://github.com/Mike-Stupich/React_Website'>
                        <Menu.Item>Source Code</Menu.Item>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )

    private TopMenu = () => (
        <Menu
            style={{ background: 'transparent' }}
            className='nav'
            size='large'
            fixed='top'
            borderless
            stackable
            inverted
        >
            <Container>
                <Scroll.Link
                    className='nav-scroller'
                    activeClass='active'
                    to='top'
                    smooth={true}
                    duration={500}
                    isDynamic={true}
                >
                    <Menu.Item
                        header
                        content={'Mike Stupich'}
                        className='nav-header'>
                    </Menu.Item>
                </Scroll.Link>
                <Menu.Menu position='right'>
                    <Menu.Item as='a'>
                        <Scroll.Link
                            className='nav-scroller'
                            activeClass='active'
                            to='top'
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                        >
                            <Menu.Item>Home</Menu.Item>
                        </Scroll.Link>
                    </Menu.Item>
                    <Menu.Item as='a' download='Mike_Stupich_Resume.pdf' href={require('../assets/resume.pdf')}>
                        <Menu.Item>Resume</Menu.Item>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Scroll.Link
                            className='nav-scroller'
                            activeClass='active'
                            to='expertise'
                            offset={-100}
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                        >
                            <Menu.Item>About Me</Menu.Item>
                        </Scroll.Link>
                    </Menu.Item>
                    <Menu.Item as='a'>
                        <Scroll.Link
                            className='nav-scroller'
                            activeClass='active'
                            to='projects'
                            smooth={true}
                            duration={500}
                            isDynamic={true}
                        >
                            <Menu.Item>Projects</Menu.Item>
                        </Scroll.Link>
                    </Menu.Item>
                    <Menu.Item as='a' href='https://github.com/Mike-Stupich/React_Website'>
                        <Menu.Item>Source Code</Menu.Item>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )

    // private serveResume = () => [

    // ]

    private hideFixedMenu = () => {
        this.setState({
            visible: true
        });
    }

    private showFixedMenu = () => {
        this.setState({
            visible: false
        });
    }
}
