import { useState } from 'react'
import { Link, Route, Routes } from "react-router-dom";
import { styled } from '@mui/system';
import Frame from './frame/frame'
import Section from './section/section';
import Room from './room/room'
// import './App.css'

const MyDiv = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
});

function App() {

  return (
    <MyDiv>
      <Frame />
      <Section />
      {/* <Room /> */}

      <Routes>
        <Route path="section" element={<Section />}></Route>
        <Route path="room" element={<Room />}></Route>
      </Routes>
    </MyDiv>
  )
}

export default App
