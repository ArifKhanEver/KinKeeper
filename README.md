# KinKeeper — Keep Your Friendships Alive

**KinKeeper** is a modern personal relationship management tool designed to help you nurture and maintain your friendships. In a fast-paced digital world, it’s easy to lose track of time. KinKeeper ensures you stay connected with the people who matter most by tracking interactions and setting contact goals.

---

## Live Demo
Live link: https://kin-keeper-app.netlify.app/

---

## Technologies Used
* **React.js** (Frontend Library)
* **React Router DOM** (Navigation & Routing)
* **Tailwind CSS** (Styling & Responsiveness)
* **Recharts** (Data Visualization)
* **React Icons** (Iconography)
* **React Hot Toast** (User Notifications)
* **Context API** (State Management)

---

## Key Features

### 1. Dynamic Friendship Dashboard
A clean, minimalist home page featuring a banner with interaction summaries (Total Friends, Overdue, etc.) and a 4-column grid layout for friend profiles. Each card dynamically displays friendship status (**Overdue**, **Almost Due**, or **On-Track**) with color-coded alerts based on the Figma design.

### 2. Real-time Interaction Logging
Inside the **Friend Details Page**, users can log instant check-ins via Call, Text, or Video buttons. Every interaction is automatically timestamped and added to the global timeline, accompanied by sleek toast notifications for immediate feedback.

### 3. Friendship Analytics & Filtering
A dedicated **Stats Page** featuring interactive Pie Charts (powered by Recharts) to visualize the balance between different interaction types. Additionally, the **Timeline Page** includes a robust filtering system, allowing users to drill down into specific interaction histories (e.g., only viewing "Video Calls").

---

## Screen Previews
* **Home:** Banner with summary stats and friend cards.
* **Details:** Two-column layout with friend info, relationship goals, and quick actions.
* **Timeline:** Chronological history of all logged check-ins.
* **Stats:** Visual breakdown of communication habits.

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ArifKhanEver/KinKeeper

2. **Navigate to the project directory:**
   ```bash
   cd keenkeeper

3. **Install dependencies:**
   ```bash
   npm install

4. **Run the application**
   ```bash
   npm run dev
