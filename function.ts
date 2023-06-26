type TypeNameReturn = {
  name: string;
};

function getName(name: string): TypeNameReturn {
  return { name };
}

type TypeNameArrowReturn = (name: string) => TypeNameReturn;

const getNameArrow: TypeNameArrowReturn = (name) => {
  return { name };
};

const getNumbers = (...numbers: number[]) => {
  return numbers;
};
