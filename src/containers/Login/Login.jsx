import React from "react";
import styled from "styled-components";
import loginImg from "assets/login-img.png";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { colors } from "colors";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, usePlane, useSphere } from "@react-three/cannon";
import { EffectComposer, SSAO } from "@react-three/postprocessing";

const StyledLogin = styled.div`
  height: 100%;
  background-image: linear-gradient(90deg, #ffffff 0%, #bbaaff 66.67%);
  display: flex;
  .content-left {
    margin-top: 40px;
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    width: 450px;
  }
  .content-right {
    canvas {
      width: 1000px;
    }
    background-image: url('${loginImg}');
  }
  .input_group_label {
    margin-bottom: 10px;
    min-width: 120px;
    display: inline-block;
  }
  .input_group {
    margin-bottom: 30px;
  }
  .input_group_pass {
    position: relative;
  }
  .forgot-label {
    position: absolute;
    color: #ccc;
    top: -20px;
    right: 28%;
  }
  .input_pass::before {
    content: "";
    display: inline-block;
    background: url("./images/clarity_eye-hide-line.svg") center no-repeat
      transparent;

    height: 30px;
    width: 30px;
    position: relative;
    top: -6px;
    right: 40px;
  }
  .input_group input {
    width: 420px;
    height: 46px;
    border-radius: 5px;
    border: #c0dbea solid 1px;
    padding-left: 10px;
    font-weight: 600;
  }
  .title-login {
    font-size: 40px;
    font-weight: 700;
  }
  .social {
    display: flex;
    justify-content: space-between;
    width: 72%;
    margin-top: 16px;
  }
  .social-btn {
    text-align: center;
    border: #c0dbea solid 1px;
    border-radius: 40px;
    width: 125px;
    height: 50px;
    background-color: #fff;
    cursor: pointer;
  }
  .social-btn:hover {
    transform: scale(1.1);
  }
  .para-with {
    /* margin-left: 150px; */
    color: ${colors.primary};
  }
  .signup {
    width: 70%;
    display: flex;
    justify-content: center;
  }
  .signup1 {
    color: #ccc;
    margin-right: 10px;
  }
  .signup2 {
    color: ${colors.primary};
    cursor: pointer;
  }
  .image {
    display: flex;
  }
`;

function InstancedSpheres({ count = 200 }) {
  const { viewport } = useThree();
  const [ref] = useSphere((index) => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [1.2],
  }));
  return (
    <instancedMesh
      ref={ref}
      castShadow
      receiveShadow
      args={[null, null, count]}
    >
      <sphereBufferGeometry args={[1.2, 32, 32]} />
      <meshLambertMaterial color={colors.primary} />
    </instancedMesh>
  );
}

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, -1]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [6] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}

const Login = () => {
  return (
    <StyledLogin>
      <div className="content-left">
        <Logo />
        <form>
          <h2 className="title-login">Login</h2>
          <div className="input_group">
            <label className="input_group_label " for="name">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
            />
          </div>
          <div className="input_group input_group_pass ">
            <label className="input_group_label " for="password">
              Password:
            </label>
            <div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="password"
                required
              />
              <p id="input_pass" className="input_pass"></p>
            </div>
          </div>
          <div className="btn-form">
            <Button bgColor={colors.primary} textColor="white">
              Login
            </Button>
            <p className="para-with">or continue with</p>
          </div>
        </form>
        <div className="social">
          <button className="social-btn">
            <img src="./asset/images/Google.svg" alt="" />
          </button>
          <button className="social-btn">
            <img src="./asset/images/Vector (6).svg" alt="" />
          </button>
          <button className="social-btn">
            <img src="./asset/images/Vector (7).svg" alt="" />
          </button>
        </div>
        <div className="signup">
          <p className="signup1">Don't have an account yet?</p>
          <p className="signup2">Sign up for free</p>
        </div>
      </div>
      <div className="content-right">
        <Canvas
          shadows
          gl={{ stencil: false, antialias: false }}
          camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
        >
          <fog attach="fog" args={["red", 25, 35]} />
          <ambientLight intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <directionalLight
            castShadow
            intensity={4}
            position={[50, 50, 25]}
            shadow-mapSize={[256, 256]}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <Physics
            gravity={[0, -50, 0]}
            defaultContactMaterial={{ restitution: 0.5 }}
          >
            <group position={[0, 0, -10]}>
              <Mouse />
              <Borders />
              <InstancedSpheres />
            </group>
          </Physics>
          <EffectComposer>
            <SSAO
              radius={0.4}
              intensity={50}
              luminanceInfluence={0.4}
              color="red"
            />
          </EffectComposer>
        </Canvas>
      </div>
    </StyledLogin>
  );
};
export default Login;
