// List of paragraphs
        var paragraphs = [
            "Пийте 1,5-2 літри води на день; можна випити хоча б півсклянки одразу після пробудження.",
            "Відчуття вдячності підвищує рівень настрою; це можна відчути, якщо почати дякувати за кілька добрих подій або речей навколо щодня.",
            "Короткі ролики в Інтернеті знижують рівень нашої концентрації. Ми в прямому сенсі не зможемо спокійно читати або дивитися фільми через довгий час сидіння в Рілсах або ТікТоці. ",
            "Існує гігієна розуму. Так, і це значить - увага до тієї інформації, що ми отримуємо впродовж дня. Чи можете ви згадати, що дивилися, читали, писали за сьогодні? Наскільки це знадобилося?"
        ];

        // Function to get a random paragraph
        function getRandomParagraph() {
            return paragraphs[Math.floor(Math.random() * paragraphs.length)];
        }

        // Function to update the content
        function updateContent() {
            var header = "<h3>Випадковий факт</h3>";
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
