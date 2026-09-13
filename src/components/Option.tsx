type OptionProps<T, K extends keyof T> = React.ComponentPropsWithoutRef<"option"> & {
  field?: K;
  value?: T[K];
};

function Option<T>() {
  return function Option<K extends keyof T>({ value, children, ...props }: OptionProps<T, K>) {
    return (
      <option value={value ?? ""} {...props}>
        {children}
      </option>
    );
  };
}
export default Option;
