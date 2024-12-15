document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');
    const submitReviewBtn = document.getElementById('submitReviewBtn');
    const reviewText = document.getElementById('reviewText');

    // Handle form submission
    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevent form from refreshing the page

        // Get the review text
        const review = reviewText.value.trim();

        // Check if the review is empty
        if (review.length === 0) {
            alert("Please write a review before submitting.");
            return;
        }

        // Show the thank you message
        alert("Thank you for your review!");

        // Redirect to the mood page after 2 seconds
        setTimeout(() => {
            window.location.href = 'mood.html';  // Redirect to mood.html
        }, 2000);
    });
});
