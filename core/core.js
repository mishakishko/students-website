let students = [];
let currentId = 1;

function openModal() {
    document.getElementById("add-student-modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("add-student-modal").style.display = "none";
}

function validateForm() {
    const fields = [
        { id: "first-name-form", name: "First Name" },
        { id: "last-name-form", name: "Last Name" },
        { id: "group-form", name: "Group" },
        { id: "gender-form", name: "Gender" },
        { id: "birthday-form", name: "Birthday" }
    ];
    for (let f of fields) {
        let value = document.getElementById(f.id).value.trim();
        if (!value) { alert(`${f.name} is required`); return false; }
    }
    return true;
}

function addStudent() {
    if (!validateForm()) return;

    let student = {
        id: currentId++,
        firstName: document.getElementById("first-name-form").value,
        lastName: document.getElementById("last-name-form").value,
        group: document.getElementById("group-form").value,
        gender: document.getElementById("gender-form").value,
        birthday: document.getElementById("birthday-form").value,
        active: false,
        selected: false
    };
    students.push(student);
    renderTable();
    closeModal();
    cancelStudent();
}

function cancelStudent() {
    document.getElementById("first-name-form").value = '';
    document.getElementById("last-name-form").value = '';
    document.getElementById("group-form").selectedIndex = 0;
    document.getElementById("gender-form").selectedIndex = 0;
    document.getElementById("birthday-form").value = '';
}

function deleteStudent(id) {
    students = students.filter(s => s.id !== id);
    renderTable();
}

function toggleAllStudents(masterCheckbox) {
    const checked = masterCheckbox.checked;
    students.forEach(s => s.selected = checked);
    renderTable();
}

function renderTable() {
    const tbody = document.getElementById("students-table-body");
    tbody.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        // Checkbox
        const tdCheck = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = !!student.selected;
        checkbox.onclick = () => {
            student.selected = checkbox.checked;
            // оновлюємо головний чекбокс, якщо всі виділені
            document.getElementById("select-all").checked = students.every(s => s.selected);
        };
        tdCheck.appendChild(checkbox);
        row.appendChild(tdCheck);

        // Group
        const tdGroup = document.createElement("td");
        tdGroup.textContent = student.group;
        row.appendChild(tdGroup);

        // Name
        const tdName = document.createElement("td");
        tdName.textContent = `${student.firstName} ${student.lastName}`;
        row.appendChild(tdName);

        // Gender
        const tdGender = document.createElement("td");
        tdGender.textContent = student.gender;
        row.appendChild(tdGender);

        // Birthday
        const tdBirthday = document.createElement("td");
        tdBirthday.textContent = student.birthday;
        row.appendChild(tdBirthday);

        // Status
        const tdStatus = document.createElement("td");
        const statusSpan = document.createElement("span");
        statusSpan.style.color = student.active ? "green" : "red";
        statusSpan.textContent = student.active ? "Active" : "Inactive";
        tdStatus.appendChild(statusSpan);
        row.appendChild(tdStatus);

        // Delete button
        const tdDelete = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteStudent(student.id);
        tdDelete.appendChild(deleteBtn);
        row.appendChild(tdDelete);

        tbody.appendChild(row);
    });

    // Bell indicator - update notification
    updateNotificationIndicator();
}

function updateNotificationIndicator() {
    const activeStudents = students.filter(s => s.active);
    const notificationText = document.getElementById("notification");
    const bellButton = document.querySelector(".header-button-bell");

    if (activeStudents.length > 0) {
        bellButton.classList.add("has-notification");
        notificationText.textContent = `${activeStudents.length} active student${activeStudents.length > 1 ? 's' : ''}`;
        notificationText.classList.add("show");
    } else {
        bellButton.classList.remove("has-notification");
        notificationText.classList.remove("show");
    }
}

function getRandomDuration() {
    return (Math.floor(Math.random() * 11) + 5) * 1000;
}

function activateRandomStudents() {
    students.forEach(s => {
        if (Math.random() > 0.6) {
            s.active = true;
            setTimeout(() => {
                s.active = false;
                renderTable();
            }, getRandomDuration());
        }
    });
    renderTable();
}

// Activate random students every 15 seconds
setInterval(activateRandomStudents, 15000);

// Show notification on bell hover
document.addEventListener("DOMContentLoaded", () => {
    const bellButton = document.querySelector(".header-button-bell");
    const notificationText = document.getElementById("notification");

    bellButton.addEventListener("mouseenter", () => {
        if (students.some(s => s.active)) {
            notificationText.classList.add("show");
        }
    });

    bellButton.addEventListener("mouseleave", () => {
        notificationText.classList.remove("show");
    });
});