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
import LeagueActions from "../redux/actions/LeagueActions";

// END IMPORT ACTIONS

/** APIs

* actionsLeague.create
*	@description CRUD ACTION create
*
* actionsLeague.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsLeague.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class LeagueEdit extends Component {
  // Init league
  constructor(props) {
    super(props);
    this.state = {
      league: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsLeague.loadLeague(this.props.match.params.id);
    }
    
  }

  // Insert props league in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      league: props.league
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.league._id) {
      this.props.actionsLeague.saveLeague(this.state.league).then(data => {
        this.props.history.push("/leagues/");
      });
    } else {
      this.props.actionsLeague.createLeague(this.state.league).then(data => {
        this.props.history.push("/leagues/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>League Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="country"
            label="Country"
            value={this.state.league.country || ""}
            onChange={Utils.handleChange.bind(this, "league")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.league.country && this.state.league.country === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="league_id"
            label="League_id"
            value={this.state.league.league_id || ""}
            onChange={Utils.handleChange.bind(this, "league")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.league.league_id && this.state.league.league_id === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.league.name || ""}
            onChange={Utils.handleChange.bind(this, "league")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.league.name && this.state.league.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="season"
            label="Season"
            value={this.state.league.season || ""}
            onChange={Utils.handleChange.bind(this, "league")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.league.season && this.state.league.season === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="team_id"
            label="Team_id"
            value={this.state.league.team_id || ""}
            onChange={Utils.handleChange.bind(this, "league")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.league.team_id && this.state.league.team_id === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/leagues/">Back to list</Link>

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
    actionsLeague: bindActionCreators(LeagueActions, dispatch),
  };
};

// Validate types
LeagueEdit.propTypes = { 
  actionsLeague: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    league: state.LeagueEditReducer.league
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueEdit);
