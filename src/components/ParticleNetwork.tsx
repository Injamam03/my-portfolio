"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
}

interface MouseParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export default function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const particles: Particle[] = [];
    const mouseParticles: MouseParticle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const initParticles = () => {
      particles.length = 0;
      const particleCount = Math.floor((width * height) / 12000);
      const count = Math.max(40, Math.min(particleCount, 95));

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.6,
          radius: Math.random() * 1.8 + 1.2,
          baseAlpha: Math.random() * 0.4 + 0.3,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;

      // Spawn snow/sparkle mouse particles on cursor move
      for (let i = 0; i < 2; i++) {
        mouseParticles.push({
          x: mouse.x + (Math.random() - 0.5) * 12,
          y: mouse.y + (Math.random() - 0.5) * 12,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -Math.random() * 1.2 - 0.3,
          radius: Math.random() * 2.2 + 1,
          alpha: 0.95,
          life: 0,
          maxLife: Math.floor(Math.random() * 30 + 20),
        });
      }
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    handleResize();

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains("light");
      const dotColor = isLight ? "59, 130, 246" : "147, 197, 253";
      const lineColor = isLight ? "59, 130, 246" : "96, 165, 250";
      const snowColor = isLight ? "59, 130, 246" : "224, 242, 254";

      // 1. Update and draw network
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dotColor}, ${p.baseAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (isLight ? 0.2 : 0.25);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.active) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          const mouseMaxDist = 170;

          if (mdist < mouseMaxDist) {
            const alpha = (1 - mdist / mouseMaxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Update and draw snow / sparkle cursor particles
      for (let i = mouseParticles.length - 1; i >= 0; i--) {
        const sp = mouseParticles[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.life++;
        const progress = sp.life / sp.maxLife;
        const currentAlpha = (1 - progress) * sp.alpha;

        if (sp.life >= sp.maxLife) {
          mouseParticles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sp.x, sp.y, sp.radius * (1 - progress * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${snowColor}, ${currentAlpha})`;
        ctx.shadowColor = `rgba(${snowColor}, 0.8)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none h-full w-full"
    />
  );
}
