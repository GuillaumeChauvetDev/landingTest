import React, {Component} from "react";

import Hero from "../components/Hero/Hero";
import Design from "../components/Design/Design";
import Features from "../components/Features/Features";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";
import img from "../images/macbook.png";

class Home extends Component {
  state = {
    design: [
        {
            body: 'Default info',
            title: 'Default title'
        },
        {
            body: 'Default info',
            title: 'Default title'
        }
    ]
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=2")
    .then(response => {
        if(response.ok) {
            response.json().then(design => {
                this.setState({design})
            })
        } else {
            console.error('[componentDidMount]: response Nok');
        }
    })
    .catch(err => {
        console.error(`[componentDidMount]: err: ${err}`);
    })
  }

  render() {
    return (
      <div className="App">
        <Hero />
        <Design 
          title={this.state.design[0].title}
          info={this.state.design[0].body}
          img={img} />
        <Features />
        <Design 
          title={this.state.design[1].title}
          info={this.state.design[1].body}
          img={img}
          className="reverse" />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default Home;