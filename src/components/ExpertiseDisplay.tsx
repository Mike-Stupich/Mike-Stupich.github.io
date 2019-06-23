import * as propTypes from 'prop-types';
import * as React from 'react';
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react';

interface IProps {}

interface IState {}

class ComponentName extends React.Component<IProps, IState> {
    private contentArray = expertiseContent();
    private len = this.contentArray.length;
    public render() {
        return (
            <div className='expertise'>
                <Segment
                className='segment'
                vertical>
                    <Divider
                    name='expertise'
                    horizontal
                    className='expertise-divider'
                    content='ABOUT ME'
                    />
                    <Grid
                    className='expertise-grid'
                    stackable
                    divided
                    >
                    <Grid.Row
                    stretched
                    columns={3}
                    >
                        {
                            this.contentArray.map((content, index) => (
                                <Grid.Column
                                key={content.title}>
                                    <Header
                                        as='h3'
                                        className='expertise-header'
                                        content={content.title}
                                    />
                                    <p className='expertise-p'>
                                        {content.content}
                                    </p>
                                </Grid.Column>
                            ))
                        }
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

const expertiseContent = () => (
    [
        {
            title: `CODE`,
            content: `I design code primarily with node.js and TypeScript/JavaScript, however I have studied and coded
            projects in many other languages, including Java, Kotlin, C++, C, Python, R and more. 
            My web frameworks of choice are React and Redux, with d3.js for graphics.`
        },
        {
            title: `COLLABORATION`,
            content: `I have collaborated on several personal and school projects to deliver
            complete projects in a timely manner. These projects include a Discord bot,
            a mining management software, an Android app and several more. I have also
            worked in a small team to participate in two ETHGlobal Ethereum Hackathons.`
        },
        {
            title: `EXPLORATION`,
            content: `I am constantly looking to increase my coding knowledge. I participate in hackathons,
            I always have several ongoing personal projects, and I'm always keeping an eye out for exciting
            new technologies to use. Currently, I am learning Kotlin for Android apps
            and working with C++ for Unreal Engine 4 development.`
        }
    ]
);

export default ComponentName;
