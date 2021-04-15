import 'phaser';
import SceneButton from '../Objects/button';


export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Title');
  }

  preload() {
  }

  create() {
    const button = new SceneButton(400, 300, 'start', this, 'Game', 3);
  }
}