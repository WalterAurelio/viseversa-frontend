import MagnifyingGlass from "../assets/icons/MagnifyingGlass.svg?react";
import X from "../assets/icons/X.svg?react";
import { useForm, useWatch } from "react-hook-form";
import { cn } from "../utils/cn";

type SearchBarData = {
  query: string;
};

function SearchBar() {
  const { register, handleSubmit, control, resetField, setFocus } = useForm<SearchBarData>();
  const queryValue = useWatch({ name: "query", control });

  const onSubmit = (data: SearchBarData) => {
    console.log(data);
    // Aquí puedes manejar la lógica de búsqueda con el valor de `data.query`
  };

  return (
    <form
      className="flex h-9 w-72 items-center gap-s rounded-full border border-neutral-inverse-primary bg-neutral-primary px-l has-focus:border-brand-primary has-focus:shadow-[0_0_0_3px_#ffeaec]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <button className="text-neutral-disabled" type="submit" disabled={!queryValue}>
        <MagnifyingGlass className="w-3.5" />
      </button>
      <input className="w-full text-base text-neutral-primary" type="search" placeholder="Buscar ropa, marca, talle..." {...register("query")} />
      <button
        className={cn("text-neutral-disabled", { hidden: !queryValue })}
        type="button"
        onClick={() => {
          resetField("query");
          setFocus("query");
        }}
      >
        <X className="w-3.5" />
      </button>
    </form>
  );
}
export default SearchBar;
