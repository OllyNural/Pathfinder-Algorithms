/* tslint:disable:strictnullchecks */
import React, { useMemo, useRef, useEffect, useContext, useState, useCallback } from "react";
import { Canvas, useThree, extend, useFrame, ReactThreeFiber } from 'react-three-fiber'
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import worldMap from './worldMap'
import { Vector3, Object3D, EdgesGeometry } from "three";
import AppContext from "../AppContext";

extend({ OrbitControls, PointerLockControls });
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
        interface IntrinsicElements {
            'orbitControls': ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>;
            'pointerLockControls': ReactThreeFiber.Object3DNode<PointerLockControls, typeof PointerLockControls>;
        }
    }
}

const CELL_WIDTH = 10;
const CELL_HEIGHT = 20;

type ColorType = {
    fill: number;
    wireframe: number;
}[]


const COLOUR_MAP: ColorType = [
    // Nothing
    { fill: 0x000000, wireframe: 0x474747 },
    // Wall
    { fill: 0x000000, wireframe: 0xD400D4 },
    // Shortest Path
    { fill: 0x000000, wireframe: 0x00FFFF },
    // Start
    { fill: 0x00FF00, wireframe: 0x00FF00 },
    // End
    { fill: 0xFF0000, wireframe: 0xFF0000 }
]

const findIndexFromValue = (grid: any[][], value: number): { x: number, y: number } => {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === value) return { x: i, y: j }
        }
    }
    return { x: 0, y: 0 }
}

const ReactCube = (i: number, j: number, zIndex: number, cell: number) => {
    const cellColorFill: any = new THREE.Color(COLOUR_MAP[cell].fill)
    const cellColorWireframe: any = new THREE.Color(COLOUR_MAP[cell].wireframe)

    const geom = useMemo(() => new THREE.BoxGeometry(CELL_WIDTH, CELL_HEIGHT, CELL_WIDTH), []);

    return (
        <group >
            <mesh position={[(j * CELL_WIDTH) + (CELL_WIDTH / 2) , zIndex, (i * CELL_WIDTH) + (CELL_WIDTH / 2)]} castShadow>
                <lineSegments>
                    <edgesGeometry attach="geometry" args={[geom]} />
                    <lineBasicMaterial color={cellColorWireframe} attach="material" />
                </lineSegments>
                <boxGeometry attach="geometry" args={[CELL_WIDTH, CELL_HEIGHT, CELL_WIDTH]} />
                <meshPhongMaterial attach="material" color={cellColorFill} transparent={false} opacity={1} />
            </mesh>
        </group>
    )
}

const World: React.FC = () => {

    const { state, dispatch } = useContext(AppContext);
    const {
        currentGrid,
        solution
    } = state

    const [orbit, setOrbit] = useState(true);

    const Controls = (props: any) => {
        const controlsRef = useRef<OrbitControls>();
        const { camera, gl } = useThree();

        const width = worldMap.length * CELL_WIDTH;

        // Working out arc for position x and z
        const arcAngle = 10
        const startX = 0
        const startY = 0
        const centerX = width/2
        const centerY = width/2
        const radius = Math.sqrt(Math.pow(35, 2) + Math.pow(35, 2)) / 2

        const startAngle = Math.atan2(startY - centerY, startX - centerX)
        const EndX = centerX + radius * Math.cos(startAngle + arcAngle)
        const EndY = centerY + radius * Math.sin(startAngle + arcAngle)

        // Working out height for positioning y
        const angle = 60
        const squareMidpoint = Math.sqrt(Math.pow(width,2) + Math.pow(width,2)) / 2
        const controlHeight = squareMidpoint * Math.tan(angle * Math.PI /180)


        useEffect(() => {
            camera.position.set(-EndX, controlHeight, -EndY)
            // camera.position.set(0, controlHeight, 0)
            controlsRef?.current?.update()
        })

        useFrame(() => controlsRef?.current?.update());

        useFrame(() => {
            if (controlsRef !== undefined && controlsRef.current !== undefined) {
                controlsRef.current.target = new THREE.Vector3(worldMap.length / 2 * CELL_WIDTH, 0, worldMap.length / 2 * CELL_WIDTH)
                controlsRef?.current?.update()
            }
        })

        return (
            <orbitControls
                {...props}
                ref={controlsRef}
                args={[camera, gl.domElement]}
                position={[10, 10, 50]}
                enableRotate
                enablePan={false}
                enableDamping={true}
                dampingFactor={0.07}
                maxDistance={100}
                minDistance={5}
                maxPolarAngle={Math.PI / 3}
            />
        );
    };

    console.log(orbit)

    const PointerControls = (props: any) => {
        const controlsRef = useRef<PointerLockControls>();
        const { camera, gl } = useThree();

        useFrame(() => {
            const handleLock = () => {
                if (controlsRef?.current?.isLocked) return
                console.log('locked')
            }
    
            const handleUnlock = () => {
                console.log('unlocked')
                if (!controlsRef?.current?.isLocked) return
                setOrbit(true)
            }

            if (controlsRef !== undefined && controlsRef.current !== undefined) {
                // controlsRef.current.target = new THREE.Vector3(worldMap.length / 2 * CELL_WIDTH, 0, worldMap.length / 2 * CELL_WIDTH)
                controlsRef.current.addEventListener('lock', handleLock)
                controlsRef.current.addEventListener('unlock', handleUnlock)
                document.addEventListener("keydown", (event) => {
                    if (event.code === 'Space') {
                        console.log('in event listener')
                        controlsRef.current && controlsRef.current.lock()
                        controlsRef.current && controlsRef.current.connect()
                        setOrbit(false)
                    }
                })
            }
        })

        return (
            <pointerLockControls
                {...props}
                ref={controlsRef}
                args={[camera, gl.domElement]}
            />)
    }

    const startIndex = findIndexFromValue(worldMap, 3)
    const endIndex = findIndexFromValue(worldMap, 4)

    const ambientLight = new THREE.Color(0x404040)
    const startLight = new THREE.Color(0x00FF00)
    const endLight = new THREE.Color(0xFF0000)

    const AmbientLight = () => {
        const { camera } = useThree()
        camera.near = 0.1;
        camera.far = 1000;

        const halfWidth = worldMap.length / 2 * CELL_WIDTH

        camera.position.set(halfWidth, 80, halfWidth);

        return (<ambientLight color={ambientLight} />)
    }

    const mapElements = worldMap.map((row, i) => row.map((cell, j) => {
        const zIndex = cell === 1 ? (CELL_HEIGHT / 2) : -(CELL_HEIGHT / 2)
        const cube = ReactCube(i, j, zIndex, cell)
        return cube
    }))

    const sceneMapElements = mapElements.flat()

    return (
        <Canvas style={{ backgroundColor: 'black' }} >
            <Controls enabled={orbit} />
            <PointerControls enabled={!orbit} />
            <AmbientLight />
            <pointLight distance={55} position={[startIndex.y * CELL_WIDTH, 5, startIndex.x * CELL_WIDTH]} color={startLight} intensity={1} />
            {/* {endTarget && <spotLight lookAt={endTarget} position={[endIndex.y, 5, endIndex.x]} color={endLight} intensity={0.3} />} */}
            <pointLight distance={25} position={[endIndex.y * CELL_WIDTH, 5, endIndex.x * CELL_WIDTH]} color={endLight} intensity={1} />
            {sceneMapElements}
        </Canvas>
    )
}

export default World;
