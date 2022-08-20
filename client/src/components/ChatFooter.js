import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
    const [message, setMessage] = useState('');

    const handleTyping = () => {
        socket.emit('typing', `${localStorage.getItem('userName')} is typing`);
    };

    const handleStopTyping = () => {
        setTimeout(() => {
            socket.emit('typing', false);
        }, 2500);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (message.trim() && localStorage.getItem('userName')) {
            socket.emit('message', {
                text: message,
                name: localStorage.getItem('userName'),
                id: `${socket.id}${Math.random()}`,
                socketID: socket.id,
            });
        }
        setMessage('');
    };
    return (
        <div className="chat__footer">
            <form className="form" onSubmit={handleSendMessage}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleTyping}
                    onKeyUp={handleStopTyping}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;
