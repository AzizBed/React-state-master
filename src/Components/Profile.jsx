import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            timer: 0,
            interval: null,
            Person : {
        fullName: "Elon Musk",
        bio:
            "Elon Musk is a South African-born American entrepreneur and businessman who founded X.com in 1999 (which later became PayPal), SpaceX in 2002 and Tesla Motors in 2003. ... Musk made headlines in May 2012, when SpaceX launched a rocket that would send the first commercial vehicle to the International Space Station",
        profession: "CEO of Tesla & SpaceX",
        ImgSrc:"/elonMusk.jpg"
    }
        };
    }
  
    // componentDidMount() {
    //     this.setState({
    //         interval: setInterval(() => {
    //             this.setState({ timer: this.state.timer + 1 });
    //         }, 1000),
    //     });
    // };
    componentDidMount() {
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
        }, 1000);
    }
    render() {
        return (
            <>
                <Card style={{ width: "30rem", margin: "auto" }}>
                    <Card.Img variant="top" src={this.state.Person.ImgSrc} />
                    <Card.Body>
                        <Card.Title>
                            <span style={{ color: "red" }}>FullName</span> :{" "}
                            {this.state.Person.fullName}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem></ListGroupItem>
                                <ListGroupItem>
                                    <span style={{ color: "red" }}>Bio </span>:{" "}
                                    {this.state.Person.bio}{" "}
                                </ListGroupItem>

                                <ListGroupItem>
                                    <span style={{ color: "red" }}>
                                        Profession{" "}
                                    </span>
                                    : {this.state.Person.profession}{" "}
                                </ListGroupItem>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">
                            <h5>
                                This component was mounted
                                <span style={{ color: "red" }}>
                                    {" "}
                                    {this.state.timer}{" "}
                                </span>
                                {this.state.timer > 1 ? "seconds" : "second"}{" "}
                                ago
                            </h5>
                        </small>
                    </Card.Footer>
                </Card>
            </>
        );
    }
}
