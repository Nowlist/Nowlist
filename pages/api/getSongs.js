import { getSongs } from '../../lib/redis';

export default async function handler(req, res) {
    const id = await getSongs(req.body);
    res.status(200).json({id});
}