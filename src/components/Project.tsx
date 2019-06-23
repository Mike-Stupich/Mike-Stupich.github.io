import * as propTypes from 'prop-types';
import * as React from 'react';
import DescriptorBox from './DescriptorBox';

interface IProjectProps {
    projectName: string;
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
            case 'androidDev':
                return this.calcApp();
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
                content: `Typ3 and Typ3-cli are developer tools used to facilitate interactions with a solidity contract
                    when using Typescript, as well as provide fully typed rpc-calls.
                    This is an Typescript alternative to web3.js.
                    The command-line tool will build a .ts file from your Ethereum ABI file which will allow vscode
                    to help you with type inferencing, and Typ3 is a wrapper for making calls to an Ethereum node.
                    This tool was created at the ETHWaterloo hackathon.`,
                image: typ3Png
            }
        );
    }

    private website = () => {
        const websitePng = require('../assets/website.png');
        return (
            {
                title: 'My Personal Website',
                link: 'https://github.com/Mike-Stupich/React_Website',
                content: `My personal website, built using ReactJS. This project is an intro
                to Reactjs for myself, to learn some the features it has to offer.`,
                image: websitePng
            }
        );
    }

    private discordBot = () => {
        const discoCryptoPng = require('../assets/cmc.png');
        return (
            {
                title: 'Discord Bot',
                link: 'https://github.com/HenryNguyen5/discoCrypto/',
                content: `Collaborated with a friend to create a Discord Bot that facilitates several
                of our Discord server's cryptocurrency needs. The bot is being used to query an API,
                as well as holding user and server data, and displaying them on user commands and timers.
                This bot has been setup on Heroku, and uses MongoDB to store data.`,
                image: discoCryptoPng
            }
        );
    }

    private calcApp = () => {
        const calcPng = require('../assets/calc.png');
        return (
            {
                title: 'Kotlin Android Development',
                link: 'https://github.com/Mike-Stupich/CalculatorApp',
                content: `I am currently working through a Udemy intro into Android development course.
                The course is in Java, so as I follow along I am recreating his lessons in Kotlin.
                My first solo project since beginning to learn is a simple Calculator app.
                The app itself is very simple, but I have found the development quite enjoyable
                and very rewarding, and will keep creating new projects as my knowledge and skills progress.`,
                image: calcPng
            }
        );
    }
}

export default Project;
