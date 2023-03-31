const Patient = require("../models/userModel");

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
    res.status(400).send({ message: e });
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
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.stageOne = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Patient.findById(id).select(
      "number ethnicity ehnicityO gender travelTime domicile education glucoma glucomaO hadOfGlaucoma relativeWithBlindness"
    );

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
    const user = await Patient.findById(id).select(
      "whatEye presentingVisualAcuityL presentingVisualAcuityR causeOfVisionLossL causeOfVisionLossLO causeOfVisionLossR causeOfVisionLossRO cataractPresentL cataractPresentR noOfShotsL noOfShotsR noOfQuadrantsTreatedL noOfQuadrantsTreatedR powerUsedL powerUsedR procedureComplicationL procedureComplicationR IOP1L IOP1R IOP2L IOP2R MIOPL MIOPR IOP1HRL IOP1HRR IOP1DL IOP1DR IOP1ML IOP1MR IOP3ML IOP3MR IOP6ML IOP6MR IOP9ML IOP9MR IOP1YL IOP1YR COM1HRL COM1HRR COM1DL COM1DR COM3ML COM3MR COM6ML COM6MR COM1YL COM1YR CCTL CCTR ocularPainL ocularPainR ganioscopyL ganioscopyR openessOfQuadrantL openessOfQuadrantR opticNerveVisibleL opticNerveVisibleR verticalCupDiskRatioL verticalCupDiskRatioR visualFieldPerformedL visualFieldNotPerformedL visualFieldPerformedR visualFieldNotPerformedR meanDeviationL meanDeviationR patternSDL patternSDR perimeterL perimeterR"
    );

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
