import * as propTypes from 'prop-types';
import * as React from 'react';
import * as Dimensions from 'react-dimensions';
import * as Scroll from 'react-scroll';
import Typist from 'react-typist';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    Label,
    Segment,
    Visibility
} from 'semantic-ui-react';

const scroll = Scroll.animateScroll;

interface IProps {
    toggleScrollMenu: any;
}

interface IState {
    visibleArrow: boolean;
}

class HomeHeader extends React.Component<IProps, IState> {
    public static propTypes = {
        toggleScrollMenu: propTypes.func.isRequired
    };
    constructor(props) {
        super(props);
        this.state = {
            visibleArrow: false
        };
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
            <Visibility
            // onBottomPassed={this.props.toggleScrollMenu(true)}
            // onBottomVisible={this.props.toggleScrollMenu(false)}
            once={false}
            >
            <header className='splash'>
                <Container className='splash-container'>
                    <div className='splash-body'>
                        <Typist
                        startDelay={500}
                        onTypingDone={this.showScroller}
                        cursor={{
                            show: false
                        }}
                        >
                            <Header
                            className='splash-heading'
                            inverted
                            >
                            Hi, I'm Mike.
                            </Header>
                            <Typist.Delay ms={500}/>
                            <Header
                            className='splash-heading'
                            inverted
                            >
                            Welcome to my website!
                            </Header>
                        </Typist>
                        {this.state.visibleArrow ? <Scroller /> : null }

                    </div>
                </Container>
            </header>
            </Visibility>
        );
    }
    private showScroller = () => {
        this.setState({
            visibleArrow: true
        });
    }
}

const Scroller = () => (
        <Scroll.Link
        className='splash-scroller'
        activeClass='active'
        to='expertise'
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
            />
        </div>
    </Scroll.Link>
);
export default HomeHeader;
