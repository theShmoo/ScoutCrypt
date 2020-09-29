import { PigPenConfig } from './PigPen.jsx';
import { GundlSpezlConfig } from './GundlSpezl.jsx';
import { A1Config } from './A1.jsx';
import { ANConfig } from './AN.jsx';


export const Methods = [
  { name: "Eckerlschrift", config: PigPenConfig, configState: { name: "1" } },
  { name: "Gundl & Spezl", config: GundlSpezlConfig, configState: { gundl: "GUNDL", spezl: "SPEZL" } },
  { name: "A = 1", config: A1Config, configState: { shift: 0 } },
  { name: "A = N", config: ANConfig, configState: { shift: 13 } },
  { name: "Morse" },
];
export const DefaultMethod = Methods[0];

