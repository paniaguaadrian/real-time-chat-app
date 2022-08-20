import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
        </div>
    );
}

export default App;
