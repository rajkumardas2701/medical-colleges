const stateCategories = [];
const cityStateCategories = [];

function pickStateCategories(state) {
  if (!stateCategories.includes(state)) {
    stateCategories.push(state);
  }
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

export default { pickCategories, stateCategories, cityStateCategories };
