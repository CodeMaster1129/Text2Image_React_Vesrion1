import DropdownStyle from "../components/dropdown_style";
import DropdownModel from "../components/dropdown_model";
import ToggleSwitch from "../components/toggleswitch";
import Resolution from "../components/resolution";
import Count from "../components/count";
import { useState } from "react";
import { useGenerateImageActions } from "../../../actions/generateActions";

const Sidebar = () => {
  const [description, setDescription] = useState("");
  const [size, setSize] = useState(1);
  const [count, setCount] = useState(1);

  const { generateImage } = useGenerateImageActions();

  const handleSubmit = () => {
    generateImage(description, size, count);
  }

  return (
    <div className="flex flex-col w-full selection:select-none">
      <div className="bg-[#f4ede3] flex flex-col px-4 gap-2 h-[90vh] overflow-auto">
        <span className="text-[28px] text-left font-bold px-4 py-8">
          PAGHEERA
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] font-bold">PROMPT</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <span className="text-[#485D5E] text-[14px] text-left">
            What do you want to see? You can use a single word or a full
            sentence.
          </span>
          <textarea
            id="message"
            rows="4"
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            placeholder="Example description of your image"
            className="selection:select-all selection:bg-sky-300 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
          <div className="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            ></input>
            <label
              htmlFor="default-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Add Negative Prompt
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2 items-center">
            <span className="text-[16px] font-bold">STYLE</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <span className="text-[#485D5E] text-[14px] text-left">
            Experiment with different styles that can be applied to your image.
          </span>
          <DropdownStyle />
        </div>
        <div className="flex flex-row justify-between border-b-2">
          <div className="flex flex-row gap-2 items-center py-4">
            <span className="text-[16px] font-bold">IMAGE TO IMAGE</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <ToggleSwitch />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center py-4">
            <span className="text-[16px] font-bold">AI MODEL</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <DropdownModel />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 items-center py-4">
            <span className="text-[16px] font-bold">IMAGE DIMENSIONS</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <span className="text-[#485D5E] text-[14px] text-left">
            Width × Height of the image.
          </span>
          <Resolution setSize={setSize} />
        </div>
        <div className="flex flex-col pb-4 border-b-2 border-[#EDE4D5]">
          <div className="flex flex-row gap-2 items-center py-4">
            <span className="text-[16px] font-bold">NUMBER OF IMAGES</span>
            <img className="size-4" src="images/question_circle.png" alt="question_circle" />
          </div>
          <Count setCount={setCount} />
        </div>
      </div>
      <div className="flex py-2 bg-[#f4ede3] h-[10vh] justify-center items-center w-full cursor-pointer" onClick={handleSubmit}>
        <span className="text-white font-bold bg-[#276E70] w-[90%] px-4 py-2 selection:select-none">Generate image</span>
      </div>
    </div>
  );
};

export default Sidebar;
