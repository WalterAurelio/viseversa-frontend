import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { useGetSizes, useGetLocations } from "../services/products/products.queries";
import { useFilterSchema } from "../hooks/useFilterSchema";
import { createForm } from "../utils/createForm";
import type z from "zod";
import Button from "../components/Button";

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: sizes } = useGetSizes(category!);
  const { data: locations } = useGetLocations();
  const filterSchema = useFilterSchema(locations, sizes);
  const { Form, Fieldset, Checkbox, InputContainer, Select, Option } = useMemo(() => createForm(filterSchema), [filterSchema]);
  type FilterSchema = z.infer<typeof filterSchema>;
  const defaultValues: () => FilterSchema = () => {
    return {
      size: searchParams.getAll("size"),
      location: searchParams.get("location") || undefined
    };
  };

  const handleClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSubmit = (data: FilterSchema) => {
    setSearchParams(data);
  };

  return (
    <div>
      <button onClick={handleClick}>Filtros</button>
      <Form onSubmit={handleSubmit} defaultValues={defaultValues}>
        <Fieldset legend="Talle:" htmlName="size">
          {sizes?.map((size) => (
            <Checkbox key={size} name="size" id={size} label={size} value={size} />
          ))}
        </Fieldset>
        <InputContainer label="Ubicación:" htmlFor="location">
          <Select name="location" id="location" defaultValue="" className="w-full">
            <Option disabled>Seleccione una ubicación</Option>
            {locations?.map((location) => (
              <Option key={location} field="location" value={location}>
                {location}
              </Option>
            ))}
          </Select>
        </InputContainer>
        <Button type="submit">Aplicar filtros</Button>
      </Form>
    </div>
  );
}
export default Filter;
