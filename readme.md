🎓 Student management CMS
A lightweight, interactive web application for managing student records. This project features a clean user interface, CRUD operations, and a real-time activity simulation system using vanilla JavaScript.

✨ Features
1. Student management (CRUD)
Add Students: A modal form allows you to create new student records with validation (First Name, Last Name, Group, Gender, Birthday).

Delete students: Remove individual students from the list.

View data: Organized tabular view of all students.

2. UI/UX (User interface/User experiense)
Bulk Selection: A "Select All" checkbox to manage multiple rows (UI logic).

Status indicators: Visual feedback for Active (Green) and Inactive (Red) states.

Responsive design: Built with Flexbox for a layout that adapts to different screen sizes.

3. 🔔 Real-time activity simulation
The application includes a background script that simulates user activity:

Random activation: Every 15 seconds, a random selection of students becomes "Active".

Dynamic duration: Students remain active for a random duration between 5 to 15 seconds before returning to "Inactive".

Notification System:

The Bell icon in the header pulses when students are active.

A badge/tooltip displays the exact count of currently active students.

🛠️ Technologies used
HTML5: Semantic structure.

CSS3: Custom styling, Flexbox layout, and CSS animations (@keyframes pulse).

JavaScript (ES6+): DOM manipulation, event handling, and interval-based logic for the simulation.

📂 Project structure
Based on the file paths in the code, the recommended project structure is:

```text
project-root/
│
├── pages/
│   ├── students.html       # (Linked in sidebar)
│   ├── dashboard.html      # Main application file
│   └── statistics.html    
│
├── styles/
│   └── style.css           # Global styles and layout
│
├── images/
│   ├── bell.jpg            # Notification icon
│   └── profile.png         # User profile image
│
├── core/
│   └── core.js             # Shared core scripts
│
└── README.md               # Project documentation
```
🚀 How to run
Clone or Download the repository to your local machine.

Ensure the folder structure matches the one above (images and styles should be in their respective folders relative to the HTML file).

Open pages/students.html in any modern web browser (Chrome, Firefox, Edge).

Test the app:

Click the + button to add a few students.

Wait 15 seconds to see the "Active" status simulation and the notification bell animation kick in.


📄 License
This project is open-source and available for educational purposes.