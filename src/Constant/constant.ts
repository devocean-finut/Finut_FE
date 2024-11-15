export const API_BASE_URL =
  "http://ec2-15-165-175-91.ap-northeast-2.compute.amazonaws.com:8080";

export const levelNames = [
  "아르바이트",
  "인턴",
  "사원",
  "대리",
  "과장",
  "차장",
  "부장",
];

const levelTestNames = [
  { id: 1, nextLevel: "INTERN" },
  { id: 2, nextLevel: "STAFF" },
  { id: 3, nextLevel: "ASSOCIATEMANAGER" },
  { id: 4, nextLevel: "MANAGER" },
  { id: 5, nextLevel: "SENIORMANAGER" },
  { id: 6, nextLevel: "DIRECTOR" },
];
