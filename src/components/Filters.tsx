import Fieldset from './Fieldset';
import Checkbox from './Checkbox/Checkbox';
import Form from './Form';
import X from '../assets/icons/X.svg?react';
import Faders from '../assets/icons/Faders.svg?react';
import CaretDown from '../assets/icons/CaretDown.svg?react';
import { useState } from 'react';
import Select from './Select';

const ubicaciones = [
  'Buenos Aires',
  'Catamarca',
  'Chaco',
  'Chubut',
  'Corrientes',
  'Córdoba',
  'Entre Ríos',
  'Formosa',
  'Jujuy',
  'La Pampa',
  'La Rioja',
  'Mendoza',
  'Misiones',
  'Neuquén',
  'Río Negro',
  'Salta',
  'San Juan',
  'San Luis',
  'Santa Cruz',
  'Santa Fe',
  'Santiago del Estero',
  'Tierra del Fuego',
  'Tucumán',
];

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative w-[288px]'>
      <div
        className='flex gap-s justify-end cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <Faders />
        Filtros <CaretDown />
      </div>
      <div
        className={`absolute top-0 bg-neutral-primary p-l rounded-border-l w-[288px] flex flex-col gap-m transition duration-300 ease-out delay-300 ${isOpen ? 'right-0 opacity-100' : 'translate-x-90 opacity-0'}`}
      >
        <div className='flex justify-between'>
          <p className='label'>Filtros</p>
          <div className='flex gap-s items-center'>
            <button className='caption text-neutral-tertiary cursor-pointer'>
              Limpiar
            </button>
            <button className='cursor-pointer' onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
        </div>
        <Form className='flex flex-col gap-m'>
          <Fieldset legend='Talle:'>
            <div className='flex flex-wrap gap-xs'>
              <Checkbox name='XS' />
              <Checkbox name='S' />
              <Checkbox name='M' />
              <Checkbox name='L' />
              <Checkbox name='XL' />
              <Checkbox name='XXL' />
            </div>
          </Fieldset>
          <Select>
            <>
              {ubicaciones.map((u, index) => {
                return (
                  <option
                    className='option-form cursor-pointer'
                    key={index}
                    value={u}
                  >
                    {u}
                  </option>
                );
              })}
            </>
          </Select>
        </Form>
      </div>
    </div>
  );
}
