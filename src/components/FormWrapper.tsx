// For Storybook use only
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

type FormWrapperProps<T> = {
  htmlName?: keyof T & string;
  errorMsg?: string;
  children: React.ReactNode;
};

function FormWrapper<T>({ htmlName, errorMsg, children }: FormWrapperProps<T>) {
  const methods = useForm();
  useEffect(() => {
    if (htmlName) {
      methods.setError(htmlName, { type: "manual", message: errorMsg || "Este campo es requerido" });
    }
  }, [methods, htmlName, errorMsg]);

  return <FormProvider {...methods}>{children}</FormProvider>;
}
export default FormWrapper;
