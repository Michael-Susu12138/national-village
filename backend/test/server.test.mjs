import chai, { expect } from "chai";
import chaiHttp from "chai-http";
// Make sure to export your server (`app`) in your server file for the import below
import server from "../server.mjs";

// Use chai with chaiHttp
chai.use(chaiHttp);

describe("API Tests", function () {
  after(() => {
    server.close(); // Make sure to close your server after tests
  });

  // Test for base endpoint
  it("should get the base endpoint", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello");
        done();
      });
  });

  // Test for /api/data endpoint
  it("should get the /api/data endpoint", (done) => {
    chai
      .request(server)
      .get("/api/data")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property("message")
          .eql("Hello from the server");
        done();
      });
  });

  // Add more tests as needed for other endpoints
});
describe("Restaurant API Routes", function () {
  after(() => {
    server.close();
  });

  // Test GET all restaurants
  it("GET /api/restaurant", (done) => {
    chai
      .request(server)
      .get("/api/restaurant")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  // Test POST create restaurant
  it("POST /api/restaurant/add", (done) => {
    const newRestaurant = {
      name: "Test Restaurant",
      location: "Test Location",
      category: "something",
    };
    chai
      .request(server)
      .post("/api/restaurant/add")
      .send(newRestaurant)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.include(newRestaurant);
        done();
      });
  });

  // Test PUT update restaurant
  it("PUT /api/restaurant/update", (done) => {
    const updateData = {
      name: "Updated Name",
    };
    chai
      .request(server)
      .put("/api/restaurant/update")
      .send({
        searchCriteria: { name: "Test Restaurant" },
        updateData: updateData,
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.name).to.equal(updateData.name);
        done();
      });
  });

  // Test DELETE all restaurants
  it("DELETE /api/restaurant/delete-all", (done) => {
    chai
      .request(server)
      .delete("/api/restaurant/delete-all")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal(
          "All restaurants have been deleted successfully."
        );
        done();
      });
  });

  // Test GET search restaurants
  it("GET /api/restaurant/search", (done) => {
    chai
      .request(server)
      .get("/api/restaurant/search?name=Updated")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });
});

describe("User API Routes", function () {
  after(() => {
    server.close(); // Ensure the server is closed after tests
  });

  // Test GET all users
  it("GET /api/user - requires authentication", (done) => {
    chai
      .request(server)
      .get("/api/user")
      .end((err, res) => {
        expect(res).to.have.status(401); // Unauthenticated
        done();
      });
  });

  //   // Test POST create user
  //   it("POST /api/user/add - create a user", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/user/add")
  //       .send({
  //         username: "testuser",
  //         email: "test@example.com",
  //         password: "password123",
  //       })
  //       .end((err, res) => {
  //         expect(res).to.have.status(201);
  //         expect(res.body).to.have.property("email", "test@example.com");
  //         done();
  //       });
  //   });

  //   // Test PUT update user
  //   it("PUT /api/user/update - update a user", (done) => {
  //     chai
  //       .request(server)
  //       .put("/api/user/update")
  //       .send({
  //         searchCriteria: { email: "test@example.com" },
  //         updateData: { username: "updateduser" },
  //       })
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body).to.have.property("username", "updateduser");
  //         done();
  //       });
  //   });

  // Test DELETE delete user
  //   it("DELETE /api/user/delete - delete a user", (done) => {
  //     chai
  //       .request(server)
  //       .delete("/api/user/delete")
  //       .send({ email: "test@example.com" })
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body).to.have.property(
  //           "message",
  //           "User deleted successfully."
  //         );
  //         done();
  //       });
  //   });

  // Test POST login user
  //   it("POST /api/user/login - login a user", (done) => {
  //     chai
  //       .request(server)
  //       .post("/api/user/login")
  //       .send({
  //         email: "test@example.com",
  //         password: "password123",
  //       })
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body).to.have.property("message", "Logged in successfully");
  //         done();
  //       });
  //   });
});
