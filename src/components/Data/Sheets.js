import React from "react";
import Moment from "moment";

export const Sheets = [
  {
    Sheet: "Tower (A)",
    Questions: [
      "Check for signs of Errosion",
      "Check for signs of Settlement",
      "Check for Foundation Cracks",
      "Check Concrete and Grouting Spalling",
      "Check Drainange Holes",
      "Check Rusting Pipe Members",
      "Check for movement at tower joints",
      "Check if the Fasteners are Corroding",
      "Check Antenna Mounts, Booms, Brackets",
      "Check Antenna Safety Slings",
      "Check the Paint Condition",
      "Check if there is Cracks on Welding",
      "Check if there is Twist in the Tower",
      "Check if there is Kinks in the Tower",
      "Check Condition of Cables",
      "Check the Feeder and Telkom Entries",
      "Check if Monopole has doors",
      "Check Earthing System",
      "Check if the AC Warning Lights are Functioning",
      "Check Monopole interior Cat ladder lights",
      "No, type, height of antennas correct?",
      "Check Stay Cables Condition",
      "Check Fall Arrest System",
      "New Problems Reported?",
      "Fault and Data Photos?",
      "Fault Report Completed?",
      "Check Safety Signs",
      "Check Sleaves Conditions, Seal Sleaves that is not Sealed",
      "Check Platform Hatches",
      "Check Cat Ladder Condition",
      "Height of Tower to top:",
      "Type of Antenna 1:",
      "HT of Antenna 1:",
      "Type of Antenna 2:",
      "HT of Antenna 2:",
      "Type of Antenna 3:",
      "HT of Antenna 3:",
      "Type of Antenna 4:",
      "HT of Antenna 4:",
      "Type of Antenna 5",
      "HT of Antenna 5:",
      "Type of Antenna 6:",
      "HT of Antenna 6:",
      "Type of Antenna 7:",
      "HT of Antenna 7:",
      "Type of Antenna 8:",
      "HT of Antenna 8:",
      "Type of Antenna 9:",
      "HT of Antenna 9:",
      "Type of Antenna 10:",
      "HT of Antenna 10:",
      "Type of Antenna 11:",
      "HT of Antenna 11:",
      "Type of Antenna 12:",
      "HT of Antenna 12:",
      "Type of Antenna 13:",
      "HT of Antenna 13:",
      "Type of Antenna 14:",
      "HT of Antenna 14:",
      "Type of Antenna 15:",
      "HT of Antenna 15:",
      "Type of Antenna 16:",
      "HT of Antenna 16:",
      "Type of Antenna 17:",
      "HT of Antenna 17:",
      "Type of Antenna 18:",
      "HT of Antenna 18:",
      "Type of Antenna 19:",
      "HT of Antenna 19:",
      "Type of Antenna 20:",
      "HT of Antenna 20:",
      "Type of Antenna 21:",
      "HT of Antenna 21:",
      "Type of Antenna 22:",
      "HT of Antenna 22:",
      "Type of Antenna 23:",
      "HT of Antenna 23:",
      "Type of Antenna 24:",
      "HT of Antenna 24:",
      "Type of Antenna 25:",
      "HT of Antenna 25:",
    ],
  },
  {
    Sheet: "Full Field (B)",
    Questions: [
      "Check access road condition",
      "Check Perimeter fence condition",
      "Check safety signs",
      "Clear overgroth ingress on perimeter",
      "Crushed stone - level & clean",
      "Check outside container condition",
      "Check outside brick room condition",
      "Check Equipment room door and seals",
      "Check condensers and cages condition",
      "Container & Node Box Apron",
      "Remove Site Rubble, check cable trays and roofs",
      "Check Manhole conditions",
      "Expansion joint sealant",
      "Fault and Data photos",
      "Fault report completed",
    ],
  },
  {
    Sheet: "Minor Field (C)",
    Questions: [
      "Check access road condition",
      "Check Perimeter Fence Condition ",
      "Check outside container condition",
      "Check outside brick room condition",
      "Check condensers and cages condition",
      "Check Slabs and Under-Slab condition",
      "Check container roof, cable tray and rubble condition",
      "Fault and Data Photos ?",
      "Fault report completed ?",
      "Check safety signs",
    ],
  },
  {
    Sheet: "Electrical (F)",
    Questions: [
      "Stainless steel boxes AC power check",
      "Stainless steel boxes DC power check",
      "Visual inspection - distribution boards condition & labels",
      "Visual inspection of tower routing and cabling conditions",
      "Check navigation lights condition and functionality",
      "Visual inspect lighting and light fittings",
      "Visual inspection tower earthing",
      "Visual inspection on the common earth system",
      "Earth continuity test result",
      "Check lighting arrestor condition",
      "Fault and Data photos ?",
      "Fault report completed ?",
    ],
  },
];

