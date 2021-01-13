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
import MatchesActions from "../redux/actions/MatchesActions";

// END IMPORT ACTIONS

/** APIs

* actionsMatches.create
*	@description CRUD ACTION create
*
* actionsMatches.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsMatches.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class MatchesEdit extends Component {
  // Init matches
  constructor(props) {
    super(props);
    this.state = {
      matches: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMatches.loadMatches(this.props.match.params.id);
    }
    
  }

  // Insert props matches in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      matches: props.matches
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.matches._id) {
      this.props.actionsMatches.saveMatches(this.state.matches).then(data => {
        this.props.history.push("/matcheses/");
      });
    } else {
      this.props.actionsMatches.createMatches(this.state.matches).then(data => {
        this.props.history.push("/matcheses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Matches Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="away_team"
            label="Away_team"
            value={this.state.matches.away_team || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="home_team"
            label="Home_team"
            value={this.state.matches.home_team || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="league_id"
            label="League_id"
            value={this.state.matches.league_id || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="match_id"
            label="Match_id"
            value={this.state.matches.match_id || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="match_start"
            label="Match_start"
            value={this.state.matches.match_start || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="status"
            label="Status"
            value={this.state.matches.status || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="status_code"
            label="Status_code"
            value={this.state.matches.status_code || ""}
            onChange={Utils.handleChange.bind(this, "matches")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/matcheses/">Back to list</Link>

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
    actionsMatches: bindActionCreators(MatchesActions, dispatch),
  };
};

// Validate types
MatchesEdit.propTypes = { 
  actionsMatches: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    matches: state.MatchesEditReducer.matches
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesEdit);
