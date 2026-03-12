import { api, LightningElement } from 'lwc';

export default class CompanyEmployees extends LightningElement {
    // VARIABLES
    @api heading = null;
    @api description = null;

    @api companySectionTitle = null;
    @api companySectionDescription = null;
    @api companyNameLabel = null;
    @api companyNameValue = null;
    @api industryLabel = null;
    @api industryValue = null;
    @api hqLocationLabel = null;
    @api hqLocationValue = null;
    @api employeeCountLabel = null;
    @api websiteLabel = null;
    @api websiteValue = null;
    @api taxIdLabel = null;
    @api taxIdValue = null;
    @api accountManagerLabel = null;
    @api accountManagerValue = null;
    @api companyPhoneLabel = null;
    @api companyPhoneValue = null;
    @api billingAddressLabel = null;
    @api billingAddressValue = null;
    @api shippingAddressLabel = null;
    @api shippingAddressValue = null;

    @api employeesSectionTitle = null;
    @api addEmployeeButtonLabel = null;
    @api emptyStateTitle = null;

    @api cancelButtonLabel = null;
    @api saveButtonLabel = null;
    @api fullNameLabel = null;
    @api emailLabel = null;
    @api roleTitleLabel = null;
    @api departmentLabel = null;
    @api startDateLabel = null;
    @api phoneLabel = null;
    @api statusLabel = null;
    @api notesLabel = null;

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

    // GETTERS
    get employeeCount() {
        return this.employees.length;
    }

    get hasEmployees() {
        return this.employees.length > 0;
    }

    // LIFECYCLES

    // INIT METHODS
    resetEmployeeForm() {
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

    // HANDLERS
    handleOpenAddEmployee() {
        this.isAddEmployeeOpen = true;
    }

    handleCloseAddEmployee() {
        this.isAddEmployeeOpen = false;
        this.resetEmployeeForm();
    }

    handleEmployeeFieldChange(event) {
        const { name, value } = event.target;

        this.employeeForm = {
            ...this.employeeForm,
            [name]: value
        };
    }

    handleAddEmployee() {
        const employee = this.buildEmployee();

        if (!employee) {
            return;
        }

        this.employees = [...this.employees, employee];
        this.handleCloseAddEmployee();
    }

    // MAIN METHODS
    buildEmployee() {
        const fullName = this.employeeForm.fullName.trim();
        const email = this.employeeForm.email.trim();
        const roleTitle = this.employeeForm.roleTitle.trim();
        const department = this.employeeForm.department.trim();
        const startDate = this.employeeForm.startDate.trim();
        const phone = this.employeeForm.phone.trim();
        const status = this.employeeForm.status.trim();
        const notes = this.employeeForm.notes.trim();

        if (!fullName || !email || !roleTitle || !department || !startDate || !phone || !status) {
            return null;
        }

        return {
            id: `${Date.now()}`,
            fullName,
            email,
            roleTitle,
            department,
            startDate,
            phone,
            status,
            notes
        };
    }
}
