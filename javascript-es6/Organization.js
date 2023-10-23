class Organization {
  constructor(root) {
    this.printOrganization = (position, prefix) => {
      let str = `${prefix}+-${position.toString()}\n`;
      for (const p of position.getDirectReports()) {
        str = str.concat(this.printOrganization(p, `${prefix}  `));
      }
      return str;
    };

    // Hire the given person as an employee in the position that has that title
    // Return the newly filled position or undefined if no position has that title
    
      this.hire = (person, title) => {
      // Use a recursive function to look for position by title
      const findPositionByTitle = (position, title) => {
        if (position.getTitle() === title) {
          return position;
        }
        for (const report of position.getDirectReports()) {
          const found = findPositionByTitle(report, title);
          if (found) {
            return found;
          }
        }
        return null;
      };
      
      const targetPosition = findPositionByTitle(root, title);
      if (targetPosition && !targetPosition.isFilled()) {
        targetPosition.setEmployee(person);
        return targetPosition;
      }
      return undefined;
    };
    
    this.toString = () => this.printOrganization(root, '');

  };   
};

export default Organization;
