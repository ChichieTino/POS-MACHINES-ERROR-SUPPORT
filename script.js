// POS Error Codes Database - Updated with relationship managers and blue solutions
const posErrorCodes = {
    relationshipManagers: [
        {
            name: "Susan Chiwakata",
            phone: "+263 78 163 8103"
        },
        {
            name: "Johaness Chingwe",
            phone: "+263 78 109 4511"
        },
        {
            name: "Phillip George Chihumba",
            phone: "+263 77 966 7262"
        },
        {
            name: "Monalisa Musiyiwa",
            phone: "+263 77 845 6858"
        },
        {
            name: "Tendai Mupaso",
            phone: "+263 78 124 5820"
        },
        {
            name: "Alan Keto",
            phone: "+263 77 948 6555"
        },
        {
            name: "Dempsey Sibanda",
            phone: "Not Available"
        },
        {
            name: "Damson Maseko",
            phone: "Not Available"
        },
        {
            name: "Tafadzwa Kariyatsande",
            phone: "Not Available"
        },
        {
            name: "Peter Pitala",
            phone: "+263 77 339 1592"
        }
    ],

    adminContacts: [
        {
            name: "Admin",
            phone: "+263 77 350 1244"
        },
        {
            name: "Admin",
            phone: "+263 73 323 9654"
        }
    ],

    pos_error_codes: [
        {
            "code": "117",
            "message": "Incorrect PIN",
            "explanation": "The customer entered an incorrect PIN. Another attempt is required."
        },
        {
            "code": "107",
            "message": "Insufficient funds",
            "explanation": "The account balance is insufficient to complete the transaction."
        },
        {
            "code": "100",
            "message": "Do not honour / Insufficient funds or dormant account",
            "explanation": "The bank declined the transaction due to low balance or the account being dormant. Customer must visit the branch."
        },
        {
            "code": "111",
            "message": "Invalid Card Number",
            "explanation": "The payment was declined because the card number provided is invalid. Verify the card number is entered correctly."
        },
        {
            "code": "101",
            "message": "Expired Card",
            "explanation": "The payment was declined because the card has expired. Ask the customer to use a valid, non-expired card."
        },
        {
            "code": "118",
            "message": "Card not registered or activated",
            "explanation": "The card being used is not registered or activated. Contact the card issuer for assistance."
        },
        {
            "code": "200",
            "message": "Card flagged for pick-up / Hotlisted card",
            "explanation": "The card has been flagged for pick-up or placed on a hot list by the issuer. Politely ask the customer to use another payment method."
        },
        {
            "code": "104",
            "message": "Machine not enabled for international transactions",
            "explanation": "The POS terminal is restricted from processing international cards.",
            "details": {
                "errorTitle": "International Card Processing Restricted",
                "description": "This POS terminal is restricted from processing international cards.",
                "flow": {
                    "step1": {
                        "question": "Do you want to activate your POS machine for international cards?",
                        "options": ["YES", "NO"]
                    },
                    "step2": {
                        "condition": "YES",
                        "message": "Activating your POS for international cards comes with additional charges.",
                        "charges": {
                            "visa": "2%",
                            "mastercard": "2.5%"
                        },
                        "confirmationQuestion": "Do you still want to proceed with registration?",
                        "options": ["YES", "NO"]
                    },
                    "step3": {
                        "condition": "YES",
                        "action": "Search for your Relationship Manager in the directory and contact them to start the registration process."
                    },
                    "step4": {
                        "condition": "NO",
                        "message": "No worries! Happy transacting!"
                    }
                }
            }
        },
        {
            "code": "122",
            "message": "Change software – RKI not activated",
            "explanation": "The terminal requires RKI activation or software configuration before use."
        },
        {
            "code": "109",
            "message": "Machine disabled",
            "explanation": "The terminal is not enabled for transactions; activation is needed."
        },
        {
            "code": "399",
            "message": "Download all parameters",
            "explanation": "The terminal needs a full parameter update from the bank or service provider.",
            "details": {
                "errorTitle": "Error 399 Solution",
                "description": "Follow the steps below to resolve Error 399 and restore POS functionality.",
                "flow": {
                    "step1": {
                        "title": "Fix Date & Time",
                        "actions": [
                            "Go to Device Settings",
                            "Select System",
                            "Choose Date & Time",
                            "Turn off Automatic Date & Time",
                            "Ensure correct Date & Time (manually set if needed)",
                            "Select Time Zone: Central Time (GMT)"
                        ]
                    },
                    "step2": {
                        "title": "Update TP Payments",
                        "actions": [
                            "Go to TP Payments",
                            "Select Settings (bottom right)",
                            "Choose Download All Parameters"
                        ]
                    },
                    "step3": {
                        "title": "You're Done!",
                        "message": "Error 399 resolved. You can now start transacting."
                    }
                }
            }
        },
        {
            "code": "902",
            "message": "Refund Limit Exceeded",
            "explanation": "The POS is trying to refund more money than it is allowed to refund for that EMV card transaction."
        },
        {
            "code": "908",
            "message": "Routing Error",
            "explanation": "The transaction could not be routed to the appropriate bank or payment network for authorization. Kindly contact your Relationship Manager."
        },
        {
            "code": "909",
            "message": "Issuer or Switch Inoperative",
            "explanation": "The transaction could not be processed because the payment switch is temporarily unavailable or not responding. Kindly retry later."
        },
        {
            "code": "000",
            "message": "Action code null",
            "explanation": "The terminal returned no action code. Usually indicates a configuration or communication issue."
        },
        {
            "code": "108",
            "message": "Communication failure",
            "explanation": "The POS terminal failed to communicate with the bank switch or network."
        },
        {
            "code": "106",
            "message": "Transaction not permitted to cardholder",
            "explanation": "The cardholder is not authorized to perform this type of transaction. Ask customer to contact their bank."
        },
        {
            "code": "110",
            "message": "Terminal disabled",
            "explanation": "The POS device is not authorised for transactions. Needs reactivation."
        }
    ]
};

