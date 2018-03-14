import React from 'react';
import SplitPane from '../../src/index';

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SplitPane id="myVerticalPane">
        <div><span>Pane1</span></div>
        <SplitPane id="myHorizontalPane" split="horizontal">
          <div><span>Pane2</span></div>
          <div><span>Pane3</span></div>
        </SplitPane>
      </SplitPane>
    );
  }
}
