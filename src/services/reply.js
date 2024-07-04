const { Reply } = require("../models");

module.exports = {
  getAll: async () => {
    try {
      const replies = await Reply.findAll({ limit: 100, order: [ ['id', 'DESC'] ] });
      return replies;
    } catch (error) {
      console.error("Error fetching replies:", error);
      throw error;
    }
  },

  createNew: async (replyData) => {
    try {
      const res = await Reply.create(replyData);
      return { id: res.id, message: "Successfully inserted new reply!" };
    } catch (error) {
      console.error("Error creating new reply:", error);
      throw error;
    }
  },
};