// Greeting responses based on tone and time
const greetingResponses = {
    formal: [
        "Welcome to POS Error Support Bot. How may I assist you with your POS error codes today?",
        "Welcome to POS Error Support Bot. I'm here to help you understand and resolve POS errors.",
        "Greetings! Welcome to POS Error Support Bot, your trusted partner for POS error troubleshooting."
    ],
    casual: [
        "Hey there! Welcome to POS Error Support Bot! Ready to help you fix those pesky errors!",
        "Hi! Welcome to POS Error Support Bot. Looking to understand an error code or need solutions?",
        "Hello! Welcome to POS Error Support Bot. Let's make your POS troubleshooting smooth and easy!"
    ],
    friendly: [
        "Hii! <i class='fas fa-smile-beam moe-element'></i> Welcome to POS Error Support Bot! Excited to help with your POS errors!",
        "Hey hey! <i class='fas fa-star moe-element'></i> Welcome to POS Error Support Bot! Error fixing made simple!",
        "Hello! <i class='fas fa-heart moe-element'></i> Welcome to POS Error Support Bot! Let's solve those error codes together!"
    ]
};

// Moe (cute/playful) responses
const moeResponses = {
    greeting: [
        "Hii! <i class='fas fa-smile-beam moe-element'></i> How can I help you today?",
        "Hello there! <i class='fas fa-star moe-element'></i> Ready to solve some errors!",
        "Hey hey! <i class='fas fa-heart moe-element'></i> What error code can I help you with?"
    ],
    positive: [
        "Found it! <i class='fas fa-check-circle moe-element'></i>",
        "Got it! <i class='fas fa-lightbulb moe-element'></i>",
        "Here's what you need! <i class='fas fa-info-circle moe-element'></i>"
    ],
    notFound: [
        "Hmm <i class='fas fa-thinking moe-element'></i> I don't recognize that error code.",
        "Oopsie! <i class='fas fa-question-circle moe-element'></i> That code isn't in my database.",
        "Aw shucks! <i class='fas fa-frown moe-element'></i> I can't find that error."
    ],
    help: [
        "Need help? <i class='fas fa-hands-helping moe-element'></i> I'm here for you!",
        "Don't worry! <i class='fas fa-shield-alt moe-element'></i> I'll help you fix this!",
        "Let's solve this together! <i class='fas fa-users moe-element'></i>"
    ]
};

// FAQ Data
const faqs = [
    {
        q: "What is this support chatbot for?",
        a: "It helps merchants quickly understand and fix common system errors sent through WhatsApp."
    },
    {
        q: "How do I use the chatbot?",
        a: "Simply send your error message or error code on WhatsApp, and the system will guide you."
    },
    {
        q: "What type of errors can I send?",
        a: "You can send any error code or message you see on your device or POS machine."
    },
    {
        q: "Do I need to type the error exactly as it appears?",
        a: "Typing it as clearly as possible helps the chatbot understand faster, but small mistakes are okay."
    },
    {
        q: "What happens after I send an error message?",
        a: "The chatbot reads your message, checks it in its knowledge base, and sends you the right solution."
    },
    {
        q: "How fast will I get a solution?",
        a: "If the error exists in the system, you will receive help instantly within seconds."
    },
    {
        q: "What if the chatbot doesn't recognise my error?",
        a: "It will give you options to contact a human agent or try rephrasing your query."
    },
    {
        q: "Will I be told if my issue is escalated?",
        a: "Yes, the chatbot will notify you that a support agent is taking over."
    },
    {
        q: "Can I talk directly to a human agent from the start?",
        a: "Yes, you can request 'human support' at any time."
    },
    {
        q: "Does the chatbot save my previous issues?",
        a: "Yes, the system logs all queries to help improve future support and speed."
    },
    {
        q: "Is my information safe when I send messages?",
        a: "Yes, all messages are protected and used only for support purposes."
    },
    {
        q: "Can the chatbot fix payment errors?",
        a: "Yes, the chatbot can help with many common payment and transaction error codes."
    },
    {
        q: "Will I get step-by-step instructions?",
        a: "Yes, the chatbot explains solutions in simple, easy-to-follow steps."
    },
    {
        q: "What should I do if the solution doesn't work?",
        a: "You can request human agent assistance or try rephrasing your query."
    },
    {
        q: "Can I use the chatbot anytime?",
        a: "Yes, it is available 24/7 for automated help. Human agents reply during working hours."
    }
];

// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const timeIndicator = document.getElementById('timeIndicator');
let conversationStarted = false;
let pendingRMSearch = false; // Flag to indicate we're waiting for RM name input

// Time-based greetings
function getTimeBasedGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

// Get current time for display
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

// Detect greeting tone
function detectGreetingTone(message) {
    const msg = message.toLowerCase().trim();
    
    if (msg.includes('hello') || msg.includes('greetings') || msg.includes('good day') || msg.includes('good morning') || msg.includes('good afternoon') || msg.includes('good evening')) {
        return 'formal';
    } else if (msg.includes('hey') || msg.includes('hi') || msg.includes('hie')) {
        if (msg.includes('hi') && msg.length <= 3) return 'friendly';
        return 'casual';
    } else if (msg.includes('yo') || msg.includes('sup') || msg.includes('wassup')) {
        return 'casual';
    }
    return 'friendly';
}

// Function to search for relationship manager by name
function searchRelationshipManager(name) {
    const searchName = name.toLowerCase().trim();
    const manager = posErrorCodes.relationshipManagers.find(rm => 
        rm.name.toLowerCase().includes(searchName)
    );
    
    return manager;
}

// Function to display relationship manager details
function displayRelationshipManager(manager) {
    if (manager.phone === "Not Available") {
        const notAvailableHtml = `<div class='rm-result error'>
            <i class='fas fa-exclamation-triangle'></i> <strong>${manager.name}</strong>'s contact is currently not available.<br><br>
            Please try another name or contact our admin support:
            <div class='admin-contacts-mini' style='margin-top: 15px;'>
                <div><i class='fas fa-phone'></i> Admin 1: +263 77 350 1244</div>
                <div><i class='fas fa-phone'></i> Admin 2: +263 73 323 9654</div>
            </div>
            <div class='quick-options' style='margin-top: 15px;'>
                <div class='quick-option' onclick='promptRMSearch()'>
                    <i class='fas fa-search'></i> Search Again
                </div>
                <div class='quick-option' onclick='showMainOptions()'>
                    <i class='fas fa-home'></i> Main Menu
                </div>
            </div>
        </div>`;
        
        addMessage(notAvailableHtml, false, true);
        return;
    }
    
    const managerHtml = `<div class='rm-result success'>
        <i class='fas fa-check-circle'></i> <strong>Relationship Manager Found!</strong><br><br>
        <div class='rm-details'>
            <div><i class='fas fa-user-tie'></i> <strong>Name:</strong> ${manager.name}</div>
            <div><i class='fas fa-phone-alt'></i> <strong>Phone:</strong> ${manager.phone}</div>
        </div>
        <div class='rm-contact-info' style='margin-top: 15px;'>
            <strong>Next Steps:</strong>
            <ol style='margin-top: 10px;'>
                <li>Call your Relationship Manager at the number above</li>
                <li>Provide them with your merchant ID and terminal details</li>
                <li>Explain that you want to activate international transactions</li>
                <li>Follow their instructions to complete the registration</li>
            </ol>
        </div>
        <div class='quick-options' style='margin-top: 15px;'>
            <div class='quick-option' onclick='window.location.href="tel:${manager.phone.replace(/\s/g, '')}"'>
                <i class='fas fa-phone'></i> Call Now
            </div>
            <div class='quick-option' onclick='promptRMSearch()'>
                <i class='fas fa-search'></i> Search Another RM
            </div>
            <div class='quick-option' onclick='showMainOptions()'>
                <i class='fas fa-home'></i> Main Menu
            </div>
        </div>
    </div>`;
    
    addMessage(managerHtml, false, true);
}

// Function to prompt for RM name
function promptRMSearch() {
    pendingRMSearch = true;
    const promptHtml = `<div class='rm-prompt'>
        <i class='fas fa-user-tie'></i> <strong>Enter Relationship Manager Name</strong><br><br>
        Please type the full name of your Relationship Manager:<br>
        <div class='quick-options' style='margin-top: 15px;'>
            <div class='quick-option' onclick='showMainOptions()'>
                <i class='fas fa-times'></i> Cancel
            </div>
        </div>
    </div>`;
    
    addMessage(promptHtml, false, true);
}

