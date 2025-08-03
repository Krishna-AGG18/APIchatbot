# ASK.IO 🤖

**A Versatile, Multi-functional Chatbot**

ASK.IO is an AI-powered chatbot built as a personal learning project. It showcases a range of capabilities from natural language conversation to specialized tasks like code explanation and creative writing, all powered by the Google Gemini API.

-----

## ✨ Features

ASK.IO is more than just a chatbot. It's a comprehensive AI assistant capable of:

  * **🗨️ Chatbots:** Engage in natural, flowing conversations.
  * **📄 Text Generators:** Create content, summaries, and more on demand.
  * **✍️ Story Writers:** Get creative with AI-assisted storytelling and scriptwriting.
  * **🧠 Code Explainers:** Understand complex code snippets with clear, concise explanations.
  * **📚 Translators:** Instantly translate text between multiple languages.

## 🚀 Live Demo

[ASKIO](https://askio.netlify.app/)

## 📸 Screenshot

*(To add a screenshot, save an image of your app in your repository (e.g., in an `images` folder) and update the path above.)*

## 🛠️ Technologies Used

This project was a hands-on learning experience focused on modern web development and AI integration. The following technologies were used:

  * **Frontend:**
      * **React.js:** A robust JavaScript library for building the user interface.
      * **Tailwind CSS:** A utility-first CSS framework for a responsive and modern design.
      * **`react.bits`:** For the dynamic, visually appealing background.
      * **`ogl`:** A lightweight WebGL library used for visual effects.
  * **Backend & AI:**
      * **Gemini API:** The core AI engine providing the generative text capabilities.
      * **`@google/genai`:** The official SDK for interacting with the Gemini API.

## 📦 Dependencies

Here is a list of the key dependencies used in this project:

```json
{
  "dependencies": {
    "@google/genai": "^1.12.0",
    "ogl": "^1.0.11",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.7.1",
    "tailwindcss": "^4.1.11"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.11"
  }
}
```

## 💻 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

  * Node.js (v18 or higher)
  * npm
  * A Gemini API key from [Google AI for Developers](https://ai.google.dev/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```
2.  **Install the dependencies:**
    ```bash
    npm install
    ```
3.  **Set up your environment variables:**
      * Create a `.env` file in the root of your project.
      * Add your Gemini API key to this file:
    <!-- end list -->
    ```
    VITE_GEMINI_API_KEY=YOUR_API_KEY_HERE
    ```
      * Replace `YOUR_API_KEY_HERE` with the key you obtained from Google AI Studio.

### Running the App

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or a similar address).

## 📄 License

This project is open-source and available under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

Feel free to add a "Contributions" section if you're open to other developers contributing to your project. Good luck\!
