import * as React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Segment
} from 'semantic-ui-react';
export default class Footer extends React.Component<{}, {}> {
    public render() {
        return (
            <Segment
                inverted
                vertical
                style={{ padding: '5em 0em' }}
            >
                <Container>
                    <Grid
                        divided
                        inverted
                        stackable
                    >
                        <Grid.Row>
                            <Grid.Column width={6} floated='right'>
                                <List
                                    link
                                    inverted
                                    relaxed
                                >
                                    <List.Item >
                                        <List.Icon name='github' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a' href='https://github.com/Mike-Stupich'>
                                            Github.com/Mike-Stupich</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item >
                                    <List.Icon name='mail' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a' href='mailto:mike.stupich@gmail.com'>
                                            mike.stupich@gmail.com</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item >
                                    <List.Icon name='linkedin' size='large' verticalAlign='middle' />
                                        <List.Content>
                                            <List.Header as='a' href='https://www.linkedin.com/in/mike-stupich/'>
                                            Mike Stupich on LinkedIn</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={6} floated='left'>
                                <p>Welcome to my website! Please check out some of the work I have done,
                                    and if you think I could be of help to you, send me an email at
                                    <a href='mailto:mike.stupich@gmail.com'> mike.stupich@gmail.com </a>
                                    or send me a message on
                                    <a href='https://www.linkedin.com/in/mike-stupich/'> LinkedIn! </a>
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}
