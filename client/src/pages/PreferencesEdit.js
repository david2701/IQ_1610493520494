// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import PreferencesActions from "../redux/actions/PreferencesActions";

// END IMPORT ACTIONS

/** APIs

* actionsPreferences.create
*	@description CRUD ACTION create
*
* actionsPreferences.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsPreferences.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class PreferencesEdit extends Component {
  // Init preferences
  constructor(props) {
    super(props);
    this.state = {
      preferences: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPreferences.loadPreferences(this.props.match.params.id);
    }
    
  }

  // Insert props preferences in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      preferences: props.preferences
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.preferences._id) {
      this.props.actionsPreferences.savePreferences(this.state.preferences).then(data => {
        this.props.history.push("/preferenceses/");
      });
    } else {
      this.props.actionsPreferences.createPreferences(this.state.preferences).then(data => {
        this.props.history.push("/preferenceses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Preferences Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="positions"
            label="Positions"
            value={this.state.preferences.positions || ""}
            onChange={Utils.handleChange.bind(this, "preferences")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.preferences.positions && this.state.preferences.positions === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="score"
            label="Score"
            value={this.state.preferences.score || ""}
            onChange={Utils.handleChange.bind(this, "preferences")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.preferences.score && this.state.preferences.score === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="team_id"
            label="Team_id"
            value={this.state.preferences.team_id || ""}
            onChange={Utils.handleChange.bind(this, "preferences")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.preferences.team_id && this.state.preferences.team_id === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="user_id"
            label="User_id"
            value={this.state.preferences.user_id || ""}
            onChange={Utils.handleChange.bind(this, "preferences")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.preferences.user_id && this.state.preferences.user_id === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/preferenceses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsPreferences: bindActionCreators(PreferencesActions, dispatch),
  };
};

// Validate types
PreferencesEdit.propTypes = { 
  actionsPreferences: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    preferences: state.PreferencesEditReducer.preferences
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreferencesEdit);
