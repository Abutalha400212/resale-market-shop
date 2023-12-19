export default function Checkbox({ label, checked, onChange, className }) {
  return (
    <label className={className}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
