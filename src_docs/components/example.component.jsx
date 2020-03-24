import React from 'react';
import styled from 'styled-components';
import faker from 'faker';
import SplitPane from '../../src/index';

const PaneContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  min-height: 0%;
  min-width: 0%;
  overflow: auto;
  height: 100%;
  padding: 10px;
  background-color: white;
  box-sizing: border-box;
`;

export default class ComponentView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SplitPane id="myVerticalPane">
        <PaneContainer>
          {faker.lorem.paragraph(100)}
        </PaneContainer>
        <SplitPane id="myHorizontalPane" split="horizontal">
          <PaneContainer>
            {faker.lorem.paragraph(100)}
          </PaneContainer>
          <PaneContainer>
            {faker.lorem.paragraph(100)}
          </PaneContainer>
        </SplitPane>
      </SplitPane>
    );
  }
}
