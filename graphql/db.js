export const people = [
  {
    id: "1",
    name: "seongwou",
    age: 28,
    gender: "male"
  },
  {
    id: "2",
    name: "wou",
    age: 38,
    gender: "male"
  },
  {
    id: "3",
    name: "jeny",
    age: 24,
    gender: "male"
  },
  {
    id: "4",
    name: "madleo",
    age: 22,
    gender: "male"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
