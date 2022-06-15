import {
  PhoneInput,
  ArrayInput,
  ImageInput,
  TextInput,
  RadioInput,
  OptionInput,
  AreaInput,
  TagInput,
} from "./inputComponent";

export function inputGeneration(inputs, values, onChange, formik) {
  const inputHtml = [];
  for (const [key, input] of Object.entries(inputs)) {
    let currentInput;
    switch (input.type) {
      case "tags":
          currentInput=(
            <div>
            <TagInput
            label={key} 
            value = {values[key]}
            onChange={onChange} 
            whitelist= {input.whitelist}
            formik={formik}
            />
            </div>
          )
        break;
      case "radio":
        currentInput = (
          <div>
            <RadioInput
              label={key}
              value={values[key]}
              onChange={onChange}
              options={input.options}
              formik={formik}
            ></RadioInput>
            <br />
          </div>
        );
        break;
      case "option":
        currentInput = (
          <div>
            <OptionInput
              label={key}
              value={values[key]}
              onChange={onChange}
              options={input.options}
              formik={formik}
            ></OptionInput>
            <br />
          </div>
        );
        break;
      case "textarea":
        currentInput = (
          <div>
            <AreaInput
              label={key}
              type={input.type}
              value={values[key]}
              onChange={onChange}
              formik={formik}
            />
            <br />
          </div>
        );
        break;
      case "phone":
        currentInput = (
          <div>
            <PhoneInput
              label={key}
              type={input.type}
              value={values[key]}
              onChange={onChange}
              formik={formik}
            />
            <br />
          </div>
        );
        break;
      case "array":
        currentInput = (
          <div>
            <ArrayInput
              label={key}
              inputList={input.children}
              values={values[key]}
              onChange={onChange}
              formik={formik}
              isLang={false}
            />
            <br />
          </div>
        );
        break;
        case "array2":
        currentInput = (
          <div>
            <ArrayInput
              label={key}
              inputList={input.children}
              values={values[key]}
              onChange={onChange}
              formik={formik}
              isLang={true}
            />
            <br />
          </div>
        );
        break;
      case "image":
        currentInput = (
          <div>
            <ImageInput
              label={key}
              type={input.type}
              value={values[key]}
              onChange={onChange}
              formik={formik}
            />
            <br />
          </div>
        );
        break;
      default:
        currentInput = (
          <div>
            <TextInput
              label={key}
              type={input.type}
              value={values[key]}
              onChange={onChange}
              formik={formik}
            />
            <br />
          </div>
        );
        break;
    }
    inputHtml.push(currentInput);
  }
  return inputHtml;
}
