import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class Fret extends React.Component {
  handleClick = () => {
    this.props.setSelectedMenu(false);
    this.props.setSelectedFret(this.props.fretPosition);
  }

  render() {
    return (
      <span className="fret" onClick={this.handleClick}>
        {this.props.fretPosition === this.props.selectedFret ?
          this.props.selectedMenu ?
            this.props.selectedMenu === this.props.note ?
              <span className="fret-circle green">
                {this.props.note}
              </span>
              :
              <span className="fret-circle red">
                {this.props.note}
              </span>
            :
            <span className="fret-circle light-blue">
              ?
            </span>
          :
          ''
        }
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedFret: state.selectedFret,
    selectedMenu: state.selectedMenu
  };
}

export default connect(mapStateToProps, actions)(Fret);
