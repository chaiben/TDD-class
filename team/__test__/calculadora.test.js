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

test("1n2n3 shoud return 6", () => {
  expect(sumar("1n2n3")).toBe(6);
})

test("Seleccionando el delimitador deseado en la posición //;\n1;2, sea igual a 3", () => {
  expect(sumar("//;\n1;2")).toBe(3);
})

test("Seleccionando el delimitador deseado en la posición //.\n1.2, sea igual a 3", () => {
  expect(sumar("//.\n1.2")).toBe(3);
})

test("El string contiene numeros negativos y devuelve error", () => {
  expect(sumar("-10")).toBe("Los números negativos no están permitidos. -10");
});

test("El string contiene numeros negativos y devuelve error 2", () => {
  expect(sumar("-10,2,-20,7")).toBe("Los números negativos no están permitidos. -10,-20");
});

// test("El string contiene al menos un número negativo y devuelve error 2", () => {
//   expect(sumar("-10,2,-20,7")).toThrow('Los números negativos no están permitidos. -10,-20');

// });
