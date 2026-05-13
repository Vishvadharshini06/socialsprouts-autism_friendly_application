// 🔹 Fetch module number from URL
const params = new URLSearchParams(window.location.search);
const moduleNumber = parseInt(params.get("module")) || 1;

// 🔹 Define question sets for modules 1–6
const moduleSets = {
  1: [
    { question: "How do you start a conversation?", options: ["Say hello", "Stay silent", "Walk away"], answer: 0 },
    { question: "What should you do if someone is upset?", options: ["Ignore them", "Ask if they need help", "Laugh"], answer: 1 },
    { question: "How do you introduce yourself?", options: ["Say 'Hi, my name is...'", "Stare at them", "Run away"], answer: 0 },
    { question: "Do you feel nervous when meeting new people?", options: ["Yes", "No"], answer: 0 },
    { question: "Are you able to maintain eye contact while conversing?", options: ["Always", "Sometimes", "Never"], answer: 0 },
    { question: "Do you find it difficult to start a conversation with strangers?", options: ["Yes", "No"], answer: 0 },
    { question: "Do you feel uncomfortable in social gatherings?", options: ["Yes", "No"], answer: 0 },
    { question: "How do you usually react in unfamiliar social situations?", options: ["I feel anxious", "I feel excited", "I feel indifferent"], answer: 0 },
    { question: "Do you enjoy listening to other people's stories?", options: ["Yes", "No"], answer: 0 },
    { question: "How often do you engage in small talk?", options: ["Frequently", "Occasionally", "Never"], answer: 0 }
  ],

  2: [  // Set 1 (1–10)
    { question: "How do you greet someone new?", options: ["Smile and say 'Hi'", "Ignore them", "Wait for them to talk first"], answer: 0 },
    { question: "What should you do when someone helps you?", options: ["Say 'Thank you'", "Say nothing", "Walk away"], answer: 0 },
    { question: "When you join a group conversation, what’s polite to do first?", options: ["Listen before speaking", "Interrupt to share your thoughts", "Stay silent and look away"], answer: 0 },
    { question: "If someone is talking to you, what should you do?", options: ["Make eye contact and listen", "Look at your phone", "Walk away"], answer: 0 },
    { question: "What should you do if you accidentally bump into someone?", options: ["Say 'Sorry'", "Pretend it didn’t happen", "Blame them"], answer: 0 },
    { question: "How can you show that you’re listening?", options: ["Nod or respond politely", "Look bored", "Change the topic"], answer: 0 },
    { question: "If your friend looks sad, what’s the best response?", options: ["Ask what’s wrong and offer comfort", "Laugh at them", "Ignore it"], answer: 0 },
    { question: "How do you end a conversation politely?", options: ["Say 'It was nice talking to you'", "Walk away suddenly", "Start another topic"], answer: 0 },
    { question: "What should you do when someone introduces you?", options: ["Say 'Nice to meet you'", "Stay silent", "Ask why they introduced you"], answer: 0 },
    { question: "If you disagree with someone, how should you respond?", options: ["Stay calm and explain your view", "Shout or get angry", "Leave without speaking"], answer: 0 }
  ],

  3: [  // Set 2 (11–20)
    { question: "When someone is talking, how can you show interest?", options: ["Ask questions and nod", "Interrupt them often", "Look around the room"], answer: 0 },
    { question: "How do you respond if someone compliments you?", options: ["Say 'Thank you'", "Ignore them", "Say 'That’s not true'"], answer: 0 },
    { question: "If someone is angry with you, what should you do?", options: ["Stay calm and listen", "Yell back", "Walk away without saying anything"], answer: 0 },
    { question: "When someone shares good news, how should you react?", options: ["Smile and congratulate them", "Ignore it", "Change the topic"], answer: 0 },
    { question: "If you accidentally hurt someone’s feelings, what’s the right thing to do?", options: ["Apologize sincerely", "Pretend nothing happened", "Blame them"], answer: 0 },
    { question: "How can you show respect during a group discussion?", options: ["Wait for your turn to speak", "Talk over others", "Leave"], answer: 0 },
    { question: "What should you do if someone seems shy or left out?", options: ["Invite them to join in", "Ignore them", "Make fun of them"], answer: 0 },
    { question: "How can you tell if someone is bored while talking to you?", options: ["They avoid eye contact", "They smile", "They talk more"], answer: 0 },
    { question: "If you meet someone new at a party, what’s a good first question?", options: ["'How are you?' or 'What do you do?'", "'Why are you here?'", "Say nothing"], answer: 0 },
    { question: "How do you handle making a mistake in front of others?", options: ["Laugh it off or apologize", "Get angry", "Leave immediately"], answer: 0 }
  ],

  4: [  // Set 3 (21–30)
    { question: "When someone is talking about their problems, what should you do?", options: ["Listen and offer support", "Talk about your own problems", "Tell them to get over it"], answer: 0 },
    { question: "How can you build trust with others?", options: ["Be honest and reliable", "Make promises you can’t keep", "Gossip"], answer: 0 },
    { question: "What’s the best way to join a group activity?", options: ["Ask politely if you can join", "Interrupt", "Wait silently"], answer: 0 },
    { question: "How do you handle a disagreement in a group project?", options: ["Listen and find a compromise", "Refuse to cooperate", "Blame others"], answer: 0 },
    { question: "If your friend makes a mistake, what’s a kind way to respond?", options: ["Encourage them and offer help", "Tease them", "Ignore them"], answer: 0 },
    { question: "When is it appropriate to share a secret someone told you?", options: ["Never, unless it’s about safety", "Anytime", "For attention"], answer: 0 },
    { question: "If you feel left out, what’s a good thing to do?", options: ["Ask to join or start your own activity", "Get angry", "Avoid everyone"], answer: 0 },
    { question: "What shows good teamwork?", options: ["Helping others and sharing ideas", "Doing everything alone", "Ignoring group goals"], answer: 0 },
    { question: "If someone gives you feedback, what should you do?", options: ["Listen and thank them", "Argue", "Ignore it"], answer: 0 },
    { question: "How can you make new friends more easily?", options: ["Be friendly and open-minded", "Wait for others", "Avoid talking"], answer: 0 }
  ],

  5: [  // Set 4 (31–40)
    { question: "When you’re in a disagreement, what’s important?", options: ["Stay calm and respectful", "Try to win", "Interrupt"], answer: 0 },
    { question: "How do you show empathy toward others?", options: ["Try to understand how they feel", "Ignore them", "Tell them they’re wrong"], answer: 0 },
    { question: "What’s a polite way to get attention?", options: ["Say 'Excuse me'", "Shout", "Tap repeatedly"], answer: 0 },
    { question: "If your classmate looks stressed, what can you do?", options: ["Ask if they’re okay", "Ignore them", "Laugh"], answer: 0 },
    { question: "How can you show gratitude daily?", options: ["Say thank you", "Never thank anyone", "Only when forced"], answer: 0 },
    { question: "When nervous in a group, what can help?", options: ["Take deep breaths and smile", "Stay silent", "Leave"], answer: 0 },
    { question: "If someone interrupts you, how respond politely?", options: ["Wait then continue", "Interrupt back", "Get angry"], answer: 0 },
    { question: "What’s a good way to end an argument?", options: ["Agree to disagree", "Walk away angrily", "Keep arguing"], answer: 0 },
    { question: "When you’re speaking, how to know people listen?", options: ["They make eye contact", "They talk over you", "They look at phones"], answer: 0 },
    { question: "How to improve social confidence?", options: ["Practice talking often", "Avoid social events", "Wait to be included"], answer: 0 }
  ],

  6: [  // Set 5 (41–50)
    { question: "If a friend is excited about something, how do you respond?", options: ["Share in their excitement", "Ignore them", "Say it’s not a big deal"], answer: 0 },
    { question: "How can you handle criticism politely?", options: ["Listen and thank them", "Get defensive", "Ignore it"], answer: 0 },
    { question: "What should you do if someone offends you?", options: ["Calmly explain your feelings", "Yell", "Hold a grudge"], answer: 0 },
    { question: "If someone is treated unfairly, what is right?", options: ["Speak up or support if safe", "Ignore it", "Join in"], answer: 0 },
    { question: "How do you handle social rejection?", options: ["Accept calmly and try again", "Get angry", "Avoid everyone"], answer: 0 },
    { question: "If a friend is anxious socially, what do you do?", options: ["Offer reassurance", "Ignore them", "Tease them"], answer: 0 },
    { question: "How to make group decisions effectively?", options: ["Listen to all and find consensus", "Push your idea", "Ignore others"], answer: 0 },
    { question: "When asked for opinion, how respond?", options: ["Respectfully and honestly", "Lie", "Criticize"], answer: 0 },
    { question: "How can you politely disagree?", options: ["Share perspective calmly", "Argue aggressively", "Ignore them"], answer: 0 },
    { question: "How to reflect on social interactions?", options: ["Think what went well or improve", "Blame others", "Forget it"], answer: 0 }
  ]
};

