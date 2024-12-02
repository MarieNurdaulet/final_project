document.querySelectorAll('.faq').forEach((faq) => {
    const button = faq.querySelector('.extend_close');
    const extendIcon = button.querySelector('.faq_extend');
    const closeIcon = button.querySelector('.faq_close');
    const answer = faq.querySelector('.answer');

    button.addEventListener('click', () => {
        const isAnswerVisible = answer.style.display === 'block';

        // Toggle answer visibility
        answer.style.display = isAnswerVisible ? 'none' : 'block';

        // Toggle button icons
        extendIcon.style.display = isAnswerVisible ? 'block' : 'none';
        closeIcon.style.display = isAnswerVisible ? 'none' : 'block';
    });
});