enum EnumRoles {
  ADMIN,
  GUEST,
  USER,
}

const enum EnumColors {
  blue,
  red,
  yellow,
} // const enum краще для оптимізаціЇ

interface IUser {
  role: EnumRoles;
  color: EnumColors;
}

const user: IUser = {
  role: EnumRoles.ADMIN,
  color: EnumColors.blue,
};
