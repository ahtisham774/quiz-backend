const express = require('express');
const router = express.Router();
const { createTopic, getAllTopics, deleteTopic } = require('../controllers/topicController');

router.post('/create', createTopic);
router.get('/all', getAllTopics);
router.delete('/delete/:id', deleteTopic);

module.exports = router;