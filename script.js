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
            "explanation": "The customer entered an incorrect PIN. Another attempt is required.",
            "interpretation": "The PIN entered does not match the card's registered PIN.",
            "solution": "Ask the customer to carefully re-enter their PIN. If forgotten, they should visit their bank to reset it."
        },
        {
            "code": "107",
            "message": "Insufficient funds",
            "explanation": "The account balance is insufficient to complete the transaction.",
            "interpretation": "The customer's account does not have enough money for this purchase.",
            "solution": "Inform the customer and suggest they try a lower amount or use another payment method."
        },
        {
            "code": "100",
            "message": "Do not honour / Insufficient funds or dormant account",
            "explanation": "The bank declined the transaction due to low balance or the account being dormant.",
            "interpretation": "Either the account has insufficient funds or has been inactive for too long.",
            "solution": "Customer must visit their bank branch to reactivate the account or resolve the issue."
        },
        {
            "code": "111",
            "message": "Invalid Card Number",
            "explanation": "The payment was declined because the card number provided is invalid.",
            "interpretation": "The card number entered doesn't match any valid card in the system.",
            "solution": "Verify the card number is entered correctly. If the card is damaged, ask for another card."
        },
        {
            "code": "101",
            "message": "Expired Card",
            "explanation": "The payment was declined because the card has expired.",
            "interpretation": "The card's validity period has passed.",
            "solution": "Ask the customer to use a valid, non-expired card or contact their bank for a replacement."
        },
        {
            "code": "118",
            "message": "Card not registered or activated",
            "explanation": "The card being used is not registered or activated.",
            "interpretation": "This card hasn't been activated for use or isn't registered in the system.",
            "solution": "Contact the card issuer for assistance or ask the customer to use another card."
        },
        {
            "code": "200",
            "message": "Card flagged for pick-up / Hotlisted card",
            "explanation": "The card has been flagged for pick-up or placed on a hot list by the issuer.",
            "interpretation": "This card has been reported lost, stolen, or compromised.",
            "solution": "Politely ask the customer to use another payment method and follow your institution's protocol for hotlisted cards."
        },
        {
            "code": "104",
            "message": "Machine not enabled for international transactions",
            "explanation": "The POS terminal is restricted from processing international cards.",
            "interpretation": "Your terminal cannot process Visa or Mastercard from other countries.",
            "solution": "<span class='solution-text'>You need to activate international processing. Please enter the name of your Relationship Manager to proceed with activation.</span>",
            "requiresRM": true,
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
                        "action": "Please enter the name of your Relationship Manager to start the registration process."
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
            "explanation": "The terminal requires RKI activation or software configuration before use.",
            "interpretation": "Remote Key Injection (RKI) needs to be activated for security.",
            "solution": "<span class='solution-text'>Contact your Relationship Manager for software activation. Please enter their name to proceed.</span>",
            "requiresRM": true
        },
        {
            "code": "109",
            "message": "Machine disabled",
            "explanation": "The terminal is not enabled for transactions; activation is needed.",
            "interpretation": "Your POS terminal has been disabled in the system.",
            "solution": "<span class='solution-text'>Please enter your Relationship Manager's name to request reactivation.</span>",
            "requiresRM": true
        },
        {
            "code": "399",
            "message": "Download all parameters",
            "explanation": "The terminal needs a full parameter update from the bank or service provider.",
            "interpretation": "Your terminal's settings need to be refreshed.",
            "solution": "<span class='solution-text'>Enter your Relationship Manager's name to request a parameter update.</span>",
            "requiresRM": true,
            "details": {
                "errorTitle": "Parameter Update Required",
                "description": "Your terminal needs a full parameter download.",
                "flow": {
                    "step1": {
                        "title": "Step 1: Fix Date & Time",
                        "actions": [
                            "Go to terminal settings",
                            "Navigate to Date & Time settings",
                            "Set correct current date and time",
                            "Save and exit"
                        ]
                    },
                    "step2": {
                        "title": "Step 2: Update TP Payments",
                        "actions": [
                            "Go to main menu",
                            "Select 'Update' or 'Download'",
                            "Choose 'Parameters' or 'Configuration'",
                            "Wait for download to complete"
                        ]
                    },
                    "step3": {
                        "title": "Step 3: Completion",
                        "message": "Your terminal has been updated. Try a test transaction."
                    }
                }
            }
        },
        {
            "code": "902",
            "message": "Refund Limit Exceeded",
            "explanation": "The POS is trying to refund more money than it is allowed to refund for that EMV card transaction.",
            "interpretation": "You've exceeded the maximum refund amount for this transaction type.",
            "solution": "Process a smaller refund amount or split the refund into multiple transactions. Contact your bank if you need a limit increase."
        },
        {
            "code": "908",
            "message": "Routing Error",
            "explanation": "The transaction could not be routed to the appropriate bank or payment network for authorization.",
            "interpretation": "The system couldn't find the right path to process this payment.",
            "solution": "<span class='solution-text'>This requires technical assistance. Please enter your Relationship Manager's name to report this issue.</span>",
            "requiresRM": true
        },
        {
            "code": "909",
            "message": "Issuer or Switch Inoperative",
            "explanation": "The transaction could not be processed because the payment switch is temporarily unavailable or not responding.",
            "interpretation": "The bank's payment system is temporarily down.",
            "solution": "Kindly retry the transaction in 5-10 minutes. If the issue persists, contact support."
        },
        {
            "code": "000",
            "message": "Action code null",
            "explanation": "The terminal returned no action code. Usually indicates a configuration or communication issue.",
            "interpretation": "The terminal couldn't generate a proper response code.",
            "solution": "<span class='solution-text'>Please enter your Relationship Manager's name for technical assistance with terminal configuration.</span>",
            "requiresRM": true
        },
        {
            "code": "108",
            "message": "Communication failure",
            "explanation": "The POS terminal failed to communicate with the bank switch or network.",
            "interpretation": "Your terminal can't connect to the payment network.",
            "solution": "Check your internet/GPRS connection. Restart the terminal. If problem persists, contact your network provider."
        },
        {
            "code": "106",
            "message": "Transaction not permitted to cardholder",
            "explanation": "The cardholder is not authorized to perform this type of transaction.",
            "interpretation": "This card has restrictions on certain transaction types.",
            "solution": "Ask customer to contact their bank to check card permissions or use another payment method."
        },
        {
            "code": "110",
            "message": "Terminal disabled",
            "explanation": "The POS device is not authorised for transactions. Needs reactivation.",
            "interpretation": "Your terminal has been disabled in the banking system.",
            "solution": "<span class='solution-text'>Please enter your Relationship Manager's name to request terminal reactivation.</span>",
            "requiresRM": true
        }
    ]
};

