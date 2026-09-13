import { useForm, FormProvider, type SubmitHandler, type DefaultValues } from "react-hook-form";
import * as z4 from "zod/v4/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../utils/cn";
import { useEffect } from "react";

type FormProps<T extends z4.$ZodObject> = Omit<React.ComponentPropsWithoutRef<"form">, "onSubmit"> & {
  schema: T;
  onSubmit?: SubmitHandler<z4.output<T>>; // SubmitHandler<z4.infer<T>>;
  defaultValues?: () => DefaultValues<z4.input<T>> | DefaultValues<z4.input<T>>; // DefaultValues<z4.infer<T>>;
};

function Form<T extends z4.$ZodObject>({ schema, defaultValues, className, children, onSubmit, ...props }: FormProps<T>) {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: typeof defaultValues === "function" ? defaultValues() : defaultValues
  });

  useEffect(() => {
    if (defaultValues) {
      methods.reset(typeof defaultValues === "function" ? defaultValues() : defaultValues);
    }
  }, [methods, defaultValues]);

  const submitHandler = onSubmit ?? ((data: z4.infer<T>) => console.log("Form submitted", data));

  return (
    <FormProvider {...methods}>
      <form className={cn("flex flex-col gap-m border p-2xl", className)} onSubmit={methods.handleSubmit(submitHandler)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
export default Form;
