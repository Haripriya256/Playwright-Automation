// 1. includes(), indexOf(), lastIndexOf()

let str = "Hello JavaScript World";

console.log(str.includes("JavaScript"));
console.log(str.indexOf("World"));
console.log(str.lastIndexOf("o"));

// 2. slice() - Extract String

let str2 = "FrontendDeveloper";

console.log(str2.slice(0, 8));  // Frontend
console.log(str2.slice(8));     // Developer
console.log(str2.slice(0, 5));  // First 5 characters
console.log(str2.slice(-5));    // Last 5 characters

// 3. split(), length, join()

let str3 = "apple,banana,orange";

let arr = str3.split(",");

console.log(arr);
console.log(arr.length);
console.log(arr.join(","));

// 4. Find - indexOf(), includes()

let text = "JavaScript is easy to learn";

console.log(text.indexOf("S"));
console.log(text.indexOf("easy"));
console.log(text.includes("JavaScript"));

// 5. replace() and replaceAll()

let message = "I like Java. Java is easy.";

console.log(message.replace("Java", "JavaScript"));

console.log(message.replaceAll("Java", "JavaScript"));

// 6. trimStart(), trimEnd()

let text2 = "   JavaScript   ";

console.log(text2.trimStart());
console.log(text2.trimEnd());

// 7. Check whether Python exists

console.log(text2.includes("Python"));