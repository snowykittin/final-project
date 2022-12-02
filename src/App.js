import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { FPV } from './components/FPV';
import { Cubes } from './components/Cubes'
import { HelpMenu } from "./components/HelpMenu"
import { TextureSelector } from './components/TextureSelector';
import { Menu } from './components/Menu';

function App() {
  return (
    <>
      <Canvas>
      <Sky
          distance={450000}
          sunPosition={[15, 2, 20]}
          inclination={0}
          azimuth={0.25}
        />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className='introControls'>
        <h2>Welcome to ReactMC!</h2>
        <p>Click the crosshair to control the camera</p>
        <p>Use [Esc] to unlock your mouse</p>
        <Menu />
      </div>
      <div className='absolute centered cursor'>+</div>
      <div className='help'>
        <h2>Press [H] for Controls</h2>
        <HelpMenu />
      </div>
      <TextureSelector/>
    </>
  );
}

export default App;
