const puzzles = [
    ["Pay an employee using a gold rod of 7 units ?", "https://www.geeksforgeeks.org/puzzle-4-pay-an-employee-using-a-gold-rod-of-7-units/"],
    ["Find the fastest 3 horses", "https://www.geeksforgeeks.org/puzzle-9-find-the-fastest-3-horses/"],
    ["Finding the injection for Anesthesia", "https://www.geeksforgeeks.org/puzzle-5-finding-the-injection-for-anesthesia/"],
    ["3 Bulbs and 3 Switches", "https://www.geeksforgeeks.org/puzzle-7-3-bulbs-and-3-switches/"],
    ["Camel and Banana Puzzle", "https://www.geeksforgeeks.org/puzzle-15-camel-and-banana-puzzle/"],
    ["Find the Jar with contaminated pills", "https://www.geeksforgeeks.org/puzzle-7-find-the-jar-with-contaminated-pills/"],
    ["100 Prisoners with Red/Black Hats", "https://www.geeksforgeeks.org/puzzle-13-100-prisoners-with-redblack-hats/"],
    ["10 Coins Puzzle", "https://www.geeksforgeeks.org/puzzle-24-10-coins-puzzle/"],
    ["Strategy for a 2-Player Coin Game", "https://www.geeksforgeeks.org/puzzle-14-strategy-for-a-2-player-coin-game/"],
    ["5 Pirates and 100 Gold Coins", "https://www.geeksforgeeks.org/puzzle-20-5-pirates-and-100-gold-coins/"],
    ["Minimum cut Puzzle", "https://www.geeksforgeeks.org/puzzle-31-minimum-cut-puzzle/"],
    ["Prisoner and Policeman Puzzle", "https://www.geeksforgeeks.org/puzzle-34-prisoner-and-policeman-puzzle/"],
    ["Puzzle – Cheating Husband", "https://www.geeksforgeeks.org/puzzle-cheating-husband/"],
    ["Puzzle – Blind Games", "https://www.geeksforgeeks.org/puzzle-blind-games/"],
    ["Puzzle – Chameleons go on a date", "https://www.geeksforgeeks.org/puzzle-chameleons-go-on-a-date/"],
    ["Heaven and Hell", "https://www.geeksforgeeks.org/puzzle-heaven-hell/"],
    ["Mislabeled Jars", "https://www.geeksforgeeks.org/puzzle-mislabeled-jars/"],
    ["8 balls problem", "https://www.geeksforgeeks.org/puzzle-8-balls-problem/"],
    ["Cheryl's Birthday Puzzle and Solution", "https://www.geeksforgeeks.org/cheryls-birthday-puzzle-and-solution/"],
    ["Puzzle – The Lion and the Unicorn", "https://www.geeksforgeeks.org/puzzle-the-lion-and-the-unicorn/"],
    ["Farmer, Goat, Wolf, and Cabbage", "https://www.geeksforgeeks.org/puzzle-farmer-goat-wolf-cabbage/"],
    ["Water Jug Problem", "https://www.geeksforgeeks.org/puzzle-water-jug-problem/"],
    ["Blind man and Pills", "https://www.geeksforgeeks.org/puzzle-blind-man-and-pills/"],
    ["The Burning Candles", "https://www.geeksforgeeks.org/puzzle-the-burning-candles/"],
    ["Puzzle | The Burning Candles", "https://www.geeksforgeeks.org/puzzle-the-burning-candles/"],
    ["Rat and Poisonous Milk Bottles", "https://www.geeksforgeeks.org/puzzle-rat-and-poisonous-milk-bottles/"],
    ["Measuring 6L water from 4L and 9L buckets", "https://www.geeksforgeeks.org/measuring-6l-water-4l-9l-buckets/"],
    ["Six Houses P, Q, R, S, T, and U", "https://www.geeksforgeeks.org/puzzle-six-houses-p-q-r-s-t-and-u/"],
    ["Melting Candles", "https://www.geeksforgeeks.org/melting-candles-puzzle/"],
    ["Red Hat vs Blue Hat", "https://www.geeksforgeeks.org/puzzle-47-red-hat-vs-blue-hat/"],
    ["Puzzle | Joint family of seven persons (L, M, N, O, P, Q, and R)", "https://www.geeksforgeeks.org/puzzle-joint-family-of-seven-persons-l-m-n-o-p-q-and-r/"],
    ["Puzzle | The Circle of Lights", "https://www.geeksforgeeks.org/puzzle-the-circle-of-lights/"],
    ["Puzzle | 9 Students and Red Black Hats", "https://www.geeksforgeeks.org/puzzle-9-students-and-red-black-hats/"],
    ["Light all the bulbs", "https://www.geeksforgeeks.org/puzzle-light-all-the-bulbs/"],
    ["Distribute the Water", "https://www.geeksforgeeks.org/puzzle-distribute-the-water/"],
    ["Puzzle | Can 2 persons be with same number of hairs on their heads?", "https://www.geeksforgeeks.org/puzzle-can-2-persons-be-with-same-number-of-hairs-on-their-heads/"],
    ["Weight of Heavy Ball", "https://www.geeksforgeeks.org/weight-heavy-ball/"],
    ["Find ages of daughters", "https://www.geeksforgeeks.org/puzzle-2-find-ages-of-daughters/"],
    ["Calculate total distance travelled by bee", "https://www.geeksforgeeks.org/puzzle-3-calculate-total-distance-travelled-by-bee/"],
    ["Puzzle – 6×6 Grid: How Many Ways?", "https://www.geeksforgeeks.org/puzzle-6x6-grid-how-many-ways/"],
    ["Monty Hall problem", "https://www.geeksforgeeks.org/puzzle-6-monty-hall-problem/"],
    ["Torch and Bridge", "https://www.geeksforgeeks.org/?p=142634"],
    ["2 Eggs and 100 Floors", "https://www.geeksforgeeks.org/puzzle-set-35-2-eggs-and-100-floors/"],
    ["Maximize the probability of White Ball", "https://www.geeksforgeeks.org/puzzle-12-maximize-probability-of-white-ball/"],
    ["Poison and Rat", "https://www.geeksforgeeks.org/puzzle-19-poison-and-rat/"],
    ["Hourglasses Puzzle", "https://www.geeksforgeeks.org/?p=142643"],
    ["The ratio of Boys and Girls in a Country where people want only boys", "https://www.geeksforgeeks.org/puzzle-17-ratio-of-boys-and-girls-in-a-country-where-people-want-only-boys/"],
    ["Car Wheel Puzzle", "https://www.geeksforgeeks.org/puzzle-29-car-wheel-puzzle/"],
    ["Maximum Chocolates", "https://www.geeksforgeeks.org/puzzle-22-maximum-chocolates/"],
    ["Puzzle | Splitting a Cake with a Missing Piece in two equal portion", "https://www.geeksforgeeks.org/puzzle-splitting-a-cake-with-a-missing-piece-in-two-equal-portion/"],
    ["Rs 500 Note Puzzle", "https://www.geeksforgeeks.org/puzzle-33-rs-500-note-puzzle/"],
    ["Girl or Boy", "https://www.geeksforgeeks.org/puzzle-44-girl-or-boy/"],
    ["Know Average Salary without Disclosing Individual Salaries", "https://www.geeksforgeeks.org/puzzle-26-know-average-salary-without-disclosing-individual-salaries/"],
    ["Maximum run in cricket", "https://www.geeksforgeeks.org/puzzle-37-maximum-run-in-cricket/"],
    ["Completion of Task", "https://www.geeksforgeeks.org/puzzle-32-completion-of-task/"],
    ["Find missing Row in Excel", "https://www.geeksforgeeks.org/puzzle-40-find-missing-row-in-excel/"],
    ["Four People on a Rickety Bridge", "https://www.geeksforgeeks.org/four-people-rickety-bridge/"],
    ["Man fell in well Puzzle", "https://www.geeksforgeeks.org/puzzle-man-fell-in-well-puzzle/"],
    ["50 red marbles and 50 blue marbles", "https://www.geeksforgeeks.org/puzzle-50-red-marbles-and-50-blue-marbles/"],
    ["Puzzle | Form Three Equilateral Triangles", "https://www.geeksforgeeks.org/puzzle-form-three-equilateral-triangles/"],
    ["10 identical bottles of pills", "https://www.geeksforgeeks.org/puzzle-10-identical-bottles-pills/"],
    ["Puzzle | Maximum pieces that can be cut from a Circle using 6 straight lines", "https://www.geeksforgeeks.org/puzzle-maximum-pieces-that-can-be-cut-from-a-circle-using-6-straight-lines/"],
    ["Chain Link Puzzle", "https://www.geeksforgeeks.org/puzzle-85-chain-link-puzzle/"],
    ["The shopkeeper and the lady who made a purchase of Rs 200 with fake note", "https://www.geeksforgeeks.org/interview-puzzle-the-shopkeeper-and-the-lady-who-made-a-purchase-of-rs-200-with-fake-note/"],
    ["Egg Dropping Puzzle with 2 Eggs and K Floors", "https://www.geeksforgeeks.org/egg-dropping-puzzle-with-2-eggs-and-k-floors/"],
    ["Minimum number of Apples to be collected from trees to guarantee M red apples", "https://www.geeksforgeeks.org/minimum-number-of-apples-to-be-collected-from-trees-to-guarantee-m-red-apples/"],
    ["Snail and Wall", "https://www.geeksforgeeks.org/puzzle-snail-and-wall/"],
    ["1000 light bulbs switched on/off by 1000 people passing by", "https://www.geeksforgeeks.org/puzzle-1000-light-bulbs-switched-on-off-by-1000-persons-passing-by/"],
    ["Puzzle | Four Alternating Knights", "https://www.geeksforgeeks.org/puzzle-four-alternating-knights/"],
    ["TCS DIGITAL PUZZLE | Lateral Thinking 2", "https://www.geeksforgeeks.org/tcs-digital-puzzle-lateral-thinking-2/"],
    ["Puzzle | 100 Cows And Milk", "https://www.geeksforgeeks.org/puzzle-100-cows-and-milk/"],
    ["Puzzle | One Mile on the Globe", "https://www.geeksforgeeks.org/puzzle-one-mile-on-the-globe-mcq/"],
    ["TCS DIGITAL PUZZLE | Lateral Thinking", "https://www.geeksforgeeks.org/tcs-digital-puzzle-lateral-thinking/"],
    ["Puzzle | The Counters and Board", "https://www.geeksforgeeks.org/puzzle-the-counters-and-board/"],
    ["Camel and Banana Puzzle", "https://www.geeksforgeeks.org/puzzle-15-camel-and-banana-puzzle/"],
    ["Puzzle | (Six Matches , Right Foot Forward)", "https://www.geeksforgeeks.org/puzzle-six-matches-right-foot-forward/"],
    ["How much he had initially?", "https://www.geeksforgeeks.org/puzzle-how-much-he-had-initially/"],
    ["Puzzle | 3 cuts to cut round cake into 8 equal pieces", "https://www.geeksforgeeks.org/puzzle-3-cuts-cut-round-cake-8-equal-pieces/"],
    ["Two Creepers Climbing a Tree", "https://www.geeksforgeeks.org/puzzle-two-creepers-climbing-a-tree/"],
    ["10 Coins Puzzle", "https://www.geeksforgeeks.org/puzzle-24-10-coins-puzzle/"],
    ["Days of the month using 2 dice", "https://www.geeksforgeeks.org/puzzle-23-days-of-month-using-2-dice/"],
    ["Tic Tac Toe Puzzle", "https://www.geeksforgeeks.org/puzzle-38-tic-tac-toe-puzzle/"],
    ["Matchstick Puzzle", "https://www.geeksforgeeks.org/puzzle-36-matchstick-puzzle/"],
    ["Last Palindrome Date Before 10/02/2001", "https://www.geeksforgeeks.org/puzzle-30-last-palindrome-data/"],
    ["10 identical bottles of pills", "https://www.geeksforgeeks.org/puzzle-10-identical-bottles-pills/"],
    ["10 Balls in 5 Lines", "https://www.geeksforgeeks.org/puzzle-10-balls-in-5-lines/"],["Round table coin game", "https://www.geeksforgeeks.org/puzzle-round-table-coin-game/"],
    ["Puzzle | The Circle of Lights", "https://www.geeksforgeeks.org/puzzle-the-circle-of-lights/"],
    ["3 cuts to cut the round cake into 8 equal pieces", "https://www.geeksforgeeks.org/puzzle-3-cuts-cut-round-cake-8-equal-pieces/"],
    ["Chessboard and dominos", "https://www.geeksforgeeks.org/puzzle-25chessboard-and-dominos/"],
    ["Maximum pieces that can be cut from a Circle using 6 straight lines", "https://www.geeksforgeeks.org/puzzle-maximum-pieces-that-can-be-cut-from-a-circle-using-6-straight-lines/"],
    ["Splitting a Cake with a Missing Piece in two equal portion", "https://www.geeksforgeeks.org/puzzle-splitting-a-cake-with-a-missing-piece-in-two-equal-portion/"],
    ["3 Ants and Triangle", "https://www.geeksforgeeks.org/?p=142637"],
    ["How to Measure 45 minutes using two identical wires?", "https://www.geeksforgeeks.org/puzzle-1-how-to-measure-45-minutes-using-two-identical-wires/"],
    ["Elevator Puzzle", "https://www.geeksforgeeks.org/?p=155354"],
    ["Find the last ball to remain after the entire process", "https://www.geeksforgeeks.org/?p=151894"],
    ["100 people in a circle with a gun puzzle", "https://www.geeksforgeeks.org/?p=142697"],
    ["Find the total guests that are present at the party", "https://www.geeksforgeeks.org/?p=282504"]
];

