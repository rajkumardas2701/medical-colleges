const stateCategories = [];
const cityStateCategories = [];

function pickStateCategories(state) {
  if (!stateCategories.includes(state)) {
    stateCategories.push(state);
  }
  return stateCategories;
}

function pickCityCategories(state, city) {
  if (!cityStateCategories.includes({ state: `${state}`, city: `${city}` })) {
    cityStateCategories.push({ state: `${state}`, city: `${city}` });
  }
}

const pickCategories = (apiResult) => {
  for (let i = 0; i < apiResult.length; i += 1) {
    pickStateCategories(apiResult[i].state);
    pickCityCategories(apiResult[i].state, apiResult[i].city);
  }
};

const optionStateCategories = stateCategories.map((stateCategory) => (
  <option key={stateCategory} value={stateCategory}>{stateCategory}</option>
));
// console.log(optionStateCategories);

// const optionStateCategories = (stateCategories) => {
//   stateCategories.map((stateCategory) => (
//     <option key={stateCategory} value={stateCategory}>{stateCategory}</option>
//   ));
// console.log('Inside optionStateCategories');

export {
  pickCategories, optionStateCategories, cityStateCategories, pickStateCategories,
};
