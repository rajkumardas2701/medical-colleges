const stateCategories = [];
const cityStateCategories = [];

function pickStateCategories(state) {
  if (!stateCategories.includes(state)) {
    stateCategories.push(state);
  }
  return stateCategories;
}

function pickCityCategories(state = '', city = '') {
  if (!cityStateCategories.includes({ state: `${state}`, city: `${city}` })) {
    cityStateCategories.push({ state: `${state}`, city: `${city}` });
  }
}

function pickCitiesOfState(state = 'All') {
  const obj = [];
  if (state === 'All') {
    for (let i = 0; i < cityStateCategories.length; i += 1) {
      if (!obj.includes(cityStateCategories[i].city)) {
        obj.push(cityStateCategories[i].city);
      }
    }
  } else {
    for (let i = 0; i < cityStateCategories.length; i += 1) {
      if (cityStateCategories[i].state === state) {
        if (!obj.includes(cityStateCategories[i].city)) {
          obj.push(cityStateCategories[i].city);
        }
      }
    }
  }
  return obj;
}

const pickCategories = (apiResult) => {
  for (let i = 0; i < apiResult.length; i += 1) {
    pickStateCategories(apiResult[i].state);
    pickCityCategories(apiResult[i].state, apiResult[i].city);
  }
};

export {
  pickCategories, pickStateCategories, pickCityCategories, pickCitiesOfState,
};
