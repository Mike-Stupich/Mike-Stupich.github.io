import { propTypes } from 'prop-types';
import * as React from 'react';
import * as Dimensions from 'react-dimensions';
import {
    Container,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

interface IHomeHeaderProps {
    screenWidth: string;
    screenHeight: string;
}

interface IHomeState {
    height: string;
    width: string;
}

class HomeHeader extends React.Component<IHomeHeaderProps, IHomeState> {
    constructor(props) {
        super(props);
        this.state = {
            height: this.props.screenHeight,
            width: this.props.screenWidth
        };
    }

    public render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default HomeHeader;
