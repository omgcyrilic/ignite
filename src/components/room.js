import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as faLightBulbSolid } from '@fortawesome/free-solid-svg-icons';
import Switch from 'react-switch';

const Room = () => {
  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div className={`app ${lightsOn ? 'lights-on' : ''}`}>
      <FontAwesomeIcon
        icon={lightsOn ? faLightBulbSolid : faLightbulb}
        size="5x"
        className={`light-bulb fa-rotate-180 ${lightsOn ? 'lights-on' : ''}`}
      />
      <h3 className={lightsOn ? 'lights-on' : ''}>Light Switch</h3>
      <Switch onChange={() => setLightsOn(!lightsOn)} checked={lightsOn} uncheckedIcon={false} checkedIcon={false} />
      <p className={lightsOn ? 'lights-on' : ''}>
        The lights are
        <strong>{lightsOn ? ' on' : ' off'}</strong>
      </p>
    </div>
  );
};

export default Room;
