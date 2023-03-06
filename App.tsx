import React from 'react';
import {StatusBar} from 'react-native';
import {InvitePartner} from './src/screens/invitePartner';
function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <InvitePartner />
    </>
  );
}

export default App;
