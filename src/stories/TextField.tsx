interface TextFieldProps {
  // label
  label?: string;
  labelfontSize?: string;
  // input
  fontColor?: string;
  fontSize?: string;
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
}

export const TextField = ({
  // label
  label,
  // input
  fontColor,
  fontSize = '15px',
  maxLength,
  minLength,
  placeholder,
  ...props
}: TextFieldProps) => {
  return (
    <>
      <label style={{fontSize: fontSize, color: fontColor}}>
        {label}
        <br/>
        <div style={{padding:3}}/>
        <input 
          type="text" 
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          {...props}
          style={{
            fontSize: fontSize,
            color: fontColor,
          }}
          />
      </label>
    </>
  );
};