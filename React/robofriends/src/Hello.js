import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc'>
                <h1>Hello World!</h1>
                <p>{this.props.greeting}</p>
            </div>
        ); // eof return
    } //eof render()
} // eof class Hello extends Component 

export default Hello;