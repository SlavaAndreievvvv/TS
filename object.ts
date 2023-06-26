type TypeUser = {
  name: string;
  age: number;
};

type TypeAddress = {
  city: string;
  country: string;
};

const user: TypeUser = {
  name: "Name",
  age: 24,
};

const address: TypeAddress = {
  city: "City",
  country: "Country",
};

let common: TypeUser & TypeAddress;

common = {
  name: "Name",
  age: 24,
  city: "City",
  country: "Country",
};
