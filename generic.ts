function Generic<T>(args: T): T {
  return args;
}

const Generic2 = <T>(args: T): T => {
  return args;
};

Generic<number>(1);
Generic<string>("str");

Generic2<number>(2);

// Interface

interface IPair<K, V> {
  key: K;
  value: V;
}

const pair1: IPair<number, string> = {
  key: 1,
  value: "str",
};

const pair2: IPair<string, string> = {
  key: "str",
  value: "str",
};

type TypeLength = {
  length: number;
};

function getLength<T extends TypeLength>(arg: T): number {
  return arg.length;
}

getLength("str");
getLength([1, 2, 3]);
