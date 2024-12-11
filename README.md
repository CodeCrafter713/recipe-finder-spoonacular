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
- Add more advanced filtering
- Implement user authentication
- Create shopping list feature