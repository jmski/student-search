import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

jest.mock("axios");

describe("fetchStudents", () => {
  describe("when API call is successful", () => {
    it("should return a list of students", async () => {
      const students = [
        {
          id: 1,
          pic: "image1.png",
          firstName: "Jon",
          email: "jon@gmail.com",
          company: "startup",
          skill: "superhero",
          grades: "90, 23, 32, 100",
        },
        {
          id: 2,
          pic: "image2.png",
          firstName: "Michael",
          email: "mike@gmail.com",
          company: "hatchway",
          skill: "villian",
          grades: "100, 90, 32, 100",
        },
      ];
      axios.get.mockResolvedValueOnce(students);

      const result = await fetchStudents();

      expect(axios.get).toHaveBeenCalledWith(`${apiUrl}`);
      expect(result).toEqual(students);
    });
  });
});
