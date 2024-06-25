import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextInput } from "../../redux/filterSlice.js";

export default function FilterText() {
  const inputId = useId();
  const filter = useSelector((state) => state.filters.text);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <label htmlFor={inputId}>Find text by name</label>
        <input
          type="text"
          id={inputId}
          value={filter}
          onChange={(e) => dispatch(changeTextInput(e.target.value))}
        />
      </div>
    </>
  );
}
