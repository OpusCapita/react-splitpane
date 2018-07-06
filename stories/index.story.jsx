import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, number } from '@storybook/addon-knobs';
import SplitPane from '../src/index';

const stories = storiesOf('@opuscapita/react-splitpane', module);

stories.add('Splitpane', () => (
  <div id="component-container" className="oc-ui-content-container">
    <SplitPane id="exampleVerticalPane">
      <div className="oc-ui-content">Content of the Pane</div>
      <SplitPane id="exampleHorizontalPane" split="horizontal">
        <div className="oc-ui-content">Content of the HorizontalPane</div>
        <div className="oc-ui-content">Another content of the HorizontalPane</div>
      </SplitPane>
    </SplitPane>
  </div>
));

/*
stories.add('Localization', () =>
  (
    <div id="component-container">
      <DateInput
        value="03/05/2008"
        locale={text('en')}
        dateFormat={text('Date format as string', 'YYYY-MM-DD')}
      />
    </div>
  ));
*/
