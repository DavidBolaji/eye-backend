const Patient = require("../models/userModel");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email !== process.env.EMAIL)
      throw new Error("Please enter a valid email address");
    if (password !== process.env.PASSWORD)
      throw new Error("Please enter a valid password");

    res.status(200).send({ isLogin: true });
  } catch (e) {
    res.status(400).send({ message: e });
  }
};

exports.create = async (req, res) => {
  const newData = { ...req.body };

  try {
    const newUser = await Patient.findOneAndUpdate(
      { number: req.body.number },
      newData,
      { upsert: true, new: true } // Upsert option creates a new document if it doesn't exist
    );

    res.status(201).send({ id: newUser._id, whatEye: newUser.whatEye });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: e });
  }
};

exports.update = async (req, res) => {
  const newData = { ...req.body };

  try {
    const newUser = await Patient.findOneAndUpdate(
      { _id: req.body._id },
      newData,
      { upsert: true, new: true } // Upsert option creates a new document if it doesn't exist
    );
    res.status(201).send({ id: newUser._id, whatEye: newUser.whatEye });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: e });
  }
};

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteUser = await Patient.deleteOne({ _id: { $eq: id } }); //

    if (!deleteUser) {
      throw new Error("Unable to delete User");
    }

    res.status(200).send({ message: "User deleted Successfully" });
  } catch (e) {
    res.status(400).send({ e: "Unable to delete User" });
  }
};

exports.getUsers = async (req, res) => {
  const { page = 1, limit = 10, sort = "createdAt", search = "" } = req.query;

  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    // sort: { [sort]: 1 },
    // sort: { firstName: 1 },
    collation: {
      locale: "en",
    },
    select: "number name",
  };

  const query = {
    $or: [
      { name: { $regex: search, $options: "i" } },
      //   { number: { $regex: search, $options: "i" } },
    ],
  };

  try {
    const users = await Patient.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.stageOne = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Patient.findById(id);

    if (!user) {
      throw new Error();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: "User not found" });
  }
};

exports.stageTwo = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Patient.findById(id);

    if (!user) {
      throw new Error();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: "User not found" });
  }
};

exports.stageThree = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Patient.findById(id).select(
      "whatEye wasTreatmentAddedL wasTreatmentAddedR whatTreatmentWasAddedL whatTreatmentWasAddedR medicationsL medicationsR medicalTreatmentMonthL medicalTreatmentMonthR repeatSLTL repeatSLTR repeatSLTMonthL repeatSLTMonthR iopBeforeRepeatSLTL iopBeforeRepeatSLTR iopAfter1hrRepeatLaserL iopAfter1hrRepeatLaserR iop3MonthsAfterRepeatSLTL iop3MonthsAfterRepeatSLTR iopAfter6MonthsAfterRepeatSLTL iopAfter6MonthsAfterRepeatSLTR complicationsAfterSLTL complicationsAfterSLTR"
    );

    if (!user) {
      throw new Error();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: "User not found" });
  }
};

exports.stageFour = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Patient.findById(id).select(
      "whatEye treatmentOfferedL treatmentOfferedR treatmentAcceptedL treatmentAcceptedR reasonForNoTreatmentL reasonForNoTreatmentR reasonForNoTreatmentLO reasonForNoTreatmentRO alternateTherapyOfferedL alternateTherapyOfferedR typeOfAlternateTherapyL typeOfAlternateTherapyR alternateTherapyAcceptedL alternateTherapyAcceptedR"
    );

    if (!user) {
      throw new Error();
    }

    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: "User not found" });
  }
};
