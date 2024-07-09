// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

// interface User {
//   id: number;
//   role: string;
//   name: string;
//   username: string;
//   email: string;
//   avatar: string;
//   age: number;
// }

// const userList: User[] = [
//   {
//     id: 1,
//     role: "SA",
//     name: "Jason Alexander",
//     username: "jason_alexander",
//     email: "jason@ui-lib.com",
//     avatar: "/assets/images/face-6.jpg",
//     age: 25,
//   },
// ];



// const Mock = axios;

// axios.Post("/api/auth/login").reply(async (config: any) => {
//   try {
//     const { email }: { email: string } = JSON.parse(config.data);
//     const user = userList.find((u) => u.email === email);

//     if (!user) return [400, { message: "Invalid email or password" }];

//     const payload = { user: userList[0] };
//     return [200, payload];
//   } catch (err) {
//     console.error(err);
//     return [500, { message: "Internal server error" }];
//   }
// });

// Mock.onPost("/api/auth/register").reply((config: any) => {
//   try {
//     const { email, username }: { email: string; username: string } = JSON.parse(config.data);
//     const user = userList.find((u) => u.email === email);

//     if (user) return [400, { message: "User already exists!" }];

//     const newUser: User = {
//       id: 2,
//       role: "GUEST",
//       name: "Unknown",
//       age: 25,
//       email: email,
//       username: username,
//       avatar: "/assets/images/face-6.jpg",
//     };

//     userList.push(newUser);

//     const payload = { user: { ...newUser } };
//     return [200, payload];
//   } catch (err) {
//     console.error(err);
//     return [500, { message: "Internal server error" }];
//   }
// });

// Mock.onGet("/api/auth/profile").reply((config: any) => {
//   try {
   

//     const payload = { user: userList[0] };
//     return [200, payload];
//   } catch (err) {
//     console.error(err);
//     return [500, { message: "Internal server error" }];
//   }
// });
