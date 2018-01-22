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
    Segment,
} from 'semantic-ui-react';
import Divider from 'semantic-ui-react/dist/commonjs/elements/Divider/Divider';

const scroll = Scroll.animateScroll;

interface IHomeHeaderProps {
}

interface IHomeState {
}

class HomeHeader extends React.Component<IHomeHeaderProps, IHomeState> {
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
            <header className='header-bg'>
                <div className='header-bg-body'>
                    <Container>
                        <Header
                            className='brand-heading'
                            content='Welcome to my website!'
                            inverted={true}
                        />
                        <Button onClick={() => scroll.scrollTo(1000)}
                            className='header-bg-arrow'
                        >Scroll down to my work</Button>
                    </Container>
                </div>
            </header>
        );
    }
}

export default HomeHeader;
