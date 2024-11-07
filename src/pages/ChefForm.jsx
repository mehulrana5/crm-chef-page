import React, { useState } from 'react';
import './ChefForm.css';
import MultiRangeSlider from '../components/ui/MultiRangeSlider';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import CollapseTable from '../components/CollapseTable';

function ChefForm() {
    const { t, i18n } = useTranslation();

    const initialFilters = {
        city_1: '', state_1: '', cuisine_1: '', name_1: '', email_1: '', contactNumber_1: '', qualification_1: '', salaryRange: [0, 100000], remarks_1: ''
    }
    const initialLeadForm = {
        name_2: '', contactNumber_2: '', email_2: '', city_2: '', state_2: '', role: [], salary: '', experience: '', designation: '', qualification_2: '', remarks_2: '', cuisine_2: '', sharedFor: ''
    }

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
        { label: 'Cuisines', name: 'cuisine_2' },
        { label: 'Designation', name: 'designation' },
        { label: 'Qualification', name: 'qualification_2' },
        { label: 'Remarks', name: 'remarks_2' },
        { label: 'Shared For', name: 'sharedFor' }
    ]

    // --------------useState starts---------------------

    const [filters, setFilters] = useState(initialFilters);
    const [leadForm, setLeadForm] = useState(initialLeadForm);
    const [filterReset, setFilterReset] = useState(false)
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [filterData, setFilterData] = useState();
    const [submitFilters, setSubmitFilters] = useState(false)
    // --------------useState ends-----------------------

    // --------------functions---------------------------
    const handleInputChange = (e, formType) => {
        const { name, value } = e.target;
        setErrors({ ...errors, [name]: '' })
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
        setFilters(initialFilters);
        setFilterReset(true)
        setErrors({})
    };

    const handleClearLead = () => {
        setLeadForm(initialLeadForm);
        setErrors({})
    };

    const validateSearch = () => {
        var temp = {};
        // const { city_1, state_1, cuisine_1, name_1, email_1, contactNumber_1, qualification_1, salaryRange, remarks_1 } = filters;
        // if (city_1 && city_1.length<3) {
        //     temp.city_1 = 'Invalid City';
        // }
        // if (state_1) {
        //     temp.state_1 = 'Invalid State';
        // }
        // if (cuisine_1) {
        //     temp.cuisine_1 = 'Invalid Cuisine';
        // }
        // if (name_1) {
        //     temp.name_1 = 'Invalid Name';
        // }
        // if (email_1 && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email_1)) {
        //     temp.email_1 = 'Invalid Email';
        // }
        // if (contactNumber_1 && !/^\+?[0-9]{10,15}$/.test(contactNumber_1)) {
        //     temp.contactNumber_1 = 'Invalid Contact Number';
        // }
        // if (qualification_1) {
        //     temp.qualification_1 = 'Invalid Qualification';
        // }
        // if (salaryRange[0] < 0 || salaryRange[1] <= salaryRange[0]) {
        //     temp.salaryRange = 'Invalid Salary Range';
        // }
        // if (remarks_1 && remarks_1.length > 200) {
        //     temp.remarks_1 = 'Remarks too long';
        // }
        setErrors(temp);
        return Object.keys(temp).length === 0;
    };

    const validateLeadForm = () => {

    }

    const handelSearch = async () => {
        setLoading(true);
        setSubmitFilters(true)
        setFilterData()
        if (!validateSearch()) return;
        setErrors({});
        try {
            // const response = await axios.get("URL");
            const response = await new Promise((resolve) =>
                setTimeout(() => {
                    resolve([
                        {
                            data: {
                                name: 'mehul',
                                contactNumber: '1234567890',
                                email: 'mehul@gmail.com',
                                city: 'noida',
                                state: 'Uttar Pradesh',
                                cuisine: ['cui-1', 'cui-2'],
                                qualification: 'bachelors',
                                salary: '10000'
                            }
                        },
                        {
                            data: {
                                name: 'a',
                                contactNumber: '1234265896',
                                email: 'a@gmail.com',
                                city: 'city 1',
                                state: 'state 1',
                                cuisine: ['cui-3', 'cui-1'],
                                qualification: 'bachelors',
                                salary: '15000'
                            }
                        },
                        {
                            data: {
                                name: 'Rohit',
                                contactNumber: '9876543210',
                                email: 'rohit@gmail.com',
                                city: 'Mumbai',
                                state: 'Maharashtra',
                                cuisine: ['cui-4', 'cui-5'],
                                qualification: 'masters',
                                salary: '20000'
                            }
                        },
                        {
                            data: {
                                name: 'Sneha',
                                contactNumber: '9998887776',
                                email: 'sneha@gmail.com',
                                city: 'Bangalore',
                                state: 'Karnataka',
                                cuisine: ['cui-6', 'cui-2'],
                                qualification: 'PhD',
                                salary: '25000'
                            }
                        },
                        {
                            data: {
                                name: 'Arjun',
                                contactNumber: '9988776655',
                                email: 'arjun@gmail.com',
                                city: 'Chennai',
                                state: 'Tamil Nadu',
                                cuisine: ['cui-1', 'cui-7'],
                                qualification: 'bachelors',
                                salary: '18000'
                            }
                        },
                        {
                            data: {
                                name: 'Priya',
                                contactNumber: '8877665544',
                                email: 'priya@gmail.com',
                                city: 'Hyderabad',
                                state: 'Telangana',
                                cuisine: ['cui-8', 'cui-3'],
                                qualification: 'diploma',
                                salary: '12000'
                            }
                        },
                        {
                            data: {
                                name: 'Amit',
                                contactNumber: '7766554433',
                                email: 'amit@gmail.com',
                                city: 'Kolkata',
                                state: 'West Bengal',
                                cuisine: ['cui-9', 'cui-10'],
                                qualification: 'bachelors',
                                salary: '17000'
                            }
                        },
                        {
                            data: {
                                name: 'Neha',
                                contactNumber: '6655443322',
                                email: 'neha@gmail.com',
                                city: 'Ahmedabad',
                                state: 'Gujarat',
                                cuisine: ['cui-2', 'cui-11'],
                                qualification: 'masters',
                                salary: '22000'
                            }
                        },
                        {
                            data: {
                                name: 'Vikas',
                                contactNumber: '5544332211',
                                email: 'vikas@gmail.com',
                                city: 'Jaipur',
                                state: 'Rajasthan',
                                cuisine: ['cui-12', 'cui-4'],
                                qualification: 'bachelors',
                                salary: '16000'
                            }
                        },
                        {
                            data: {
                                name: 'Anjali',
                                contactNumber: '4433221100',
                                email: 'anjali@gmail.com',
                                city: 'Lucknow',
                                state: 'Uttar Pradesh',
                                cuisine: ['cui-3', 'cui-6'],
                                qualification: 'PhD',
                                salary: '24000'
                            }
                        },
                        {
                            data: {
                                name: 'Manish',
                                contactNumber: '3322110099',
                                email: 'manish@gmail.com',
                                city: 'Pune',
                                state: 'Maharashtra',
                                cuisine: ['cui-1', 'cui-5'],
                                qualification: 'masters',
                                salary: '21000'
                            }
                        }
                    ]);

                }, 3000)
            );
            setFilterData(response);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    const handelAddLead = () => {
        if (!validateLeadForm()) return
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

    const handleLangChange = (lang) => {
        i18n.changeLanguage(lang);
    }

    // --------------functions ends----------------------

    return (
        <>
            <div className="chef-form">
                <div className="lang-and-profile-container">
                    <select
                        name="language"
                        // value={leadForm.language || 'en'}
                        onChange={(e) => handleLangChange(e.target.value)}
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
                    <h2 className='sub-title-1'>{t('ChefForm.Filters')}</h2>
                    <div className="filters">
                        {filterOptions.map((field, index) => (
                            <div key={index} className="input-group">
                                <label htmlFor={field.name}>{t(`ChefForm.${field.label.replace(' ', '')}`)}</label>
                                <input
                                    type={handelInputType(field.label)}
                                    id={field.name}
                                    name={field.name}
                                    value={filters[field.name]}
                                    onChange={(e) => handleInputChange(e, 'filters')}
                                    pattern={handelInputPattern(field.label)}
                                />
                                <span className="error-container">{errors[field.name]}</span>
                            </div>
                        ))}
                        <div className="input-group">
                            <label htmlFor="salaryRange">{t('ChefForm.SalaryRange')}</label>
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
                            <label htmlFor="remarks_1">{t('ChefForm.Remarks')}</label>
                            <input
                                type="text"
                                id="remarks_1"
                                name="remarks_1"
                                value={filters.remarks_1}
                                onChange={(e) => handleInputChange(e, 'filters')}
                            />
                            <span className="error-container">{errors['remarks_1']}</span>
                        </div>
                    </div>
                    <div className="button-group">
                        <button className='reset-btn' onClick={handleReset}>{t('ChefForm.Reset')}</button>
                        <button className="search-btn" onClick={handelSearch}>{t('ChefForm.Search')}</button>
                    </div>
                </div>
                {
                    submitFilters && loading && !filterData ?
                        <div className="filter-data-container">
                            Loading....
                        </div>
                        : submitFilters && !loading && filterData ?
                            <div className="filter-data-container">
                                <CollapseTable data={filterData} />
                            </div>
                            : <></>
                }
                <div className="lead-form-container">
                    <h2 className='sub-title-1'>{t('ChefForm.LeadForm')}</h2>
                    <h3 className='sub-title-2'>{t('ChefForm.BasicDetails')}</h3>
                    <div className="lead-form">
                        {leadFormBasicDetails.map((field, index) => (
                            <div key={index} className="input-group">
                                <label htmlFor={field.name}>{t(field.label)}</label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    value={leadForm[field.name]}
                                    onChange={(e) => handleInputChange(e, 'leadForm')}
                                />
                                <span className="error-container">{errors[field.name]}</span>
                            </div>
                        ))}
                        <div></div>
                        <div className="input-group">
                            <label>{t('ChefForm.Role')}*</label>
                            <div>
                                <div className='custom-checkbox-container'>
                                    <input className="custom-checkbox" type="checkbox" value="Chef" onChange={handleRoleChange} checked={leadForm.role.includes('Chef')} id="chefCheckBox" />
                                    <label htmlFor="chefCheckBox">{t('ChefForm.ChefRole')}</label>
                                </div>
                                <div className='custom-checkbox-container'>
                                    <input className="custom-checkbox" type="checkbox" value="Party Cook" onChange={handleRoleChange} checked={leadForm.role.includes('Party Cook')} id="partyCookCheckBox" />
                                    <label htmlFor="partyCookCheckBox">{t('ChefForm.PartyCookRole')}</label>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                    <h3 className='sub-title-2'>{t('ChefForm.ProfessionalDetails')}</h3>
                    <div className='lead-form'>
                        {leadFormProfessionalDetails.map((field, index) => (
                            <div key={index} className="input-group">
                                <label htmlFor={field.name}>{t(`ChefForm.${field.label.replace(' ', '')}`)}</label>
                                <input
                                    type="text"
                                    id={field.name}
                                    name={field.name}
                                    value={leadForm[field.name]}
                                    onChange={(e) => handleInputChange(e, 'leadForm')}
                                />
                                <span className="error-container">{errors[field.name]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="button-group">
                    <button className='clear-lead-btn' onClick={handleClearLead}>{t('ChefForm.ClearLead')}</button>
                    <button className="add-lead-btn" onClick={handelAddLead}>{t('ChefForm.AddLead')}</button>
                </div>
            </div>
        </>
    );
}

export default ChefForm;