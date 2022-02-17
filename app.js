function showComments() {
    let btn = document.getElementById('commentsButton');
    let comments = document.getElementById('comments');

    if (btn.innerText ==='Покажи Коментари') {
        btn.innerText = 'Скрий Коментари';

        btn.setAttribute('class', 'btn btn-success');
        
        comments.classList.remove('d-none');
    }

    else if(btn.innerText === 'Скрий Коментари'){
        btn.innerText = 'Покажи Коментари';

        btn.setAttribute('class', 'btn btn-primary');

        comments.classList.add('d-none');
    }
}