const totalPuzzles = puzzles.length;
let solvedPuzzles = JSON.parse(localStorage.getItem('solvedPuzzles')) || [];
let username = localStorage.getItem('username');

function showUsernameModal() {
    document.getElementById('usernameModal').style.display = 'block';
}

function setUsername() {
    const input = document.getElementById('usernameInput');
    username = input.value.trim();
    if (username) {
        localStorage.setItem('username', username);
        document.getElementById('usernameModal').style.display = 'none';
        initializePage();
    } else {
        alert("Please enter a valid name.");
    }
}

function updateGreeting() {
    document.getElementById('greeting').textContent = `Hello, ${username}!`;
}

function updateProgressBar() {
    const progress = (solvedPuzzles.length / totalPuzzles) * 100;
    const progressBar = document.getElementById('progressBar');
    const progressBarNumber = document.getElementById('progressBar1');
    progressBar.style.width = `${progress}%`;
    progressBarNumber.textContent = `${Math.round(progress)}%`;
}

function createTable() {
    const tableBody = document.querySelector('#puzzleTable tbody');
    puzzles.forEach((puzzle, index) => {
        const row = document.createElement('tr');
        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `puzzle-${index}`;
        checkbox.checked = solvedPuzzles.includes(index);
        checkbox.addEventListener('change', () => togglePuzzle(index));
        checkboxCell.appendChild(checkbox);
        
        const nameCell = document.createElement('td');
        nameCell.textContent = puzzle[0];
        
        const urlCell = document.createElement('td');
        const link = document.createElement('a');
        link.href = puzzle[1];
        link.textContent = 'Link';
        link.target = '_blank';
        urlCell.appendChild(link);
        
        row.appendChild(checkboxCell);
        row.appendChild(nameCell);
        row.appendChild(urlCell);
        tableBody.appendChild(row);
    });
}

function togglePuzzle(index) {
    const puzzleIndex = solvedPuzzles.indexOf(index);
    if (puzzleIndex === -1) {
        solvedPuzzles.push(index);
    } else {
        solvedPuzzles.splice(puzzleIndex, 1);
    }
    localStorage.setItem('solvedPuzzles', JSON.stringify(solvedPuzzles));
    updateProgressBar();
}

function initializePage() {
    updateGreeting();
    createTable();
    updateProgressBar();
}

// Main execution
if (username) {
    initializePage();
} else {
    showUsernameModal();
}
