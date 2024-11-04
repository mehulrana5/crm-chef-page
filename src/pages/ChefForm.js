import React, { useState } from 'react';
import './ChefForm.css';
import MultiRangeSlider from '../components/ui/MultiRangeSlider';

function ChefForm() {

    const [filters, setFilters] = useState({
        city_1: '',
        state_1: '',
        cuisine_1: '',
        name_1: '',
        email_1: '',
        contactNumber_1: '',
        qualification_1: '',
        salaryRange: [0, 100000],
        remarks_1: '',
    });

    const [leadForm, setLeadForm] = useState({
        name_2: '',
        contactNumber_2: '',
        email_2: '',
        city_2: '',
        state_2: '',
        role: [],
        salary: '',
        experience: '',
        designation: '',
        qualification_2: '',
        remarks_2: '',
        cuisines: '',
        sharedFor: '',
    });

    const [filterReset, setFilterReset] = useState(false)

    const filterOptions = [
        { label: 'City', name: 'city_1' },
        { label: 'State', name: 'state_1' },
        { label: 'Name', name: 'name_1' },
        { label: 'Qualification', name: 'qualification_1' },
        { label: 'Email', name: 'email_1' },
        { label: 'Contact Number', name: 'contactNumber_1' },
        { label: 'Cuisine', name: 'cuisine_1' }
    ]

    const leadFormBasicDetails = [
        { label: 'Name', name: 'name_2' },
        { label: 'Contact Number', name: 'contactNumber_2' },
        { label: 'Email', name: 'email_2' },
        { label: 'City', name: 'city_2' },
        { label: 'State', name: 'state_2' }
    ]

    const leadFormProfessionalDetails = [
        { label: 'Salary', name: 'salary' },
        { label: 'Experience', name: 'experience' },
        { label: 'Cuisines', name: 'cuisines' },
        { label: 'Designation', name: 'designation' },
        { label: 'Qualification', name: 'qualification_2' },
        { label: 'Remarks', name: 'remarks_2' },
        { label: 'Shared For', name: 'sharedFor' }
    ]

    // --------------functions---------------------
    const handleInputChange = (e, formType) => {
        const { name, value } = e.target;
        if (formType === 'filters') {
            setFilters({ ...filters, [name]: value });
        } else {
            setLeadForm({ ...leadForm, [name]: value });
        }
    };

    const handleRoleChange = (e) => {
        const { value, checked } = e.target;
        setLeadForm((prevLeadForm) => ({
            ...prevLeadForm,
            role: checked
                ? [...prevLeadForm.role, value]
                : prevLeadForm.role.filter((role) => role !== value),
        }));
    };

    const handleReset = () => {
        setFilters({
            city_1: '',
            state_1: '',
            cuisine_1: '',
            name_1: '',
            email_1: '',
            contactNumber_1: '',
            qualification_1: '',
            salaryRange: [0, 100000],
            remarks_1: '',
        });
        setFilterReset(true)
    };

    const handleClearLead = () => {
        setLeadForm({
            name_2: '',
            contactNumber_2: '',
            email_2: '',
            city_2: '',
            state_2: '',
            role: [],
            salary: '',
            experience: '',
            designation: '',
            qualification_2: '',
            remarks_2: '',
            cuisines: '',
            sharedFor: ''
        });
    };

    const handelSearch = () => {
        console.log(filters);
    }

    const handelAddLead = () => {
        console.log(leadForm);
    }
    const handelInputType = (type) => {
        switch (type) {
            case 'Email':
                return 'email'
            case 'Contact Number':
                return 'tel'
            default:
                return 'text'
        }
    }
    const handelInputPattern = (type) => {
        switch (type) {
            case 'Email':
                return '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'
            case 'Contact Number':
                return '^\\+?[0-9]{10,15}$'
            default:
                return ''
        }
    }

    // --------------functions ends----------------

    return (
        <>
            <div className="chef-form">
                <div className="lang-and-profile-container">
                    <select
                        name="language"
                        value={leadForm.language || 'en'}
                        onChange={(e) => handleInputChange(e, 'leadForm')}
                        className="language-select"
                    >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </select>
                    <div className="user-icon">
                        <img src="https://via.placeholder.com/56" alt="User Icon" />
                    </div>
                </div>
                <h1 className="title">Chef</h1>
                <div className="filters-container">
                    <h2 className='sub-title-1'>Filters</h2>
                    <div className="filters">
                        {filterOptions.map((field, index) => (
                            <div key={index} className="input-group">
                                <label htmlFor={field.name}>{field.label}</label>
                                <input
                                    type={handelInputType(field.label)}
                                    id={field.name}
                                    name={field.name}
                                    value={filters[field.name]}
                                    onChange={(e) => handleInputChange(e, 'filters')}
                                    pattern={handelInputPattern(field.label)}
                                />
                            </div>
                        ))}
                        <div className="input-group">
                            <label htmlFor="salaryRange">Salary Range</label>
                            <MultiRangeSlider
                                min={0}
                                max={100000}
                                onChange={({ min, max }) => {
                                    setFilters({ ...filters, salaryRange: [min, max] })
                                    setFilterReset(false)
                                }}
                                step={100}
                                reset={filterReset}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="remarks_1">Remarks</label>
                            <input
                                type="text"
                                id="remarks_1"
                                name="remarks_1"
                                value={filters.remarks_1}
                                onChange={(e) => handleInputChange(e, 'filters')}
                            />
                        </div>
                    </div>
                    <div className="button-group">
                        <button className='reset-btn' onClick={handleReset}>Reset</button>
                        <button className="search-btn" onClick={handelSearch}>Search</button>
                    </div>
                </div>
                <div className="lead-form-container">
                    <h2 className='sub-title-1'>Lead Form</h2>
                    <h3 className='sub-title-2'>Basic Details</h3>
                    <div className="lead-form">
                        {leadFormBasicDetails.map((field, index) => (
                            <div key={index} className="input-group">
                                <label htmlFor={field.name}>{field.label}</label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    value={leadForm[field.name]}
                                    onChange={(e) => handleInputChange(e, 'leadForm')}
                                />
                            </div>
                        ))}
                        <div></div>
                        <div className="input-group">
                            <label>Role*</label>
                            <div>
                                <div className='custom-checkbox-container'>
                                    <input className="custom-checkbox" type="checkbox" value="Chef" onChange={handleRoleChange} checked={leadForm.role.includes('Chef')} id="chefCheckBox" />
                                    <label htmlFor="chefCheckBox">Chef</label>
                                </div>
                                <div className='custom-checkbox-container'>
                                    <input className="custom-checkbox" type="checkbox" value="Party Cook" onChange={handleRoleChange} checked={leadForm.role.includes('Party Cook')} id="partyCookCheckBox" />
                                    <label htmlFor="partyCookCheckBox">Party Cook</label>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className='sub-title-2'>Professional Details</h3>
                    <div className='lead-form'>
                        {leadFormProfessionalDetails.map((field, index) => (
                            <div key={index} className="input-group">
                                <label htmlFor={field.name}>{field.label}</label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    value={leadForm[field.name]}
                                    onChange={(e) => handleInputChange(e, 'leadForm')}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-group">
                    <button className='clear-lead-btn' onClick={handleClearLead}>Clear Lead</button>
                    <button className="add-lead-btn" onClick={handelAddLead}>Add Lead</button>
                </div>
            </div>
        </>
    );
}

export default ChefForm;