// Function to show admin contacts
function showAdminContacts() {
    const admins = posErrorCodes.adminContacts;
    
    let adminHtml = `<div class='admin-contacts'>
        <div class='error-code'><i class='fas fa-headset'></i> Admin Support Contacts</div>
        <div class='admin-list'>`;
    
    admins.forEach((admin, index) => {
        adminHtml += `
            <div class='admin-item'>
                <div><i class='fas fa-user-cog'></i> ${admin.name} ${index + 1}</div>
                <div class='admin-phone'><i class='fas fa-phone'></i> ${admin.phone}</div>
                <div class='quick-option' style='margin: 5px 0;' onclick='window.location.href="tel:${admin.phone.replace(/\s/g, '')}"'>
                    <i class='fas fa-phone'></i> Call Now
                </div>
            </div>`;
    });
    
    adminHtml += `</div>
        <div class='quick-options' style='margin-top: 15px;'>
            <div class='quick-option' onclick='promptRMSearch()'>
                <i class='fas fa-search'></i> Search Again
            </div>
            <div class='quick-option' onclick='showMainOptions()'>
                <i class='fas fa-home'></i> Main Menu
            </div>
        </div>
    </div>`;
    
    addMessage(adminHtml, false, true);
}

// Display error code 104 flow
function showError104Flow() {
    const error104 = posErrorCodes.pos_error_codes.find(e => e.code === "104");
    const flow = error104.details.flow;
    
    // Start with step 1
    const step1Html = `<div class="flow-step">
        <div class="flow-question"><i class="fas fa-question-circle"></i> ${flow.step1.question}</div>
        <div class="flow-options-container">
            <button class="flow-option" onclick="handle104Response('YES')">
                <i class="fas fa-check"></i> YES
            </button>
            <button class="flow-option no" onclick="handle104Response('NO')">
                <i class="fas fa-times"></i> NO
            </button>
        </div>
    </div>`;
    
    addMessage(step1Html, false, true);
}

// Display error code 399 flow
function showError399Flow() {
    const error399 = posErrorCodes.pos_error_codes.find(e => e.code === "399");
    const flow = error399.details.flow;
    
    // Step 1: Fix Date & Time
    const step1Html = `<div class="flow-step">
        <div class="flow-question"><i class="fas fa-clock"></i> ${flow.step1.title}</div>
        <div class="flow-message">
            <strong>Follow these steps carefully:</strong>
            <ol class="step-list">
                ${flow.step1.actions.map((action, index) => 
                    `<li>${action}</li>`
                ).join('')}
            </ol>
        </div>
        <div class="flow-options-container">
            <button class="flow-option" onclick="handle399Step1Complete()">
                <i class="fas fa-check"></i> I've completed Step 1
            </button>
        </div>
    </div>`;
    
    addMessage(step1Html, false, true);
}

// Handle 104 flow responses
function handle104Response(response) {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        const error104 = posErrorCodes.pos_error_codes.find(e => e.code === "104");
        const flow = error104.details.flow;
        
        if (response === 'YES') {
            // Show step 2
            const step2Html = `<div class="flow-step">
                <div class="flow-message">
                    <i class="fas fa-info-circle"></i> ${flow.step2.message}
                </div>
                <table class="charges-table">
                    <tr>
                        <th>Card Type</th>
                        <th>Additional Charge</th>
                    </tr>
                    <tr>
                        <td><i class="fab fa-cc-visa" style="color: #1a1f71;"></i> Visa</td>
                        <td>${flow.step2.charges.visa}</td>
                    </tr>
                    <tr>
                        <td><i class="fab fa-cc-mastercard" style="color: #eb001b;"></i> Mastercard</td>
                        <td>${flow.step2.charges.mastercard}</td>
                    </tr>
                </table>
                <div class="flow-question" style="margin-top: 20px;">
                    <i class="fas fa-question-circle"></i> ${flow.step2.confirmationQuestion}
                </div>
                <div class="flow-options-container">
                    <button class="flow-option" onclick="handle104Step2Response('YES')">
                        <i class="fas fa-check"></i> YES, Proceed
                    </button>
                    <button class="flow-option no" onclick="handle104Step2Response('NO')">
                        <i class="fas fa-times"></i> NO, Cancel
                    </button>
                </div>
            </div>`;
            
            addMessage(step2Html, false, true);
        } else if (response === 'NO') {
            // Show step 4 (NO branch)
            const step4Html = `<div class="flow-complete">
                <i class="fas fa-smile-beam"></i>
                <div class="flow-message" style="font-size: 1.1em; font-weight: 600; color: #4caf50;">
                    ${flow.step4.message}
                </div>
                <div class="quick-options" style="margin-top: 15px;">
                    <div class="quick-option" onclick='promptRMSearch()'>
                        <i class="fas fa-user-tie"></i> Find My RM
                    </div>
                    <div class="quick-option" onclick="showMainOptions()">
                        <i class="fas fa-home"></i> Main Menu
                    </div>
                </div>
            </div>`;
            
            addMessage(step4Html, false, true);
        }
    }, 800);
}

