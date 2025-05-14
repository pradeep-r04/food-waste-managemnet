# 🍽️ Daawat - Food Waste Management Web App

**Daawat** is a web-based platform designed to combat food wastage by connecting individuals and organizations who want to share surplus food with those who need it. The platform allows users to **host** food events (like leftovers from parties, community meals, etc.) and others to **attend** them using a simple and interactive interface.

## 🌟 Features

- 🔐 Google Authentication via Firebase   
- 📍 Real-time food event listing with geolocation using Leaflet.js  
- 🎯 Separate interfaces to **host** and **attend** food events  
- 🖼️ Interactive image slider for awareness and impact   
- 📚 Hero's Board highlighting real-life stories of food sharing  
- 🧭 Responsive UI with sticky header and elegant footer with social links  

## 🔧 Tech Stack

| Layer        | Tools / Frameworks                          |
|--------------|---------------------------------------------|
| Frontend     | HTML5, CSS3, JavaScript, Leaflet.js         |
| Backend      | Firebase (Realtime Database + Auth)         |
| Authentication | Firebase Google Authentication            |
| Hosting      | Firebase Hosting or GitHub Pages            |

## 🚀 How It Works

### 🔑 Authentication
- Users can sign in using their Google account to host or attend events.   

### 🎉 Hosting an Event
- Fill in event details (location, description, date/time).  
- Event is added to Firebase and displayed on the map for nearby users.    

### 🍴 Attending an Event
- Browse nearby food events via interactive map.  
- View event details and RSVP if desired.  

### 🗺️ Map Integration 
- Leaflet.js displays geolocated food events. 
- Uses HTML5 geolocation to center map on user's location. 

## 📁 Project Structure

```bash
Daawat/
├── index.html            # Landing page with slider and host/attend options
├── host.html             # Page for hosting food events
├── attend.html           # Page to view and attend events
├── login.html            # Google login page
├── style.css             # Stylesheet for layout and responsiveness
├── script.js             # Image slider and menu toggle logic
├── firebase.js           # Firebase config and logic
├── /images               # All image assets used in the slider and site
└── README.md             # Project documentation

## 🔐 Firebase Setup
1. Create a Firebase project.  
2. Enable Authentication > Sign-In Method > Google.  
3. Create a Realtime Database and set rules:
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
4. Add your Firebase config to firebase.js.

##📌 Future Improvements
1. Email/SMS notification for attendees  
2. Admin panel for event moderation  
3. Event attendance tracking  
4. Chat functionality between host and attendee  

## 🙌 Acknowledgements
Inspired by real issues of food wastage in India and successful community-driven food sharing initiatives.


## Connect with me:
| Name    | Email              | LinkedIn                                      | GitHub                      | Instagram                     |
|---------|--------------------|-----------------------------------------------|-----------------------------|-------------------------------|
| Pradeep | [Email](pradeep.singh04r@gmail.com)  | [LinkedIn](https://linkedin.com/in/pradeep-singh4) | [GitHub](https://github.com/pradeep-r04) | [Instagram](https://instagram.com/whypradeeep) |  
