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
import PlayersActions from "../redux/actions/PlayersActions";

// END IMPORT ACTIONS

/** APIs

* actionsPlayers.create
*	@description CRUD ACTION create
*
* actionsPlayers.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id Players
*	@returns Players
*
* actionsPlayers.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id Players
*	@returns Players
*

**/

class PlayersEdit extends Component {
  // Init players
  constructor(props) {
    super(props);
    this.state = {
      players: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsPlayers.loadPlayers(this.props.match.params.id);
      this.props.actionsTeams.findByplayers(this.props.match.params.id);
    }
    
  }

  // Insert props players in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      players: props.players
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.players._id) {
      this.props.actionsPlayers.savePlayers(this.state.players).then(data => {
        this.props.history.push("/playerses/");
      });
    } else {
      this.props.actionsPlayers.createPlayers(this.state.players).then(data => {
        this.props.history.push("/playerses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Players Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Age"
            label="Age"
            value={this.state.players.Age || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Age && this.state.players.Age === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Equip"
            label="Equip"
            value={this.state.players.Equip || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Equip && this.state.players.Equip === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Height"
            label="Height"
            value={this.state.players.Height || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Height && this.state.players.Height === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.players.Name || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Name && this.state.players.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Number"
            label="Number"
            value={this.state.players.Number || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Number && this.state.players.Number === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Position"
            label="Position"
            value={this.state.players.Position || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Position && this.state.players.Position === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Weight"
            label="Weight"
            value={this.state.players.Weight || ""}
            onChange={Utils.handleChange.bind(this, "players")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.players.Weight && this.state.players.Weight === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Teams */}
          
          <h3>Teams</h3>
          {(!this.props.listTeams || this.props.listTeams.length === 0) && 
            <div>No Teams associated</div>
          }
          {this.props.listTeams &&
            this.props.listTeams.map((item, i) => {
              return (
                <Link to={"/teamss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/playerses/">Back to list</Link>

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
    actionsPlayers: bindActionCreators(PlayersActions, dispatch),
  };
};

// Validate types
PlayersEdit.propTypes = { 
  actionsPlayers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    players: state.PlayersEditReducer.players,
    listTeams: state.PlayersEditReducer.listTeams
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersEdit);
