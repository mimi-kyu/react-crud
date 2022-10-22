import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { retrieveTutorialsAction , deleteAllTutorialsAction } from "../actions/tutorial-actions"

export class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.props.retrieveTutorialsAction();
  }

  onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    this.setState({
      searchTitle: searchTitle
    });
  }

  refreshList = () => {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial = (tutorial, index) => {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials = () => {
    this.props.deleteAllTutorialsAction();
    this.refreshList();
    /*TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });*/
  }

  searchTitle = () => {
    this.refreshList();
    this.props.retrieveTutorialsAction(this.state.searchTitle);
    /*TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });*/
  }

  render() {
    const { searchTitle, currentTutorial, currentIndex } = this.state;
    const { tutorials } = this.props;
    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              defaultValue={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.searchTitle}
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Tutorials List</h4>
          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.title}
                </li>
              ))}
          </ul>
          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Tutorial</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentTutorial.title}
              </div>
              <div>
                <label>
                  <strong>URL:</strong>
                </label>{" "}
                <a href={currentTutorial.url} target="_blank" rel="noopener noreferrer">{currentTutorial.url}</a>
              </div>
              <div>
                <label>
                  <strong>GitHub:</strong>
                </label>{" "}
                <a href={currentTutorial.github} target="_blank" rel="noopener noreferrer">{currentTutorial.github}</a>
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
              <Link
                to={"/react-crud/tutorials/" + currentTutorial.id}
                style={{ textDecoration: 'none' }}
                className="badge bg-warning text-dark"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Tutorial...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { tutorialReducer : tutorials } = state;
  return { tutorials: tutorials.map(tutorial => tutorial.data) };
}

export default connect(mapStateToProps, {
  retrieveTutorialsAction,
  deleteAllTutorialsAction
})(TutorialsList);