// List of paragraphs
        var paragraphs = [
            "Today is a great day!",
            "The weather is perfect today.",
            "I'm learning something new every day.",
            "Excited to see what today brings."
        ];

        // Function to get a random paragraph
        function getRandomParagraph() {
            return paragraphs[Math.floor(Math.random() * paragraphs.length)];
        }

        // Function to update the content
        function updateContent() {
            var header = "<h3>ĐĐ¸ĐżĐ°Đ´ĐşĐžĐ˛Đ¸Đš ŃĐ°ĐşŃ</h3>";
            var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today = new Date().toLocaleDateString('uk-UA', options);
            var paragraph = "<p>" + getRandomParagraph() + "</p>";
            document.getElementById("content").innerHTML = header + "<p>" + today + "</p>" + paragraph;
        }

        // Call updateContent on page load
        window.onload = function() {
            updateContent();
            setInterval(updateContent, 24 * 60 * 60 * 1000);
        }
