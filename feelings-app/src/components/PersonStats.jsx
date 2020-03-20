import React, { Component } from 'react'
class PersonStats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: 0,
            feeling: "",
            message: ""

        }
    }

        handleSubmisson = (event) => {
            event.preventDefault();

            this.setState({
                message: `Hello ${this.state.name}
                    Your age is ${this.state.age}
                    How are you feeling? ${this.state.feeling}`
                
            });

        }
        handleChange = (event) => {
            if (event.target.name == "name") {
                this.setState({ name: event.target.value })
            } else if (event.target.name == "age") {
                this.setState({ age: event.target.value })
            } else if (event.target.name == "feeling") {
                this.setState({ feeling: event.target.value })
            }
        }
        render() {
            return (
                <div>
                    <form action="">
                    <fieldset>
                        <legend>Personal Statistics</legend>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />

                        <label htmlFor="">Age</label>
                        <input type="number" name="age" id="age" value={this.state.age} onChange={this.handleChange} />

                        <label htmlFor="">I'm Feeling</label>
                        <input type="text" name="feeling" id="feeling" value={this.state.feeling} onChange={this.handleChange} />


                        <button onClick={this.handleSubmisson}>Click Me!</button>

                    </fieldset>
                    </form>
                    <div>
                        {this.state.message}
                    </div>
                </div>
            );
        }

    }


export default PersonStats;