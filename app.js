'use strict';

const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const setFromJson = [...new Set(arr.map(JSON.stringify))].map(JSON.parse);
const newArr = new Array();
arr.map((obj) => {
  if (newArr.find((el) => el.id === obj.id)) return;
  newArr.push(obj);
});

new Set(newArr);
