import * as propTypes from 'prop-types';
import * as React from 'react';
import * as Dimensions from 'react-dimensions';
import * as Scroll from 'react-scroll';
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Label,
    Segment,
} from 'semantic-ui-react';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';

const scroll = Scroll.animateScroll;

interface IProps {
}

interface IState {
}

class HomeHeader extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
    }
    public componentDidMount() {
        Scroll.Events.scrollEvent.register('begin', (to, element)  => {
            console.log("begin", arguments);
        });
        Scroll.Events.scrollEvent.register('end', (to, element) => {
            console.log("end", arguments);
        });
        Scroll.scrollSpy.update();
    }
    public componentWillUnmount() {
        Scroll.Events.scrollEvent.remove('begin');
        Scroll.Events.scrollEvent.remove('end');
    }

    public render() {
        return (
            <header className='splash'>
                <Container className='splash-container'>
                    <div className='splash-body'>
                        <Header
                            className='splash-heading'
                            content='Welcome to my website!'
                            inverted={true}
                        />
                        <Scroll.Link
                            className='splash-scroller'
                            activeClass='active'
                            to='projects'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            isDynamic={true}
                            >
                            <div>
                                <Label
                                className='scroller-label'
                                content={`Scroll down to learn more!`}
                                >
                            </Label>
                            </div>
                            <div>
                                <Icon
                                className='scroller-icon'
                                name='chevron down'
                                color='black'
                                />
                            </div>
                        </Scroll.Link>
                    </div>
                </Container>
            </header>
        );
    }
}

export default HomeHeader;
