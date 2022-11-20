import {Client, Entity, Schema, Repository} from 'redis-om';

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Song extends Entity {}

let schema = new Schema(
    Song, 
    {
        // id: {type: 'string', key: true},
        title: {type: 'string'},
        artist: {type: 'string'},
        album: {type: 'string'},
        genre: {type: 'string'},
    },
    {
        dataStructure: 'JSON',
    }
);

export async function createSong(data) {
    await connect();

    const repository = client.fetchRepository(schema);

    const song = repository.createEntity(data);

    const id = await repository.save(song);
}