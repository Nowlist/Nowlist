import { searchSongs } from "../../lib/redis";

export default async function handler(req, res) {
    const query = req.query.query;
    const songs = await searchSongs(query);
    res.status(200).json({songs});
}