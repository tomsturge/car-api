import request from "supertest";
import app from "../app";

const mockDb = [
  {
    colour: "Black",
    make: "Ford",
    model: "Fiesta",
    year: 2019,
  },
  {
    colour: "Blue",
    make: "Ford",
    model: "Focus",
    year: 2018,
  },
];

let dbData: any[];

describe("GET / ", () => {
  beforeAll(async (done) => {
    const response = await request(app).get("/all");
    const data = response.body;

    if (data.length === 0) {
      for (const entry of mockDb) {
        await request(app)
          .post("/car")
          .set("Content-Type", "application/json")
          .send(entry);
      }
    }
    done();
  });

  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

  test("It should respond with all cars", (done) =>
    request(app)
      .get("/all")
      .then((res) => {
        dbData = res.body;
        expect(res.status).toBe(200);
        done();
      }));
});

describe("DELETE / ", () => {
  test("It should delete a car", (done) =>
    request(app)
      .delete(`/car/${dbData[0].id}`)
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      }));

  test("It should remove last car", (done) =>
    request(app)
      .delete(`/car/${dbData[1].id}`)
      .then((res) => {
        expect(res.status).toBe(200);
        done();
      }));
});
