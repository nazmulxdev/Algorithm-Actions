// problem statement

// Implement a simple in-memory cache for an "expensive" function  (like a database query or api call)

// The goal is to store the results of a function call so that if the sane call is made again , the result is returned from the cache instead of running the expensive function;

const dataCache = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive task for : ", id);
  return {
    id: id,
    data: `Some Data for Id : ${id}`,
    timeStamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (dataCache.has(id)) {
    console.log("Cache Hit for Id: ", id);
    return dataCache.get(id);
  }
  console.log("Cache miss for Id: ", id);
  const data = expensiveTask(id);
  dataCache.set(id, data);
  return data;
};

console.log(getData(123));
console.log(dataCache);
console.log(getData(123));
console.log(dataCache);
console.log(getData(456));
console.log(dataCache);
