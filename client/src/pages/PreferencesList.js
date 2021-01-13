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
import PreferencesActions from "../redux/actions/PreferencesActions";

// END IMPORT ACTIONS

/** APIs

* actionsPreferences.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsPreferences.list
*	@description CRUD ACTION list
*

**/


class PreferencesList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsPreferences.loadPreferencesList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsPreferences.deletePreferences(this.state.idDelete).then(data => {
      this.props.actionsPreferences.loadPreferencesList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "positions",
        type: "custom",
        label: "Positions"
      }, 
      {
        id: "score",
        type: "number",
        label: "Score"
      }, 
      {
        id: "team_id",
        type: "integer",
        label: "Team_id"
      }, 
      {
        id: "user_id",
        type: "integer",
        label: "User_id"
      },
    ];
    const link = "/preferenceses/";

    return (
      <div>
        <h1>Preferences List</h1>

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
              <TableCell align="right">Positions</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Team_id</TableCell>
              <TableCell align="right">User_id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/preferenceses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.positions }</TableCell>
                <TableCell align="right">{ row.score }</TableCell>
                <TableCell align="right">{ row.team_id }</TableCell>
                <TableCell align="right">{ row.user_id }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/preferenceses/new">
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
    actionsPreferences: bindActionCreators(PreferencesActions, dispatch),
  };
};

// Validate types
PreferencesList.propTypes = { 
  actionsPreferences: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.PreferencesListReducer.listPreferences
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PreferencesList);
