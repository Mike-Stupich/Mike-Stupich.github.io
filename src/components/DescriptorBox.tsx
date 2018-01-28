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

export interface IContent {
    title: string;
    link?: string;
    content: string;
    image: string;
}

interface IProps {
    descriptorContent: IContent;
}

interface IState {

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
            link: propTypes.string,
            content: propTypes.string.isRequired,
            image: propTypes.string.isRequired
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
                            content={this.props.descriptorContent.title} />
                        <p style={styles.pStyle}>
                            {this.props.descriptorContent.content}
                        </p>
                        {this.linkPassedIn()}
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image
                            bordered
                            rounded
                            size='large'
                            href={this.props.descriptorContent.link}
                            src={this.props.descriptorContent.image}
                        />
                    </Grid.Column>
                </Grid.Row>
            );
        }
    private linkPassedIn = () => {
        if (this.props.descriptorContent.link) {
            return <LinkButton label={this.props.descriptorContent.title}
                link={this.props.descriptorContent.link} />;
        }
        return null;
    }
}
export default DescriptorBox;
