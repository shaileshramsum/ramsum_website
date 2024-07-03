// JavaScript for expanding articles and preventing page jump

document.addEventListener('DOMContentLoaded', function () {
    const articleItems = document.querySelectorAll('.article-item');

    articleItems.forEach(function (articleItem) {
        const readMoreLink = articleItem.querySelector('.read-more');
        const articleContent = articleItem.querySelector('.article-content');

        readMoreLink.addEventListener('click', function (event) {
            event.preventDefault();

            // Close all other article contents
            articleItems.forEach(function (item) {
                if (item !== articleItem) {
                    item.classList.remove('expanded');
                }
            });

            // Toggle current article content
            articleItem.classList.toggle('expanded');
            if (articleItem.classList.contains('expanded')) {
                articleContent.style.display = 'block';
            } else {
                articleContent.style.display = 'none';
            }

            // Scroll to the clicked article
            const articleTop = articleItem.offsetTop - 80; // Adjusted for fixed header
            window.scrollTo({
                top: articleTop,
                behavior: 'smooth'
            });
        });
    });
});
