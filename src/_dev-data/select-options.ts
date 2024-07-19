import { v4 as uuidv4 } from 'uuid';

interface SelectOption {
  id: string;
  text: string;
  value: string;
}

const modelo_options = [
  { id: uuidv4(), text: 'Mobi', value: 'mobi' },
  { id: uuidv4(), text: 'Argo', value: 'argo' },
  { id: uuidv4(), text: 'Fastback', value: 'fastback' },
  { id: uuidv4(), text: 'Pulse', value: 'pulse' },
  { id: uuidv4(), text: 'Pulse Abarth', value: 'pulse abarth' },
  { id: uuidv4(), text: 'Ducato Cargo Van', value: 'ducato cargo van' },
];

const version_options = [
  { id: uuidv4(), text: 'Drive', value: 'drive' },
  { id: uuidv4(), text: 'Precision', value: 'precision' },
  { id: uuidv4(), text: 'Precision AT', value: 'precision at' },
  { id: uuidv4(), text: 'HGT', value: 'hgt' },
];

const estado_options = [
  { id: uuidv4(), text: 'Aguascalientes', value: 'aguascalientes' },
  { id: uuidv4(), text: 'Baja California ', value: 'baja california ' },
  { id: uuidv4(), text: 'Baja California Sur ', value: 'baja california sur ' },
  { id: uuidv4(), text: 'Chiapas', value: 'chiapas' },
  { id: uuidv4(), text: 'Chihuahua', value: 'chihuahua' },
  { id: uuidv4(), text: 'Ciudad de México', value: 'ciudad de méxico' },
  { id: uuidv4(), text: 'Coahuila', value: 'coahuila' },
  { id: uuidv4(), text: 'Colima', value: 'colima' },
  { id: uuidv4(), text: 'Durango', value: 'durango' },
  { id: uuidv4(), text: 'Estado de México', value: 'estado de méxico' },
  { id: uuidv4(), text: 'Guanajuato', value: 'guanajuato' },
  { id: uuidv4(), text: 'Guerrero', value: 'guerrero' },
  { id: uuidv4(), text: 'Hidalgo', value: 'hidalgo' },
  { id: uuidv4(), text: 'Jalisco', value: 'jalisco' },
  { id: uuidv4(), text: 'Michoacán', value: 'michoacán' },
  { id: uuidv4(), text: 'Morelos', value: 'morelos' },
  { id: uuidv4(), text: 'Nayarit', value: 'nayarit' },
  { id: uuidv4(), text: 'Nuevo León', value: 'nuevo león ' },
  { id: uuidv4(), text: 'Oaxaca', value: 'oaxaca' },
  { id: uuidv4(), text: 'Puebla', value: 'puebla' },
  { id: uuidv4(), text: 'Querétaro', value: 'querétaro' },
  { id: uuidv4(), text: 'san luis potosí ', value: 'san luis potosí ' },
  { id: uuidv4(), text: 'Sinaloa', value: 'sinaloa' },
  { id: uuidv4(), text: 'Sonora', value: 'sonora' },
  { id: uuidv4(), text: 'Tabasco', value: 'tabasco' },
  { id: uuidv4(), text: 'Tamaulipas', value: 'tamaulipas' },
  { id: uuidv4(), text: 'Tlaxcala', value: 'tlaxcala' },
  { id: uuidv4(), text: 'Veracruz', value: 'veracruz' },
  { id: uuidv4(), text: 'Yucatán', value: 'yucatán' },
  { id: uuidv4(), text: 'Zacatecas', value: 'zacatecas' },
];

const distribuidor_options = [
  {
    id: uuidv4(),
    text: 'Auto Distribuidores del Centro',
    value: 'auto distribuidores del centro',
  },
  { id: uuidv4(), text: 'Prestigio Motriz', value: 'prestigio motriz' },
  { id: uuidv4(), text: 'Alica Automotriz', value: 'alica automotriz' },
  { id: uuidv4(), text: 'Comercial Automotriz', value: 'comercial automotriz' },
];

export {
  modelo_options,
  version_options,
  estado_options,
  distribuidor_options,
};

export type { SelectOption };
