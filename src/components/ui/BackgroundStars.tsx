import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function BackgroundStars() {
    return (
        <div className="fixed inset-0 ">
            <Canvas className="fixed top-0 left-0 -z-10 w-screen h-screen pointer-events-none">
                <Stars radius={50} count={2500} factor={4} fade speed={1} />
            </Canvas>
        </div>
    )
}

export default BackgroundStars