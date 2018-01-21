import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Button,
    Container,
    Grid,
    Header,
    Segment,
} from 'semantic-ui-react';

interface IProps {
    label: string;
    link: string;
}

class LinkButton extends React.Component<IProps, any> {
    public static propTypes = {
        label: propTypes.string.isRequired,
        link: propTypes.string.isRequired
    };

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Button
            as='a'
            content={`View ${this.props.label} on GitHub`}
            href={this.props.link}
            size='large'
            />
        );
    }
}

export default LinkButton;
