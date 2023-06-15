fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        console.log('data', data);

        displayProducts(data);
    })

async function displayProducts(products) {
    let html = '';
    await products.forEach((product, index, array) => {
        html += '<tr>';
        html += `<td class="">
                        <img src="${product.image}" style="width:50px;height:50px;border-radius:50%" alt="">
                         </td>
                        <td>${product.title}</td>
                        <td class="table-info">${product.category}</td>
                        <td class="table-light">${product.price}$</td>`;
        html += '</tr>';
    })
    console.log(html);
    document.querySelector('tbody').innerHTML = await html;
    // 
    $(document).ready(function () {
        $('#example').DataTable();
    });
}