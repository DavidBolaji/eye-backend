const mongoose = require("../db/mongoose");

const mongoosePaginate = require("mongoose-paginate-v2");

// Define the employee schema
const patientSchema = new mongoose.Schema(
  {
    // Subject Data
    number: { type: Number },
    statusOfPatient: { type: String }, // medication/naive patient, on medication and hard washout
    YOFB: { type: String },
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
    historyOfGlucoma: { type: String },
    historyOfHYPERTENSION: { type: String },
    BPSYSTOLIC: { type: String },
    BPDIASTOLIC: { type: String },
    historyOfDiabetes: { type: String },
    weight: { type: Number },
    height: { type: Number },

    // eye specific info
    whatEye: { type: String },
    presentingVisualAcuityL: { type: String },
    presentingVisualAcuityR: { type: String },
    bestcorrectedvisualAquityLNaive: { type: String }, //new
    bestcorrectedvisualAquityLBeforeWashout: { type: String }, //new
    bestcorrectedvisualAquityLAfterWashout: { type: String }, //new
    bestcorrectedvisualAquityRNaive: { type: String }, //new
    bestcorrectedvisualAquityRBeforeWashout: { type: String }, //new
    bestcorrectedvisualAquityRAfterWshout: { type: String }, //new
    whatEyeChartWasUsedL: { type: String }, //text
    whatEyeChartWasUsedR: { type: String }, //text
    cataractPresentL: { type: String },
    cataractPresentR: { type: String },
    GonioscopyL: { type: String },
    GonioscopyR: { type: String },
    openessOfQuadrantL: { type: String },
    openessOfQuadrantR: { type: String },
    anteriorChemberActivityprioToProcedureL: { type: String }, // new text
    anteriorChemberActivityprioToProcedureR: { type: String }, // new text
    VCDRL: { type: String },
    VCDRR: { type: String },
    HCDRL: { type: String },
    HCDRR: { type: String },
    CVFL: { type: String },
    CVFR: { type: String },
    visualFieldPerformedL: { type: String }, // yes, No
    visualFieldPerformedR: { type: String }, // yes, No
    visualFieldNotPerformedL: { type: String },
    visualFieldNotPerformedR: { type: String },
    visualFieldNotPerformedLO: { type: String },
    visualFieldNotPerformedRO: { type: String },
    meanDeviationL: { type: String },
    meanDeviationR: { type: String },
    patternSDL: { type: String },
    patternSDR: { type: String },
    perimeterL: { type: String },
    perimeterR: { type: String },
    // end

    CCTL: { type: String },
    CCTR: { type: String },

    eyesToBeTreatedL: { type: String }, //dropdown, right, left, both
    eyesToBeTreatedR: { type: String }, //dropdown, right, left, both

    //change
    IOP1L: { type: Number }, //IOPPrior
    IOP1R: { type: Number },
    IOP2L: { type: Number }, // IOPBEFOREwASHOUT
    IOP2R: { type: Number },
    //NEW
    IOP3L: { type: Number }, // IOPAfterwASHOUT
    IOP3R: { type: Number },

    //new
    IOP4L: { type: Number }, // IOPAtRecruitment
    IOP4R: { type: Number },
    //nEW Position
    // interoccular pressre before procedure(Ihr before)
    IOP1HRL: { type: Number },
    IOP1HRR: { type: Number },

    BIOP: { type: Number },
    BIOPR: { type: Number },
    howmanymililitreofwaterwasgiven: { type: Number }, // new
    howmanymililitreofwaterwasgivenR: { type: Number }, // new
    iop5minL: { type: Number }, //number
    iop5minR: { type: Number }, //number
    iop15MinL: { type: Number },
    iop15MinR: { type: Number },
    iop30minL: { type: Number },
    iop30minR: { type: Number },
    iop45minR: { type: Number },
    iop45minL: { type: Number },
    iop1HRL: { type: Number },
    iop1HRR: { type: Number },
    averageEnergyForProcedureL: { type: Number }, //Number
    averageEnergyForProcedureR: { type: Number }, //Number

    noOfShotsL: { type: Number },
    noOfShotsR: { type: Number },
    powerUsedL: { type: Number },
    powerUsedR: { type: Number },
    noOfQuadrantsTreatedL: { type: Number },
    noOfQuadrantsTreatedR: { type: Number },
    pigmentationSuperiorL: { type: String },
    pigmentationSuperiorR: { type: String },

    LOCSG2R: { type: String },
    LOCSG2L: { type: String },

    pigmentationInferiorL: { type: String },
    pigmentationInferiorR: { type: String },

    pigmentationNasalL: { type: String },
    pigmentationNasalR: { type: String },

    pigmentationTemporalL: { type: String },
    pigmentationTemporalR: { type: String },
    procedureComplicationL: { type: String },
    procedureComplicationR: { type: String },

    ocularPainL: { type: String },
    ocularPainR: { type: String },

    // if yes show scale
    pain1hrL: { type: Number },
    pain1hrR: { type: Number },
    pain24hrL: { type: Number },
    pain24hrR: { type: Number },
    pain48hrL: { type: Number },
    pain48hrR: { type: Number },

    medicationsBeforeL: { type: Array },
    medicationsBeforeR: { type: Array },
    //   hobbies: [],
    vaUnaided1HRL: { type: String },
    vaUnaided1HRR: { type: String },

    bcVA1HRL: { type: String },
    bcVA1HRR: { type: String },

    flare1HRL: { type: String },
    flare1HRR: { type: String },

    cells1HRL: { type: String },
    cells1HRR: { type: String },

    LOCSG1HRR: { type: String },
    LOCSG1HRL: { type: String },

    IOPA1HRL: { type: Number },
    IOPA1HRR: { type: Number },

    comp1HRL: { type: String },
    comp1HRR: { type: String },

    BV1HRL: { type: String },
    BV1HRR: { type: String },

    //24HR
    vaUnaided24HRL: { type: String },
    vaUnaided24HRR: { type: String },

    bcVA24HRL: { type: String },
    bcVA24HRR: { type: String },

    flare24HRL: { type: String },
    flare24HRR: { type: String },

    cells24HRL: { type: String },
    cells24HRR: { type: String },

    LOCSG24HRR: { type: String },
    LOCSG24HRL: { type: String },

    IOPA24HRL: { type: Number },
    IOPA24HRR: { type: Number },

    comp24HRL: { type: String },
    comp24HRR: { type: String },

    //1WEEK
    vaUnaided1WL: { type: String },
    vaUnaided1WR: { type: String },

    bcVA1WL: { type: String },
    bcVA1WR: { type: String },

    flare1WL: { type: String },
    flare1WR: { type: String },

    cells1WL: { type: String },
    cells1WR: { type: String },

    LOCSG1WR: { type: String },
    LOCSG1WL: { type: String },

    IOPA1WL: { type: Number },
    IOPA1WR: { type: Number },

    comp1WL: { type: String },
    comp1WR: { type: String },

    //1MONTH
    vaUnaided1ML: { type: String },
    vaUnaided1MR: { type: String },

    bcVA1ML: { type: String },
    bcVA1MR: { type: String },

    flare1ML: { type: String },
    flare1MR: { type: String },

    cells1ML: { type: String },
    cells1MR: { type: String },

    LOCSG1MR: { type: String },
    LOCSG1ML: { type: String },

    IOPA1ML: { type: Number },
    IOPA1MR: { type: Number },

    comp1ML: { type: String },
    comp1MR: { type: String },

    //2MONTH
    vaUnaided2ML: { type: String },
    vaUnaided2MR: { type: String },

    bcVA2ML: { type: String },
    bcVA2MR: { type: String },

    flare2ML: { type: String },
    flare2MR: { type: String },

    cells2ML: { type: String },
    cells2MR: { type: String },

    LOCSG2MR: { type: String },
    LOCSG2ML: { type: String },

    IOPA2ML: { type: String },
    IOPA2MR: { type: String },

    Gonioscopy2ML: { type: String },
    Gonioscopy2MR: { type: String },

    openessOfQuadrant2MR: { type: String },
    openessOfQuadrant2ML: { type: String },

    PAS2ML: { type: String },
    PAS2MR: { type: String },

    pigment2ML: { type: String },
    pigment2MR: { type: String },

    pigmentO2ML: { type: String },
    pigmentO2MR: { type: String },

    SLT2ML: { type: String },
    SLT2MR: { type: String },

    BIOP2ML: { type: Number },
    BIOPR2MR: { type: Number },
    howmanymililitreofwaterwasgiven2ML: { type: Number }, // new
    howmanymililitreofwaterwasgivenR2MR: { type: Number }, // new
    iop5minL2ML: { type: Number }, //number
    iop5minR2MR: { type: Number }, //number
    iop15MinL2ML: { type: Number },
    iop15MinR2MR: { type: Number },
    iop30minL2ML: { type: Number },
    iop30minR2MR: { type: Number },
    iop45minL2ML: { type: Number },
    iop45minR2MR: { type: Number },
    iop1HRL2ML: { type: Number },
    iop1HRR2MR: { type: Number },

    //3MONTH
    vaUnaided3ML: { type: String },
    vaUnaided3MR: { type: String },

    bcVA3ML: { type: String },
    bcVA3MR: { type: String },

    flare3ML: { type: String },
    flare3MR: { type: String },

    cells3ML: { type: String },
    cells3MR: { type: String },

    LOCSG3MR: { type: String },
    LOCSG3ML: { type: String },

    IOPA3ML: { type: Number },
    IOPA3MR: { type: Number },

    Gonioscopy3ML: { type: String },
    Gonioscopy3MR: { type: String },

    openessOfQuadrant3MR: { type: String },
    openessOfQuadrant3ML: { type: String },

    PAS3ML: { type: String },
    PAS3MR: { type: String },

    pigment3ML: { type: String },
    pigment3MR: { type: String },

    pigmentO3ML: { type: String },
    pigmentO3MR: { type: String },

    SLT3ML: { type: String },
    SLT3MR: { type: String },

    //6MONTH
    vaUnaided6ML: { type: String },
    vaUnaided6MR: { type: String },

    bcVA6ML: { type: String },
    bcVA6MR: { type: String },

    flare6ML: { type: String },
    flare6MR: { type: String },

    cells6ML: { type: String },
    cells6MR: { type: String },

    LOCSG6MR: { type: String },
    LOCSG6ML: { type: String },

    IOPA6ML: { type: Number },
    IOPA6MR: { type: Number },

    Gonioscopy6ML: { type: String },
    Gonioscopy6MR: { type: String },

    openessOfQuadrant6MR: { type: String },
    openessOfQuadrant6ML: { type: String },

    PAS6ML: { type: String },
    PAS6MR: { type: String },

    pigment6ML: { type: String },
    pigment6MR: { type: String },

    pigmentO6ML: { type: String },
    pigmentO6MR: { type: String },

    SLT6ML: { type: String },
    SLT6MR: { type: String },

    CVFMD6ML: { type: Number },
    CVFMD6MR: { type: Number },

    PCVF6ML: { type: String },
    PCVF6MR: { type: String },

    CVFO6ML: { type: String },
    CVFO6MR: { type: String },

    CVFOO6ML: { type: String },
    CVFOO6MR: { type: String },

    //9 month
    vaUnaided9ML: { type: String },
    vaUnaided9MR: { type: String },

    bcVA9ML: { type: String },
    bcVA9MR: { type: String },

    flare9ML: { type: String },
    flare9MR: { type: String },

    cells9ML: { type: String },
    cells9MR: { type: String },

    LOCSG9MR: { type: String },
    LOCSG9ML: { type: String },

    IOPA9ML: { type: Number },
    IOPA9MR: { type: Number },

    // 12 MONTH

    vaUnaided12ML: { type: String },
    vaUnaided12MR: { type: String },

    bcVA12ML: { type: String },
    bcVA12MR: { type: String },

    flare12ML: { type: String },
    flare12MR: { type: String },

    cells12ML: { type: String },
    cells12MR: { type: String },

    LOCSG12MR: { type: String },
    LOCSG12ML: { type: String },

    IOPA12ML: { type: Number },
    IOPA12MR: { type: Number },

    CVFMD12ML: { type: Number },
    CVFMD12MR: { type: Number },

    PCVF12ML: { type: String },
    PCVF12MR: { type: String },

    CVFO12ML: { type: String },
    CVFO12MR: { type: String },

    CVFOO12ML: { type: String },
    CVFOO12MR: { type: String },

    CVFPS12ML: { type: Number },
    CVFPS12MR: { type: Number },

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
    iopAfter12MonthsAfterRepeatSLTL: { type: Number },
    iopAfter12MonthsAfterRepeatSLTR: { type: Number },
    complicationsAfterSLTL: { type: String },
    complicationsAfterSLTR: { type: String },

    // Treatment Failed
    // treatmentOfferedL: { type: String },
    // treatmentOfferedR: { type: String },
    // treatmentAcceptedL: { type: String },
    // treatmentAcceptedR: { type: String },
    // reasonForNoTreatmentL: { type: String },
    // reasonForNoTreatmentR: { type: String },
    // reasonForNoTreatmentLO: { type: String },
    // reasonForNoTreatmentRO: { type: String },
    // alternateTherapyOfferedL: { type: String },
    // alternateTherapyOfferedR: { type: String },
    // typeOfAlternateTherapyL: { type: String },
    // typeOfAlternateTherapyR: { type: String },
    // alternateTherapyAcceptedL: { type: String },
    // alternateTherapyAcceptedR: { type: String },
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
