export default function Placeholder({ label, ratio = '16/10', style }) {
  return (
    <div className="placeholder" style={{ aspectRatio: ratio, ...style }}>
      {label}
    </div>
  );
}
