/*--------Freelancer array showing name, job, and starting price---------*/
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
];

/*--------Function to update the list with new freelancer information---------*/
function updateList() {
  const listContainer = document.getElementById("freelancer-list");
  listContainer.innerHTML = "";
  //makes inner html blank to start
  //.innerhtml property reads or inserts HTML inside an element
  freelancers.forEach((freelancer) => {
    const freelancerItem = document.createElement("p");
    //creates a new element "p"
    freelancerItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    //places the freelancer’s name, occupation, and price inside the created element "p"
    //.textContent reads or inserts plain text (ignores HTML tags)
    listContainer.appendChild(freelancerItem);
    //appendChild adds a new element or node inside another element in this its listContainer
  });
  updateAveragePrice();
  //shows the average price after new freelancer is added
}
/*--------Function to update the average price---------*/
function updateAveragePrice() {
  if (freelancers.length === 0) {
    //Checks if there are no freelancers (freelancers.length === 0)
    document.getElementById("average-price").textContent = "$0";
    return;
    // If empty, sets the average price to "$0"
  }

  const avgPrice =
    freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0) /
    //Uses .reduce() to sum up all freelancer prices
    freelancers.length;
  // Divides by the total number of freelancers to get the average
  document.getElementById("average-price").textContent = `$${avgPrice}`;
  //Updates the <span id="average-price"> in the HTM
}

/*--------------Adding a new freelancer to list-------------*/
function addFreelancer() {
  const newFreelancers = [
    { name: "Carol", occupation: "Programmer", price: 70 },
    { name: "David", occupation: "Designer", price: 60 },
    { name: "Eve", occupation: "Consultant", price: 80 },
  ];
  const randomFreelancer =
    //Uses Math.random() to randomly pick one freelancer from newFreelancers list
    //Need to multiply random chance number by 3 because it has to scale to fit in the array
    // .length = 3 so the valid indexes are 0, 1, and 2
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
  //Array indexes must be whole numbers (0, 1, 2)
  //Math.floor rounds down to get a valid number to use
  freelancers.push(randomFreelancer);
  // Adds (push) the selected freelancer to the current freelancers array
  updateList();
  // Calls updateList() to refresh the displayed list and average price
}

/*-------Updates page immediately---------*/
updateList();
//Runs updateList() immediately when the script loads to populate the initial list and average price
setInterval(addFreelancer, 5000);
//Calls addFreelancer() every 5 seconds (5000 milliseconds)
//Keeps adding new freelancers indefinitely, updating the display each time
