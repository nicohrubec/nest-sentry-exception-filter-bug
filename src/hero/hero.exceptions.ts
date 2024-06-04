export class HeroNotFoundException extends Error {
  constructor() {
    super('Hero Not Found');
  }
}
