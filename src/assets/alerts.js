import Swal from 'sweetalert2'

export const errorListAlert = (title = 'Error', errorList) => {

    const errorTemplate = item => ` 
        <li class="list-group-item text-danger list-group-item-action list-group-item-danger">
            ${ item }
        </li>
    `;

    let listItems = '';
    errorList.forEach(item => listItems += errorTemplate(item));

    Swal.fire({
        icon: 'error',
        title,
        html: `
                <div class="list-group">
                    ${ listItems }
                </div>
                `
    });
}

export const successAlert = (title = 'Success', text = '') => {
    Swal.fire({
        icon: 'success',
        title,
        text
    });
}


export const errorAlert = (title = 'Error', text = '') => {
    Swal.fire({
        icon: 'error',
        title,
        text
    });
}