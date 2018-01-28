import * as React from 'react';
import {
    Container,
    Grid,
    Header,
    Icon,
    List,
    Segment
} from 'semantic-ui-react';
export default class Footer extends React.Component<any, any> {
    public render() {
        return (
            <footer>
                <Segment
                    inverted
                    vertical
                    style={{ padding: '5em 0em'}}
                >
                    <Container>
                        <Grid
                            divided
                            inverted
                            stackable
                        >
                            <Grid.Row
                            centered
                            >
                            <p>Created By Mike Stupich, 2018</p>
                            </Grid.Row>
                            <Grid.Row
                            centered
                            >
                            <List
                            link
                            relaxed
                            inverted
                            horizontal
                            >
                                <List.Item
                                as='a'
                                href='https://github.com/Mike-Stupich'>
                                    <Icon
                                    name='github'
                                    size='large'
                                    link
                                    />
                                </List.Item>
                                <List.Item
                                as='a'
                                href='mailto:mike.stupich@gmail.com'>
                                    <Icon
                                    name='mail'
                                    size='large'
                                    link
                                    />
                                </List.Item>
                                <List.Item
                                as='a'
                                href='https://www.linkedin.com/in/mike-stupich'>
                                    <Icon
                                    name='linkedin'
                                    size='large'
                                    link
                                    />
                                </List.Item>
                            </List>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </footer>
        );
    }
}
