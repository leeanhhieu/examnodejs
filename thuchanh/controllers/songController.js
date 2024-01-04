const express = require('express');
const Song = require('../models/song');

const router = express.Router();


router.post('/songs', async (req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        res.json(song);
    } catch (error) {
        res.status(404).json({ error: 'Song not found' });
    }
});


router.put('/songs/:id', async (req, res) => {
    try {
        const song = await Song.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(song);
    } catch (error) {
        res.status(404).json({ error: 'Song not found' });
    }
});


router.delete('/songs/:id', async (req, res) => {
    try {
        await Song.findByIdAndDelete(req.params.id);
        res.json({ message: 'Song deleted successfully' });
    } catch (error) {
        res.status(404).json({ error: 'Song not found' });
    }
});

module.exports = router;
