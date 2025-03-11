// document.addEventListener("DOMContentLoaded", function() {
//     loadNotes();
//     loadSchedules();
// });

// // 🔗 Replace with your InfinityFree backend URL
// const BASE_URL = "https://studentPlanner.free.nf/";

// function addNote() {
//     const noteInput = document.getElementById("noteInput").value.trim();
    
//     if (!noteInput) {
//         showToast("Please enter a note!");
//         return;
//     }

//     showModal("Confirm adding this note?", function () {
//         fetch(BASE_URL + "save_note.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "content=" + encodeURIComponent(noteInput)
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Note added successfully!");
//                 document.getElementById("noteInput").value = ""; 
//                 loadNotes();
//             } else {
//                 showToast("Failed to add note.");
//             }
//         })
//         .catch(error => console.error("Error adding note:", error));
//     });
// }

// function addSchedule() {
//     const scheduleDate = document.getElementById("scheduleDate").value;
//     const scheduleInput = document.getElementById("scheduleInput").value.trim();

//     if (!scheduleDate || !scheduleInput) {
//         showToast("Please enter a date and schedule details!");
//         return;
//     }

//     showModal("Confirm adding this schedule?", function () {
//         fetch(BASE_URL + "save_schedule.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "date=" + encodeURIComponent(scheduleDate) + "&content=" + encodeURIComponent(scheduleInput)
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Schedule added successfully!");
//                 document.getElementById("scheduleInput").value = "";
//                 document.getElementById("scheduleDate").value = "";
//                 loadSchedules();
//             } else {
//                 showToast("Failed to add schedule.");
//             }
//         })
//         .catch(error => console.error("Error adding schedule:", error));
//     });
// }

// // ✅ Load Notes from Database
// function loadNotes() {
//     fetch(BASE_URL + "load_notes.php")
//     .then(response => response.json())
//     .then(data => {
//         const notesList = document.getElementById("notesList");
//         notesList.innerHTML = "";
//         data.forEach(note => {
//             const noteDiv = document.createElement("div");
//             noteDiv.className = "card";
//             noteDiv.innerHTML = `
//                 ${note.content} 
//                 <button class='delete-btn' onclick='deleteNote(${note.id}, this)'>X</button>
//             `;
//             notesList.appendChild(noteDiv);
//         });
//     })
//     .catch(error => console.error("Error loading notes:", error));
// }

// // ✅ Load Schedules from Database
// function loadSchedules() {
//     fetch(BASE_URL + "load_schedules.php")
//     .then(response => response.json())
//     .then(data => {
//         const schedulesList = document.getElementById("schedulesList");
//         schedulesList.innerHTML = "";
//         data.forEach(schedule => {
//             const scheduleDiv = document.createElement("div");
//             scheduleDiv.className = "card";
//             scheduleDiv.innerHTML = `
//                 <strong>${schedule.date}</strong><br>${schedule.content}
//                 <button class='delete-btn' onclick='deleteSchedule(${schedule.id}, this)'>X</button>
//             `;
//             schedulesList.appendChild(scheduleDiv);
//         });
//     })
//     .catch(error => console.error("Error loading schedules:", error));
// }

// function deleteNote(id, button) {
//     showModal("Are you sure you want to delete this note?", function () {
//         fetch(BASE_URL + "delete_note.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "id=" + id
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Note deleted successfully!");
//                 button.parentElement.remove();
//             } else {
//                 showToast("Failed to delete note.");
//             }
//         })
//         .catch(error => console.error("Error deleting note:", error));
//     });
// }

// // Delete Schedule
// function deleteSchedule(id, button) {
//     showModal("Are you sure you want to delete this schedule?", function () {
//         fetch(BASE_URL + "delete_schedule.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "id=" + id
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Schedule deleted successfully!");
//                 button.parentElement.remove();
//             } else {
//                 showToast("Failed to delete schedule.");
//             }
//         })
//         .catch(error => console.error("Error deleting schedule:", error));
//     });
// }

// function showModal(message, callback) {
//     document.getElementById("modal-text").innerText = message;
//     document.getElementById("modal").style.display = "flex";

//     document.getElementById("confirm-btn").onclick = function () {
//         document.getElementById("modal").style.display = "none";
//         callback();
//     };

//     document.getElementById("cancel-btn").onclick = function () {
//         document.getElementById("modal").style.display = "none";
//     };
// }

// // Show Success Toast
// function showToast(message) {
//     const toast = document.getElementById("success-toast");
//     toast.innerText = message;
//     toast.classList.add("show");
//     setTimeout(() => toast.classList.remove("show"), 2000);
// }





// // ✅ Add Schedule
// function addSchedule() {
//     const scheduleDate = document.getElementById("scheduleDate").value;
//     const scheduleInput = document.getElementById("scheduleInput").value;
//     if (scheduleDate && scheduleInput.trim()) {
//         fetch("save_schedule.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: `date=${encodeURIComponent(scheduleDate)}&content=${encodeURIComponent(scheduleInput)}`
//         })
//         .then(response => response.text())
//         .then(result => {
//             console.log(result);
//             loadSchedules(); // Reload schedules
//             document.getElementById("scheduleDate").value = "";
//             document.getElementById("scheduleInput").value = "";
//         })
//         .catch(error => console.error("Error saving schedule:", error));
//     }
// }

