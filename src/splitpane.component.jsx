import React from 'react';
import PropTypes from 'prop-types';
import ReactSplitPane from 'react-split-pane';
import './splitpane.component.scss';

const getSize = (props) => {
  const { id, rememberSize, defaultSize } = props;
  if (rememberSize) {
    const item = sessionStorage.getItem(`splitpane_size_${id}`);
    if (item) {
      return parseInt(item, 10);
    }
  }
  return defaultSize;
};

const setSize = (id, size) => {
  sessionStorage.setItem(`splitpane_size_${id}`, JSON.stringify(size));
};

export default class SplitPane extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    defaultSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rememberSize: PropTypes.bool,
    onDragFinished: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
  };

  static defaultProps = {
    defaultSize: '50%',
    rememberSize: true,
    onDragFinished: () => {},
  }

  componentDidUpdate = () => {
    this.fireResizeEvent();
  }

  fireResizeEvent = () => {
    if (document.createEvent) {
      const evt = document.createEvent('HTMLEvents');
      evt.initEvent('resize', true, false);
      window.dispatchEvent(evt);
    }
  };

  handleDragFinished = (size) => {
    const { id, rememberSize, onDragFinished } = this.props;
    if (rememberSize) {
      setSize(id, size);
    }
    onDragFinished(size);
    this.fireResizeEvent();
  };

  render() {
    const {
      id,
      children,
      ...otherProps
    } = this.props;
    return (
      <ReactSplitPane
        {...otherProps}
        defaultSize={getSize(this.props)}
        onDragFinished={this.handleDragFinished}
      >
        { children }
      </ReactSplitPane>
    );
  }
}
