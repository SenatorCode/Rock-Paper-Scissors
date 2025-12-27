# **Rock, Paper & Scissors Game**

This is a classic **Rock, Paper & Scissors** game written in **JavaScript**, built to run inside the **browser**. It allows the player to play **5 rounds** against the **computer**, with the **score tallied** and the **winner announced** at the end.

---

## 🎯 **Features**

- 🔁 **5 rounds** of gameplay  
- 🤖 **Randomized computer choice** using `Math.random()`  
- 🧠 **User prompt** for human choice  
- 🔍 **Real-time game logic** with alerts showing the **round outcome**  
- 🧾 **Final score announcement** and **winner declaration**  
- 🔁 **Option to play again** at the end of each game session  🪨✊🏼✊✋✌️

### ⚠️ **Handles:**

- **Ties** (automatically moves to the next round)  
- **Wrong entries** (asks for input again)  

---

## 💻 **Technologies Used**

- **HTML** – for the webpage structure  
- **JavaScript** – for game logic and user interaction  
- **Browser Alerts/Prompts** – for communication with the player  

---

## 🧪 **How It Works**

1. The game **starts automatically** when the page is loaded.  
2. The **computer generates a random choice** (`rock`, `paper`, or `scissors`) using a 0–8 range divided into three intervals.  
3. The **user is prompted** to input their choice.  
4. The **game logic compares** both choices and determines the **winner of the round**.  
5. After each round, the **score is updated**.  
6. After **5 rounds**, the **total score is displayed**.  
7. The user is **asked if they want to play again**.  

---

## 🔮 **Future Improvements**

This is a **first version**, and there's room for a lot of sweet upgrades and polish. Here's what I (**Senator's Code**) plan to improve in the future:

### ✅ **Bug Fixes & Cleanup**

- Refactor the **round handling logic** (currently a bit repetitive)  
- **Simplify and modularize** repeated code blocks  
- Proper **input validation** to avoid bugs when user enters wrong inputs  
- Ensure **tie rounds don’t cause confusion** in round flow  

### 💡 **UX Enhancements**

- Build a **nice UI** with buttons instead of prompts and alerts  
- Display **choices and results** inside the HTML DOM  
- Add **sound effects** for win/loss/tie to make it more fun  
- Display an **animated scoreboard**  

### 🚀 **Advanced Features (Future Pro Max Vibe 😎)**

- Let player **choose number of rounds**  
- Add a **timer** before next round auto-starts  
- Add **difficulty levels** (e.g., AI that tries to beat your pattern)  
- Keep a **persistent high score or win streak** using `localStorage`  
- Add **themes** (e.g., *anime*, *Star Wars*, *Pokémon* 😂)  

---

## 📌 **Known Limitations**

- **Input is case-sensitive** at the moment (`"rock"` works but `"Rock"` might not be handled unless lowercased)  
- If a player types anything **invalid**, the flow can be affected slightly before recovery  
- **Alerts and prompts** make the experience less interactive  

---

## 🔧 **How to Run This**

1. **Clone or download** the repository  
2. **Open `index.html`** in your browser  
3. The game **starts immediately**  
4. **Follow the prompts and enjoy!**  

---

## 🙏 **Note from the Developer**

This is my **early project** as I journey through learning **JavaScript** and **Full Stack Development**. I know there are **bugs**, **repetition**, and areas that can be cleaned up — I'll fix those later and **improve the structure** as I learn more.

But for now, **this works**, and that's a **big W**.  
> **"Done is better than perfect."** – *Every wise dev ever 😎*

---

## 👤 **Author**

**Senator's Code**  
*Student of University of Ibadan*  
**Aspiring Full Stack Developer & AI/ML Engineer**  
✉️ *Senator’s Dev Kitchen:* cooking up better code every day  

If you like this, **stay tuned**... I’m just getting started.  
**Peace out 🖤 and don’t forget to refresh to play again 😄**
