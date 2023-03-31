const mongoose = require("../db/mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

// Define the employee schema
const patientSchema = new mongoose.Schema(
  {
    // Subject Data
    number: { type: Number },
    ethnicity: { type: String },
    ehnicityO: { type: String },
    gender: { type: String },
    travelTime: { type: String },
    domicile: { type: String },
    education: { type: String },
    glucoma: { type: String },
    glucomaO: { type: String },
    hadOfGlaucoma: { type: String },
    relativeWithBlindness: { type: String },

    // eye specific info
    whatEye: { type: String },
    presentingVisualAcuityL: { type: String },
    presentingVisualAcuityR: { type: String },
    causeOfVisionLossL: { type: String },
    causeOfVisionLossLO: { type: String },
    causeOfVisionLossR: { type: String },
    causeOfVisionLossRO: { type: String },
    cataractPresentL: { type: String },
    cataractPresentR: { type: String },
    noOfShotsL: { type: Number },
    noOfShotsR: { type: Number },
    noOfQuadrantsTreatedL: { type: Number },
    noOfQuadrantsTreatedR: { type: Number },
    powerUsedL: { type: Number },
    powerUsedR: { type: Number },
    procedureComplicationL: { type: String },
    procedureComplicationR: { type: String },
    IOP1L: { type: Number },
    IOP1R: { type: Number },
    IOP2L: { type: Number },
    IOP2R: { type: Number },
    MIOPL: { type: Number },
    MIOPR: { type: Number },
    IOP1HRL: { type: Number },
    IOP1HRR: { type: Number },
    IOP1DL: { type: Number },
    IOP1DR: { type: Number },
    IOP1ML: { type: Number },
    IOP1MR: { type: Number },
    IOP3ML: { type: Number },
    IOP3MR: { type: Number },
    IOP6ML: { type: Number },
    IOP6MR: { type: Number },
    IOP9ML: { type: Number },
    IOP9MR: { type: Number },
    IOP1YL: { type: Number },
    IOP1YR: { type: Number },
    COM1HRL: { type: String },
    COM1HRR: { type: String },
    COM1DL: { type: String },
    COM1DR: { type: String },
    COM3ML: { type: String },
    COM3MR: { type: String },
    COM6ML: { type: String },
    COM6MR: { type: String },
    COM1YL: { type: String },
    COM1YR: { type: String },
    CCTL: { type: Number },
    CCTR: { type: Number },
    ocularPainL: { type: String },
    ocularPainR: { type: String },
    ganioscopyL: { type: String },
    ganioscopyR: { type: String },
    openessOfQuadrantL: { type: String },
    openessOfQuadrantR: { type: String },
    opticNerveVisibleL: { type: String },
    opticNerveVisibleR: { type: String },
    verticalCupDiskRatioL: { type: Number },
    verticalCupDiskRatioR: { type: Number },
    visualFieldPerformedL: { type: String },
    visualFieldNotPerformedL: { type: String },
    visualFieldPerformedR: { type: String },
    visualFieldNotPerformedR: { type: String },
    meanDeviationL: { type: Number },
    meanDeviationR: { type: Number },
    patternSDL: { type: Number },
    patternSDR: { type: Number },
    perimeterL: { type: Number },
    perimeterR: { type: Number },

    // New treatment
    wasTreatmentAddedL: { type: String },
    wasTreatmentAddedR: { type: String },
    whatTreatmentWasAddedL: { type: String },
    whatTreatmentWasAddedR: { type: String },
    medicationsL: { type: Array },
    medicationsR: { type: Array },

    medicalTreatmentMonthL: { type: String },
    medicalTreatmentMonthR: { type: String },
    repeatSLTL: { type: String },
    repeatSLTR: { type: String },
    repeatSLTMonthL: { type: String },
    repeatSLTMonthR: { type: String },
    iopBeforeRepeatSLTL: { type: Number },
    iopBeforeRepeatSLTR: { type: Number },
    iopAfter1hrRepeatLaserL: { type: Number },
    iopAfter1hrRepeatLaserR: { type: Number },
    iop3MonthsAfterRepeatSLTL: { type: Number },
    iop3MonthsAfterRepeatSLTR: { type: Number },
    iopAfter6MonthsAfterRepeatSLTL: { type: Number },
    iopAfter6MonthsAfterRepeatSLTR: { type: Number },
    complicationsAfterSLTL: { type: String },
    complicationsAfterSLTR: { type: String },

    // Treatment Failed
    treatmentOfferedL: { type: String },
    treatmentOfferedR: { type: String },
    treatmentAcceptedL: { type: String },
    treatmentAcceptedR: { type: String },
    reasonForNoTreatmentL: { type: String },
    reasonForNoTreatmentR: { type: String },
    reasonForNoTreatmentLO: { type: String },
    reasonForNoTreatmentRO: { type: String },
    alternateTherapyOfferedL: { type: String },
    alternateTherapyOfferedR: { type: String },
    typeOfAlternateTherapyL: { type: String },
    typeOfAlternateTherapyR: { type: String },
    alternateTherapyAcceptedL: { type: String },
    alternateTherapyAcceptedR: { type: String },
  },
  {
    timestamps: true,
    strictPopulate: false,
  }
);

patientSchema.methods.genAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET);
  // console.log(user.tokens);
  // user.tokens.push({ token });
  // console.log(user.tokens);
  // await user.save();
  return token;
};

patientSchema.statics.validateUser = async (email, password) => {
  const user = await Patient.findOne({ email });

  if (!user) {
    return "Wrong email or password";
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return "Wrong email or password";
  }

  if (user.role[0] !== "Admin") {
    return "Unauthorized";
  }

  return user;
};

patientSchema.plugin(mongoosePaginate);

// Define the models
const Patient = mongoose.model("Patient", patientSchema);

// Export the models
module.exports = Patient;
