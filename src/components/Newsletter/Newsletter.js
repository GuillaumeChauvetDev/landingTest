import React, {Component} from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Error from "../Error/Error";
import "./Newsletter.scss";
import pictoMail from "../../images/icon-mail.png";

const initialState = {
    email: '',
    displayErrors: false
}

class Newsletter extends Component {
    state = initialState;

    handleChange = event => {
        const email = event.target.value;
        this.setState({email});
    }

    handleSubmit = event => {
        event.preventDefault();
        if(!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        }
        this.setState(initialState);
        alert(`Newsletter: ${this.state.email}`);
    };

    close = () => {
        this.setState({ displayErrors: false });
    }

    render() {
        const pictoBtn = <Image src={pictoMail} alt="Submit newsletter" />

        return(
            <div className="newsletter">
                <form onSubmit={this.handleSubmit} noValidate className="newsletter__form">
                    <input name="email" placeholder="email"  type="email" value={this.state.email} onChange={this.handleChange} required className="newsletter__input" />   
                    <Button
                        type="submit"
                        text={pictoBtn}
                        className="button--xs" />
                </form>
                {this.state.displayErrors ? <Error message="Problème inscription newsletter" action={this.close} /> : null}
            </div>
        );
    }
};

export default Newsletter;