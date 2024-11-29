// Sample Profiles
const profiles = [
    { id: 1, name: "Ali Ahmed Ali", age: 25, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Muse Abdi Jama", age: 28, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Omer Dahir Abdi", age: 30, image: "https://via.placeholder.com/100" },
  ];
  
  // Elements
  const profilesContainer = document.getElementById("profiles");
  const chatSection = document.getElementById("chat-section");
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  
  // Load Profiles
  function loadProfiles() {
    profiles.forEach(profile => {
      const profileDiv = document.createElement("div");
      profileDiv.className = "profile";
      profileDiv.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}">
        <h3>${profile.name}, ${profile.age}</h3>
        <button onclick="startChat(${profile.id})">Chat</button>
      `;
      profilesContainer.appendChild(profileDiv);
    });
  }
  
  // Start Chat
  function startChat(profileId) {
    const profile = profiles.find(p => p.id === profileId);
    chatBox.innerHTML = `<p>You started a chat with ${profile.name}.</p>`;
    chatSection.classList.remove("hidden");
  }
  
  // Send Message
  sendBtn.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
      chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
      chatInput.value = "";
      chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }
  });
  
  // Initialize App
  loadProfiles();
  