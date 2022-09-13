import { Component } from 'react';

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTutorial: {
                id: null,
                title: "",
                url: "",
                github: "",
                published: false
            }
        }
    }

    onChangeTitle = (e) => {
        this.onChangeDescription(e, "title");
    }

    onChangeUrl = (e) => {
        this.onChangeDescription(e, "url");
    }

    onChangeGithub = (e) => {
        this.onChangeDescription(e, "github");
    }

    onChangeDescription = (e, propertyToSet) => {
        const description = e.target.value;
        this.setState(prevState => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                [propertyToSet]: description
            }
        }));
    }

    render() {
        return null;
    }
}