import React from "react";
import Tutorial from "./tutorial.component";
import { connect } from 'react-redux';
import { createTutorialAction } from "../actions/tutorial-actions";
export class AddTutorial extends Tutorial {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false
    };
  }
  
  saveTutorial = () => {
    var data = {
      ...this.state.currentTutorial
    };
    this.props.createTutorialAction(data);
      /*.then(response => {
        this.setState({ currentTutorial: {
          ...response.data
        },
        submitted: true});
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });*/
  }

  newTutorial = () => {
    this.setState({ currentTutorial: {
      id: null,
      title: "",
      url: "",
      github: "",
      published: false },
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
              <div className="col-sm-10">
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
              <div className="col-sm-10">
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
              <div className="col-sm-10">
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

export default connect(null, { createTutorialAction })(AddTutorial)