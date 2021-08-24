
interface InputProps {
  identify: string
  placeHolder: string
  type?: 'number' | 'text' | 'Date'
  value?: string 
};

function Input(props: InputProps): JSX.Element {
  return(
    <>
      <input
        name={props.identify}
        id={props.identify}
        placeholder={props.placeHolder}
        defaultValue={props.value || ''}
        type={props.type || 'text'}
      />
    </>
  );
}

export default Input;