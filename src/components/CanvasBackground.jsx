import { useEffect, useRef } from 'react';

const CanvasBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let particles = [];
        const mouse = { x: null, y: null, radiusSq: 22500 }; // 150^2 (pre-calculated squared radius)

        let resizeTimeout;
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const debouncedResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 150);
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.size = Math.random() * 2 + 1;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.density = (Math.random() * 30) + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
                if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distSq = dx * dx + dy * dy;
                    
                    if (distSq < mouse.radiusSq) {
                        const distance = Math.sqrt(distSq); // Only calculate sqrt if within interaction boundary
                        const force = (150 - distance) / 150;
                        const directionX = (dx / distance) * force * this.density * 0.5;
                        const directionY = (dy / distance) * force * this.density * 0.5;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }
        }

        const initParticles = () => {
            particles = [];
            // Cap particle count strictly based on screen area to guarantee 60 FPS
            const densityFactor = 15000;
            const targetCount = Math.floor((canvas.width * canvas.height) / densityFactor);
            const numberOfParticles = Math.min(targetCount, 80); // Cap at 80 particles max for scale

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        };

        const connectParticles = () => {
            const limitSq = 14400; // 120^2 (pre-calculated connection limit squared)
            
            // Set style once per frame to minimize canvas state switches
            ctx.lineWidth = 1;

            const len = particles.length;
            for (let a = 0; a < len; a++) {
                const pA = particles[a];
                for (let b = a + 1; b < len; b++) {
                    const pB = particles[b];
                    const dx = pA.x - pB.x;
                    const dy = pA.y - pB.y;
                    const distSq = dx * dx + dy * dy;

                    if (distSq < limitSq) {
                        const distance = Math.sqrt(distSq); // Only run sqrt on connections that will draw
                        const alpha = (120 - distance) * 0.00125; // Pre-calculated division multiplier (1/120 * 0.15 = 0.00125)
                        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
                        ctx.beginPath();
                        ctx.moveTo(pA.x, pA.y);
                        ctx.lineTo(pB.x, pB.y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Single style setting for all particle fills
            ctx.fillStyle = 'rgba(139, 92, 246, 0.4)';
            ctx.beginPath();
            
            const len = particles.length;
            for (let i = 0; i < len; i++) {
                const particle = particles[i];
                particle.update();
                ctx.moveTo(particle.x + particle.size, particle.y);
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            }
            ctx.fill();
            
            connectParticles();
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        window.addEventListener('resize', debouncedResize);
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        resizeCanvas();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', debouncedResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-transparent"
        />
    );
};

export default CanvasBackground;
