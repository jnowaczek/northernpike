export class Switch {
  label: string;
  value: boolean;
}

export const SWITCHES: Switch[] = [
  {label: 'LED', value: false},
  {label: 'S 2', value: false},
  {label: 'S 3', value: false},
  {label: 'S 4', value: false},
  {label: 'S 5', value: false},
];

export class Telemetry {
  switchState: Switch[];

  constructor(switchState: Switch[] = SWITCHES) {
    this.switchState = switchState;
  }
}
