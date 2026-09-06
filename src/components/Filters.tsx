import X from "../assets/icons/X.svg?react";
import Faders from "../assets/icons/Faders.svg?react";
import CaretDown from "../assets/icons/CaretDown.svg?react";
import { useState } from "react";
import Select from "./Select";
import { z } from "zod";
import { createForm } from "../utils/createForm";

const ubicaciones = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Corrientes",
  "Córdoba",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán"
];

const schema = z.object({
  talle: z.array(z.enum(["XS", "S", "M", "L", "XL", "XXL"]), "Debes seleccionar al menos un talle").nonempty("Debes seleccionar al menos un talle"),
  ubicacion: z.string().optional()
});
const { Form, Fieldset, Checkbox } = createForm(schema);

export default function Filters() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[288px]">
      <div className="flex cursor-pointer justify-end gap-s" onClick={() => setIsOpen(true)}>
        <Faders />
        Filtros <CaretDown />
      </div>
      <div
        className={`absolute top-0 flex w-[288px] flex-col gap-m rounded-border-l bg-neutral-primary p-l transition delay-300 duration-300 ease-out ${isOpen ? "right-0 opacity-100" : "translate-x-90 opacity-0"}`}
      >
        <div className="flex justify-between">
          <p className="label">Filtros</p>
          <div className="flex items-center gap-s">
            <button className="cursor-pointer caption-default text-neutral-tertiary">Limpiar</button>
            <button className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <X />
            </button>
          </div>
        </div>
        <Form className="flex flex-col gap-m">
          <Fieldset legend="Talle:" htmlName="talle">
            <div className="flex flex-wrap gap-xs">
              <Checkbox name="talle" id="xs" label="XS" value="XS" />
              <Checkbox name="talle" id="s" label="S" value="S" />
              <Checkbox name="talle" id="m" label="M" value="M" />
              <Checkbox name="talle" id="l" label="L" value="L" />
              <Checkbox name="talle" id="xl" label="XL" value="XL" />
              <Checkbox name="talle" id="xxl" label="XXL" value="XXL" />
            </div>
          </Fieldset>
          <Select>
            <>
              {ubicaciones.map((u, index) => {
                return (
                  <option className="option-form cursor-pointer" key={index} value={u}>
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
