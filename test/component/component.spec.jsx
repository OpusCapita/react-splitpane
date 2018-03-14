/* eslint-disable no-unused-expressions, function-paren-newline */
import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import SplitPane from '../../src/index';

describe('SplitPane component', () => {
  it('is rendered', () => {
    const wrapper = mount(
      <SplitPane id="test">
        <div>one</div>
        <div>two</div>
      </SplitPane>,
    );
    expect(wrapper).to.exist;
  });
});
