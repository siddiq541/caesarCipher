const {
  codeLetter,
  calculateNewIndex,
  convertLetterToIndex,
  convertIndexToLetter,
} = require("./caeserChipher.js");

describe("Caesar Cipher Encode/Decode", () => {
  test("encode single letter correctly (shift 3)", () => {
    expect(codeLetter("a", 3, true)).toBe("d"); // a->d
  });

  test("decode single letter correctly (shift 3)", () => {
    expect(codeLetter("d", 3, false)).toBe("a"); // d->a
  });

  test("wrap around at end of alphabet", () => {
    expect(codeLetter("z", 1, true)).toBe("a"); // z->a
  });

  test("non-alphabetic characters stay unchanged", () => {
    expect(codeLetter(" ", 5, true)).toBe(" "); // space remains
    expect(codeLetter("1", 5, true)).toBe("1");
  });

  test("encode and decode full word with key 2 returns original", () => {
    const word = "hello";
    const encoded = word
      .split("")
      .map((ch) => codeLetter(ch, 2, true))
      .join("");
    const decoded = encoded
      .split("")
      .map((ch) => codeLetter(ch, 2, false))
      .join("");
    expect(decoded).toBe(word);
  });
  
  test("decode wraps alphabet correctly when index goes below 0", () => {
    expect(codeLetter("a", 3, false)).toBe("x");
  });

  test("encode sentence and keep punctuation/spaces unchanged", () => {
    const input = "hello world!";
    const encoded = input
      .split("")
      .map((ch) => codeLetter(ch, 3, true))
      .join("");

    expect(encoded).toBe("khoor zruog!");
  });
});
