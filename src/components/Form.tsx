import { useForm, FormProvider } from "react-hook-form";
import * as z4 from "zod/v4/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "../utils/cn";

type FormProps<T extends z4.$ZodObject> = React.ComponentPropsWithoutRef<"form"> & {
  schema: T;
};

function Form<T extends z4.$ZodObject>({ schema, className, children, ...props }: FormProps<T>) {
  const methods = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: z4.infer<T>) => {
    console.log("Form submitted", data);
  };

  return (
    <FormProvider {...methods}>
      <form className={cn("flex flex-col gap-m border p-2xl", className)} onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
}
export default Form;
