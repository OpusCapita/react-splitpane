# react-splitpane

### Description
Split-Pane component that stores it's position to localStorage. Fires window resize event on resize to notify other components that container size has changed.
Uses [react-split-pane](https://github.com/tomkp/react-split-pane) component, check out more complex usage there.

### Installation
```
npm install @opuscapita/react-splitpane
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-splitpane)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
| Prop name      | Type                 | Default    | Description                                 |
| -------------- | -------------------- | -----------| ------------------------------------------- |
| id             | string (required)    |            | Unique ID of the component                  |
| split          | string               | 'vertical' | Split direction 'vertical' or 'horizontal'  |
| minSize        | string, number       | 50         | Current size of the pane                    |
| defaultSize    | string, number       | '50%'      | Initial size of the pane                    |
| rememberSize   | boolean              | true       | Store size to localStorage                  |

### Code example
```jsx
import React from 'react';
import SplitPane from '@opuscapita/react-splitpane';

handleResize = (id, size) => {
  console.log(id, 'changed size to', size);
}

export default class ReactView extends React.Component {
  render() {
    return (
      <SplitPane id="myVerticalPane">
        <div></div>
        <SplitPane id="myHorizontalPane" split="horizontal">
          <div></div>
          <div></div>
        </SplitPane>
      </SplitPane>
    );
  }
}
```
