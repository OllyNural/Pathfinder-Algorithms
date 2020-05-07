export default 5;



        
// const width = worldMap.length * CELL_WIDTH;
// const squareMidpoint = Math.sqrt(Math.pow(width,2) + Math.pow(width,2)) / 2
// const angle = 60
// const controlHeight = squareMidpoint * Math.tan(angle * Math.PI /180)

// const onKeyDown = (event) => {
//     switch (event.keyCode) {
//         // Up
//         case 87:
//             camera.position.z -= 1
//             break;
//         // Right
//         case 68:
//             camera.position.x += 1
//             break;
//         // Down
//         case 83:
//             camera.position.z += 1
//             break;
//         // Left
//         case 65:
//             camera.position.x -= 1
//             break;
//         default:
//             console.log('default')
//     }
// }



// const Spotlight = (position: Vector3, color: number) => {
//     const spotlight = new THREE.SpotLight(color, 0.3);
//     spotlight.position.set(position.x, 5, position.y);
//     spotlight.target.position.x = position.x * CELL_WIDTH;
//     spotlight.target.position.y = 0;
//     spotlight.target.position.z = position.y * CELL_WIDTH;
//     spotlight.castShadow = true;
//     spotlight.shadow.mapSize.width = 512;
//     spotlight.shadow.mapSize.height = 512;
//     spotlight.shadow.camera.fov = 1;
//     return <primitive object={spotlight} />
// }



// const Box = (props: any) => {
//     // This reference will give us direct access to the mesh
//     const mesh = useRef()

//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false)
//     const [active, setActive] = useState(false)

//     // Rotate mesh every frame, this is outside of React without overhead
//     // @ts-ignore: Object is possibly undefined
//     useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

//     return (
//         <mesh
//             {...props}
//             ref={mesh}
//             scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
//             onClick={e => setActive(!active)}
//             onPointerOver={e => setHover(true)}
//             onPointerOut={e => setHover(false)}>
//             <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
//             <meshStandardMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     )
// }