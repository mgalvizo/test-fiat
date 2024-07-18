import { v4 as uuidv4 } from 'uuid';

interface MenuItem {
  id: string;
  text: string;
  href: string;
  className: string;
}

const menuItems: MenuItem[] = [
  { id: uuidv4(), text: 'Modelos', href: '#', className: '' },
  { id: uuidv4(), text: 'Prueba de Manejo', href: '#', className: '' },
  { id: uuidv4(), text: 'Cotizar', href: '#', className: '' },
  { id: uuidv4(), text: 'Promociones', href: '#', className: '' },
  { id: uuidv4(), text: 'Distribuidores', href: '#', className: 'tablet' },
  { id: uuidv4(), text: 'Extra Item', href: '#', className: 'tablet desktop' },
];

export { menuItems };
