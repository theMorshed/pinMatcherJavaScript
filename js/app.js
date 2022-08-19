document.getElementById('btn-generate').addEventListener('click', function () {
    generatePin();
});

const allRow = document.querySelectorAll('.button');
allRow.forEach(function(item){
    item.addEventListener('click', function(event){
        displayPin();
    });
});

document.getElementById('btn-submit').addEventListener('click', function(){
    matchPin();
});
