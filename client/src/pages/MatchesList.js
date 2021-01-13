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
import MatchesActions from "../redux/actions/MatchesActions";

// END IMPORT ACTIONS

/** APIs

* actionsMatches.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsMatches.list
*	@description CRUD ACTION list
*

**/


class MatchesList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsMatches.loadMatchesList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsMatches.deleteMatches(this.state.idDelete).then(data => {
      this.props.actionsMatches.loadMatchesList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "away_team",
        type: "string",
        label: "Away_team"
      }, 
      {
        id: "home_team",
        type: "string",
        label: "Home_team"
      }, 
      {
        id: "league_id",
        type: "integer",
        label: "League_id"
      }, 
      {
        id: "match_id",
        type: "integer",
        label: "Match_id"
      }, 
      {
        id: "match_start",
        type: "string",
        label: "Match_start"
      }, 
      {
        id: "status",
        type: "integer",
        label: "Status"
      }, 
      {
        id: "status_code",
        type: "integer",
        label: "Status_code"
      },
    ];
    const link = "/matcheses/";

    return (
      <div>
        <h1>Matches List</h1>

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
              <TableCell align="right">Away_team</TableCell>
              <TableCell align="right">Home_team</TableCell>
              <TableCell align="right">League_id</TableCell>
              <TableCell align="right">Match_id</TableCell>
              <TableCell align="right">Match_start</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Status_code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/matcheses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.away_team }</TableCell>
                <TableCell align="right">{ row.home_team }</TableCell>
                <TableCell align="right">{ row.league_id }</TableCell>
                <TableCell align="right">{ row.match_id }</TableCell>
                <TableCell align="right">{ row.match_start }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
                <TableCell align="right">{ row.status_code }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/matcheses/new">
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
    actionsMatches: bindActionCreators(MatchesActions, dispatch),
  };
};

// Validate types
MatchesList.propTypes = { 
  actionsMatches: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.MatchesListReducer.listMatches
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesList);
