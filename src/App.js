import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes'
import HelpMenu from "./components/HelpMenu"

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='absolute centered cursor'>+</div>
      <div className='help visible'>
        <h2>Press Esc for Controls</h2>
        <HelpMenu />
      </div>
    </>
  );
}

export default App;
