const userDetails = {
  name: "John",
  city: "Chennai",
  mobile: "1234567890",
};

for (var key in userDetails) {
  console.log("Key: ", key);
  console.log("Value: ", userDetails[key]);
}

// Object.keys -> return keys from the object.
const keys = Object.keys(userDetails);
// ['name'. 'city', 'mobile']
const values = keys.map((key) => {
  return userDetails[key];
});
console.log("Keys: ", keys);
console.log("Values:", values);
