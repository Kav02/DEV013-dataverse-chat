// Filtar
export const filterData = (data, filterBy, value) => {
  return data.filter((painting) => painting.facts[filterBy] === value);
};

export const sortData = (data, sortBy, sortOrder) => {
  const sortedCard = [];
  for (const list of data) {
    sortedCard.push(list);
  }

  if (sortOrder === "asc") {
    sortedCard.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  } else {
    sortOrder === "desc";
    sortedCard.sort((a, b) => b[sortBy].localeCompare(a[sortBy]));
  }

  return sortedCard;
};

export const computeStats = (data) => {
  const movementTotal = data.length;
  const stats = data.reduce((acumulador, movementCount) => {
    acumulador[movementCount.facts.artMovement] =
      (acumulador[movementCount.facts.artMovement] || 0) + 1;
    return acumulador;
  }, {});
  const percentage = {};
  for (const Move in stats) {
    percentage[Move] = Number((stats[Move] / movementTotal) * 100);
  }
  return percentage;
};

/*No se está usando
const artName = [];
for (const list of data) {
  const artworkName = list.name;
  artName.push(artworkName);
  artName.sort();
}
console.log(artName);*/
