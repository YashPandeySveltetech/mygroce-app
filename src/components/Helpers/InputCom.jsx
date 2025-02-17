export default function InputCom({
  label,
  type,
  name,
  placeholder,
  children,
  inputHandler,
  value,
  inputClasses,
  error = false,
  min,
  max,
  labelClasses = "text-qgray text-[13px] font-normal",
}) {
  return (
    <div className="input-com w-full h-full">
      {label && (
        <label
          className={`input-label capitalize block  mb-2 ${labelClasses || ""}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div
        className={`input-wrapper border  w-full h-full overflow-hidden rounded relative ${
          error ? "border-qred" : "border-[#CBECD9]"
        }`}
      >
        <input
          placeholder={placeholder}
          value={value}
          min={min}
          max={10000000}
          onChange={inputHandler}
          className={`input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none ${
            inputClasses || ""
          }`}
          type={type}
          id={name}
        />
        {children && children}
      </div>
    </div>
  );
}
