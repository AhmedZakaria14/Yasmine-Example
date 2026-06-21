'use client';

export function AnimatedLinesBackground() {
  const verticalLines = 6;
  const horizontalLines = 6;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] transform-gpu">
      {/* Base Static Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00509E0a_1px,transparent_1px),linear-gradient(to_bottom,#00509E0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated Vertical Beams */}
      <div className="absolute inset-0 flex justify-between px-[2vw]">
        {[...Array(verticalLines)].map((_, i) => (
          <div key={`v-${i}`} className="w-[1px] h-full relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-[#00509E]/20 to-transparent transform-gpu will-change-transform animate-beam-vertical"
              style={{
                animationDuration: `${10 + (i % 5) * 2}s`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Animated Horizontal Beams */}
      <div className="absolute inset-0 flex flex-col justify-between py-[2vh]">
        {[...Array(horizontalLines)].map((_, i) => (
          <div key={`h-${i}`} className="h-[1px] w-full relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full w-[30vw] bg-gradient-to-r from-transparent via-[#00509E]/20 to-transparent transform-gpu will-change-transform animate-beam-horizontal"
              style={{
                animationDuration: `${12 + (i % 4) * 3}s`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Soft Glow Orbs - Static to save FPS */}
      <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#00509E]/5 rounded-full blur-[80px] transform-gpu" />
      <div className="absolute bottom-[10%] right-[20%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#5CE1E6]/5 rounded-full blur-[80px] transform-gpu" />
    </div>
  );
}
