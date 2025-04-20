
const addContactForm = document.getElementById("addContactForm");
const contactsTableBody = document.getElementById("contactsTableBody");

addContactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${tel}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td class="action-buttons">
            <button class="edit-btn">Sửa</button>
            <button class="delete-btn">Xóa</button>
        </td>
    `;

    contactsTableBody.appendChild(newRow);
    addContactForm.reset();
});

contactsTableBody.addEventListener("click", function(event) {
    const row = event.target.closest("tr");

    
    if (event.target.classList.contains("delete-btn")) {
        row.remove();
    }

    if (event.target.classList.contains("edit-btn")) {
        if (event.target.textContent === "Sửa") {
           
            for (let i = 0; i < 4; i++) {
                const cell = row.cells[i];
                const text = cell.textContent;
                cell.innerHTML = `<input type="text" value="${text}">`;
            }
            event.target.textContent = "Lưu";
        } else {
            
            for (let i = 0; i < 4; i++) {
                const cell = row.cells[i];
                const input = cell.querySelector("input");
                cell.textContent = input.value;
            }
            event.target.textContent = "Sửa";
        }
    }
});
