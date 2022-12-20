const {
  orderdates,
  substring,
  formatDate1,
  formatDate2,
  formattedDateRu,
  daysBetween,
  workdaysBetween,
} = require("../date_test/util");
const parseISO = require("date-fns/parseISO");

test("Test orderdates date", () => {
  expect(
    orderdates([parseISO("2010-10-20"), parseISO("2001-05-28")])
  ).toStrictEqual([parseISO("2001-05-28"), parseISO("2010-10-20")]);
});

test("Test substring", () => {
  expect(substring("Hola mundo", 3, 6)).toBe("a m");
});

test("Test formatDate1", () => {
  expect(formatDate1(parseISO("2010-10-20"))).toBe("10/20/2010");
});
test("Test formatDate2", () => {
  expect(formatDate2(parseISO("2010-10-20"))).toBe("20-10-2010");
});
test("Test formattedDateRu", () => {
  expect(formattedDateRu(parseISO("2010-10-20"))).toBe("октября 20, 2010");
});
test("Test daysBetween", () => {
  expect(daysBetween(parseISO("2010-10-20"), parseISO("2010-10-22"))).toBe(2);
});
test("Test workdaysBetween", () => {
  expect(workdaysBetween(parseISO("2010-10-20"), parseISO("2010-10-23"))).toBe(
    3
  );
});
