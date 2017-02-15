import React from 'react';
import Titlebar from '../components/titlebar/';
import Window from '../components/window';
import Alert from '../components/alert/';

const GuruMeditation = () => (
  <div>
    <Titlebar name="404" />
    <Window>
      <Alert
        name="Software Failure. Press left mouse button to continue"
        description="Guru Meditation #404"
        url="/"
      />
    </Window>
  </div>
);

export default GuruMeditation;
