
const data = [
  "Forex UPI limit: Min 1000 to 100k",
  "Forex IMPS limit: Min 1000 to 500k",
  "Forex NEFT limit: Min 1000 to 1 million INR",
  "Forex RTGS limit: Up to 2.5 million",
  "Forex withdrawal IMPS only: Min 1000 Max 49k",
  "Forex Deposits: 5.95%",
  "Forex Withdrawals: 3%",
  "Forex Settlements: 3.5%",
  "Igaming deposits: 4.5%",
  "Igaming withdrawals: 2%",
  "Igaming Settlements: 3.5%",
  "Igaming methods: IMPS,RTGS,NEFT",
  "Igaming UPI limit: Min 1000 to 100k",
  "Igaming IMPS limit: Min 1000 to 500k",
  "Igaming NEFT limit: Min 1000 to 1 million INR",
  "Igaming RTGS limit: Up to 2.5 million",
  "Igaming Mini UPI limit:500 to 1000",
  "FTD: First Time Deposit",
  "Adult deposits: 7.5%",
  "Adult Withdrawals: 3.5%",
  "Adult Settlements: 3.5%",
  "Dating deposits: 7.0%",
  "Dating Withdrawals: 3.5%",
  "Dating Settlements: 3.5%",
];

let filteredResults = []; 

// DOM Elements
const searchInput = document.getElementById('searchInput');
const resultsSection = document.getElementById('resultsSection');
const infoText = document.getElementById('infoText');

function filterResults(event) {
  const searchTerm = event.target.value.toLowerCase();


  if (searchTerm.trim() === '') {
    filteredResults = []; // Empty the results
  } else {
    filteredResults = data.filter(item => item.toLowerCase().includes(searchTerm));
  }


  updateResults();
}


function updateResults() {
 
  resultsSection.innerHTML = '';


  if (filteredResults.length === 0) {
  } else {
  
    filteredResults.forEach(result => {
      const resultDiv = document.createElement('div');
      resultDiv.classList.add('result-item');
      resultDiv.textContent = result;  
      resultsSection.appendChild(resultDiv); 
    });
  }
}


function openInfo() {
  infoText.classList.toggle('hidden');
}


function init() {
  filteredResults = []; 
  updateResults(); 
}

init();
