import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("BootScene");
  }

  create() {
    const { width, height } = this.scale;

    this.cameras.main.setBackgroundColor("#0f172a");

    const title = this.add
      .text(width / 2, height / 2 - 12, "POKÉMON PORTFOLIO\n", {
        fontFamily: '"PokemonSolid","monospace"',
        fontSize: "40px",
        color: "#ebc334",
        align: "center",
        stroke: "#0a0a0a", 
        strokeThickness: 2
        
      })
      .setOrigin(0.5);

    this.add
      .text(width / 2, height / 2 + 18, "Boot Scene OK \nengine running", {
        fontFamily: '"PokemonGB", "monospace"',
        fontSize: "12px",
        color: "#ffffff",
        align: "center",
      })
      .setOrigin(0.5);

    this.tweens.add({
      targets: title,
      alpha: { from: 1, to: 0.35 },
      duration: 900,
      yoyo: true,
      repeat: -1,
    });
  }
}