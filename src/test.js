import { encode } from "@toon-format/toon";

// 1. A Simple Object

const data1 = { name: "Alice", age: 30, city: "Bengaluru" };

const toonString1 = encode(data1);
console.log(toonString1);

// 2. Array of Values

const data2 = { colors: ["red", "green", "blue"] };

const toonString2 = encode(data2);
console.log(toonString2);

// 3. Array of Objects

const data3 = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
};

const toonString3 = encode(data3);
console.log(toonString3);

// 4. Nested Objects

const data4 = {
  user: {
    id: 1,
    name: "Alice",
    profile: { age: 30, city: "Bengaluru" },
  },
};

const toonString4 = encode(data4);
console.log(toonString4);

// 5. Array of Objects With Nested Fields

const data5 = {
  teams: [
    {
      name: "Team Alpha",
      members: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ],
    },
  ],
};

const toonString5 = encode(data5);
console.log(toonString5);
