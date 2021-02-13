import React from 'react';
// import ReactDOM from 'react-dom';
import './style.scss';
import MessageList from '@containers/MessageList';
// import MsgInput from '@components/MsgInput';
import './style.scss';

export default () => {
    return <div>
                {/* <MsgInput /> */}
                <MessageList />
            </div>;
};