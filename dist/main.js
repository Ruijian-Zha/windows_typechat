"use strict";

// Import helper for default imports
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

// Enable ES module interop
Object.defineProperty(exports, "__esModule", { value: true });

// Import required modules
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const typechat_1 = require("typechat");

// Load environment variables (TODO: use local .env file)
dotenv_1.default.config({ path: path_1.default.join(__dirname, "../../../.env") });

// Create a language model instance
const model = (0, typechat_1.createLanguageModel)(process.env);

// Read schema from a file
const schema = fs_1.default.readFileSync(path_1.default.join(__dirname, "windowActionsSchema.ts"), "utf8");

// Create a JSON translator for the schema
const translator = (0, typechat_1.createJsonTranslator)(model, schema, "WindowActions");

// Configure the validator to remove null values
translator.validator.stripNulls = true;

const fs = require('fs');
const outputFilePath = './output.txt';

// Check if output.txt exists; if so, clear its contents
if (fs.existsSync(outputFilePath)) {
    fs.writeFileSync(outputFilePath, '');
}

const output = fs.createWriteStream(outputFilePath, { flags: 'a' });

// Function to log to both console and file
const logOutput = (message) => {
    console.log(message);
    output.write(message + '\n');
};

// Main function to process requests
(0, typechat_1.processRequests)("📅> ", process.argv[2], async (request) => {
    
    // Translate the request
    const response = await translator.translate(request);
    
    // Check for translation success and log message if failed
    if (!response.success) {
        logOutput(response.message);
        return;
    }
    
    // Extract and log translated data
    const windowActions = response.data;
    logOutput(JSON.stringify(windowActions, undefined, 2));
    
    // Check for unknown actions and log them
    if (windowActions && windowActions.actions && windowActions.actions.some(item => item.actionType === "unknown")) {
        logOutput("I didn't understand the following:");
        for (const action of windowActions.actions) {
            if (action.actionType === "unknown")
                logOutput(action.text);
        }
        return;
    }
});
