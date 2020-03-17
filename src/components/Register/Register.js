import React, {Component} from "react";
import {Link} from "react-router-dom";
import Title from "../Title/Title";
import Error from "../Error/Error";
import Button from "../Button/Button";
import "./Register.scss";

const initialState = {
    name: '',
    email: '',
    password: '',
    displayErrors: false
}

class Register extends Component {
    state = initialState;
    
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        }
        this.setState(initialState);
        alert(`Name: ${this.state.name}, Mail: ${this.state.email}`);
    };

    close = () => {
        this.setState({ displayErrors: false });
    }

    render() {
        return(
            <section id="register" className="section section--blue register">
                <div className="container">
                    <Title
                        title="Over 1000 designers are using ..."
                        suptitle="Contact us"
                        className="title--center title--white" />
                    <form onSubmit={this.handleSubmit} noValidate className="formRegister">
                        <input name="name" placeholder="Full name" className="formRegister__input" type="text" minLength="4" required value={this.state.name} onChange={this.handleChange} />   
                        <input name="email" placeholder="Your email" className="formRegister__input" type="email" required value={this.state.email} onChange={this.handleChange} />   
                        <input name="password" placeholder="Password" className="formRegister__input" type="password" required value={this.state.password} onChange={this.handleChange} />
                        <Button
                            type="submit"
                            text="Try now" />
                    </form>
                    {this.state.displayErrors ? <Error message="Data incorrect" action={this.close} /> : null}
                    <div className="registerLegend">By signing up you agree to our <Link to="/about" className="registerLegend__link">terms & Services</Link></div>
                </div>
            </section>
        );
    }
}

export default Register;