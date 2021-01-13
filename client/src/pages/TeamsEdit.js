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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import TeamsActions from "../redux/actions/TeamsActions";
import PlayersActions from "../redux/actions/PlayersActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeams.create
*	@description CRUD ACTION create
*
* actionsTeams.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTeams.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsPlayers.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Players
*

**/

class TeamsEdit extends Component {
  // Init teams
  constructor(props) {
    super(props);
    this.state = {
      teams: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTeams.loadTeams(this.props.match.params.id);
    }
    
    this.props.actionsPlayers.loadPlayersList();
  }

  // Insert props teams in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      teams: props.teams
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.teams._id) {
      this.props.actionsTeams.saveTeams(this.state.teams).then(data => {
        this.props.history.push("/teamses/");
      });
    } else {
      this.props.actionsTeams.createTeams(this.state.teams).then(data => {
        this.props.history.push("/teamses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Teams Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="color1"
            label="Color1"
            value={this.state.teams.color1 || ""}
            onChange={Utils.handleChange.bind(this, "teams")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teams.color1 && this.state.teams.color1 === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="color2"
            label="Color2"
            value={this.state.teams.color2 || ""}
            onChange={Utils.handleChange.bind(this, "teams")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teams.color2 && this.state.teams.color2 === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="country"
            label="Country"
            value={this.state.teams.country || ""}
            onChange={Utils.handleChange.bind(this, "teams")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teams.country && this.state.teams.country === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="founded"
            label="Founded"
            value={this.state.teams.founded || ""}
            onChange={Utils.handleChange.bind(this, "teams")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="logo"
            label="Logo"
            value={this.state.teams.logo || ""}
            onChange={Utils.handleChange.bind(this, "teams")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teams.logo && this.state.teams.logo === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.teams.name || ""}
            onChange={Utils.handleChange.bind(this, "teams")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.teams.name && this.state.teams.name === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m players with Players */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="players">Players</InputLabel>
            <Select
              multiple
              value={this.state.teams.players || []}
              onChange={Utils.handleChangeSelect.bind(this, "teams")}
              input={<Input id="players" name="players" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listPlayers && this.props.listPlayers.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.teams.players &&
                      this.state.teams.players.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/teamses/">Back to list</Link>

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
    actionsTeams: bindActionCreators(TeamsActions, dispatch),
    actionsPlayers: bindActionCreators(PlayersActions, dispatch),
  };
};

// Validate types
TeamsEdit.propTypes = { 
  actionsTeams: PropTypes.object.isRequired,
  actionsPlayers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    teams: state.TeamsEditReducer.teams,
    listPlayers: state.TeamsEditReducer.listPlayers
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsEdit);
