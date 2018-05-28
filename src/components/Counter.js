import React from 'react';
import { connect } from 'react-redux';
import { incrementCount, decrementCount } from '../actions/counterActions';

const mapStateToProps = state => ({
  counterValue: state.counter.counterValue,
  postCount: state.posts.items.length
   // adds to new post list
});

export class Counter extends React.Component {

  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  // componentWillReceiveProps(nextProps) {

  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('NEXT PROPS', nextProps);
    console.log('CURRENT PROPS POSTCOUNT',this.props.postCount)
    if(this.props.postCount + 1 !== nextProps.postCount){
      return true;
    }
  }

  increment(){
    this.props.incrementCount();
  }

  decrement(){
    this.props.decrementCount();
  }

  render() {
    return (
      <div>
        <h1>{this.props.counterValue}</h1>
        <button onClick={this.increment}> Increment With Redux! </button>
        <button onClick={this.decrement}> Decrement With Redux! </button>

        <h1>Number of posts in counter component: {this.props.postCount}</h1>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
{incrementCount, decrementCount }
)(Counter)
