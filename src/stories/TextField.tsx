interface TextFieldProps {
  label?: string;
  fontColor?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export const TextField = ({
  label,
  fontColor,
  maxLength,
  minLength,
  placeholder,
  ...props
}: TextFieldProps) => {
  return (
    <>
      <label>
        {label}
        <br/>
        <input 
          type="text" 
          {...props}
          />
          
      </label>
      <style jsx>{`
        label {
          padding:10;
        }
      `}</style>
    </>
  );
};