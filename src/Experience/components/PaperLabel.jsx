import React from "react";
import { Html } from "@react-three/drei";

const PaperLabel = ({
  position,
  rotation = [Math.PI / 2, 0, 0],
  width = 2.8,
  height = 1.3,
  children,
}) => {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 0, -0.012]}>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial color="#f5f1e7" transparent opacity={0.94} />
      </mesh>
      <Html
        transform
        center
        distanceFactor={4.8}
        position={[0, 0, -0.035]}
        style={{ pointerEvents: "none" }}
      >
        <div
          style={{
            width: `${width * 70}px`,
            minHeight: `${height * 48}px`,
            padding: "10px 12px",
            color: "#2f3437",
            fontFamily:
              '"Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif',
            lineHeight: 1.55,
            textAlign: "left",
          }}
        >
          {children}
        </div>
      </Html>
    </group>
  );
};

export default PaperLabel;
