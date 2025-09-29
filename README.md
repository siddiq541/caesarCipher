# Caesar Cipher Encoder/Decoder with Jest Testing

## ✅ Project Purpose
This project originally contained working JavaScript code for encoding and decoding text using a Caesar cipher.  
The main goal of the project was **not to build the functionality**, but to **add automated tests** using Jest to confirm the logic works correctly.

---

The core functions being tested include:

- `codeLetter`
- `calculateNewIndex`
- `convertLetterToIndex`
- `convertIndexToLetter`

These functions handle the logic for encoding and decoding characters using a key.

## ✅ What Was Added

- A Jest test file (`encodeDecode.test.js`) was added with multiple test cases.
- `package.json` was updated to enable Jest.

---

## ✅ Files Explained

### 📌 `encodeDecode.js`
Contains JavaScript functions used for encoding/decoding:
- `codeLetter`
- `calculateNewIndex`
- `convertLetterToIndex`
- `convertIndexToLetter`

These functions are exported so Jest can test them.

---

### 📌 `encodeDecode.test.js`
This file contains all the Jest tests.  
It checks:

✅ Encode a single letter  
✅ Decode a single letter  
✅ Wrap-around when encoding (`z → a`)  
✅ Non-letter characters stay unchanged  
✅ Full encode/decode returns original  
✅ Decode wraps alphabet correctly when index < 0   
✅ Encode sentence and keep punctuation/spaces  


---

## ✅ Why Testing Was Added

The purpose of adding Jest tests is to:

- Verify the existing code works correctly
- Catch bugs early
- Allow safe future changes
- Practice automated unit testing

This project demonstrates how to apply testing to existing code rather than writing tests first.

---

## ✅ Setup Instructions

1. Clone the repository and install dependencies:

    ```bash
    npm install
    ```
2. Run the tests:
    ```bash
    npm test
    ```
---

## 👤 Author

Muhammad Siddiq