// Handle step 2 responses for error 104
function handle104Step2Response(response) {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        const error104 = posErrorCodes.pos_error_codes.find(e => e.code === "104");
        const flow = error104.details.flow;
        
        if (response === 'YES') {
            // Show step 3 with RM search prompt
            const step3Html = `<div class="flow-step">
                <div class="flow-message" style="background: #e8f5e9; border-left-color: #4caf50;">
                    <i class="fas fa-check-circle" style="color: #4caf50;"></i> 
                    <strong>Action Required:</strong> ${flow.step3.action}
                </div>
                <div class="flow-message" style="margin-top: 15px;">
                    <i class="fas fa-phone-alt"></i> <strong>Next Steps:</strong><br>
                    Please enter the name of your Relationship Manager below to get their contact details.
                </div>
                <div class="quick-options" style="margin-top: 10px;">
                    <div class="quick-option" onclick='promptRMSearch()'>
                        <i class="fas fa-user-tie"></i> Enter RM Name
                    </div>
                </div>
                <div class="quick-options" style="margin-top: 20px;">
                    <div class="quick-option" onclick="escalateToHuman()">
                        <i class="fas fa-user-headset"></i> Contact Admin Support
                    </div>
                    <div class="quick-option" onclick="showMainOptions()">
                        <i class="fas fa-home"></i> Main Menu
                    </div>
                </div>
            </div>`;
            
            addMessage(step3Html, false, true);
        } else if (response === 'NO') {
            // Show step 4 (NO branch)
            const step4Html = `<div class="flow-complete">
                <i class="fas fa-smile-beam"></i>
                <div class="flow-message" style="font-size: 1.1em; font-weight: 600; color: #4caf50;">
                    ${flow.step4.message}
                </div>
                <div class="quick-options" style="margin-top: 15px;">
                    <div class="quick-option" onclick='promptRMSearch()'>
                        <i class="fas fa-user-tie"></i> Find My RM
                    </div>
                    <div class="quick-option" onclick="showMainOptions()">
                        <i class="fas fa-home"></i> Main Menu
                    </div>
                </div>
            </div>`;
            
            addMessage(step4Html, false, true);
        }
    }, 800);
}

// Handle 399 Step 1 completion
function handle399Step1Complete() {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        const error399 = posErrorCodes.pos_error_codes.find(e => e.code === "399");
        const flow = error399.details.flow;
        
        // Step 2: Update TP Payments
        const step2Html = `<div class="flow-step">
            <div class="flow-question"><i class="fas fa-mobile-alt"></i> ${flow.step2.title}</div>
            <div class="flow-message">
                <strong>Now update TP Payments:</strong>
                <ol class="step-list">
                    ${flow.step2.actions.map((action, index) => 
                        `<li>${action}</li>`
                    ).join('')}
                </ol>
            </div>
            <div class="flow-options-container">
                <button class="flow-option" onclick="handle399Step2Complete()">
                    <i class="fas fa-check"></i> I've completed Step 2
                </button>
                <button class="flow-option no" onclick="showMainOptions()">
                    <i class="fas fa-times"></i> Cancel Process
                </button>
            </div>
        </div>`;
        
        addMessage(step2Html, false, true);
    }, 800);
}

// Handle 399 Step 2 completion
function handle399Step2Complete() {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        const error399 = posErrorCodes.pos_error_codes.find(e => e.code === "399");
        const flow = error399.details.flow;
        
        // Step 3: Completion
        const step3Html = `<div class="flow-complete">
            <i class="fas fa-check-circle" style="color: #4caf50; font-size: 2.5em;"></i>
            <div class="flow-message" style="font-size: 1.1em; font-weight: 600; color: #4caf50; margin: 15px 0;">
                ${flow.step3.title}
            </div>
            <div class="flow-message">
                ${flow.step3.message}
            </div>
            <div class="quick-options" style="margin-top: 20px;">
                <div class="quick-option" onclick='promptRMSearch()'>
                    <i class="fas fa-user-tie"></i> Find My RM
                </div>
                <div class="quick-option" onclick="escalateToHuman()">
                    <i class="fas fa-user-headset"></i> Need More Help?
                </div>
                <div class="quick-option" onclick="showMainOptions()">
                    <i class="fas fa-home"></i> Main Menu
                </div>
            </div>
        </div>`;
        
        addMessage(step3Html, false, true);
    }, 800);
}

