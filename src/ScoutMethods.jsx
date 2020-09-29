import { PigPenConfig } from './PigPen.jsx';
import { GundlSpezlConfig } from './GundlSpezl.jsx';
import { A1Config } from './A1.jsx';
import { ANConfig } from './AN.jsx';


export const Methods = [
  {
    name: "Eckerlschrift",
    config: PigPenConfig,
    configState: {
      name: "1",
      valid: true
    }
  },
  {
    name: "Gundl & Spezl",
    config: GundlSpezlConfig,
    configState: {
      gundl: "GUNDL",
      spezl: "SPEZL",
      valid: true,
      validGundl: true,
      validSpezl: true
    }
  },
  {
    name: "A = 1",
    config: A1Config,
    configState: {
      shift: 0,
      valid: true
    }
  },
  {
    name: "A = N",
    config: ANConfig,
    configState: {
      shift: 13,
      valid: true
    }
  },
  {
    name: "Morse",
    configState: { valid: true }
  }
];
export const DefaultMethod = Methods[0];

