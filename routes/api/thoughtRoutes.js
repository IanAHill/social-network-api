const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

// /api/Thoughts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thoughts/:ThoughtId/tags
router.route('/:thoughtId/reaction')
  .post(addReaction);

// /api/Thoughts/:ThoughtId/tags/:tagId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
