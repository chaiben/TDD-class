const sumar = require('../calculadora');


test("sumar 1 + 2 debaria devolver 3", () => {
  expect(sumar("1,2")).toBe(3)
})

test("recibe string vacío y retorna 0", () => {
  expect(sumar("")).toBe(0);
});

test("recibe vacio y retorna 0", () => {
  expect(sumar()).toBe(0);
});

test("recibe string con 1 caracter", () => {
  expect(sumar("3")).toBe(3);
})

test("recibe null y retorna 0", () => {
  expect(sumar(null)).toBe(0);
})

test("sumar 1 + 2 + 4 + 10 debaria devolver 17", () => {
  expect(sumar("1,2,4,10")).toBe(17)
})
test("sumar 1 + 2 + 4 + 10 con espacios debaria devolver 17", () => {
  expect(sumar(" 1, 2, 4, 10 ")).toBe(17)
})