interface IEmployee {
    readonly title: string;
    readonly salary: number;
}

class Engineer implements IEmployee {
    title: 'Engineer';
    salary: 95000;
}

class Accountant implements IEmployee {
    title: 'Accountant';
    salary: 85000;
}

class ConstructionWorker implements IEmployee {
    title: 'ConstructionWorker';
    salary: 75000;
}

class Employees {
    private employees: IEmployee[] = [];

    /**
     *
     */
    constructor() {
       
    }

    addEmployees(employees: IEmployee[]) {
        this.employees = this.employees.concat(employees);
        return this;
    }

    getEmployeeTitles() {
        return this.employees.map(emp => emp.title);
    }

    getEmployeesSalaryTotal() {
        return this.employees.reduce((acc, val) => acc + val.salary, 0)
    }

}

const HBCEmployees = new Employees();
HBCEmployees.addEmployees([new Engineer(), new ConstructionWorker(), new Accountant()])
HBCEmployees.getEmployeeTitles();
