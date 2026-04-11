/**
 * LiquidEther — animated blob background for the Hero section.
 * Pure browser APIs: SVG filters + CSS keyframes.
 * Zero external deps. Works fully offline.
 */
export function LiquidEther() {
  return (
    <>
      {/* SVG filter engine — hidden, 0px tall, defines the liquid warp */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      >
        <defs>
          <filter id="ether-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.012 0.008"
              numOctaves="3"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="90"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Blob layer — sits at z-index 0, behind all hero content */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          zIndex: 0,
          pointerEvents: "none",
          filter: "url(#ether-filter)",
        }}
      >
        {/* Blob 1 — deep violet, center-right, drifts top-left to bottom-right */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "45%",
            width: "55vw",
            height: "55vw",
            maxWidth: 700,
            maxHeight: 700,
            borderRadius: "50%",
            background: "rgb(49, 10, 120)",
            filter: "blur(90px)",
            opacity: 0.65,
            mixBlendMode: "screen",
            willChange: "transform",
            animation: "etherBlob1 55s ease-in-out infinite",
          }}
        />

        {/* Blob 2 — electric indigo, top-right, diagonal drift */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "55%",
            width: "45vw",
            height: "45vw",
            maxWidth: 600,
            maxHeight: 600,
            borderRadius: "50%",
            background: "rgb(79, 70, 229)",
            filter: "blur(100px)",
            opacity: 0.55,
            mixBlendMode: "screen",
            willChange: "transform",
            animation: "etherBlob2 70s ease-in-out infinite",
          }}
        />

        {/* Blob 3 — mid-depth filler, center, slow orbit */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "35%",
            width: "40vw",
            height: "40vw",
            maxWidth: 520,
            maxHeight: 520,
            borderRadius: "50%",
            background: "rgb(30, 15, 80)",
            filter: "blur(80px)",
            opacity: 0.6,
            mixBlendMode: "screen",
            willChange: "transform",
            animation: "etherBlob3 45s linear infinite",
          }}
        />

        {/* Blob 4 — near-black anchor, bottom-center, subtle pulse */}
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            width: "35vw",
            height: "35vw",
            maxWidth: 450,
            maxHeight: 450,
            borderRadius: "50%",
            background: "rgb(49, 10, 120)",
            filter: "blur(110px)",
            opacity: 0.5,
            mixBlendMode: "screen",
            willChange: "transform",
            animation: "etherBlob4 60s ease-in-out infinite",
          }}
        />
      </div>

      {/* Edge vignette — feathers blobs into the dark site bg */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 20% 50%, transparent 30%, #0a0a0a 75%)",
        }}
      />
    </>
  );
}
