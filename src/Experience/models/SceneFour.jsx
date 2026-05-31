import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useKTX2Texture } from "../utils/ktxLoader";
import { assetUrl } from "../utils/assets";
import { useFrame } from "@react-three/fiber";
import PaperLabel from "../components/PaperLabel";

export default function Model(props) {
  const { nodes, materials } = useGLTF(assetUrl("models/scene_4.glb"));
  const scene_4 = useKTX2Texture(assetUrl("textures/scene_4.ktx2"));

  const ghostRef = useRef();
  const zombieHandRef = useRef();
  const firstPaperRef = useRef();
  const secondPaperRef = useRef();

  const firstPaperHovered = useRef(false);
  const secondPaperHovered = useRef(false);

  const firstPaperOriginalZ = -2.754;
  const secondPaperOriginalZ = -2.754;

  const firstPaperHoverZ = firstPaperOriginalZ + 5;
  const secondPaperHoverZ = secondPaperOriginalZ + 5;

  const lerpFactor = 0.1;

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (ghostRef.current) {
      ghostRef.current.position.y += 0.02;

      if (ghostRef.current.position.y >= 8) {
        ghostRef.current.position.y = 0.5;
      }
    }

    if (zombieHandRef.current) {
      zombieHandRef.current.rotation.y = 0.2 * Math.sin(t * 3.5);
    }

    if (firstPaperRef.current) {
      const targetZ = firstPaperHovered.current
        ? firstPaperHoverZ
        : firstPaperOriginalZ;
      firstPaperRef.current.position.z +=
        (targetZ - firstPaperRef.current.position.z) * lerpFactor;
    }

    if (secondPaperRef.current) {
      const targetZ = secondPaperHovered.current
        ? secondPaperHoverZ
        : secondPaperOriginalZ;
      secondPaperRef.current.position.z +=
        (targetZ - secondPaperRef.current.position.z) * lerpFactor;
    }
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Plane120.geometry}
        material={scene_4}
        position={[19.462, 3.327, -2.48]}
        rotation={[1.566, -0.053, -0.004]}
      />
      <mesh
        ref={ghostRef}
        geometry={nodes.Ghost.geometry}
        material={scene_4}
        position={[18.485, 1.879, -1.236]}
        rotation={[1.566, -0.053, -0.004]}
      />
      <mesh
        geometry={nodes.Plane122.geometry}
        material={scene_4}
        position={[15.905, 4.474, -2.751]}
        rotation={[1.566, -0.053, -0.004]}
      />
      <mesh
        geometry={nodes.Plane123.geometry}
        material={scene_4}
        position={[20.852, 4.776, -2.754]}
        rotation={[Math.PI / 2, -0.064, 0]}
      />
      <mesh
        ref={firstPaperRef}
        geometry={nodes.Plane125.geometry}
        material={scene_4}
        position={[16.29, 3.282, firstPaperOriginalZ]}
        rotation={[Math.PI / 2, -0.007, 0]}
        onPointerEnter={() => (firstPaperHovered.current = true)}
        onPointerLeave={() => (firstPaperHovered.current = false)}
      />
      <mesh
        ref={secondPaperRef}
        geometry={nodes.Plane126.geometry}
        material={scene_4}
        position={[17.918, 4.052, secondPaperOriginalZ]}
        rotation={[Math.PI / 2, -0.114, 0]}
        onPointerEnter={() => (secondPaperHovered.current = true)}
        onPointerLeave={() => (secondPaperHovered.current = false)}
      />
      <mesh
        geometry={nodes.Plane127.geometry}
        material={scene_4}
        position={[18.891, 4.813, -2.624]}
        rotation={[1.566, -0.334, -0.005]}
      />
      <mesh
        geometry={nodes.Plane128.geometry}
        material={scene_4}
        position={[17.281, 2.381, -2.624]}
        rotation={[1.566, -0.062, -0.004]}
      />
      <mesh
        ref={zombieHandRef}
        geometry={nodes.Plane131.geometry}
        material={scene_4}
        position={[17.37, 2.407, -2.609]}
        rotation={[1.566, -0.062, -0.004]}
      />
      <mesh
        geometry={nodes.Plane132.geometry}
        material={scene_4}
        position={[21.188, 2.448, -2.624]}
        rotation={[1.566, -0.062, -0.004]}
      />
      <mesh
        geometry={nodes.Plane133.geometry}
        material={scene_4}
        position={[17.656, 2.177, -0.262]}
      />
      <mesh
        geometry={nodes.Plane134.geometry}
        material={scene_4}
        position={[-20.599, 4.634, -2.755]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <PaperLabel position={[16.55, 4.45, -2.58]} width={3.1} height={1.28}>
        <div style={{ fontSize: 15, fontWeight: 900 }}>快美妆科技</div>
        <div style={{ marginTop: 5, fontSize: 11 }}>
          私域运营、达人直播跟播、社群维护与粉丝需求登记，提升用户活跃与转化。
        </div>
      </PaperLabel>
      <PaperLabel position={[19.25, 4.78, -2.58]} width={3.35} height={1.35}>
        <div style={{ fontSize: 15, fontWeight: 900 }}>苏州新晨传媒</div>
        <div style={{ marginTop: 5, fontSize: 11 }}>
          小红书亲子旅行/文旅账号从 0 到 1 孵化，30+ 内容，2 个月涨粉 3000。
        </div>
      </PaperLabel>
    </group>
  );
}

useGLTF.preload(assetUrl("models/scene_4.glb"));