const questions = moduleSets[moduleNumber] || moduleSets[1];

// 🔹 Render Questions
const quizContainer = document.getElementById("quiz-container");
questions.forEach((q, index) => {
    // FIX: Changed to use a backtick (`) to start the template literal
    let html = `<div class="question-block"><p class="question">${index + 1}. ${q.question}</p>`; 
    
    q.options.forEach((opt, i) => {
        html += `
            <label class="option">
                <input type="radio" name="q${index}" value="${i}">
                <span class="custom-checkbox"></span> ${opt}
            </label><br>
        `;
    });
    // FIX: Ensure the final closing tag is correctly appended to the string
    html += `</div>`; 
    
    quizContainer.innerHTML += html;
});

// 🔹 Create Result Display Box
// 🔹 Create Result Popup (Modal)
const resultOverlay = document.createElement("div");
resultOverlay.id = "resultOverlay";
resultOverlay.style.position = "fixed";
resultOverlay.style.top = "0";
resultOverlay.style.left = "0";
resultOverlay.style.width = "100%";
resultOverlay.style.height = "100%";
resultOverlay.style.background = "rgba(0,0,0,0.8)";
resultOverlay.style.display = "none";
resultOverlay.style.justifyContent = "center";
resultOverlay.style.alignItems = "center";
resultOverlay.style.zIndex = "1000";