const dataModel = () => {
  const SiteDetails = {
    site: "",
    date: "",
    Technician: "",
    site_ref_no: "",
    GPS: "",
  };

  const mapped = () => {
    Sheets.map((sheet) => ({ sheet }));
  };
  console.log(SiteDetails)

  return { dataModel, mapped };
};

export const Model = {
  site: "",
  date: "",
  Technician: "",
  site_ref_no: "",
  GPS: "",
  Sheets: {
    "Tower (A)": {
      q1: {
        State: "",
        observation: "",
        images: "",
      },
      q2: {
        State: "",
        observation: "",
        images: "",
      },
      q3: {
        State: "",
        observation: "",
        images: "",
      },
      q4: {
        State: "",
        observation: "",
        images: "",
      },
      q5: {
        State: "",
        observation: "",
        images: "",
      },
      q6: {
        State: "",
        observation: "",
        images: "",
      },
      q7: {
        State: "",
        observation: "",
        images: "",
      },
      q8: {
        State: "",
        observation: "",
        images: "",
      },
      q9: {
        State: "",
        observation: "",
        images: "",
      },
      q10: {
        State: "",
        observation: "",
        images: "",
      },
      q11: {
        State: "",
        observation: "",
        images: "",
      },
      q12: {
        State: "",
        observation: "",
        images: "",
      },
      q13: {
        State: "",
        observation: "",
        images: "",
      },
      q14: {
        State: "",
        observation: "",
        images: "",
      },
      q15: {
        State: "",
        observation: "",
        images: "",
      },
      q16: {
        State: "",
        observation: "",
        images: "",
      },
      q17: {
        State: "",
        observation: "",
        images: "",
      },
      q18: {
        State: "",
        observation: "",
        images: "",
      },
      q19: {
        State: "",
        observation: "",
        images: "",
      },
      q20: {
        State: "",
        observation: "",
        images: "",
      },
      q21: {
        State: "",
        observation: "",
        images: "",
      },
      q22: {
        State: "",
        observation: "",
        images: "",
      },
      q23: {
        State: "",
        observation: "",
        images: "",
      },
      q24: {
        State: "",
        observation: "",
        images: "",
      },
      q25: {
        State: "",
        observation: "",
        images: "",
      },
      q26: {
        State: "",
        observation: "",
        images: "",
      },
      q27: {
        State: "",
        observation: "",
        images: "",
      },
      q28: {
        State: "",
        observation: "",
        images: "",
      },
      q29: {
        State: "",
        observation: "",
        images: "",
      },
      q30: {
        State: "",
        observation: "",
        images: "",
      },
      q31: {
        State: "",
        observation: "",
        images: "",
      },
      q32: {
        State: "",
        observation: "",
        images: "",
      },
      q33: {
        State: "",
        observation: "",
        images: "",
      },
      q34: {
        State: "",
        observation: "",
        images: "",
      },
      q35: {
        State: "",
        observation: "",
        images: "",
      },
      q36: {
        State: "",
        observation: "",
        images: "",
      },
      q37: {
        State: "",
        observation: "",
        images: "",
      },
      q38: {
        State: "",
        observation: "",
        images: "",
      },
      q39: {
        State: "",
        observation: "",
        images: "",
      },
      q40: {
        State: "",
        observation: "",
        images: "",
      },
    },
    "Tower (B)": {
      q1: {
        State: "",
        observation: "",
        images: "",
      },
      q2: {
        State: "",
        observation: "",
        images: "",
      },
      q3: {
        State: "",
        observation: "",
        images: "",
      },
      q4: {
        State: "",
        observation: "",
        images: "",
      },
      q5: {
        State: "",
        observation: "",
        images: "",
      },
      q6: {
        State: "",
        observation: "",
        images: "",
      },
      q7: {
        State: "",
        observation: "",
        images: "",
      },
      q8: {
        State: "",
        observation: "",
        images: "",
      },
      q9: {
        State: "",
        observation: "",
        images: "",
      },
      q10: {
        State: "",
        observation: "",
        images: "",
      },
      q11: {
        State: "",
        observation: "",
        images: "",
      },
      q12: {
        State: "",
        observation: "",
        images: "",
      },
      q13: {
        State: "",
        observation: "",
        images: "",
      },
      q14: {
        State: "",
        observation: "",
        images: "",
      },
      q15: {
        State: "",
        observation: "",
        images: "",
      },
      q16: {
        State: "",
        observation: "",
        images: "",
      },
      q17: {
        State: "",
        observation: "",
        images: "",
      },
      q18: {
        State: "",
        observation: "",
        images: "",
      },
      q19: {
        State: "",
        observation: "",
        images: "",
      },
      q20: {
        State: "",
        observation: "",
        images: "",
      },
      q21: {
        State: "",
        observation: "",
        images: "",
      },
      q22: {
        State: "",
        observation: "",
        images: "",
      },
      q23: {
        State: "",
        observation: "",
        images: "",
      },
      q24: {
        State: "",
        observation: "",
        images: "",
      },
      q25: {
        State: "",
        observation: "",
        images: "",
      },
      q26: {
        State: "",
        observation: "",
        images: "",
      },
      q27: {
        State: "",
        observation: "",
        images: "",
      },
      q28: {
        State: "",
        observation: "",
        images: "",
      },
      q29: {
        State: "",
        observation: "",
        images: "",
      },
      q30: {
        State: "",
        observation: "",
        images: "",
      },
      q31: {
        State: "",
        observation: "",
        images: "",
      },
      q32: {
        State: "",
        observation: "",
        images: "",
      },
      q33: {
        State: "",
        observation: "",
        images: "",
      },
      q34: {
        State: "",
        observation: "",
        images: "",
      },
      q35: {
        State: "",
        observation: "",
        images: "",
      },
      q36: {
        State: "",
        observation: "",
        images: "",
      },
      q37: {
        State: "",
        observation: "",
        images: "",
      },
      q38: {
        State: "",
        observation: "",
        images: "",
      },
      q39: {
        State: "",
        observation: "",
        images: "",
      },
      q40: {
        State: "",
        observation: "",
        images: "",
      },
    },
    "Tower (C)": {
      q1: {
        State: "",
        observation: "",
        images: "",
      },
      q2: {
        State: "",
        observation: "",
        images: "",
      },
      q3: {
        State: "",
        observation: "",
        images: "",
      },
      q4: {
        State: "",
        observation: "",
        images: "",
      },
      q5: {
        State: "",
        observation: "",
        images: "",
      },
      q6: {
        State: "",
        observation: "",
        images: "",
      },
      q7: {
        State: "",
        observation: "",
        images: "",
      },
      q8: {
        State: "",
        observation: "",
        images: "",
      },
      q9: {
        State: "",
        observation: "",
        images: "",
      },
      q10: {
        State: "",
        observation: "",
        images: "",
      },
      q11: {
        State: "",
        observation: "",
        images: "",
      },
      q12: {
        State: "",
        observation: "",
        images: "",
      },
      q13: {
        State: "",
        observation: "",
        images: "",
      },
      q14: {
        State: "",
        observation: "",
        images: "",
      },
      q15: {
        State: "",
        observation: "",
        images: "",
      },
      q16: {
        State: "",
        observation: "",
        images: "",
      },
      q17: {
        State: "",
        observation: "",
        images: "",
      },
      q18: {
        State: "",
        observation: "",
        images: "",
      },
      q19: {
        State: "",
        observation: "",
        images: "",
      },
      q20: {
        State: "",
        observation: "",
        images: "",
      },
      q21: {
        State: "",
        observation: "",
        images: "",
      },
      q22: {
        State: "",
        observation: "",
        images: "",
      },
      q23: {
        State: "",
        observation: "",
        images: "",
      },
      q24: {
        State: "",
        observation: "",
        images: "",
      },
      q25: {
        State: "",
        observation: "",
        images: "",
      },
      q26: {
        State: "",
        observation: "",
        images: "",
      },
      q27: {
        State: "",
        observation: "",
        images: "",
      },
      q28: {
        State: "",
        observation: "",
        images: "",
      },
      q29: {
        State: "",
        observation: "",
        images: "",
      },
      q30: {
        State: "",
        observation: "",
        images: "",
      },
      q31: {
        State: "",
        observation: "",
        images: "",
      },
      q32: {
        State: "",
        observation: "",
        images: "",
      },
      q33: {
        State: "",
        observation: "",
        images: "",
      },
      q34: {
        State: "",
        observation: "",
        images: "",
      },
      q35: {
        State: "",
        observation: "",
        images: "",
      },
      q36: {
        State: "",
        observation: "",
        images: "",
      },
      q37: {
        State: "",
        observation: "",
        images: "",
      },
      q38: {
        State: "",
        observation: "",
        images: "",
      },
      q39: {
        State: "",
        observation: "",
        images: "",
      },
      q40: {
        State: "",
        observation: "",
        images: "",
      },
    },
    "Tower (D)": {
      q1: {
        State: "",
        observation: "",
        images: "",
      },
      q2: {
        State: "",
        observation: "",
        images: "",
      },
      q3: {
        State: "",
        observation: "",
        images: "",
      },
      q4: {
        State: "",
        observation: "",
        images: "",
      },
      q5: {
        State: "",
        observation: "",
        images: "",
      },
      q6: {
        State: "",
        observation: "",
        images: "",
      },
      q7: {
        State: "",
        observation: "",
        images: "",
      },
      q8: {
        State: "",
        observation: "",
        images: "",
      },
      q9: {
        State: "",
        observation: "",
        images: "",
      },
      q10: {
        State: "",
        observation: "",
        images: "",
      },
      q11: {
        State: "",
        observation: "",
        images: "",
      },
      q12: {
        State: "",
        observation: "",
        images: "",
      },
      q13: {
        State: "",
        observation: "",
        images: "",
      },
      q14: {
        State: "",
        observation: "",
        images: "",
      },
      q15: {
        State: "",
        observation: "",
        images: "",
      },
      q16: {
        State: "",
        observation: "",
        images: "",
      },
      q17: {
        State: "",
        observation: "",
        images: "",
      },
      q18: {
        State: "",
        observation: "",
        images: "",
      },
      q19: {
        State: "",
        observation: "",
        images: "",
      },
      q20: {
        State: "",
        observation: "",
        images: "",
      },
      q21: {
        State: "",
        observation: "",
        images: "",
      },
      q22: {
        State: "",
        observation: "",
        images: "",
      },
      q23: {
        State: "",
        observation: "",
        images: "",
      },
      q24: {
        State: "",
        observation: "",
        images: "",
      },
      q25: {
        State: "",
        observation: "",
        images: "",
      },
      q26: {
        State: "",
        observation: "",
        images: "",
      },
      q27: {
        State: "",
        observation: "",
        images: "",
      },
      q28: {
        State: "",
        observation: "",
        images: "",
      },
      q29: {
        State: "",
        observation: "",
        images: "",
      },
      q30: {
        State: "",
        observation: "",
        images: "",
      },
      q31: {
        State: "",
        observation: "",
        images: "",
      },
      q32: {
        State: "",
        observation: "",
        images: "",
      },
      q33: {
        State: "",
        observation: "",
        images: "",
      },
      q34: {
        State: "",
        observation: "",
        images: "",
      },
      q35: {
        State: "",
        observation: "",
        images: "",
      },
      q36: {
        State: "",
        observation: "",
        images: "",
      },
      q37: {
        State: "",
        observation: "",
        images: "",
      },
      q38: {
        State: "",
        observation: "",
        images: "",
      },
      q39: {
        State: "",
        observation: "",
        images: "",
      },
      q40: {
        State: "",
        observation: "",
        images: "",
      },
    },
  },
};

export const Site_sheets = [
  {
    Site: "Site_1",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_2",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Sean",
  },
  {
    Site: "Site_3",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Russel",
  },
  {
    Site: "Site_4",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_5",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_6",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Sean",
  },
  {
    Site: "Site_7",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_8",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Alex",
  },
  {
    Site: "Site_9",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_10",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Waheeb",
  },
  {
    Site: "Site_1",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_2",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Sean",
  },
  {
    Site: "Site_3",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Russel",
  },
  {
    Site: "Site_4",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_5",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_6",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Sean",
  },
  {
    Site: "Site_7",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_8",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Alex",
  },
  {
    Site: "Site_9",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Grant",
  },
  {
    Site: "Site_10",
    Last_entry: Moment(Date()).format("MMMM Do, h:mm a"),
    Technician: "Waheeb",
  },
];


export const Preventative_sheets = [
  "Item descript",
  "Section",
  "Leg",
  "Height",
  "Quantity",
  "Fault description",
  "priority",
];

export const ConditionList = ["Good", "Bad", "NA"];
