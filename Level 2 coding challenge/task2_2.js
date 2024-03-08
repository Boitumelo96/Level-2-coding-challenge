function triangle(n, mode = "left") {
  if (!["left", "right", "isosceles"].includes(mode)) {
    throw new Error("Invalid mode. Choose from 'left', 'right', or 'isosceles'.");
  }

  if (mode === "right") {
    for (let i = 0; i < n; i++) {
      const spaces = " ".repeat(n - i - 1);
      const hashes = "#".repeat(i + 1);
      console.log(spaces + hashes);
    }
  } else if (mode === "isosceles") {
    for (let i = 0; i < n; i++) {
      const spaces = " ".repeat(n - i - 1);
      const hashes = "#".repeat(2 * i + 1);
      console.log(spaces + hashes);
    }
  } else {  
    for (let i = 0; i < n; i++) {
      const hashes = "#".repeat(i + 1);
      console.log(hashes);
    }
  }
}

// Examples
triangle(3);  
console.log();

triangle(3, "left");  
console.log();

triangle(3, "right");
console.log();

triangle(3, "isosceles");
console.log();

try {
  triangle(-3, "invalidMode");  
} catch (error) {
  console.error(error.message);
}
module.exports = {triangle};