// Service information display with interpretation in black and solution in blue
function displayErrorResult(error) {
    // Special handling for error 104
    if (error.code === "104") {
        let resultHtml = `<div class='error-result'>
            <div class='error-code'><i class='fas fa-exclamation-circle'></i> Error Code: 104</div>
            <div class='error-message'><strong>${error.message}</strong></div>
            <div class='error-interpretation'><i class='fas fa-info-circle'></i> <strong>Interpretation:</strong> ${error.explanation}</div>`;
        
        // Add solution in blue
        resultHtml += `<div class='error-solution'><i class='fas fa-wrench'></i> <strong>Solution:</strong> Contact your Relationship Manager to enable international transactions on your terminal.</div>`;
        
        if (error.details) {
            resultHtml += `<div class='error-explanation' style="margin-top: 10px;">
                <i class='fas fa-globe-americas'></i> <strong>${error.details.errorTitle}:</strong> ${error.details.description}
            </div>`;
        }
        
        resultHtml += `</div><br>${moeResponses.positive[Math.floor(Math.random() * moeResponses.positive.length)]}<br><br>
            <div class='quick-options'>
                <div class='quick-option' onclick='start104Flow()'>
                    <i class='fas fa-play-circle'></i> Start Resolution Flow
                </div>
                <div class='quick-option' onclick='promptRMSearch()'>
                    <i class='fas fa-user-tie'></i> Find My RM
                </div>
                <div class='quick-option' onclick='showMainOptions()'>
                    <i class='fas fa-home'></i> Main Menu
                </div>
            </div>`;
        
        return resultHtml;
    }
    
    // Special handling for error 399
    if (error.code === "399") {
        let resultHtml = `<div class='error-result'>
            <div class='error-code'><i class='fas fa-exclamation-circle'></i> Error Code: 399</div>
            <div class='error-message'><strong>${error.message}</strong></div>
            <div class='error-interpretation'><i class='fas fa-info-circle'></i> <strong>Interpretation:</strong> ${error.explanation}</div>`;
        
        // Add solution in blue
        resultHtml += `<div class='error-solution'><i class='fas fa-wrench'></i> <strong>Solution:</strong> Follow the step-by-step flow below to download all parameters and resolve this issue.</div>`;
        
        if (error.details) {
            resultHtml += `<div class='error-explanation' style="margin-top: 10px;">
                <i class='fas fa-tools'></i> <strong>${error.details.errorTitle}:</strong> ${error.details.description}
            </div>`;
        }
        
        resultHtml += `</div><br>${moeResponses.positive[Math.floor(Math.random() * moeResponses.positive.length)]}<br><br>
            <div class='quick-options'>
                <div class='quick-option' onclick='start399Flow()'>
                    <i class='fas fa-play-circle'></i> Start Resolution Flow
                </div>
                <div class='quick-option' onclick='promptRMSearch()'>
                    <i class='fas fa-user-tie'></i> Find My RM
                </div>
                <div class='quick-option' onclick='showMainOptions()'>
                    <i class='fas fa-home'></i> Main Menu
                </div>
            </div>`;
        
        return resultHtml;
    }
    
    // Check if this error needs RM contact (based on message content)
    const needsRM = error.message.toLowerCase().includes('relationship manager') || 
                    error.code === "908" || error.code === "109" || 
                    error.code === "110" || error.code === "122";
    
    // Regular error display for other codes - always show both interpretation and solution
    let resultHtml = `<div class='error-result'>
        <div class='error-code'><i class='fas fa-exclamation-circle'></i> Error Code: ${error.code === "null" ? "Null/Empty" : error.code}</div>
        <div class='error-message'><strong>${error.message}</strong></div>
        <div class='error-interpretation'><i class='fas fa-info-circle'></i> <strong>Interpretation:</strong> ${error.explanation}</div>
        <div class='error-solution'><i class='fas fa-wrench'></i> <strong>Solution:</strong> ${error.explanation}</div>
    </div><br>${moeResponses.help[Math.floor(Math.random() * moeResponses.help.length)]}<br><br>`;
    
    // Add appropriate buttons
    if (needsRM) {
        resultHtml += `<div class='quick-options'>
            <div class='quick-option' onclick='promptRMSearch()'>
                <i class='fas fa-user-tie'></i> Find My RM
            </div>
            <div class='quick-option' onclick='showMainOptions()'>
                <i class='fas fa-home'></i> Main Menu
            </div>
        </div>`;
    } else {
        resultHtml += `<div class='quick-options'>
            <div class='quick-option' onclick='showMainOptions()'>
                <i class='fas fa-home'></i> Main Menu
            </div>
        </div>`;
    }
    
    return resultHtml;
}

// Start 104 flow
function start104Flow() {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        addMessage("Starting resolution flow for Error 104...", true);
        setTimeout(() => {
            showError104Flow();
        }, 500);
    }, 1000);
}

// Start 399 flow
function start399Flow() {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        addMessage("Starting resolution flow for Error 399...", true);
        setTimeout(() => {
            showError399Flow();
        }, 500);
    }, 1000);
}

// Show contact options when error not found
function showAssistanceOptions() {
    const html = `<div class='assistance-options'>
        <div class='error-code'><i class='fas fa-headset'></i> Need Personal Assistance?</div>
        <div class='error-message'>I couldn't find that error in my database. Would you like to:</div>
        <div class='quick-options'>
            <div class='quick-option' onclick='escalateToHuman()'>
                <i class='fas fa-user-headset'></i> Contact Human Agent
            </div>
            <div class='quick-option' onclick='promptRMSearch()'>
                <i class='fas fa-user-tie'></i> Find My RM
            </div>
            <div class='quick-option' onclick='addMessage("Please try rephrasing your query or enter a different error code:", false)'>
                <i class='fas fa-redo'></i> Rephrase Query
            </div>
        </div>
    </div>`;
    
    return html;
}

// Escalate to human agent
function escalateToHuman() {
    const escalationHtml = `<div class='escalation-notice'>
        <i class='fas fa-user-headset'></i> <strong>Human Agent Requested</strong><br><br>
        Your request has been escalated to a human support agent! <i class='fas fa-heart moe-element'></i><br><br>
        An agent will contact you shortly. Average wait time: 2-3 minutes.<br><br>
        <div class='quick-options'>
            <div class='quick-option' onclick='showMainOptions()'>
                <i class='fas fa-robot'></i> Continue with Bot
            </div>
        </div>
    </div>`;
    
    addMessage(escalationHtml, false, true);
}

