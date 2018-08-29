import React from 'react';
import { connect } from 'react-redux';

import * as actions from 'actions';

class MenuItem extends React.Component {
  handleClick = () => {
    if (this.props.selectedFret) {
      this.props.setSelectedMenu(this.props.note);
    }
  }

  render() {
    return (
      <div className="circle blue menu-item" onClick={this.handleClick}>
        {this.props.note}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFret: state.selectedFret,
    selectedMenu: state.selectedMenu
  };
}

export default connect(mapStateToProps, actions)(MenuItem);
