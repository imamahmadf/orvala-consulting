import langTypes from "./Types/langTypes";
import {
  artikel,
  sosmeds,
  menu,
  Partners,
  proses,
  whyUs,
} from "../../Constants";

const init_state = {
  lang: "EN",
  dataLang: { artikel, sosmeds, menu, Partners, proses, whyUs },
};

export default (state = init_state, action) => {
  switch (action.type) {
    case langTypes.Lang:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
