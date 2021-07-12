import getJWTFromAuthHeader from "../getJWTFromAuthHeader";

describe("Header helper functions", () => {
  it("should return jwt token from auth header", () => {
    const authHeader = "Bearer jwtToken-value";
    const jwtToken = getJWTFromAuthHeader(authHeader);
    expect(jwtToken).toEqual("jwtToken-value");
  });

  it("should return empty string if no auth header is present", () => {
    const jwtToken = getJWTFromAuthHeader();
    expect(jwtToken).toEqual("");
  });
});
