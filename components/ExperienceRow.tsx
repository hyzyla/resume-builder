import { FocusEvent, useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import AutoresizableInput from "./AutoresizableInput";

type Props = {
  register: UseFormRegister<FieldValues>;
  label: string;
  onDelete: () => void;
};

const ExperienceRow = ({ register, label, onDelete }: Props) => {
  const [isFocused, setFocused] = useState(false);

  const onFoucsHandler = (evt: FocusEvent<HTMLDivElement>) => {
    setFocused(true);
  };
  const onBlurHandler = (evt: FocusEvent<HTMLDivElement>) => {
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      setFocused(false);
    }
  };

  return (
    <div onFocus={onFoucsHandler} onBlur={onBlurHandler}>
      <div className="space-y-4 relative">
        <div className="flex space-x-4">
          <TextareaAutosize
            placeholder="Ваша посада"
            className="font-semibold focus:outline-none resize-none flex-1"
            defaultValue="Senior Javascript Developer"
            {...register(`${label}.name`)}
          />
          <div>
            <AutoresizableInput
              className="text-gray-400 focus:outline-none text-right"
              defaultValue="May 2020 - Present"
              {...register(`${label}.period`)}
            />
          </div>
        </div>
        <TextareaAutosize
          className="focus:outline-none resize-none w-full"
          defaultValue="Tokenized is a Bitcoin wallet for issuing, managing and trading digital tokens. I built out the front end which was packaged as an electron app. It was a difficult frontend to build because we store the users keys locally and used them to sign transactions and contracts."
          {...register(`${label}.summary`)}
        />
        <hr />
      </div>
      {isFocused && (
        <button onClick={onDelete} className="absolute right-60">
          delte
        </button>
      )}
    </div>
  );
};

export default ExperienceRow;
