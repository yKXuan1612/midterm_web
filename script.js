function loadSubMenuContent(url, targetId) {
    console.log('Loading content from:', url);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            const contentDiv = document.getElementById(targetId);

            if (!contentDiv) {
                console.error(`Target element with id '${targetId}' not found.`);
                return;
            }

            // Create a temporary container and set its innerHTML to the fetched data
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = data;

            // Select the specific section you want to append to the contentDiv
            const sectionC = tempContainer.querySelector('.section-c');

            if (sectionC) {
                // Clear the current content of contentDiv
                contentDiv.innerHTML = '';

                // Append the selected section to the contentDiv
                contentDiv.appendChild(sectionC);
            } else {
                console.error('Section-c not found in the loaded content.');
            }
        })
        .catch(error => {
            console.error('Error loading content:', error);
        });
}

// function loadXMLContent(xmlContent) {
//     const parser = new DOMParser();
//     const xmlDoc = parser.parseFromString(xmlContent, "text/xml");

//     const contentDiv = document.getElementById('content');
//     contentDiv.innerHTML = ''; // Clear current content

//     const studentInfo = xmlDoc.getElementsByTagName('student')[0];
//     const attributes = studentInfo.children;

//     // Create a table element
//     const table = document.createElement('table');
//     table.className = 'xml-student-table';

//     // Create table header
//     const headerRow = table.createTHead().insertRow(0);
//     headerRow.className = 'xml-student-header-row';
//     const th1 = document.createElement('th');
//     th1.textContent = 'Thông tin';
//     headerRow.appendChild(th1);
//     const th2 = document.createElement('th');
//     th2.textContent = 'Chi tiết';
//     headerRow.appendChild(th2);

//     // Create table body
//     const body = table.createTBody();
//     for (const attribute of attributes) {
//         const dataRow = body.insertRow();
//         dataRow.className = 'xml-student-data-row';
//         const td1 = document.createElement('td');
//         td1.textContent = attribute.tagName;
//         dataRow.appendChild(td1);
//         const td2 = document.createElement('td');
//         td2.textContent = attribute.textContent;
//         dataRow.appendChild(td2);
//     }

//     // Append the table to the contentDiv
//     contentDiv.appendChild(table);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Load student info by default
//     if (window.location.pathname.endsWith('index.html')) {
//         // Example embedded XML content
//         const embeddedXMLContent = `
//             <?xml version="1.0" encoding="UTF-8"?>
//             <student>
//                 <MSSV>K214110802</MSSV>
//                 <Tên>Ma Ngọc Xuân Kỳ</Tên>
//                 <Gender>Nam</Gender>
//                 <Lớp>21411</Lớp>
//                 <SĐT>0123456789</SĐT>
//                 <Email>kymnx21411@st.uel.edu.vn</Email>
//                 <Country>Nam Định</Country>
//                 <Hobby>Nghe nhạc, đá cầu, cầu lông, chơi game, ngắm cảnh, dạo cà phê, v.v</Hobby>
//             </student>
//         `;

//         loadXMLContent(embeddedXMLContent);
//     }

//     // Add event listeners to menu items
//     document.querySelectorAll('.link a').forEach(link => {
//         link.addEventListener('click', function(event) {
//             const contentDiv = document.getElementById('content');

//             if (this.innerHTML === 'Trang Chủ') {
//                 window.location.reload();
//             } else if (this.innerHTML === 'Giới thiệu sách') {
//                 // Navigate to the link directly in the current tab
//                 window.location.href = this.href;
//             } else if (this.innerHTML === 'Đăng ký') {
//                 event.preventDefault();
//                 loadSubMenuContent('register.html', 'content');
//             }
//         });
//     });
// });


// // embed the xml file into script
// const studentInfo = {
//     MSSV: 'K214110802',
//     Tên: 'Ma Ngọc Xuân Kỳ',
//     Gender: 'Nam',
//     Lớp: '21411',
//     SĐT: '0123456789',
//     Email: 'kymnx21411@st.uel.edu.vn',
//     Country: 'Nam Định',
//     Hobby: 'Nghe nhạc, đá cầu, cầu lông, chơi game, ngắm cảnh, dạo cà phê, v.v'
// };

// // update the function

// function loadStudentInfo(studentInfo) {
//     const contentDiv = document.getElementById('content');
//     contentDiv.innerHTML = ''; // Clear current content

//     // Create a table element
//     const table = document.createElement('table');
//     table.className = 'xml-student-table';

//     // Create table header
//     const headerRow = table.createTHead().insertRow(0);
//     headerRow.className = 'xml-student-header-row';
//     const th1 = document.createElement('th');
//     th1.textContent = 'Thông tin';
//     headerRow.appendChild(th1);
//     const th2 = document.createElement('th');
//     th2.textContent = 'Chi tiết';
//     headerRow.appendChild(th2);