// Main service options - Simplified
function showMainOptions() {
    const html = `Welcome to POS Error Support Bot. How can I help you today?
        <div class="quick-options">
            <div class="quick-option" onclick='promptRMSearch()'>
                <i class="fas fa-user-tie"></i> Find My RM
            </div>
            <div class="quick-option" onclick="escalateToHuman()">
                <i class="fas fa-user-headset"></i> Human Agent
            </div>
            <div class="quick-option" onclick="addMessage('Please enter an error code (like 117, 107, 100, etc.) or describe your issue:', false)">
                <i class="fas fa-search"></i> Check Error
            </div>
        </div>`;
    
    return html;
}

// Show FAQ
function showFAQ() {
    let faqHtml = `<div class='faq-section'>
        <div class='error-code'><i class='fas fa-question-circle'></i> Frequently Asked Questions</div>`;
    
    // Show first 5 FAQs initially
    for(let i = 0; i < Math.min(5, faqs.length); i++) {
        faqHtml += `<div class='faq-question'>${faqs[i].q}</div>
                   <div class='faq-answer'>${faqs[i].a}</div>`;
    }
    
    faqHtml += `<br><div class='quick-options'>
        <div class='quick-option' onclick='showAllFAQ()'>
            <i class='fas fa-book-open'></i> Show All FAQs
        </div>
        <div class='quick-option' onclick='showMainOptions()'>
            <i class='fas fa-home'></i> Main Menu
        </div>
    </div></div>`;
    
    return faqHtml;
}

// Show all FAQ
function showAllFAQ() {
    let faqHtml = `<div class='faq-section'>
        <div class='error-code'><i class='fas fa-book moe-element'></i> All Frequently Asked Questions</div>`;
    
    faqs.forEach((faq, index) => {
        faqHtml += `<div class='faq-question'>${faq.q}</div>
                   <div class='faq-answer'>${faq.a}</div>`;
    });
    
    faqHtml += `<br><div class='quick-options'>
        <div class='quick-option' onclick='showMainOptions()'>
            <i class='fas fa-home'></i> Main Menu
        </div>
    </div></div>`;
    
    addMessage(faqHtml, false, true);
}

// Find error code in database
function findErrorCode(input) {
    // Clean input
    const cleanInput = input.trim().toLowerCase();
    
    // Check for exact code match
    for(const error of posErrorCodes.pos_error_codes) {
        if(error.code === cleanInput || error.code === input.trim()) {
            return error;
        }
    }
    
    // Check for code in message
    for(const error of posErrorCodes.pos_error_codes) {
        if(cleanInput.includes(error.code.toLowerCase()) && error.code !== "null") {
            return error;
        }
    }
    
    // Check for keywords in message
    const keywords = {
        'pin': '117',
        'insufficient': '107',
        'dormant': '100',
        'international': '104',
        'software': '122',
        'disabled': '109',
        'parameters': '399',
        'communication': '108',
        'null': 'null'
    };
    
    for(const [keyword, code] of Object.entries(keywords)) {
        if(cleanInput.includes(keyword)) {
            return posErrorCodes.pos_error_codes.find(e => e.code === code);
        }
    }
    
    return null;
}

// Initialize with time indicator
function initChatbot() {
    timeIndicator.textContent = `Today at ${getCurrentTime()}`;
    userInput.focus();
    
    // Show initial greeting after a short delay
    setTimeout(() => {
        const timeGreeting = getTimeBasedGreeting();
        addMessage(`${timeGreeting}! Welcome to POS Error Support Bot. I'm here to help you understand and resolve POS error codes.`, false);
        
        // Show options after greeting
        setTimeout(() => {
            addMessage("How can I assist you today?", false);
            addMessage(showMainOptions(), false, true);
        }, 800);
    }, 1000);
    
    // Adjust container height on resize
    window.addEventListener('resize', adjustContainerHeight);
    window.addEventListener('orientationchange', adjustContainerHeight);
    
    // Event listeners
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', handleKeyPress);
}

// Adjust container height for different screens
function adjustContainerHeight() {
    const container = document.querySelector('.container');
    const isLandscape = window.innerWidth > window.innerHeight;
    
    if (window.innerHeight < 500) {
        container.style.height = '95vh';
    } else if (isLandscape && window.innerHeight < 600) {
        container.style.height = '90vh';
    } else {
        container.style.height = 'calc(100vh - 20px)';
    }
}

