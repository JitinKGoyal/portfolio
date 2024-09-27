import { useGSAP } from "@gsap/react";
import { useGLTF } from "@react-three/drei";
import { type MeshProps } from "@react-three/fiber";
import gsap from "gsap";
import React from "react";
import type { Mesh } from "three";

const Target = (props: MeshProps) => {
  const targetRef = React.useRef<Mesh>(null);

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current?.position, {
        y: targetRef.current?.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <mesh {...props} ref={targetRef} scale={1.5} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
