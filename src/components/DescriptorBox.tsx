import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Container,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

import LinkButton from './LinkButton';
import {IContent} from './Project';

interface IProps {
    descriptorContent: IContent;
}

interface IState {
    image: string;
}

const styles = {
    headerStyle: {
        fontSize: '2em',
    },
    pStyle: {
        fontSize: '1.33em',
    },
    imageStyle: {
        height: null,
        width: null,
        display: 'flex',
    },
    columnStyle: {
        paddingBottom: '2em',
        paddingTop: '2em'
    },
};
class DescriptorBox extends React.Component<IProps, IState> {
    public static propTypes = {
        descriptorContent: propTypes.shape({
            title: propTypes.string.isRequired,
            link: propTypes.string.isRequired,
            content: propTypes.string.isRequired,
            imagePath: propTypes.string.isRequired
        })
    };

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <Grid.Row>
                <Grid.Column width={8}>
                    <Header
                    as='h3'
                    style={styles.headerStyle}
                    content={this.props.descriptorContent.title}/>
                    <p style={styles.pStyle}>
                        {this.props.descriptorContent.content}
                    </p>
                    <LinkButton label={this.props.descriptorContent.title}
                    link={this.props.descriptorContent.link}/>

                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                    <Image
                        bordered
                        rounded
                        size='large'
                        src={this.props.descriptorContent.imagePath}
                    />
                </Grid.Column>
            </Grid.Row>
        );
    }
}

export default DescriptorBox;
