import { api, LightningElement } from 'lwc';

export default class CompanyEmployees extends LightningElement {
    @api heading = null;

    employees = [];
    isAddEmployeeOpen = false;
    employeeForm = {
        fullName: '',
        email: '',
        roleTitle: '',
        department: '',
        startDate: '',
        phone: '',
        status: '',
        notes: ''
    };

    get employeeCount() {
        return this.employees.length;
    }

    get hasEmployees() {
        return this.employees.length > 0;
    }

    handleOpenAddEmployee() {
        this.isAddEmployeeOpen = true;
    }

    handleCloseAddEmployee() {
        this.isAddEmployeeOpen = false;
        this.employeeForm = {
            fullName: '',
            email: '',
            roleTitle: '',
            department: '',
            startDate: '',
            phone: '',
            status: '',
            notes: ''
        };
    }

    handleEmployeeFieldChange(event) {
        const { name, value } = event.target;

        this.employeeForm = {
            ...this.employeeForm,
            [name]: value
        };
    }

    handleAddEmployee() {
        const fullName = this.employeeForm.fullName.trim();
        const email = this.employeeForm.email.trim();
        const roleTitle = this.employeeForm.roleTitle.trim();
        const department = this.employeeForm.department.trim();
        const startDate = this.employeeForm.startDate.trim();
        const phone = this.employeeForm.phone.trim();
        const status = this.employeeForm.status.trim();
        const notes = this.employeeForm.notes.trim();

        if (!fullName || !email || !roleTitle || !department || !startDate || !phone || !status) {
            return;
        }

        this.employees = [
            ...this.employees,
            {
                id: `${Date.now()}`,
                fullName,
                email,
                roleTitle,
                department,
                startDate,
                phone,
                status,
                notes
            }
        ];

        this.handleCloseAddEmployee();
    }
}
