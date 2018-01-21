import * as propTypes from 'prop-types';
import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
    Button,
    Container,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

import DescriptorBox from './DescriptorBox';

interface IProjectProps {
    projectName: string;
}

export interface IContent {
    title: string;
    link: string;
    content: string;
    imagePath: string;
}

const styles = {
    headerStyle: {
        fontSize: '2em',
    },
    pStyle: {
        fontSize: '1.33em',
    }
};

class Project extends React.Component<IProjectProps, any> {
    public static propTypes = {
        projectName: propTypes.string.isRequired
    };
    private content;
    constructor(props) {
        super(props);
    }

    public componentWillMount() {
        this.content = this.determineContent();
    }

    public render() {
        return (
            <DescriptorBox descriptorContent={this.content} />
        );
    }

    private determineContent = () => {
        switch (this.props.projectName) {
            case 'typ3':
                return this.typ3();
            case 'website':
                return this.website();
            case 'discordBot':
                return this.discordBot();
            default:
                return null;
        }
    }

    private typ3 = () => {
        const typ3Png = require('../assets/typ3.png');
        return (
            {
                title: 'Typ3 and Typ3-cli',
                link: 'https://github.com/Mike-Stupich/typ3',
                content: `Typ3 and typ3-cli are developer tools used to facilitate interactions with a solidity contract
                    when using Typescript, as well as fully typed rpc-calls. This is an Typescript alternative to
                    web3.js.
                    The command-line tool will build a .ts file from your Ethereum ABI file, which will allow vscode
                    to help you with type inferencing, and typ3 is a wrapper for making calls to an Ethereum node
                    This tool was created at the ETHWaterloo hackathon.`,
                imagePath: typ3Png
            }
        );
    }

    private website = () => {
        const websitePng = require('../assets/website.png');
        return (
            {
                title: 'My Personal Website',
                link: 'https://github.com/Mike-Stupich/React_Website',
                content: `My personal website, built using Reactjs. This project is an intro
                to Reactjs for myself, to learn some the features it has to offer.`,
                imagePath: websitePng
            }
        );
    }

    private discordBot = () => {
        const discoCryptoPng = require('../assets/cmc.png');
        return (
            {
                title: 'Discord Bot',
                link: 'https://github.com/HenryNguyen5/discoCrypto/',
                content: `Worked with a friend to create a Discord Bot that facilitates several
                of our servers cryptocurrency needs. The bot is being used to query an API, as well
                as holding user and server data, and displaying them on user commands and timers.
                This bot has been setup on Heroku, and uses MongoDB to store data.`,
                imagePath: discoCryptoPng
            }
        );
    }
}

export default Project;
