# Rock Paper Scissors Game

A browser-based Rock Paper Scissors game built with HTML, CSS, and JavaScript.  
The project includes a multi-screen flow, dynamic UI updates and session-based state management.

## Features
- Setup screen for player name, computer nickname, and target score
- Interactive Rock, Paper, Scissors gameplay
- Random computer choice
- Score tracking
- Winner dialog when target score is reached
- Play Again and Reset options
- Custom side images and labels

## Files
- `setup.html` – setup screen
- `game.html` – main game screen
- `styles.css` – styling
- `setup.js` – setup page logic
- `game.js` – game logic

## Technical Implementation Details

### Session Storage vs Local Storage
This project uses `sessionStorage` to store user inputs (player name, computer nickname, and target score) between pages.

- `sessionStorage` persists data only for the duration of the browser tab.
- Data is cleared automatically when the tab is closed.
- This prevents stale data from persisting across sessions and ensures the game always starts with fresh input.

`localStorage` was intentionally not used because it persists data indefinitely, which can lead to stale or unintended values being displayed across sessions.

### Data Flow Between Pages
- User inputs are collected in `setup.html`
- Values are saved using `sessionStorage`
- `game.html` retrieves these values on load and updates the UI dynamically

If no data is found (e.g., user opens `game.html` directly), the page redirects back to `setup.html`. This ensures that `game.html` cannot be accessed without completing the setup step.

### Game State Management
- Scores are tracked using JavaScript variables (`userScore`, `computerScore`)
- The game stops once the target score is reached
- A `gameOver` flag prevents further moves after completion

### Dynamic UI Updates
- Player names and target score are injected into the DOM using JavaScript
- The result message updates after every round
- The final result is shown using a dialog box

### Visual Feedback
- Win/Loss states are indicated using dynamic CSS classes:
  - Green border for a win
  - Red border for a loss
- This provides immediate visual feedback in addition to text

### Responsive Considerations
- Media queries are used to adjust layout on smaller screen heights
- Decorative elements (images, VS label) scale or reposition to avoid overlap

### Code Structure
- `setup.js` handles input collection and storage
- `game.js` handles gameplay logic and UI updates
- Separation of concerns keeps the code modular and easier to maintain

## Future Improvements
- Add sound effects and animations
- Add difficulty levels or AI strategy

## Live Demo
Play the game here: https://rockpaperscissorsvscomputergame.netlify.app/

## How to Run Locally
Clone or download the repository, then open `index.html` in a web browser.