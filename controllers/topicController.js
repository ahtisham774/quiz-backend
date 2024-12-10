const Topic = require('../models/Topic');


exports.createTopic = async (req, res) => {
    try {
        const { name } = req.body;
        const topic = new Topic({ name });
        await topic.save();
        res.json({ message: 'Topic created successfully', topic });
    } catch (error) {
        console.error('Error creating topic:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.getAllTopics = async (req, res) => {
    try {
        const topics = await Topic.find();
        res.json(topics);
    } catch (error) {
        console.error('Error fetching topics:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.deleteTopic = async (req, res) => {
    try {
        const { id } = req.params;
        await Topic.findByIdAndDelete(id);
        res.json({ message: 'Topic deleted successfully' });
    } catch (error) {
        console.error('Error deleting topic:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}