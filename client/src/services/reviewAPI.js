//  /client/src/services/reviewAPI.js

import axios from "axios";

export default {
  getCohort: async () => {
    let res = await axios.post(`/getCohort`, {
      cohort: "1"
    });
    return res.data || [];
  }
};
