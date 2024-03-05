class Tea {
    constructor(type, steepingTime) {
      this.type = type;
      this.steepingTime = steepingTime;
    }
  
    
    steep() {
      console.log(`Steeping ${this.type} tea for ${this.steepingTime} minutes.`);
    }
  
    addIngredients() {
      console.log(`Adding ${this.type} tea leaves to hot water.`);
    }
  
    pour() {
      console.log(`Pouring the brewed ${this.type} tea into a cup.`);
    }
  
    enjoy() {
      console.log(`Enjoying a cup of delicious ${this.type} tea!`);
    }
  
    prepareTea() {
      console.log(`Preparing a cup of ${this.type} tea:`);
      this.addIngredients();
      this.steep();
      this.pour();
      this.enjoy();
    }
  }
  
  // Example: Let's make a cup of green tea
  const greenTea = new Tea('Green', 3);
  greenTea.prepareTea();
  