const inputElement = document.querySelector("input");
const inputElementValueV1 = (inputElement as HTMLInputElement).value;
const inputElementValueV2 = (<HTMLInputElement>inputElement).value;

const getLength = (text: string | null) => {
  return text!.length;
};

// ! тип, що повертається не буде null чи undefined

getLength(null);
