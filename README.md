
## 🎲 Dice Roller Game

### 📖 **Overview**

The **Dice Roller Game** is a simple and interactive web application that simulates rolling dice using random number generation.
Users can enter how many dice they want to roll, click a button, and view both the numerical results and the corresponding dice images.

---

### 🧩 **Features**

* 🎯 Roll any number of dice at once
* 🎲 Displays dice faces as images (1–6)
* ⚙️ Generates truly random results using `Math.random()`
* 💻 Built with pure HTML, CSS, and JavaScript — no libraries required
* 🖼️ Real-time UI update using DOM manipulation

---

### 🧠 **How It Works**

1. The user enters a number in the input field (number of dice).
2. When the “Roll Dice” button is clicked, the JavaScript code generates random values between **1 and 6**.
3. Each generated value corresponds to a dice image (`1.png`, `2.png`, etc.) from the `dice_roller/` folder.
4. The results and dice images are displayed dynamically on the webpage.

---

### 🛠️ **Technologies Used**

* **HTML5** – structure of the webpage
* **CSS3** – basic styling and layout
* **JavaScript (ES6)** – logic for random number generation and DOM updates

---

### 🚀 **Setup Instructions**

1. Clone or download this repository.
2. Place the project folder in your local system.
3. Make sure you have the following folder structure:

   ```
   ├── dice.html
   ├── script.js
   ├── style.css
   └── dice_roller/
       ├── 1.png
       ├── 2.png
       ├── 3.png
       ├── 4.png
       ├── 5.png
       └── 6.png
   ```
4. Open `dice.html` in your browser.
5. Enter the number of dice you want to roll and click **Roll Dice**.

---

### 📸 **Example Output**

**Input:** 3
**Output:**
You rolled: 2, 5, 1
🖼️ Dice images of 2, 5, and 1 appear below the result text.

---

### 💡 **Future Enhancements**

* Add dice rolling **animation**.
* Include **sound effects** for rolling dice.
* Track total **score or sum** of dice values.
* Add **reset button** to clear previous results.
* Make it mobile responsive.

---

### 👨‍💻 **Author**

**G.Varun Koushik**
Project made as part of learning **JavaScript DOM manipulation and random number generation**.
