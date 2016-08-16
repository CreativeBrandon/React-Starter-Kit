import * as React from 'react';

export interface AppComponentProps { compiler: string; framework: string; }

export class AppComponent extends React.Component<AppComponentProps, {}>{

    render(){
        return <h1>{ this.props.framework} Starter Kit using {this.props.compiler} and webpack.</h1>
    }

}
