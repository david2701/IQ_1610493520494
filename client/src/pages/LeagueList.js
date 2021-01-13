// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import LeagueActions from "../redux/actions/LeagueActions";

// END IMPORT ACTIONS

/** APIs

* actionsLeague.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsLeague.list
*	@description CRUD ACTION list
*

**/


class LeagueList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsLeague.loadLeagueList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsLeague.deleteLeague(this.state.idDelete).then(data => {
      this.props.actionsLeague.loadLeagueList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "country",
        type: "string",
        label: "Country"
      }, 
      {
        id: "league_id",
        type: "integer",
        label: "League_id"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "season",
        type: "integer",
        label: "Season"
      }, 
      {
        id: "team_id",
        type: "integer",
        label: "Team_id"
      },
    ];
    const link = "/leagues/";

    return (
      <div>
        <h1>League List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">League_id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Season</TableCell>
              <TableCell align="right">Team_id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/leagues/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.country }</TableCell>
                <TableCell align="right">{ row.league_id }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.season }</TableCell>
                <TableCell align="right">{ row.team_id }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/leagues/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
LeagueList.propTypes = { 
  actionsLeague: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.LeagueListReducer.listLeague
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeagueList);
