const { getRandomCard, getCard } = require("./main");

const beUnique = (a) => {
  let arr = a;
  arr.sort();

  for (let i = 0; i < arr.length - 1; i++)
    if (arr[i] == arr[i - 1]) return false;

  return true;
};

const oneMatch = (card1, card2, match) => {
  let found = 0;

  if (card1.length !== card2.length) return false;

  if (card1.indexOf(match) === -1 || card2.indexOf(match) === -1) return false;

  for (let i = 0; i < card1.length; i++)
    if (card2.indexOf(card1[i]) !== -1 && card1[i] !== match) return false;

  return true;
};

test("getting proper card length", () => {
  expect(getRandomCard(8)).toHaveLength(8);
});

test("getting unique cards", () => {
  let arr = getRandomCard();
  expect(beUnique(arr)).toBeTruthy();
});

test("matching cards", () => {
  let card1 = getRandomCard(8);
  let newCard = getCard(card1);

  expect(oneMatch(card1, newCard.items, newCard.match)).toBeTruthy();
});
