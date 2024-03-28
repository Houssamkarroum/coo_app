"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const MemberForm = () => {
    const [formData, setFormData] = useState({
      memberName: '',
      gender: '',
      tournament: '',
      tournamentDate: new Date(),
      matches: [{
        matchDate: new Date(),
        matchNature: '',
        matchType: '',
        gagne: ''
      }]
    });
  
    const handleDateChange = (name, date, index) => {
      if (index !== undefined) {
        const newMatches = formData.matches.map((match, matchIndex) => {
          if (index === matchIndex) {
            return { ...match, [name]: date };
          }
          return match;
        });
        setFormData({ ...formData, matches: newMatches });
      } else {
        setFormData({ ...formData, [name]: date });
      }
    };
  
    const handleChange = (e, index) => {
      const { name, value } = e.target;
      if (index !== undefined) {
        const newMatches = formData.matches.map((match, matchIndex) => {
          if (index === matchIndex) {
            return { ...match, [name]: value };
          }
          return match;
        });
        setFormData({ ...formData, matches: newMatches });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const addMatch = () => {
      setFormData(prevFormData => ({
        ...prevFormData,
        matches: [...prevFormData.matches, {
          matchDate: new Date(),
          matchNature: '',
          matchType: '',
          gagne: ''
        }]
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
    };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Member Name:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="memberName"
            value={formData.memberName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender:
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Tournament Name:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="tournament"
            value={formData.tournament}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date of Tournament:
          <DatePicker
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={formData.tournamentDate}
            onChange={(date) => handleDateChange('tournamentDate', date)}
            dateFormat="yyyy-MM-dd"
          />
        </label>
      </div>   
      {
  formData.matches.map((match, index) => (
    <div key={index} className="mb-4">
      <h3 className="text-gray-700 text-lg font-bold mb-2">Match {index + 1}</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Date of Match:
        <DatePicker
          className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={match.matchDate}
          onChange={(date) => handleDateChange('matchDate', date, index)}
          dateFormat="yyyy-MM-dd"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Nature of Match:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="matchNature"
          value={match.matchNature}
          onChange={(e) => handleChange(e, index)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Type of Match:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="matchType"
          value={match.matchType}
          onChange={(e) => handleChange(e, index)}
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Gagne:
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="gagne"
          value={match.gagne}
          onChange={(e) => handleChange(e, index)}
        />
      </label>
    </div>
  ))
}
<button type="button" onClick={addMatch} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
  More
</button>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MemberForm;
