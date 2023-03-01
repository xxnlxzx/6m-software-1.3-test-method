/*
    Task
    - Implement a switch statement to check against `env` variable.
    - If `env` is "DEV", no change to `databaseCredential`.
    - If `env` is "STAGE", modify `databaseCredential` to "stageuser:password".
    - If `env` is "PROD", modify `databaseCredential` to "produser:password"
    
*/

const env = "DEV"; // Toggle between these possible values "DEV" | "STAGE" | "PROD"
let databaseCredential = "devuser:password";

// Task: Add code here

if (env === "STAGE") {
  databaseCredential = "stageuser:password";
} 
else if (env === "PROD") {
  databaseCredential = "produser:password";
}

console.log(`Database credential for environment ${env} is ${databaseCredential}`);