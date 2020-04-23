import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            skill: '',
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value 
        })
    }

    handleSkillChange = (event) =>{
        this.setState({
                skill: event.target.value
        })
    }

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(`username: ${this.state.username} comments: ${this.state.comments} skill: ${this.state.skill}`);
    }
    render() {
        const {username, comments, skill} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={skill} onChange={this.handleSkillChange}>
                        <option value='java'>java</option>
                        <option value='js'>js</option>
                        <option value='c#'>c#</option>
                    </select>
                </div>
                <button type='sumbit'> Sumbit</button>
            </form>
        )
    }
}

export default Form
