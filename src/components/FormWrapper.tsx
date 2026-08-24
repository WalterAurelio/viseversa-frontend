// For Storybook use only
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

type FormWrapperProps = {
  name: string;
  errorMsg?: string;
  children: React.ReactNode;
};

function FormWrapper({ name, errorMsg, children }: FormWrapperProps) {
  const methods = useForm();
  useEffect(() => {
    methods.setError(name, { type: "manual", message: errorMsg || "Este campo es requerido" });
  }, [methods, name, errorMsg]);

  return <FormProvider {...methods}>{children}</FormProvider>;
}
export default FormWrapper;
