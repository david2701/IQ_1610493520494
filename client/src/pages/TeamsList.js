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
import TeamsActions from "../redux/actions/TeamsActions";

// END IMPORT ACTIONS

/** APIs

* actionsTeams.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTeams.list
*	@description CRUD ACTION list
*

**/


class TeamsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsTeams.loadTeamsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsTeams.deleteTeams(this.state.idDelete).then(data => {
      this.props.actionsTeams.loadTeamsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "color1",
        type: "string",
        label: "Color1"
      }, 
      {
        id: "color2",
        type: "string",
        label: "Color2"
      }, 
      {
        id: "country",
        type: "string",
        label: "Country"
      }, 
      {
        id: "founded",
        type: "string",
        label: "Founded"
      }, 
      {
        id: "logo",
        type: "string",
        label: "Logo"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      },
    ];
    const link = "/teamses/";

    return (
      <div>
        <h1>Teams List</h1>

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
              <TableCell align="right">Color1</TableCell>
              <TableCell align="right">Color2</TableCell>
              <TableCell align="right">Country</TableCell>
              <TableCell align="right">Founded</TableCell>
              <TableCell align="right">Logo</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/teamses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.color1 }</TableCell>
                <TableCell align="right">{ row.color2 }</TableCell>
                <TableCell align="right">{ row.country }</TableCell>
                <TableCell align="right">{ row.founded }</TableCell>
                <TableCell align="right">{ row.logo }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/teamses/new">
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
    actionsTeams: bindActionCreators(TeamsActions, dispatch),
  };
};

// Validate types
TeamsList.propTypes = { 
  actionsTeams: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TeamsListReducer.listTeams
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsList);
