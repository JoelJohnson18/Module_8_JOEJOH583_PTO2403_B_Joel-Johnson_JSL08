// 1. Singleton instance storage
let bankBranchInstance = null;

// 2. Define the `BankBranch` class
class BankBranch {
  // 3. Implement the Singleton logic in the constructor
  constructor(branchInfo) {
    if (!bankBranchInstance) {
      this.branchInfo = branchInfo;
      bankBranchInstance = this;
    }

    return bankBranchInstance;
  }

  // 4. Method to retrieve branch information
  getBranchInfo() {
    return this.branchInfo;
  }
}

// 5. Test the Singleton pattern

// Create the initial branch instance
const branchA = new BankBranch("Branch A - Main Street");

// Display branch information on the page
const branchInfoElement = document.getElementById("branch-info");
branchInfoElement.textContent = branchA.getBranchInfo();

// Handle button click to change branch information
document.getElementById("change-branch").addEventListener("click", () => {
  const branchB = new BankBranch("Branch B - Oak Avenue");

  // Update the displayed branch information
  branchInfoElement.textContent = branchB.getBranchInfo();

  // Verify both instances are the same
  console.log(branchA === branchB); // Should output true
});
