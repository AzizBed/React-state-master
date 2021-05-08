import "./App.css";
import { Component } from "react";
import Profile from "./Components/Profile.jsx";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Navbar.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: true,
        };
    }
    toggleVisibililiy = () => {
        this.setState({
            shows: !this.state.shows,
        });
    };
    render() {
        return (
            <div className="App">
                <Nav />
                <Button
                    variant="success"
                    style={{ margin: "50px" }}
                    onClick={this.toggleVisibililiy}
                >
                    {this.state.shows ? "Hide profile" : "Show profile"}
                </Button>
                <h1>{this.state.shows && <Profile />}</h1>
            </div>
        );
    }
}
