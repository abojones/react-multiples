import React, { Component } from 'react';
import Number from './Number/Number';

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      multiples: [],
      rootNum: 0,
      maxNum: 144
    }
  }

  toggleMultiples = (multiples: number[], rootNum: number) => {
    this.setState({
      multiples,
      rootNum
    })
  };

  numberGrid = () => {
    let {
      multiples,
      rootNum,
      maxNum
    } = this.state;
    let numbers = [];

    for (let i=1; i<=maxNum; i++) {
      let multiple = multiples.indexOf(i) !== -1;
      let root = rootNum === i;
      numbers.push(
          <Number root={root} multiple={multiple} toggleMultiples={this.toggleMultiples} maxNum={maxNum} value={i} key={i}/>
      )
    }

    return numbers;
  };
  render() {
    return (
      <div className="grid">
          {this.numberGrid()}
      </div>
    );
  }
};

type Props = {}
type State = {
  multiples: number[];
  rootNum: number;
  maxNum: number;
}

export default App;
