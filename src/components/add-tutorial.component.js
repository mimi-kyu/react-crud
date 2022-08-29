import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onChangeGithub = this.onChangeGithub.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);
    this.state = {
      id: null,
      title: "",
      url: "",
      github: "",
      published: false,
      submitted: false
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeUrl(e) {
    this.setState({
      url: e.target.value
    });
  }
  onChangeGithub(e) {
    this.setState({
      github: e.target.value
    });
  }
  saveTutorial() {
    var data = {
      title: this.state.title,
      url: this.state.url,
      github: this.state.github
    };
    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          url: response.data.url,
          github: response.data.github,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newTutorial() {
    this.setState({
      id: null,
      title: "",
      url: "",
      github: "",
      published: false,
      submitted: false
    });
  }
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label" htmlFor="title">Title</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                  name="title"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label" htmlFor="url">URL</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="url"
                  required
                  value={this.state.url}
                  onChange={this.onChangeUrl}
                  name="url"
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label className="col-sm-2 col-form-label" htmlFor="github">GitHub</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="github"
                  required
                  value={this.state.github}
                  onChange={this.onChangeGithub}
                  name="github"
                />
              </div>
            </div>
            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}