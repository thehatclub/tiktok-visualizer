# TikTok Data Visualizer

## Overview

TikTok Data Visualizer is a React-based web application that allows users to upload their TikTok data in JSON format and visualize key information like profile details, search history, chats, and comments. The app features different pages to navigate between your TikTok activity, providing an intuitive way to explore your data.

## Features

- **Profile Page**: Displays user profile information such as username, email, birth date, and profile picture.
- **Search History**: Displays a list of previous search queries with their respective dates.
- **Chat Interface**: Visualizes chat conversations between the user and others with sortable options for "Newest to Oldest" and "Oldest to Newest."
- **Comments Page**: Shows user comments with associated dates in a clean, readable format.
- **JSON File Upload**: Upload your TikTok JSON data to populate the application with your personal information and interactions.

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS (custom styles for the layout and chat bubbles)
- **State Management**: React hooks (useState)

## How It Works

1. **Upload**: The app allows users to upload a JSON file containing TikTok data. The file is then parsed and rendered in the UI.
2. **Navigation**: The sidebar allows users to switch between different pages to view the Profile, Search History, Chats, and Comments.
3. **Sorting Chats**: Users can sort chat messages by "Newest to Oldest" or "Oldest to Newest" on the Chat page.
4. **Data Visualization**: Each section of the app visualizes the corresponding data in an easy-to-read format.

## Setup

To set up and run this project locally, follow these steps:

### Prerequisites

- **Node.js** (v12 or higher)
- **npm** or **yarn**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/tiktok-data-visualizer.git
   ```

2. Navigate into the project directory:

   ```bash
   cd tiktok-data-visualizer
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

   or, if you prefer `yarn`:

   ```bash
   yarn install
   ```

### Running the App

To start the development server, run:

```bash
npm start
```

or with `yarn`:

```bash
yarn start
```

This will start the app on `http://localhost:3000`. You can open your browser and visit this URL to use the application.

### Build for Production

To build the app for production, run:

```bash
npm run build
```

or with `yarn`:

```bash
yarn build
```

This will create an optimized version of the application in the `build/` folder.

## Usage

1. Open the app in your browser.
2. Upload your TikTok JSON data by clicking the "Choose File" button.
3. Navigate between pages using the sidebar:
   - **Profile**: View your personal details.
   - **Search History**: View all your search terms and their dates.
   - **Chat**: View and sort your direct message history, organized by individual users.
   - **Comments**: View the comments you’ve made with timestamps.
4. Sort chats by selecting "Newest to Oldest" or "Oldest to Newest" from the dropdown in the Chat section.

## License

This project is licensed under the MIT License.

---
