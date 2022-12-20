const add_movie = () => {
    const title = document.getElementById('new_title').value;
    const poster = document.getElementById('new_poster').value;
    const year = document.getElementById('new_year').value;
    const rating = document.getElementById('new_rating').value;
    const language = document.getElementById('new_language').value;
    const table = document.getElementById('table_body');
    if (title && poster && year && rating && language) {
        const row = table.insertRow(table.rows.length - 1);
        row.id = 'row_' + table.rows.length;
        row.innerHTML = `
        <td class="title">${title}</td>
        <td class="poster-container">
          <img
            src="${poster}"
            class="poster"
           alt="${title}"/>
        </td>
        <td class="year">${year}</td>
        <td class="rating">⭐${rating}</td>
        <td class="language">${language}</td>
        <td width="50px" class="actions">
            <div class="action_container">
                <button class="success edit" onclick="edit_movie()">
                    <i class="fa fa-pencil" aria-hidden="true"></i>
                </button>
                <button class="danger delete" onclick="delete_movie()">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        </td>
    `
        document.getElementById('new_title').value = '';
        document.getElementById('new_poster').value = '';
        document.getElementById('new_year').value = '';
        document.getElementById('new_rating').value = '';
        document.getElementById('new_language').value = '';
    } else {
        alert('Please fill all the fields');
    }
}

const save_movie = () => {
    const row = event.target.parentNode.parentNode;
    const title = document.getElementById('edit_title').value;
    const poster = document.getElementById('edit_poster').value;
    const year = document.getElementById('edit_year').value;
    const rating = document.getElementById('edit_rating').value;
    const language = document.getElementById('edit_language').value;
    row.innerHTML = `
    <td class="title">${title}</td>
    <td class="poster-container">
      <img
        src="${poster}"
        class="poster"
       alt="${title}"/>
    </td>
    <td class="year">${year}</td>
    <td class="rating">⭐${rating}</td>
    <td class="language">${language}</td>
    <td width="50px" class="actions">
        <div class="action_container">
            <button class="success edit" onclick="edit_movie()">
                <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="danger delete" onclick="delete_movie()">
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    </td>
    `
}

const edit_movie = () => {
    const row = event.target.closest('tr');
    console.log(row);
    const title = row.children[0].innerHTML;
    const poster = row.children[1].children[0].src;
    const year = row.children[2].innerHTML;
    const rating = row.children[3].innerHTML.substring(1);
    const language = row.children[4].innerHTML;

    row.innerHTML = `
    <td><input type="text" id="edit_title" class='title form-control' value="${title}"></td>
    <td class="poster-container">
        <input type="text" id="edit_poster" class="poster form-control" value="${poster}">
    </td>
    <td><input type="text" id="edit_year" class="year form-control" value="${year}"></td>
    <td><input type="text" id="edit_rating" class="rating form-control"  value="${rating}"></td>
    <td><input type="text" id="edit_language" class="language form-control" value="${language}"></td>
    <td class="actions">
        <button class="save" onclick="save_movie()">Save</button>
    </td>
    `
}

const delete_movie = () => {
    const row = event.target.closest('tr');
    console.log(row)
    row.parentNode.removeChild(row);
}

const search_movie = () => {
    const search = document.getElementById('search').value;
    const table = document.getElementById('table_body');
    console.log(search);
    const rows = table.getElementsByTagName('tr');
    for (let i = 0; i   < rows.length - 1; i++) {
        const title = rows[i].children[0].innerHTML;
        if (title.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}