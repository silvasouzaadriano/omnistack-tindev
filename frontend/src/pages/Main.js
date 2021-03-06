import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import './Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import itsamatch from '../assets/itsamatch.png';

export default function Main({ match }) {
  const [users, setUsers] = useState([]); //Initializing users
  const [matchDev, setMatchDev] = useState(null); //Initializing match information

  
  useEffect(() => { //Load users from api
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  useEffect(() => { // Connect with backend about Socket to Match funcionality
    const socket = io('http://localhost:3333', {
      query: {user: match.params.id}
    });

    socket.on('match', dev => {
      setMatchDev(dev);
    })
    
    /*socket.on('world', message => {
      console.log(message)
    })

    setTimeout(() => {
      socket.emit('hello', {
        message: 'Hello World'
      })
    },3000)*/
  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter(user => user._id !== id)); // Rebuilding the user list
  }

  async function handleDisLike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id },
    });

    setUsers(users.filter(user => user._id !== id)); // Rebuilding the user list
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev"/>
      </Link>
      { users.length > 0 ? (
        <ul>
        {users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt={user.name}/>
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button" onClick={() => handleDisLike(user._id)}>
                <img src={dislike} alt="Dislike"/>
              </button>
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={like} alt="Like"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      )}

      { matchDev && (
        <div className="match-container">
          <img src={itsamatch} alt="It's a match"/>
          <img className="avatar" src={matchDev.avatar} alt=""/>
          <strong>{matchDev.name}</strong>
          <p>{matchDev.bio}</p>
          <button type="submit" onClick={() => setMatchDev(null)}>Fechar</button>
        </div>
      ) }

    </div>
  )
}