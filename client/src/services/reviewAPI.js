//  /client/src/services/reviewAPI.js

import axios from "axios";

export default {
  getCohort: async () => {
    let res = await axios.post(`/getCohort`, {
      cohort: "1"
    });
    return res.data || [];
  },
  addFeedback: async (cohort, _id, confidence_ranking, feedback, guess) => {
    let res = await axios.post(`/addFeedback`, {
      cohort: cohort,
      _id: _id,
      guess: guess,
      confidence_ranking: confidence_ranking,
      feedback: feedback
    });
    return res.data || [];
  }
};