// Add message to chat with timestamp
function addMessage(message, isUser = false, isHtml = false) {
    const container = document.createElement('div');
    container.className = 'message-container';
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    if (isHtml) {
        messageDiv.innerHTML = message;
    } else {
        messageDiv.textContent = message;
    }
    
    // Add timestamp
    const timestamp = document.createElement('div');
    timestamp.className = 'message-timestamp';
    timestamp.innerHTML = `${getCurrentTime()} ${isUser ? '<i class="fas fa-check-double" style="color: var(--whatsapp-teal);"></i>' : ''}`;
    
    container.appendChild(messageDiv);
    if (isUser) {
        container.appendChild(timestamp);
    }
    
    chatMessages.appendChild(container);
    
    // Smooth scroll to bottom
    setTimeout(() => {
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }, 10);
}

// Show typing indicator
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingDiv;
}

// Remove typing indicator
function removeTyping(typingDiv) {
    if (typingDiv && typingDiv.parentNode) {
        typingDiv.parentNode.removeChild(typingDiv);
    }
}

// Process user message
function processUserMessage(message) {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        
        const msg = message.toLowerCase().trim();
        
        // Check if we're waiting for RM name input
        if (pendingRMSearch) {
            pendingRMSearch = false;
            const manager = searchRelationshipManager(message);
            
            if (manager) {
                displayRelationshipManager(manager);
            } else {
                const notFoundHtml = `<div class='rm-result error'>
                    <i class='fas fa-exclamation-triangle'></i> No relationship manager found with the name "<strong>${message}</strong>".<br><br>
                    Please check the name and try again.
                    <div class='quick-options' style='margin-top: 15px;'>
                        <div class='quick-option' onclick='promptRMSearch()'>
                            <i class='fas fa-search'></i> Try Again
                        </div>
                        <div class='quick-option' onclick='showMainOptions()'>
                            <i class='fas fa-home'></i> Main Menu
                        </div>
                    </div>
                </div>`;
                
                addMessage(notFoundHtml, false, true);
            }
            return;
        }
        
        // Check for greetings
        if (!conversationStarted && (msg.includes('hi') || msg.includes('hello') || msg.includes('hey') || msg.includes('hie') || msg.includes('greetings') || msg.includes('good morning') || msg.includes('good afternoon') || msg.includes('good evening'))) {
            conversationStarted = true;
            const tone = detectGreetingTone(message);
            const timeGreeting = getTimeBasedGreeting();
            const greetings = greetingResponses[tone];
            const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
            
            addMessage(`${timeGreeting}! ${randomGreeting}`, false, true);
            
            // Show main options after greeting
            setTimeout(() => {
                addMessage(showMainOptions(), false, true);
            }, 500);
            return;
        }
        
        // Check for thank you
        if (msg.includes('thank') || msg.includes('thanks')) {
            addMessage("You're welcome! <i class='fas fa-heart moe-element'></i> Happy to help! Need anything else?", false, true);
            return;
        }
        
        // Check for bye
        if (msg.includes('bye') || msg.includes('goodbye') || msg.includes('exit')) {
            addMessage("Goodbye! 👋 Wishing you successful transactions! Remember, I'm here 24/7 if you need more help!", false, true);
            return;
        }
        
        // Check for human agent request
        if (msg.includes('human') || msg.includes('agent') || msg.includes('support')) {
            escalateToHuman();
            return;
        }
        
        // Check for FAQ request
        if (msg.includes('faq') || msg.includes('frequently') || msg.includes('questions')) {
            addMessage(showFAQ(), false, true);
            return;
        }
        
        // Check for "Find My RM" command
        if (msg.includes('find my rm') || msg.includes('find rm') || msg.includes('rm')) {
            promptRMSearch();
            return;
        }
        
        // Check for error code
        const error = findErrorCode(message);
        
        if (error) {
            conversationStarted = true;
            const response = moeResponses.positive[Math.floor(Math.random() * moeResponses.positive.length)];
            
            addMessage(`${response} Here's the information for this error:`, false, true);
            addMessage(displayErrorResult(error), false, true);
        } else {
            // Error not found
            conversationStarted = true;
            const notFoundMsg = moeResponses.notFound[Math.floor(Math.random() * moeResponses.notFound.length)];
            addMessage(`${notFoundMsg}`, false, true);
            
            // Show assistance options with buttons
            setTimeout(() => {
                addMessage(showAssistanceOptions(), false, true);
            }, 500);
        }
    }, 1000);
}

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    addMessage(message, true);
    userInput.value = '';
    userInput.focus();
    
    processUserMessage(message);
}

// Handle Enter key press
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initChatbot);

// Make functions available globally
window.escalateToHuman = escalateToHuman;
window.showMainOptions = showMainOptions;
window.showAllFAQ = showAllFAQ;
window.sendMessage = sendMessage;
window.handleKeyPress = handleKeyPress;
window.addMessage = addMessage;
window.start104Flow = start104Flow;
window.start399Flow = start399Flow;
window.handle104Response = handle104Response;
window.handle104Step2Response = handle104Step2Response;
window.handle399Step1Complete = handle399Step1Complete;
window.handle399Step2Complete = handle399Step2Complete;
window.promptRMSearch = promptRMSearch;
window.searchRelationshipManager = searchRelationshipManager;
window.displayRelationshipManager = displayRelationshipManager;
window.showAdminContacts = showAdminContacts;