// // ✅ Add Note
// function addNote() {
//     const noteInput = document.getElementById("noteInput");
//     if (noteInput.value.trim()) {
//         fetch("save_note.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "content=" + encodeURIComponent(noteInput.value)
//         })
//         .then(response => response.text())
//         .then(result => {
//             console.log(result);
//             loadNotes(); // Reload notes
//             noteInput.value = ""; // Clear input
//         })
//         .catch(error => console.error("Error saving note:", error));
//     }
// }


// document.addEventListener("DOMContentLoaded", function() {
//     loadNotes();
//     loadSchedules();
// });


// function addNote() {
//     const noteInput = document.getElementById("noteInput").value.trim();
    
//     if (!noteValue) {
//         showToast("⚠️ Please enter a note!", "error");
//         noteInput.style.border = "2px solid red"; // Highlight input field
//         setTimeout(() => noteInput.style.border = "", 2000);
//         return;
//     }

//     showModal("Confirm adding this note?", function () {
//         fetch("save_note.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "content=" + encodeURIComponent(noteInput)
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Note added successfully!");
//                 document.getElementById("noteInput").value = ""; 
//                 loadNotes();
//             } else {
//                 showToast("Failed to add note.");
//             }
//         })
//         .catch(error => console.error("Error adding note:", error));
//     });
// }

// function addSchedule() {
//     const scheduleDate = document.getElementById("scheduleDate").value;
//     const scheduleInput = document.getElementById("scheduleInput").value.trim();

//     if (!scheduleDate || !scheduleInput) {
//         showToast("Please enter a date and schedule details!");
//         return;
//     }

//     showModal("Confirm adding this schedule?", function () {
//         fetch("save_schedule.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "date=" + encodeURIComponent(scheduleDate) + "&content=" + encodeURIComponent(scheduleInput)
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Schedule added successfully!");
//                 document.getElementById("scheduleInput").value = "";
//                 document.getElementById("scheduleDate").value = "";
//                 loadSchedules();
//             } else {
//                 showToast("Failed to add schedule.");
//             }
//         })
//         .catch(error => console.error("Error adding schedule:", error));
//     });
// }

// // ✅ Load Notes from Database
// function loadNotes() {
//     fetch("load_notes.php")
//     .then(response => response.json())
//     .then(data => {
//         const notesList = document.getElementById("notesList");
//         notesList.innerHTML = "";
//         data.forEach(note => {
//             const noteDiv = document.createElement("div");
//             noteDiv.className = "card";
//             noteDiv.innerHTML = `
//                 ${note.content} 
//                 <button class='delete-btn' onclick='deleteNote(${note.id}, this)'>X</button>
//             `;
//             notesList.appendChild(noteDiv);
//         });
//     })
//     .catch(error => console.error("Error loading notes:", error));
// }

// // ✅ Load Schedules from Database
// function loadSchedules() {
//     fetch("load_schedules.php")
//     .then(response => response.json())
//     .then(data => {
//         const schedulesList = document.getElementById("schedulesList");
//         schedulesList.innerHTML = "";
//         data.forEach(schedule => {
//             const scheduleDiv = document.createElement("div");
//             scheduleDiv.className = "card";
//             scheduleDiv.innerHTML = `
//                 <strong>${schedule.date}</strong><br>${schedule.content}
//                 <button class='delete-btn' onclick='deleteSchedule(${schedule.id}, this)'>X</button>
//             `;
//             schedulesList.appendChild(scheduleDiv);
//         });
//     })
//     .catch(error => console.error("Error loading schedules:", error));
// }

// function deleteNote(id, button) {
//     showModal("Are you sure you want to delete this note?", function () {
//         fetch("delete_note.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "id=" + id
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Note deleted successfully!");
//                 button.parentElement.remove();
//             } else {
//                 showToast("Failed to delete note.");
//             }
//         })
//         .catch(error => console.error("Error deleting note:", error));
//     });
// }

// // Delete Schedule
// function deleteSchedule(id, button) {
//     showModal("Are you sure you want to delete this schedule?", function () {
//         fetch("delete_schedule.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "id=" + id
//         })
//         .then(response => response.text())
//         .then(result => {
//             if (result.includes("success")) {
//                 showToast("Schedule deleted successfully!");
//                 button.parentElement.remove();
//             } else {
//                 showToast("Failed to delete schedule.");
//             }
//         })
//         .catch(error => console.error("Error deleting schedule:", error));
//     });
// }

// function showModal(message, callback) {
//     document.getElementById("modal-text").innerText = message;
//     document.getElementById("modal").style.display = "flex";

//     document.getElementById("confirm-btn").onclick = function () {
//         document.getElementById("modal").style.display = "none";
//         callback();
//     };

