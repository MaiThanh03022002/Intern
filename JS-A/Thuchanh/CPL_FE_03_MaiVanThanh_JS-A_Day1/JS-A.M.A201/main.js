var nodes = document.getElementsByTagName('button');
for (let i = 0; i < nodes.length; i++) {
    nodes[i].addEventListener('click', function() {
        console.log('You clicked element #' + i);
        });
}// vấn đề nắm ở việc khai báo "var i" là khai báo toàn cục nên  khi gọi hàm callback giá trị i thường sẽ thay đổi
// thay var bằng let 