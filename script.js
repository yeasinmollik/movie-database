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
        <td>${title}</td>
        <td class="poster-container">
          <img
            src="${poster}"
            class="poster"
           alt="${title}"/>
        </td>
        <td>${year}</td>
        <td>${rating}</td>
        <td>${language}</td>
        <td class="actions">
          <button class="edit" onclick="edit_movie()">Edit</button>
          <button class="delete" onclick="delete_movie()">Delete</button>
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
    <td class="actions">
      <button class="edit" onclick="edit_movie()">Edit</button>
      <button class="delete" onclick="delete_movie()">Delete</button>
    </td>
    `
}

const edit_movie = () => {
    const row = event.target.parentNode.parentNode;
    console.log(row);
    const title = row.children[0].innerHTML;
    const poster = row.children[1].children[0].src;
    const year = row.children[2].innerHTML;
    const rating = row.children[3].innerHTML.substring(1);
    const language = row.children[4].innerHTML;

    row.innerHTML = `
    <td><input type="text" id="edit_title" class='title, form-control' value="${title}"></td>
    <td class="poster-container">
        <input type="text" id="edit_poster" class="poster, form-control" value="${poster}">
    </td>
    <td><input type="text" id="edit_year" class="year, form-control" value="${year}"></td>
    <td><input type="text" id="edit_rating" class="rating, form-control"  value="${rating}"></td>
    <td><input type="text" id="edit_language" class="language, form-control" value="${language}"></td>
    <td class="actions">
        <button class="save" onclick="save_movie()">Save</button>
    </td>
    `
}

const delete_movie = () => {
    const row = event.target.parentNode.parentNode;
    row.parentNode.removeChild(row);
}