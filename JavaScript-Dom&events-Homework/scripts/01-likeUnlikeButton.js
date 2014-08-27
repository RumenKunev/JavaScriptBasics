var likeUnlikeButton = document.getElementById('button');
likeUnlikeButton.addEventListener('click', function () {
        if (likeUnlikeButton.innerText === 'Like') {
            likeUnlikeButton.innerText = 'Unlike';
        }
        else {
            likeUnlikeButton.innerText = 'Like';
        }
 });
