interface ICar {
  id: number;
  name: string;
  price: number;
  yearBuild: number;
}

interface ICarCreate extends Omit<ICar, "id"> {} // все окрім id
interface ICarId extends Pick<ICar, "id"> {} // тільки id
interface ICarOptional extends Partial<ICar> {} // всі властивості стають не обов'язкові
interface ICarReadOnly extends Readonly<ICar> {} // не можна змінювати властивості

type TypeCarRecord = Record<"name" | "price", string | number>;
