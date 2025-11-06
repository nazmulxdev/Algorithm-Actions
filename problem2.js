// problem statement

//  You are given two large array , list A and list B . Each array contains users objects.
// A user object is guaranteed to have a unique id property (a string) and may contain other data, such as a name .
// Your task is to write and efficient function that takes both lists as input
// and return the total count of users that are present in both lists .

// ! Don't change anything in data setup

//  ----- Data setup block ------//

const user_count = 50000;

let userA = [];
let userB = [];

const createUser = (id) => ({ id: `user_${id}`, name: `User ${id}` });

for (let i = 0; i < user_count; i++) {
  userA.push(createUser(i));
  userB.push(createUser(i + 25000));
}

// users 25000 to 49999 are common (25000 common users)
// ------ Data setup block -----//

// ---- Algorithms ----//

// using brute force method

const commonFriends = (users1, users2) => {
  const startTime = performance.now();
  const commonFriend = [];
  users1.forEach((userA) => {
    users2.forEach((userB) => {
      if (userA.id === userB.id) {
        commonFriend.push(userA);
      }
    });
  });
  const endTime = performance.now();
  return { count: commonFriend.length, timeTaken: endTime - startTime };
};

console.log(commonFriends(userA, userB));

// using efficient way using set

const checkMutualFriend = (users1, users2) => {
  const start = performance.now();
  const mutualFriends = [];
  const set1 = new Set(users1.map((user) => user.id));

  let count = 0;
  for (let user of users2) {
    if (set1.has(user.id)) {
      count++;
      mutualFriends.push(user);
    }
  }

  const end = performance.now();
  return { count: count, timeTaken: end - start };
};

console.log(checkMutualFriend(userA, userB));

// using map

const countMutualFriend = (usersA, usersB) => {
  const start = performance.now();
  const usersMap1 = new Map(usersA.map((user) => [user.id, user]));

  let count = 0;
  for (let user of usersB) {
    if (usersMap1.has(user.id)) count++;
  }
  const end = performance.now();
  return { count: count, timeTaken: end - start };
};

console.log(countMutualFriend(userA, userB));

// use array.reduce

const checkMutualUsers = (usersX, usersY) => {
  const startPerformance = performance.now();
  const usersSet1 = new Set(usersX.map((user) => user.id));
  const count = usersY.reduce((currentCount, user) => {
    return currentCount + (usersSet1.has(user.id) ? 1 : 0);
  }, 0);
  const endPerformance = performance.now();
  return { count: count, timeTaken: endPerformance - startPerformance };
};
