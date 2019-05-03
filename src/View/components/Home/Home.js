import React, { Component } from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { connectAction } from '../.././../actions'

class Home extends Component {
  constructor(props) {
    super(props);

    this.changePage = this.changePage.bind(this);
  }

  changePage (){
    this.props.history.push('/about-us');
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>
            Increment Async
      </button>
        </p>

        <p>
          <button onClick={this.props.decrement}>Decrement</button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>
            Decrement Async
      </button>
        </p>

        <p>
          <button onClick={() => this.changePage()}>
            Go to about page via redux
      </button>
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { counter } = state;
	return {
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
	};
}

const mapDispatchToProps = (dispatch) =>({
  increment: () => dispatch(connectAction.increment()),
  incrementAsync: () => dispatch(connectAction.incrementAsync()),
  decrement: () => dispatch(connectAction.decrement()),
  decrementAsync: () => dispatch(connectAction.decrementAsync()),
})
  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
