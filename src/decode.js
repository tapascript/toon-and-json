import { decode } from "@toon-format/toon";

const toonString = `
users[2]{id,name,role}:
  1,Alice,admin
  2,Bob,user
`;

const jsonObject = decode(toonString);
console.log(jsonObject);
