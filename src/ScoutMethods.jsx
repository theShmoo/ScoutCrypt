import { PigPenConfig, PigPenEncrypt, PigPenCanBeEncrypted } from './PigPen.jsx';
import { GundlSpezlConfig, GundlSpezlEncrypt, GundlSpezlCanBeEncrypted } from './GundlSpezl.jsx';
import { A1Config, A1Encrypt, A1CanBeEncrypted } from './A1.jsx';
import { ANConfig, ANEncrypt, ANCanBeEncrypted } from './AN.jsx';
import { MorseEncrypt, MorseCanBeEncrypted } from './Morse.jsx';


export const Methods = [
  {
    name: "Eckerlschrift",
    config: PigPenConfig,
    configState: {
      name: "1",
      valid: true,
      style: { fontFamily: "pigpenregular" }
    },
    encrypt: PigPenEncrypt,
    canBeEncrypted: PigPenCanBeEncrypted
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
    },
    encrypt: GundlSpezlEncrypt,
    canBeEncrypted: GundlSpezlCanBeEncrypted
  },
  {
    name: "A = 1",
    config: A1Config,
    configState: {
      shift: 0,
      valid: true
    },
    encrypt: A1Encrypt,
    canBeEncrypted: A1CanBeEncrypted
  },
  {
    name: "A = N",
    config: ANConfig,
    configState: {
      shift: 13,
      valid: true
    },
    encrypt: ANEncrypt,
    canBeEncrypted: ANCanBeEncrypted
  },
  {
    name: "Morse",
    configState: { valid: true },
    encrypt: MorseEncrypt,
    canBeEncrypted: MorseCanBeEncrypted
  }
];
export const DefaultMethod = Methods[0];