//     // Create table body
//     const body = table.createTBody();
//     for (const attribute in studentInfo) {
//         const dataRow = body.insertRow();
//         dataRow.className = 'xml-student-data-row';
//         const td1 = document.createElement('td');
//         td1.textContent = attribute;
//         dataRow.appendChild(td1);
//         const td2 = document.createElement('td');
//         td2.textContent = studentInfo[attribute];
//         dataRow.appendChild(td2);
//     }

//     // Append the table to the contentDiv
//     contentDiv.appendChild(table);
// }

// document.addEventListener('DOMContentLoaded', function() {
//     // Load student info by default
//     if (window.location.pathname.endsWith('index.html')) {
//         loadStudentInfo(studentInfo);
//     }

//     // Add event listeners to menu items
//     document.querySelectorAll('.link a').forEach(link => {
//         link.addEventListener('click', function(event) {
//             const contentDiv = document.getElementById('content');

//             if (this.innerHTML === 'Trang Chủ') {
//                 window.location.reload();
//             } else if (this.innerHTML === 'Giới thiệu sách') {
//                 // Navigate to the link directly in the current tab
//                 window.location.href = this.href;
//             } else if (this.innerHTML === 'Đăng ký') {
//                 event.preventDefault();
//                 loadSubMenuContent('register.html', 'content');
//             }
//         });
//     });
// });

// Local script to read XML

// function loadXMLContent(url) {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => {
//             const parser = new DOMParser();
//             const xmlDoc = parser.parseFromString(data, "text/xml");

//             const contentDiv = document.getElementById('content');
//             contentDiv.innerHTML = ''; // Clear current content

//             const studentInfo = xmlDoc.getElementsByTagName('student')[0];
//             const attributes = studentInfo.children;

//             // Create a table element
//             const table = document.createElement('table');
//             table.className = 'xml-student-table';

//             // Create table header
//             const headerRow = table.createTHead().insertRow(0);
//             headerRow.className = 'xml-student-header-row';
//             const th1 = document.createElement('th');
//             th1.textContent = 'Thông tin';
//             headerRow.appendChild(th1);
//             const th2 = document.createElement('th');
//             th2.textContent = 'Chi tiết';
//             headerRow.appendChild(th2);

//             // Create table body
//             const body = table.createTBody();
//             for (const attribute of attributes) {
//                 const dataRow = body.insertRow();
//                 dataRow.className = 'xml-student-data-row';
//                 const td1 = document.createElement('td');
//                 td1.textContent = attribute.tagName;
//                 dataRow.appendChild(td1);
//                 const td2 = document.createElement('td');
//                 td2.textContent = attribute.textContent;
//                 dataRow.appendChild(td2);
//             }

//             // Append the table to the contentDiv
//             contentDiv.appendChild(table);
//         })
//         .catch(error => {
//             console.error('Error loading XML content:', error);
//         });
// }



document.addEventListener('DOMContentLoaded', function() {
    // Load student info by default
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
    // if window.location.pathname.endsWith('index.html')) 
        loadSubMenuContent('K214110802_newver.html', 'content');
    }
    // Add event listeners to menu items
    document.querySelectorAll('.link a').forEach(link => {
        link.addEventListener('click', function(event) {
            const contentDiv = document.getElementById('content');

            if (this.innerHTML === 'Trang Chủ') {
                window.location.reload();
            } else if (this.innerHTML === 'Giới thiệu sách') {
                // Navigate to the link directly in the current tab
                window.location.href = this.href;
            } else if (this.innerHTML === 'Đăng ký') {
                event.preventDefault();
                loadSubMenuContent('register.html', 'content');
            }
        });
    });
});

function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    let formContent = '<h1>Đăng ký</h1>';
    formData.forEach((value, key) => {
        formContent += `<p><strong>${key}:</strong> ${value}</p>`;
    });

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = formContent;

    // Reset the form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.reset();
    }

    // Set focus back to the 'name' input
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.focus();
    }
}

// Add event listener to the registration form
document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', submitForm);
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.sub-menu a[href="jsonObjectvsArray.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        loadSubMenuContent('jsonObjectvsArray.html', 'content');
    });

    document.querySelector('.sub-menu a[href="XMLvaDOM.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        loadSubMenuContent('XMLvaDOM.html', 'content');
    });

    document.querySelector('.sub-menu a[href="FORMvsControl.html"]').addEventListener('click', function(event) {
        event.preventDefault();
        loadSubMenuContent('FORMvsControl.html', 'content');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sectionD = document.querySelector('.section-d');

    // Lấy ngày và giờ hiện tại
    const currentDate = new Date();

    // Format ngày và giờ theo dạng mong muốn
    const formattedDate = currentDate.toLocaleString('vi-VN', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    });

    // Hiển thị ngày và giờ trong phần tử có id là "section-d"
    sectionD.textContent = `Đây là bài làm của Ma Ngọc Xuân Kỳ, thực hiện ngày ${formattedDate}`;
});


