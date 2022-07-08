import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Monitor({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/monitor.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <lineSegments
          geometry={nodes.Material2.geometry}
          material={materials.edge_color000255}
        />
        <lineSegments
          geometry={nodes.Material2_1.geometry}
          material={materials.edge_color818181255}
        />
        <mesh
          geometry={nodes.Material3.geometry}
          material={materials["0019_Crimson"]}
        />
        <mesh
          geometry={nodes.Material2_2.geometry}
          material={materials["0135_DarkGray_1"]}
        />
        <mesh
          geometry={nodes.Material3_1.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Material3_2.geometry}
          material={materials.asus_parte}
        />
        <mesh
          geometry={nodes.Material3_3.geometry}
          material={materials.asus_parte_0}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/monitor.gltf");
