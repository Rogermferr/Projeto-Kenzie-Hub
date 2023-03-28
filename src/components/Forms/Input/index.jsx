export function Input({ label, type, id, placeholder, register, errors }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <span>{errors}</span>
    </div>
  );
}
