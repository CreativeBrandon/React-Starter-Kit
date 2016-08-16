import * as React from 'react';
import * as ReactDom from 'react-dom';

import { AppComponent } from './components';

ReactDom.render(
    <AppComponent compiler="Typescript" framework="react" />,
    document.getElementById("my-app")
);
