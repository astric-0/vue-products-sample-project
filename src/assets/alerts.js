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

export const productInfoAlert = product => {

    const { title, id, brand, category, color, size, description } = product;

    const html = `
        <div class='card'>
            <div class='card-body'>                
                <div class='card-text'>
                    ${ description }
                </div>
            </div>
            <ul class='list-group list-group-flush'>
                <li class='list-group-item d-flex justify-content-center align-items-start'>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>Product Number</div>
                        ${ id }                        
                    </div>
                </li>

                <li class='list-group-item d-flex justify-content-center align-items-start'>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>Brand</div>
                        ${ brand }                        
                    </div>
                </li>

                <li class='list-group-item d-flex justify-content-center align-items-start'>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>Category</div>
                        ${ category }                        
                    </div>
                </li>

                <li class='list-group-item d-flex justify-content-center align-items-start'>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>Color</div>
                        ${ color }                        
                    </div>
                </li>

                <li class='list-group-item d-flex justify-content-center align-items-start'>
                    <div class='ms-2 me-auto'>
                        <div class='fw-bold'>Size</div>
                        ${ size }                        
                    </div>
                </li>
            </ul>

        </div>
    `

    Swal.fire({
        title,
        html,
        customClass: {
            content: 'text-start'
        }
    })
}