import { FieldValues, UseFormRegister } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";

type Props = {
  register: UseFormRegister<FieldValues>;
  label: string;
};

const ExperienceRow = ({ register, label }: Props) => {
  return (
    <div className="space-y-4">
      <div className="flex space-x-5">
        <input
          className="font-semibold focus:outline-none"
          defaultValue="Senior Javascript Developer"
          {...register(`${label}.name`)}
        />
        <input
          className="text-gray-400 focus:outline-none"
          defaultValue="May 2020 - Present"
          {...register(`${label}.period`)}
        />
      </div>
      <TextareaAutosize
        className="focus:outline-none resize-none w-full"
        defaultValue="Tokenized is a Bitcoin wallet for issuing, managing and trading digital tokens. I built out the front end which was packaged as an electron app. It was a difficult frontend to build because we store the users keys locally and used them to sign transactions and contracts."
        {...register(`${label}.summary`)}
      />
      <hr />
    </div>
  );
};

export default ExperienceRow;