const resultBox = document.createElement("div");
resultBox.id = "resultBox";
resultBox.style.background = "#121212";
resultBox.style.padding = "30px";
resultBox.style.borderRadius = "15px";
resultBox.style.textAlign = "center";
resultBox.style.color = "#0f0";
resultBox.style.width = "80%";
resultBox.style.maxWidth = "400px";
resultBox.style.boxShadow = "0 0 30px rgba(0,255,0,0.5)";
resultBox.style.animation = "fadeIn 0.3s ease";

resultOverlay.appendChild(resultBox);
document.body.appendChild(resultOverlay);

// 🔹 Submission Handler
document.getElementById("submitQuiz").addEventListener("click", () => {
  let correct = 0;
  questions.forEach((q, i) => {
    const chosen = document.querySelector(`input[name="q${i}"]:checked`);
    if (chosen && parseInt(chosen.value) === q.answer) correct++;
  });

  const total = questions.length;
  const scorePercent = Math.round((correct / total) * 100);

  // 🔸 Result message
  let message = "";
  if (scorePercent === 100) message = "🌟 Outstanding! Perfect score 🎉";
  else if (scorePercent >= 80) message = "✅ Excellent! You’ve mastered this module.";
  else if (scorePercent >= 60) message = "💪 Good job! Keep practicing.";
  else message = "🌱 Keep learning — you’ll improve next time.";

  // 🔸 Result content
  resultBox.innerHTML = `
    <h2 style="color:#0f0;">Module ${moduleNumber} Completed!</h2>
    <p style="font-size:1.1rem;">Your Score: <strong>${correct}/${total}</strong></p>
    <p>Percentage: <strong>${scorePercent}%</strong></p>
    <p>${message}</p>
    <button id="closeModule" class="auth-btn" 
      style="margin-top:20px;background:#0f0;color:#000;padding:10px 20px;border:none;border-radius:8px;cursor:pointer;">
      Close Module
    </button>
  `;

  // 🔸 Show modal and disable quiz area
  resultOverlay.style.display = "flex";
  quizContainer.style.pointerEvents = "none";
  document.getElementById("submitQuiz").disabled = true;

  // 🔸 Close button handler
  document.getElementById("closeModule").addEventListener("click", () => {
    resultOverlay.style.display = "none";
    window.location.href = "home.html"; // Redirect to home
  });
});