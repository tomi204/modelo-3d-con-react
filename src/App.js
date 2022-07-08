import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Monitor from "./components/monitor/Monitor";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "80vh" }}>
        <Canvas camera={{ zoom: 1, position: [5, 20, 45] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />

          <Suspense fallback={null}>
            <Monitor />
          </Suspense>

          <OrbitControls makeDefault />
        </Canvas>
      </div>
    </>
  );
}
export default App;
