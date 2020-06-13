describe("testing the server", () => {
  it("should run in the testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
