/**
 * DESCRIPTION.
 * Tugas ini untuk mengelola struktur data array.
 * Ubah sintaks JavaScript ke JavaScript Modern.
 */

/**
 * TODO 1.
 * Create array of object users (5 users).
 * Object has property: name, age, major.
 * Note: Use const instead var.
 */
var users;

/**
 * TODO 2
 * Create all function: Show all data users.
 * Hint: use for/for-of.
 * Note: Use arrow function and const.
 */
function all() {}

/**
 * TODO 3
 * Create store function: Add data to users.
 * Hint: use push method.
 * Note: Use arrow function and const.
 */
function store(user) {}

/**
 * TODO 4.
 * Create update function: Edit data user.
 * Hint: just re-assign.
 * Note: Use arrow function and const.
 */
function update(index, user) {}

/**
 * TODO 5.
 * Create destroy function: Delete data user.
 * Hint: use splice method.
 * Note: Use arrow function and const.
 */
function destroy(index) {}

/**
 * Main Function.
 * Don't edit or remove this function.
 * This function for testing your task.
 */

const main = () => {
  /**
   * Test index function
   */
  console.log("# Get All Users");
  all();

  /**
   * Test store function
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test update function
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test destroy function
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();
