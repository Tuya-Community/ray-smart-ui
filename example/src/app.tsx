import React from 'react';
import 'ray';
import './app.less';

interface Props {
  children: React.ReactNode;
}

class App extends React.Component<Props> {
  componentDidMount() {
    console.info('=== App did mount');
  }

  render() {
    return this.props.children;
  }
}

export default App;
