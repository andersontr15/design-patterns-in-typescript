interface IEmployee {
    getYearsWorked(): number;
}

interface IContractor {
    getHoursWorked(): number;
}

class Employee implements IEmployee {
    private yearsWorked: number;
    getYearsWorked(): number {
      return this.yearsWorked;
    }

    constructor(metaData: Required<{ yearsWorked: number }>) {
        this.yearsWorked = metaData.yearsWorked;
    }
}

class Contractor implements IContractor {
    private hoursWorked: number;
    getHoursWorked(): number {
        return this.hoursWorked;
    }
    /**
     *
     */
    constructor(metaData: Required<{ hoursWorked: number }>) {
        this.hoursWorked = metaData.hoursWorked;
    }
}

class ContractorAdapter extends Employee {
    constructor(contractor: Contractor) {
        super({ yearsWorked: contractor.getHoursWorked() / 2080 });
    }
}

const employee1 = new Employee({ yearsWorked: 5 });
const employee2 = new Employee({ yearsWorked: 6 });
const contractor1 = new Contractor({ hoursWorked: 2080 * 6 })
const employee3 = new ContractorAdapter(contractor1);
const employeeList: Employee[] = [
    employee1,
    employee2,
    employee3,
];
console.log(employee3 instanceof Employee)
