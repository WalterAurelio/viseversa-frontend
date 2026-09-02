import Fieldset from './Fieldset';
import Checkbox from './Checkbox/Checkbox';
import Form from './Form';
import X from '../assets/icons/X.svg?react';
import Faders from '../assets/icons/Faders.svg?react';
import CaretDown from '../assets/icons/CaretDown.svg?react';
import { useState } from 'react';
import Select from './Select';
import { useForm } from 'react-hook-form';
import Button from './Button';
import { useParams } from 'react-router';
import { TALLES_POR_CATEGORIA } from '../types/Sizes';
import type { URLSearchParamsInit, NavigateOptions } from 'react-router';

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
  'Tucumán'
];

type FilterForm = {
  categoria?: string;
  talle?: string;
  ubicacion?: string;
};

export default function Filters( setParams: (nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit) | undefined, navigateOpts?: NavigateOptions) => void ) {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit } = useForm<FilterForm>();
  const { categoria } = useParams();

  const talles = categoria ? TALLES_POR_CATEGORIA[categoria as keyof typeof TALLES_POR_CATEGORIA] : [];

  const actualizarFiltro = (nombre: string, valor: string) => {
    setParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set(nombre, valor);
      return params;
    });
  };

  const limpiarFiltro = () => {
    setParams({});
  };

  const submit = (formData: FilterForm) => {
    if (formData.talle) {
      actualizarFiltro('talle', formData.talle);
    }
    if (formData.ubicacion) {
      actualizarFiltro('ubicacion', formData.ubicacion);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative w-[288px]">
      <div
        className="flex cursor-pointer justify-end gap-s"
        onClick={() => setIsOpen(true)}
      >
        <Faders />
        Filtros <CaretDown />
      </div>
      <div
        className={`absolute top-0 flex w-[288px] flex-col gap-m rounded-border-l bg-neutral-primary p-l transition delay-300 duration-300 ease-out ${isOpen ? 'right-0 opacity-100' : 'translate-x-90 opacity-0'}`}
      >
        <div className="flex justify-between">
          <p className="label">Filtros</p>
          <div className="flex items-center gap-s">
            <button className="cursor-pointer caption-normal text-neutral-tertiary" onClick={limpiarFiltro}>
              Limpiar
            </button>
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
        </div>
        <Form onSubmit={handleSubmit(submit)} className="flex flex-col gap-m">
          <Fieldset legend="Talle:">
            <div className="flex flex-wrap gap-xs">
              {talles.map((t, index) => <Checkbox key={index} {...register('talle')} label={t} />)}
            </div>
          </Fieldset>
          <Select {...register('ubicacion')}>
            <>
              <option value=''>Seleccionar ubicación</option>
              {ubicaciones.map((u, index) => {
                return (
                  <option
                    className="option-form cursor-pointer"
                    key={index}
                    value={u}
                  >
                    {u}
                  </option>
                );
              })}
            </>
          </Select>
          <Button type="submit">Aplicar</Button>
        </Form>
      </div>
    </div>
  );
}
