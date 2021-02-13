import React, { Component } from 'react';
// import ReactDom from 'react-dom';
import Message from '@components/Message';
import './style.scss';

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                { name: 'Анна', text: 'Привет' },
                { name: 'Анна', text: 'Как у тебя дела?' }
            ],
        };
    };
    sendMessage = () => {
        this.setState({
            messages: [...this.state.messages, {
                name: 'Михаил', text: 'Люкс'
            }],
        });
    };
    render() {
        const { messages } = this.state;
        const Messages = messages.map((el, i) =>
            <Message
                key={ i }
                name={ el.name }
                text={ el.text }
            />);
        return <div>
            <button onClick={this.sendMessage}>Отправить</button>
            {Messages}
        </div>;
    };
};