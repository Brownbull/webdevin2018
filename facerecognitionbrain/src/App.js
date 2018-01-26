import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Clarifai from 'clarifai';
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Particles from 'react-particles-js';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'e825344abe184b69ae37d377977f8bbb'
});

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    },
    // line_linked: {
    //   shadow: {
    //     enable: true,
    //     color: "#3CA9D1",
    //     blur: 1
    //   }
    // }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }
  
  onInputChange = (event) => {
    // console.log(event.target.value);
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        this.state.input)
      .then(
      function (response) {
        // do something with response
        console.log(response.outputs["0"].data.regions["0"].region_info.bounding_box);
        console.log(response.outputs["0"].data.regions["0"].region_info.bounding_box.bottom_row);
        
      },
      function (err) {
        // there was an error
        console.log(err);
      }
    );
  } // eof onButtonSubmit

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    ); // eof return
  } // eof render
} // eof class App extends Component

export default App;
