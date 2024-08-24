    // 
    document.addEventListener('DOMContentLoaded', function() {
        const productForm = document.getElementById('productForm');
        const productTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const totalAmount = document.getElementById('totalAmount');
        const clearAllButton = document.getElementById('clearAll');
    
        let products = JSON.parse(localStorage.getItem('products')) || [];
    
        function renderTable() {
            productTable.innerHTML = '';
            let total = 0;
            products.forEach((product, index) => {
                const row = productTable.insertRow();
                row.insertCell(0).textContent = product.name;
                row.insertCell(1).textContent = `$${product.amount}`;
                row.insertCell(2).textContent = product.quantity;
                row.insertCell(3).textContent = product.date;
    
                const deleteCell = row.insertCell(4);
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'حذف';
                deleteButton.className = 'deleteButton';
                deleteButton.addEventListener('click', function() {
                    products.splice(index, 1);
                    localStorage.setItem('products', JSON.stringify(products));
                    renderTable();
                });
                deleteCell.appendChild(deleteButton);
    
                total += parseFloat(product.amount) * parseInt(product.quantity);
            });
            totalAmount.textContent = `$${total.toFixed(2)}`;
        }
    
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const productName = document.getElementById('productName').value;
            const amount = document.getElementById('amount').value;
            const quantity = document.getElementById('quantity').value;
            const date = document.getElementById('date').value;
    
            const newProduct = {
                name: productName,
                amount: parseFloat(amount).toFixed(2),
                quantity: parseInt(quantity),
                date: date
            };
    
            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));
            renderTable();
    
            // إعادة تعيين النموذج بعد الإضافة
            productForm.reset();
        });
    
        clearAllButton.addEventListener('click', function() {
            products = [];
            localStorage.setItem('products', JSON.stringify(products));
            renderTable();
        });
    
        renderTable();
    });
    
    productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const productName = document.getElementById('productName').value;
            const amount = document.getElementById('amount').value;
            const quantity = document.getElementById('quantity').value;
            const date = document.getElementById('date').value;
    
            const newProduct = {
                name: productName,
                amount: parseFloat(amount).toFixed(2),
                quantity: parseInt(quantity),
                date: date
            };
    
            products.push(newProduct);
            localStorage.setItem('products', JSON.stringify(products));
            renderTable();
    
            // إعادة تعيين النموذج بعد الإضافة
            productForm.reset();
        });
    
        clearAllButton.addEventListener('click', function() {
            products = [];
            localStorage.setItem('products', JSON.stringify(products));
            renderTable();
        });
    
        renderTable();
    