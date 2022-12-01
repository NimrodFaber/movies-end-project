function Input({ label, name, error, ...rest }) {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input {...rest} id={name} name={name} />
        <span className="invalid-feedback">{error}</span>
      </div>
    </>
  );
}

export default Input;
