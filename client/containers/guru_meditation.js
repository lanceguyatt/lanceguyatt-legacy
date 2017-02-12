// ==================================================
// GuruMeditation
// ==================================================

import React from 'react';
import Titlebar from '../components/titlebar/';
import Alert from '../components/alert/';

const GuruMeditation = () => (
  <div>
    <Titlebar name="404" />
    <Alert
      name="Software Failure. Press left mouse button to continue"
      description="Guru Meditation #404"
    />
  </div>
);

export default GuruMeditation;
