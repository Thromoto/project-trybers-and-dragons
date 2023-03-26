import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._createdRacesInstances += 1;
  }
  
  override get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances() {
    return Elf._createdRacesInstances;
  }
}