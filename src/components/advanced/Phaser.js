import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PhaserGame = () => {
  const gameRef = useRef(null);
  const phaserGameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: gameRef.current,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 300 },
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    phaserGameRef.current = new Phaser.Game(config);

    return () => {
      if (phaserGameRef.current) {
        phaserGameRef.current.destroy(true);
      }
    };
  }, []);

  function preload() {
  //assets
  }

  function create() {
    this.add.text(400, 300, 'Hello Phaser!', { fontSize: '32px', fill: '#fff' });
  }

  function update() {
  }

  return <div ref={gameRef} id="phaser-game" />;
};

export default PhaserGame;
