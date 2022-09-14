const User = require("../model/user");

// sign up user
exports.sign_up = async (req, res) => {
  try {
    const myUser = new User(req.body);
    await myUser.save();
    res.send(myUser);
  } catch (error) {
    res.send({ message: error });
  }
  console.log(req.body);
};

// to find user by email (pk)
exports.find_user = async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    });
  } catch (error) {
    res.send({ message: error });
  }
  console.log(myUser);
  res.send(myUser);
  res.end();
};

// for login
exports.login = async (req, res) => {
  try {
    var email = req.body.email;
    var password = req.body.password;
    var myUser = await User.findOne({
      email: email,
    });
    if (myUser.password == password) {
      console.log("login sucessfull");
      console.log(myUser);
      res.send(myUser);
    } else {
      res.send("password is not correct");
    }
  } catch (error) {
    res.send({ message: error });
  }

  res.end();
};

// to delete user
exports.delete_user = async (req, res) => {
  try {
    var email = req.body.email;
    var myUser = await User.findOne({
      email: email,
    })
      .remove()
      .exec();
    res.send("user deleted");
  } catch (error) {
    res.send({ message: error });
  }
  console.log(myUser);
  res.end();
};
