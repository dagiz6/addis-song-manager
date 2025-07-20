// src/server.js
import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  return createServer({
    environment,

    models: {
      song: Model,
    },

    seeds(server) {
      server.create("song", {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        year: 2020,
        albumArt:
          "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
      });
      server.create("song", {
        id: 2,
        title: "Wub Aynama",
        artist: "Tilahun Gessesse",
        year: "1992",
        albumArt: "https://i.ytimg.com/vi/Z1w2iiolVQw/maxresdefault.jpg",
      });
      server.create("song", {
        id: 3,
        title: "Barcelona",
        artist: "Ed Sheeran",
        year: "2017",
        albumArt:
          "https://images.genius.com/11d6dfb73fe30af8c34457fdac6a7115.720x720x1.jpg",
      });
      server.create("song", {
        id: 4,
        title: "Moussolou",
        artist: "Oumou Sangaré",
        year: "1989",
        albumArt:
          "https://i1.sndcdn.com/artworks-000118740984-a0wcn5-t500x500.jpg",
      });
      server.create("song", {
        id: 5,
        title: "Haya",
        artist: "Rophnan",
        year: "2022",
        albumArt: "https://i1.sndcdn.com/artworks-opFt5gFkO6z5-0-t500x500.jpg",
      });
      server.create("song", {
        id: 6,
        title: "Nothing Breaks Like a Heart",
        artist: "Mark Ronson ft. Miley Cyrus",
        year: "2018",
        albumArt:
          "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/6b/2d/a2/6b2da292-0cde-c33c-b56b-e3d15ab83cd8/886447521540.jpg/1200x630bf-60.jpg",
      });

    },
    routes() {
      this.namespace = "api";

      this.get("/songs", (schema) => {
        // Return as array of models without wrapping object
        return schema.songs.all().models;
      });

      this.post("/songs", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        // Create and return the full song model
        return schema.songs.create(attrs).attrs;
      });

      this.delete("/songs/:id", (schema, request) => {
        const id = request.params.id;
        schema.songs.find(id).destroy();
        return { success: true };
      });
    },
  });
}
