# Fridge-to-Table Recipe Finder

## Overview
A Next.js application that helps users find recipes based on ingredients they have in their fridge/pantry.

## Features
- Input ingredients you have on hand
- Find recipes using those ingredients
- Filter recipes by dietary restrictions
- Detailed recipe information

## Tech Stack
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Spoonacular API

## Prerequisites
- Node.js (v18+)
- Spoonacular API Key

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file and add your Spoonacular API Key:
   ```
   NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Architectural Decisions
- Used Server Components for improved performance
- Implemented client-side filtering and search
- Modular component structure
- Error handling for API requests
- Responsive design with Tailwind CSS

## Deployment
Deployed on Vercel: [Insert Vercel Link]

## Future Improvements
- When I want to filter the result, we have to send the API request again. Normally, we filter the result in frontend after getting whole data but for this case, I thought that based on that criteria, there could be more result if we get from backend again.
- Also I give limitation of result to 10. We could increase if we need.

## Development Process

- Created empty Next.js project
- Installed Tailwind CSS for styling
- Got the API key from [Spoonacular](https://spoonacular.com)
- Tested API key and response type using postman
- Built dashboard UI and integrated getting recipe API
- Added error handling process
- Implemented detail view page


## AI Usage
About AI tool, I am using ChatGPT and I only use this tool if there is any issues or bugs while development. For writing code and integration, I think human's work is much valide and clean.