//     document.getElementById("cancel-btn").onclick = function () {
//         document.getElementById("modal").style.display = "none";
//     };
// }

// // Show Success Toast
// function showToast(message) {
//     const toast = document.getElementById("success-toast");
//     toast.innerText = message;
//     toast.classList.add("show");
//     setTimeout(() => toast.classList.remove("show"), 2000);
// }





// // ✅ Add Schedule
// function addSchedule() {
//     const scheduleDate = document.getElementById("scheduleDate").value;
//     const scheduleInput = document.getElementById("scheduleInput").value;
//     if (scheduleDate && scheduleInput.trim()) {
//         fetch("save_schedule.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: `date=${encodeURIComponent(scheduleDate)}&content=${encodeURIComponent(scheduleInput)}`
//         })
//         .then(response => response.text())
//         .then(result => {
//             console.log(result);
//             loadSchedules(); // Reload schedules
//             document.getElementById("scheduleDate").value = "";
//             document.getElementById("scheduleInput").value = "";
//         })
//         .catch(error => console.error("Error saving schedule:", error));
//     }
// }

// // ✅ Add Note
// function addNote() {
//     const noteInput = document.getElementById("noteInput");
//     if (noteInput.value.trim()) {
//         fetch("save_note.php", {
//             method: "POST",
//             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//             body: "content=" + encodeURIComponent(noteInput.value)
//         })
//         .then(response => response.text())
//         .then(result => {
//             console.log(result);
//             loadNotes(); // Reload notes
//             noteInput.value = ""; // Clear input
//         })
//         .catch(error => console.error("Error saving note:", error));
//     }
// }


document.addEventListener("DOMContentLoaded", function() {
    loadNotes();
    loadSchedules();
});

function addNote() {
    const noteInput = document.getElementById("noteInput").value.trim();

    if (!noteInput) {
        showToast("⚠️ Please enter a note!");
        return;
    }

    showModal("Confirm adding this note?", function () {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.push({ id: Date.now(), content: noteInput });
        localStorage.setItem("notes", JSON.stringify(notes));

        showToast("✅ Note added successfully!");
        document.getElementById("noteInput").value = "";
        loadNotes();
    });
}

function addSchedule() {
    const scheduleDate = document.getElementById("scheduleDate").value;
    const scheduleInput = document.getElementById("scheduleInput").value.trim();

    if (!scheduleDate || !scheduleInput) {
        showToast("⚠️ Please enter a date and schedule details!");
        return;
    }

    showModal("Confirm adding this schedule?", function () {
        let schedules = JSON.parse(localStorage.getItem("schedules")) || [];
        schedules.push({ id: Date.now(), date: scheduleDate, content: scheduleInput });
        localStorage.setItem("schedules", JSON.stringify(schedules));

        showToast("✅ Schedule added successfully!");
        document.getElementById("scheduleInput").value = "";
        document.getElementById("scheduleDate").value = "";
        loadSchedules();
    });
}

function loadNotes() {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = "";

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(note => {
        const noteDiv = document.createElement("div");
        noteDiv.className = "card";
        noteDiv.innerHTML = `
            ${note.content} 
            <button class='delete-btn' onclick='deleteNote(${note.id})'>X</button>
        `;
        notesList.appendChild(noteDiv);
    });
}

function loadSchedules() {
    const schedulesList = document.getElementById("schedulesList");
    schedulesList.innerHTML = "";

    let schedules = JSON.parse(localStorage.getItem("schedules")) || [];
    schedules.forEach(schedule => {
        const scheduleDiv = document.createElement("div");
        scheduleDiv.className = "card";
        scheduleDiv.innerHTML = `
            <strong>${schedule.date}</strong><br>${schedule.content}
            <button class='delete-btn' onclick='deleteSchedule(${schedule.id})'>X</button>
        `;
        schedulesList.appendChild(scheduleDiv);
    });
}

function deleteNote(id) {
    showModal("Are you sure you want to delete this note?", function () {
        let notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes = notes.filter(note => note.id !== id);
        localStorage.setItem("notes", JSON.stringify(notes));

        showToast("🗑️ Note deleted successfully!");
        loadNotes();
    });
}

function deleteSchedule(id) {
    showModal("Are you sure you want to delete this schedule?", function () {
        let schedules = JSON.parse(localStorage.getItem("schedules")) || [];
        schedules = schedules.filter(schedule => schedule.id !== id);
        localStorage.setItem("schedules", JSON.stringify(schedules));

        showToast("🗑️ Schedule deleted successfully!");
        loadSchedules();
    });
}

function showModal(message, callback) {
    document.getElementById("modal-text").innerText = message;
    document.getElementById("modal").style.display = "flex";

    document.getElementById("confirm-btn").onclick = function () {
        document.getElementById("modal").style.display = "none";
        callback();
    };

    document.getElementById("cancel-btn").onclick = function () {
        document.getElementById("modal").style.display = "none";
    };
}

function showToast(message) {
    const toast = document.getElementById("success-toast");
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}


