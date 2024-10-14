import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import React, { FC, ReactNode, useRef } from "react";

type Props = {
  children: ReactNode;
  isMobile: boolean;
};

const HeroCamera: FC<Props> = ({ children, isMobile }) => {
  const groupRef = useRef<any>(null);

  useFrame((state, delta) => {
    // easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current?.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.15,
        delta
      );
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default HeroCamera;
