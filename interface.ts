interface IUserAge {
  age: number;
}

interface IUser extends IUserAge {
  name: string;
  email: string;
}

const user: IUser = {
  name: "name",
  email: "email",
  age: 24,
};
