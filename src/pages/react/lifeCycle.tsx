/* eslint-disable max-classes-per-file */
import { Component } from 'react';

class Child extends Component {
  state = {
    num: 888,
  };

  static getDerivedStateFromProps(nextprops, state) {
    console.log('Child getDerivedStateFromProps: ', nextprops);
    console.log('Child getDerivedStateFromProps - state: ', state);
    if (nextprops.age !== state.age) {
      return {
        age: nextprops.age,
        onChangeParent: nextprops.onChangeParent,
      };
    }
    return null;
  }

  add = () => {
    const { num } = this.state;
    this.setState({ num: num + 1 });
  };

  componentDidUpdate() {
    console.log('Child state:', this.state);
  }

  // UNSAFE_componentWillUpdate(props, state) {
  //   // console.log(props);
  //   console.log(state);
  //   // if (state.num === 667) {
  //   //   this.setState({
  //   //     num: state.num - 1
  //   //   });
  //   // }
  // }
  // componentWillMount() {
  //   console.log(999);
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log(prevState);
  // }
  // componentDidUpdate(prevProps, prevState, aaa) {
  //   console.log(aaa);
  // }
  render() {
    const { onChangeParent } = this.state;
    console.log('Child render: ', this.state);
    return (
      <>
        <button onClick={onChangeParent} style={{ marginBottom: 8 }}>
          改变父组件的age
        </button>
        <br />
        <button onClick={this.add}>改变子组件的num</button>
      </>
    );
  }
}

class Parent extends Component {
  state = {
    age: 666,
  };

  add = () => {
    const { age } = this.state;
    this.setState({ age: age + 1 });
  };

  render() {
    console.log('parent render: ', this.state);
    return (
      <div>
        <Child onChangeParent={this.add} age={this.state.age} />
      </div>
    );
  }
}

export default Parent;