// Function to search for Relationship Manager by name
function findRelationshipManager(name) {
    const searchName = name.toLowerCase().trim();
    return posErrorCodes.relationshipManagers.find(rm => 
        rm.name.toLowerCase().includes(searchName)
    );
}

// Function to display all available Relationship Managers
function showRelationshipManagers() {
    let rmList = "<div class='rm-directory'><strong>Available Relationship Managers:</strong><ul style='list-style: none; padding: 5px 0;'>";
    posErrorCodes.relationshipManagers.forEach(rm => {
        if (rm.phone !== "Not Available") {
            rmList += `<li style='padding: 3px 0;'>👤 ${rm.name} - 📞 ${rm.phone}</li>`;
        }
    });
    rmList += "</ul></div>";
    return rmList;
}

// Modified function to handle RM search request
function requestRMName(errorCode) {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        const rmList = showRelationshipManagers();
        const html = `<div class='rm-request'>
            <div class='error-code'><i class='fas fa-user-tie'></i> Relationship Manager Required</div>
            <div class='error-message'>To proceed with resolving Error ${errorCode}, please enter the full name of your Relationship Manager.</div>
            ${rmList}
            <div class='error-explanation' style='margin-top: 15px;'>
                <i class='fas fa-info-circle'></i> 
                <strong>Instructions:</strong> Type the name exactly as shown above, then press Enter.
            </div>
            <div class='quick-options' style='margin-top: 15px;'>
                <div class='quick-option' onclick='selectOption("interpretation")'>
                    <i class='fas fa-search'></i> Check Another Code
                </div>
                <div class='quick-option' onclick='showAllRMs()'>
                    <i class='fas fa-list'></i> View All RMs
                </div>
            </div>
        </div>`;
        
        addMessage(html, false, true);
        
        // Store the error code we're waiting for RM input on
        window.pendingRMRequest = errorCode;
    }, 800);
}

// Function to show all RMs
function showAllRMs() {
    const rmList = showRelationshipManagers();
    addMessage(rmList, false, true);
}

