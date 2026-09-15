import MagnifyingGlass from "../assets/icons/MagnifyingGlass.svg?react";
import X from "../assets/icons/X.svg?react";
import { useForm, useWatch } from "react-hook-form";
import { cn } from "../utils/cn";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router";
import { useEffect } from "react";

const searchBarSchema = z.object({
  query: z.string().trim().min(1, "La búsqueda no puede estar vacía")
});

type SearchBarSchema = z.infer<typeof searchBarSchema>;

function SearchBar() {
  const [searchParams] = useSearchParams();
  const { register, handleSubmit, control, resetField, setFocus, setValue } = useForm<SearchBarSchema>({
    resolver: zodResolver(searchBarSchema)
  });
  const queryValue = useWatch({ name: "query", control });
  const navigate = useNavigate();

  useEffect(() => {
    const queryParam = searchParams.get("query") || "";
    setValue("query", queryParam);
  }, [searchParams, setValue]);

  const onSubmit = (data: SearchBarSchema) => {
    const normalizedQuery = data.query.trim().toLowerCase();
    const params = new URLSearchParams({ query: normalizedQuery }).toString();
    navigate(`/search?${params}`);
  };

  return (
    <form
      className="flex h-9 w-72 items-center gap-s rounded-full border border-neutral-inverse-primary bg-neutral-primary px-l has-focus:border-brand-primary has-focus:shadow-[0_0_0_3px_#ffeaec]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <button className="cursor-pointer text-neutral-disabled" type="submit" disabled={!queryValue}>
        <MagnifyingGlass className="w-3.5" />
      </button>
      <input className="w-full text-neutral-primary" type="search" placeholder="Buscar ropa, marca, talle..." {...register("query")} />
      <button
        className={cn("cursor-pointer text-neutral-disabled", { hidden: !queryValue })}
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
