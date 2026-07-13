import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeHero = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    const pointsCount = 650;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(pointsCount * 3);
    const colors = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 10;
      positions[i3 + 1] = (Math.random() - 0.5) * 4.5;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;

      colors[i3] = 1;
      colors[i3 + 1] = 0.68 + Math.random() * 0.18;
      colors[i3 + 2] = 0.44 + Math.random() * 0.18;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.10,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const ambientLight = new THREE.AmbientLight(0xffd7c2, 0.9);
    scene.add(ambientLight);

    const spotLight = new THREE.PointLight(0xffb59d, 1.2);
    spotLight.position.set(4, 3, 5);
    scene.add(spotLight);

    const clock = new THREE.Clock();
    let frameId = null;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      points.rotation.y = elapsed * 0.12;
      points.rotation.x = Math.sin(elapsed * 0.3) * 0.05;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="three-hero-canvas" ref={canvasRef} />;
};

export default ThreeHero;
