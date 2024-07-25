// Activity 1: Understanding Promises
// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const Hello = new Promise(function (resolve, reject) {
    setTimeout(() => {
      // console.log("Hi, from Harsh");
      resolve("Hi, from Harsh");
    }, 2000);
  });
  Hello.then(console.log);
  
  // Task 2:
  const Bye = new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = false;
      if (!error) {
        resolve("Bye, from Harsh");
      } else {
        reject("Not ready to say bye");
      }
    }, 2000);
  });
  Bye.then(console.log).catch(console.log);
  
  //   Activity 2: Chaining Promises
  // Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
  
  function fetchData(simulatedDelay, message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(message), simulatedDelay);
    });
  }
  
  fetchData(2000, "Fetched first batch of data!")
    .then((message) => {
      console.log(message);
      return fetchData(3000, "Fetched second batch of data!");
    })
    .then((message) => {
      console.log(message);
      return fetchData(1000, "Fetched third batch of data!");
    })
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  
  // Activity 3: Using Async/Await
  // Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
  // Usage:
  let RejectedME = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
  });
  
  logResolvedValue(RejectedME);
  
  async function logResolvedValue(RejectedME) {
    try {
      let value = await RejectedME;
      console.log(value);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
  // Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
  const LetsWait = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({ username: "Lavania", password: "123" });
      } else {
        reject("ERROR: JS went wrong"); //gives error
      }
    }, 1000);
  });
  
  async function consumeLetsWait() {
    try {
      const response = await LetsWait;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  consumeLetsWait();
  
  // Activity 4: Fetching Data from an API
  // Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
  
  fetch("https://api.github.com/users/harshl0306")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  // Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
  
  async function getAllUsers() {
    try {
      const response = await fetch("https://api.github.com/users/harshl0306");
      const data = await response.json(); // conversion of format also takes time so it is important to make it awaik
      console.log(data);
    } catch (error) {
      console.log("Data is not received", error);
    }
  }
  getAllUsers();
  
  // Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
  
  Promise.all([Hello, Bye, RejectedME])
    .then((results) => {
      console.log("Results from existing promises:");
      results.forEach((result, index) => {
        console.log(`Promise ${index + 1} result: ${result}`);
      });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  
  // Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
  
  Promise.race([Hello, Bye, RejectedME])
    .then((result) => {
      console.log("First existing promise to resolve:");
      console.log(result);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
  