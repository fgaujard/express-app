const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    /** Code your test here */
    const response = await request(app).get("/api/movies");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
  it("should return one movie", async () => {
    /** Code your test here */
    const response = await request(app).get("/api/movies").send("1");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