// Modified displayErrorResult function to show meaning, interpretation, AND solution
function displayErrorResult(error, mode) {
    let resultHtml = `<div class='error-result'>
        <div class='error-code'><i class='fas fa-exclamation-circle'></i> Error Code: ${error.code === "null" ? "Null/Empty" : error.code}</div>
        <div class='error-message'><strong>${error.message}</strong></div>
        
        <!-- Always show Meaning/Explanation -->
        <div class='error-explanation' style='margin-top: 10px;'>
            <i class='fas fa-info-circle'></i> <strong>Meaning:</strong> ${error.explanation}
        </div>
        
        <!-- Always show Interpretation if available -->
        ${error.interpretation ? `
        <div class='error-explanation' style='margin-top: 10px; background: #f0f7ff; border-left-color: #2196F3;'>
            <i class='fas fa-brain'></i> <strong>Interpretation:</strong> ${error.interpretation}
        </div>` : ''}
        
        <!-- Always show Solution with blue styling -->
        ${error.solution ? `
        <div class='error-explanation' style='margin-top: 10px; background: #e3f2fd; border-left: 4px solid #1976D2;'>
            <i class='fas fa-wrench' style='color: #1976D2;'></i> <strong style='color: #1976D2;'>Solution:</strong> 
            <span style='color: #1565C0; font-weight: 500;'>${error.solution}</span>
        </div>` : ''}
        
        ${error.details && error.details.description ? `
        <div class='error-explanation' style="margin-top: 10px;">
            <i class='fas fa-globe-americas'></i> <strong>${error.details.errorTitle || 'Additional Info'}:</strong> ${error.details.description}
        </div>` : ''}
    </div><br>`;
    
    // Add quick options
    resultHtml += `<div class='quick-options'>
        <div class='quick-option' onclick='selectOption("interpretation")'>
            <i class='fas fa-search'></i> Check Another Code
        </div>
        <div class='quick-option' onclick='selectOption("faq")'>
            <i class='fas fa-question-circle'></i> FAQ
        </div>
        <div class='quick-option' onclick='showMainOptions()'>
            <i class='fas fa-home'></i> Main Menu
        </div>
    </div>`;
    
    return resultHtml;
}

// Modified processUserMessage to handle RM name input
function processUserMessage(message) {
    const typing = showTyping();
    
    setTimeout(() => {
        removeTyping(typing);
        
        const msg = message.toLowerCase().trim();
        
        // Check if we're waiting for an RM name
        if (window.pendingRMRequest) {
            const rm = findRelationshipManager(message);
            if (rm && rm.phone !== "Not Available") {
                // RM found
                const rmResponse = `<div class='rm-found'>
                    <div class='error-code' style='color: #4caf50;'><i class='fas fa-check-circle'></i> Relationship Manager Found!</div>
                    <div class='error-message'><strong>${rm.name}</strong> has been notified.</div>
                    <div class='error-explanation' style='background: #e8f5e9;'>
                        <i class='fas fa-phone-alt'></i> Contact: ${rm.phone}<br><br>
                        <strong>Next Steps:</strong> Please contact your Relationship Manager to proceed with Error ${window.pendingRMRequest} resolution.
                    </div>
                    <div class='quick-options' style='margin-top: 15px;'>
                        <div class='quick-option' onclick='window.location.href = "tel:${rm.phone.replace(/\s/g, '')}"'>
                            <i class='fas fa-phone'></i> Call Now
                        </div>
                        <div class='quick-option' onclick='selectOption("interpretation")'>
                            <i class='fas fa-search'></i> Check Another Code
                        </div>
                    </div>
                </div>`;
                
                addMessage(rmResponse, false, true);
                window.pendingRMRequest = null; // Clear the pending request
                return;
            } else {
                // RM not found
                const notFoundResponse = `<div class='rm-not-found'>
                    <div class='error-code' style='color: #f44336;'><i class='fas fa-exclamation-triangle'></i> Relationship Manager Not Found</div>
                    <div class='error-message'>"${message}" was not found in our directory.</div>
                    ${showRelationshipManagers()}
                    <div class='error-explanation' style='margin-top: 15px;'>
                        Please type the name exactly as shown above, or contact admin:
                    </div>
                    <div class='quick-options' style='margin-top: 15px;'>
                        <div class='quick-option' onclick='window.location.href = "tel:${posErrorCodes.adminContacts[0].phone.replace(/\s/g, '')}"'>
                            <i class='fas fa-phone'></i> Call Admin
                        </div>
                        <div class='quick-option' onclick='window.pendingRMRequest = null; selectOption("interpretation")'>
                            <i class='fas fa-search'></i> Check Another Code
                        </div>
                    </div>
                </div>`;
                
                addMessage(notFoundResponse, false, true);
                return;
            }
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
        
        // Check for error code
        const error = findErrorCode(message);
        
        if (error) {
            conversationStarted = true;
            const response = moeResponses.positive[Math.floor(Math.random() * moeResponses.positive.length)];
            
            addMessage(`${response} Here's complete information for this error:`, false, true);
            addMessage(displayErrorResult(error, currentMode), false, true);
            
            // If error requires RM, prompt for RM name after showing info
            if (error.requiresRM) {
                setTimeout(() => {
                    requestRMName(error.code);
                }, 1000);
            }
            
            // Special handling for error 104 flow
            if (error.code === "104") {
                setTimeout(() => {
                    start104Flow();
                }, 1500);
            }
            
            // Special handling for error 399 flow
            if (error.code === "399") {
                setTimeout(() => {
                    start399Flow();
                }, 1500);
            }
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

// Make new functions available globally
window.requestRMName = requestRMName;
window.showAllRMs = showAllRMs;
window.findRelationshipManager = findRelationshipManager;
window.showRelationshipManagers = showRelationshipManagers;
window.pendingRMRequest = null;
