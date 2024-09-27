/*
    Auto-generated by: https://github.com/pmndrs/gltfjsx
    Command: npx gltfjsx@6.5.0 react.glb -T
    Author: xenadus (https://sketchfab.com/xenadus)
    License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
    Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
*/

import { useGSAP } from "@gsap/react";
import { Float, useGLTF } from "@react-three/drei";
import type { GroupProps } from "@react-three/fiber";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Mesh } from "three";

const ReactLogo = (props: GroupProps) => {
  const { nodes, materials }: any = useGLTF("/models/react.glb");
  const [hovered, setHovered] = useState(false);

  const logoRef = useRef<Mesh>(null);

  useGSAP(() => {
    if (logoRef.current) {
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(logoRef.current.rotation, {
          y: hovered ? "+=2" : `+=${Math.PI * 2}`,
          x: hovered ? "+=2" : `-=${Math.PI * 2}`,
          duration: 5,
          stagger: {
            each: 0.15,
          },
        });
    }
  });

  return (
    <Float floatIntensity={0}>
      <group position={[8, 8, 0]} scale={0.4} {...props} dispose={null}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
          ref={logoRef}
          onPointerEnter={() => setHovered(true)}
        />
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
