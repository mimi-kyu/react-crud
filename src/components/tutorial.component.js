import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import PropTypes from 'prop-types';
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
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getTutorial(this.props.params.id);
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
  getTutorial = (id) => {
    TutorialDataService.get(id)
      .then(response => {
        this.setState({
          currentTutorial: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updatePublished = (status) => {
    var data = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      url: this.state.currentTutorial.url,
      github: this.state.currentTutorial.github,
      published: status
    };
    TutorialDataService.update(this.state.currentTutorial.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateTutorial = () => {
    TutorialDataService.update(
      this.state.currentTutorial.id,
      this.state.currentTutorial
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }
  deleteTutorial = () => {
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then(response => {
        console.log(response.data);
        this.props.navigate('/tutorials')
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    const { currentTutorial } = this.state;
    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label" htmlFor="title">Title</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={currentTutorial.title}
                    onChange={this.onChangeTitle}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label" htmlFor="url">URL</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    value={currentTutorial.url}
                    onChange={this.onChangeUrl}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label" htmlFor="github">GitHub</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="github"
                    value={currentTutorial.github}
                    onChange={this.onChangeGithub}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                  <strong>Status:</strong>
                </label>
                <div className="col-sm-10">
                <input type="text" readOnly className="form-control-plaintext" value={currentTutorial.published ? "Published" : "Pending"}/>
                </div>
              </div>
            </form>
            {currentTutorial.published ? (
              <button
                className="badge bg-primary me-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge bg-primary me-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}
            <button
              className="badge bg-danger me-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>
            <button
              type="submit"
              className="badge bg-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}

Tutorial.propTypes = {
  params: PropTypes.object.isRequired,
  navigate: PropTypes.func
}