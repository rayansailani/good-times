import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './App.css';
import { app } from './firebaseConfig';

function App() {
  // const dbStateInRecoil = useSetRecoilState({dbState});
  // useState(()=> {
  //   console.log(app);
  // }, []);


  return (
    <div className="App">
      testing
    </div>
  );
}

export default App;
