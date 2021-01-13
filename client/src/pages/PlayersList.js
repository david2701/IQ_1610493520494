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
import PlayersActions from "../redux/actions/PlayersActions";

// END IMPORT ACTIONS

/** APIs

* actionsPlayers.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsPlayers.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Players
*

**/


class PlayersList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsPlayers.loadPlayersList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsPlayers.deletePlayers(this.state.idDelete).then(data => {
      this.props.actionsPlayers.loadPlayersList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Age",
        type: "number",
        label: "Age"
      }, 
      {
        id: "Equip",
        type: "string",
        label: "Equip"
      }, 
      {
        id: "Height",
        type: "number",
        label: "Height"
      }, 
      {
        id: "Name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "Number",
        type: "number",
        label: "Number"
      }, 
      {
        id: "Position",
        type: "string",
        label: "Position"
      }, 
      {
        id: "Weight",
        type: "number",
        label: "Weight"
      },
    ];
    const link = "/playerses/";

    return (
      <div>
        <h1>Players List</h1>

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
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Equip</TableCell>
              <TableCell align="right">Height</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Number</TableCell>
              <TableCell align="right">Position</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/playerses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Age }</TableCell>
                <TableCell align="right">{ row.Equip }</TableCell>
                <TableCell align="right">{ row.Height }</TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.Number }</TableCell>
                <TableCell align="right">{ row.Position }</TableCell>
                <TableCell align="right">{ row.Weight }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/playerses/new">
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
    actionsPlayers: bindActionCreators(PlayersActions, dispatch),
  };
};

// Validate types
PlayersList.propTypes = { 
  actionsPlayers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.PlayersListReducer.listPlayers
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayersList);
