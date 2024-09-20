const num = 35;

const add = (num1, num2) => {
  return num1 + num2;
};

function User(name) {
  this.name = name;
}

function User2(name) {
  this.name = name;
}

export { num, add, User };

export default User2;
