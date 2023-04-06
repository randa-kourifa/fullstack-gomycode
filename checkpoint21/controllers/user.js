import bcrypt from "bcrypt";
import User from "../schemas/user.js";
export const getallusers = async (req, res) => {
  try {
    const getUser = await User.findOne();
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({
      location: "error in get all user",
      message: error.message,
    });
  }
};
export const adduser = async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const isfound = await User.findOne({ email: user.email });
    if (isfound)
      return res.status(400).json({ message: "user already exists" });
    console.log("hi from checkuser");

    const hashedpassword = await bcrypt.hash(user.password, 10);
    const newuser = { ...user, password: hashedpassword };
    const createuser = await User.create(newuser);
    const { password, ...rest } = createuser._doc;

    console.log("hi from here");
    res.status(200).json({ newuser: rest });
  } catch (error) {
    res.status(500).json({
      location: "error in adduser",
      message: error.message,
    });
  }
};

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteduser = await User.findByIdAndDelete(id);
    if (!deleteduser)
      return res.status(400).json({
        message: " ID not found",
      });

    res.status(200).json(deleteduser);
  } catch (error) {
    res.status(500).json({
      location: "error in delete user",
      message: error.message,
    });
  }
};

// export const updateuser = async (req, res) => {
//   try {
//     const getID = req.params.id;
//     const updateusers = req.body;
//     const updatedusers = User.map((user) => {
//       if (user.id === getID) {
//         return updateusers;
//       }
//       return user;
//     });

//     res.status(200).json(updatedusers);
//   } catch (error) {
//     res.status(500).json({
//       location: "error in update user",
//       message: error.message,
//     });
//   }
// };
export const updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      location: "error in update user",
      message: error.message,
    });
  }
};
