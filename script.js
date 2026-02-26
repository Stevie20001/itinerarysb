// LOGIN FUNCTION
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "belle123" && pass === "iloveyou") {
        localStorage.setItem("user", user);
        window.location.href = "welcome.html";
    } else {
        alert("Username atau password salah!");
    }
}

// PAGE PROTECTION + LOAD DATA
window.onload = function() {
    let user = localStorage.getItem("user");
    let path = window.location.pathname;

    if ((path.includes("welcome.html") || path.includes("itinerary.html")) && !user) {
        window.location.href = "index.html";
    }

    if (document.getElementById("welcomeText") && user) {
        document.getElementById("welcomeText").innerText = "Welcome, Belle ❤️";
    }

    if (document.getElementById("selectedDate")) {
        let date = localStorage.getItem("tripDate");
        document.getElementById("selectedDate").innerText = "Date: " + date;
        loadItinerary(date);
    }
}

// GO TO ITINERARY
function goToItinerary() {
    let date = document.getElementById("tripDate").value;

    if (!date) {
        alert("Silakan pilih tanggal dulu!");
        return;
    }

    localStorage.setItem("tripDate", date);
    window.location.href = "itinerary.html";
}

// LOAD ITINERARY BASED ON DATE
function loadItinerary(date) {
    let timeline = document.getElementById("timeline");

    let activities = {
        "2026-03-01": [
            {time: "08:00", activity: "Breakfast at Hotel"},
            {time: "10:00", activity: "Beach Walk"},
            {time: "19:00", activity: "Romantic Dinner"}
        ],
        "2026-03-02": [
            {time: "09:00", activity: "City Tour"},
            {time: "13:00", activity: "Lunch at Cafe"},
            {time: "18:00", activity: "Sunset Spot"}
        ]
    };

    timeline.innerHTML = "";

    if (activities[date]) {
        activities[date].forEach(item => {
            timeline.innerHTML += `
                <div class="activity">
                    <h4>${item.time}</h4>
                    <p>${item.activity}</p>
                </div>
            `;
        });
    } else {
        timeline.innerHTML = "<p>No itinerary available for this date.</p>";
    }
}

// LOGOUT
function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}
