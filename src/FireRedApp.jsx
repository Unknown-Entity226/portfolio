import React, { useEffect, useRef } from "react";
import Phaser from "phaser";
import BootScene from "./FireRedComponents/game/scenes/BootScreen";
import "./FireRedComponents/game/fonts.css";

const FireRedApp = () => {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    if (gameRef.current) return;

    let cancelled = false;

    const boot = async () => {
      try {
        await Promise.all([
          document.fonts.load('16px "PokemonSolid"'),
          document.fonts.load('16px "PokemonHollow"'),
          document.fonts.load('16px "PokemonGB"'),
        ]);
      } catch {
      }

      if (cancelled) return;

      const config = {
        type: Phaser.AUTO,
        parent: containerRef.current,
        width: 480,
        height: 480,
        pixelArt: true,
        backgroundColor: "#000000",
        scale: {
          mode: Phaser.Scale.FIT,
          autoCenter: Phaser.Scale.CENTER_BOTH,
        },
        scene: [BootScene],
      };

      gameRef.current = new Phaser.Game(config);
    };

    boot();

    return () => {
      cancelled = true;
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div ref={containerRef} id="firered-game-container" />
    </div>
  );
};

export default FireRedApp;