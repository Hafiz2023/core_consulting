/**
 * db.ts
 * This file handles reading and writing JSON data to simulate a database.
 * It uses the Node.js 'fs' and 'path' modules to interact with the file system.
 */
import fs from 'fs';
import path from 'path';

// Define the directory where JSON data files will be stored
const dataDir = path.join(process.cwd(), 'src/data');

// Ensure data directory exists on startup
if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
}

/**
 * Reads JSON data from a specified file.
 * Returns an empty array if the file doesn't exist or if parsing fails.
 */
export const getJSONData = (filename: string) => {
    const filePath = path.join(dataDir, filename);
    if (!fs.existsSync(filePath)) {
        return [];
    }
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    try {
        return JSON.parse(fileContent);
    } catch {
        // Ignore parsing errors and return empty array
        return [];
    }
};

/**
 * Appends new data to a specified JSON file.
 * Adds an auto-generated 'id' and 'createdAt' timestamp to the record.
 */
export const saveJSONData = (filename: string, data: Record<string, unknown>) => {
    const filePath = path.join(dataDir, filename);
    const currentData = getJSONData(filename);
    currentData.push({ ...data, id: Date.now().toString(), createdAt: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2));
    return currentData;
};
