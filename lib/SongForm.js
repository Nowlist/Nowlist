export default function SongForm() {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const formData = Object.fromEntries(form.entries());

        const res = await fetch('/api/songs', {
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const result = await res.json();
        console.log(result);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="artist">Artist</label>
            <input type="text" name="artist" id="artist" />
            <label htmlFor="album">Album</label>
            <input type="text" name="album" id="album" />
            <label htmlFor="genre">Genre</label>
            <input type="text" name="genre" id="genre" />
            <button type="submit">Add Song</button>
        </form>
    );
}