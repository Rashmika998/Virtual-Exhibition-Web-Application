/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/attendeefemaleavatar2.gltf
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useAvatarCustomization } from "contexts/AvatarCustomizationContext";

const Attendeefemaleavatar2 = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "./models/attendeefemaleavatar2.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  const {
    hairColor,
    setHairColor,
    shirtColor,
    setShirtColor,
    pantsColor,
    setPantsColor,
    shoesColor,
    setShoesColor,
    skinColor,
    setSkinColor,
  } = useAvatarCustomization();

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  useEffect(() => {
    setHairColor(`#${materials.Ch37_hair.color.getHexString()}`);
    setSkinColor(`#${materials.Ch38_body.color.getHexString()}`);
    setShirtColor(`#${materials.Ch38_body.color.getHexString()}`);
    setPantsColor(`#${materials.Ch38_body.color.getHexString()}`);
    setShoesColor(`#${materials.Ch38_body.color.getHexString()}`);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig6Hips} />
          <skinnedMesh
            name="Ch37_Body"
            geometry={nodes.Ch37_Body.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch37_Body.skeleton}
          >
            <meshStandardMaterial {...materials.Ch38_body} color={skinColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch37_Eyeleashes"
            geometry={nodes.Ch37_Eyeleashes.geometry}
            material={materials.Ch37_hair}
            skeleton={nodes.Ch37_Eyeleashes.skeleton}
          />
          <skinnedMesh
            name="Ch37_Hair"
            geometry={nodes.Ch37_Hair.geometry}
            material={materials.Ch37_hair}
            skeleton={nodes.Ch37_Hair.skeleton}
          >
            <meshStandardMaterial {...materials.Ch37_hair} color={hairColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch37_Pants"
            geometry={nodes.Ch37_Pants.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch37_Pants.skeleton}
          >
            <meshStandardMaterial {...materials.Ch38_body} color={pantsColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch37_Shirt"
            geometry={nodes.Ch37_Shirt.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch37_Shirt.skeleton}
          >
            <meshStandardMaterial {...materials.Ch38_body} color={shirtColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch37_Sneakers"
            geometry={nodes.Ch37_Sneakers.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch37_Sneakers.skeleton}
          >
            <meshStandardMaterial {...materials.Ch38_body} color={shoesColor} />
          </skinnedMesh>
          <skinnedMesh
            name="Ch37_Zipper"
            geometry={nodes.Ch37_Zipper.geometry}
            material={materials.Ch38_body}
            skeleton={nodes.Ch37_Zipper.skeleton}
          />
        </group>
      </group>
    </group>
  );
};
export default Attendeefemaleavatar2;
useGLTF.preload('.models/attendeefemaleavatar2.gltf')
