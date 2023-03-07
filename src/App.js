
import { useEffect, useRef, useState } from 'react';
import Auth from './Component/Auth';
import Chat from './Component/Chat';
import './styles/style.css';

function App() {
  const [token, setToken] = useState(null);
  const [room, setRoom] = useState(null);
  const inputRef = useRef(null);
  useEffect(() => {
    const permanentToken = localStorage.getItem('token');
    const temporaryToken = sessionStorage.getItem('token');
    permanentToken ? setToken(permanentToken) : setToken(temporaryToken);
  }, []);
  if (!token) return <Auth setToken={setToken} />;
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Odası</h1>
          <p>Hangi Odaya Gireceksiniz?</p>
          <input type="text" ref={inputRef} />
          <button onClick={() => setRoom(inputRef.current.value)}>
            Odaya Gir
          </button>
        </div>
      )}
    </div>
  );
}

export default App;