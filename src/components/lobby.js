import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorClosed, faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import Room from './room';

const Lobby = () => {
  const [hover, setHover] = useState(false);
  const [insideRoom, setInsideRoom] = useState(false);

  return (
    <div>
      {insideRoom ? (
        <Room />
      ) : (
        <div className="app">
          <h3>Click through to enter!</h3>
          <div className="room">
            <button
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
              onFocus={() => ({})}
              onBlur={() => ({})}
              className="door"
              type="button"
              onClick={() => setInsideRoom(true)}
            >
              {hover ? <FontAwesomeIcon icon={faDoorOpen} size="10x" /> : <FontAwesomeIcon icon={faDoorClosed} size="10x" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lobby;
