import Media from "../models/MediaModel.js";
import path from "path";
import fs from "fs";

export const uploadMedia = async (req, res) => {
    if(!req.file) return res.status(400).json({msg: "No File Uploaded"});

    try {
        const { classId } = req.body;
        const type = req.file.mimetype.startsWith('image/') ? 'photo' : 'video';

        await Media.create({
            type: type,
            url: `/uploads/${req.file.filename}`,
            fileName: req.file.filename,
            uploaderId: req.userId,
            classId: classId
        });

        res.json({msg: "Media uploaded successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error.message});
    }
}

export const getMediaByClass = async (req, res) => {
    try {
        const media = await Media.findAll({
            where: {
                classId: req.params.classId
            }
        });
        res.json(media);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteMedia = async (req, res) => {
    try {
        const media = await Media.findOne({
            where: {
                id: req.params.id,
                uploaderId: req.userId
            }
        });

        if(!media) return res.status(404).json({msg: "Media not found"});

        const filepath = `./public/uploads/${media.fileName}`;
        fs.unlinkSync(filepath);

        await Media.destroy({
            where: {
                id: req.params.id
            }
        });

        res.json({msg: "Media deleted successfully"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}