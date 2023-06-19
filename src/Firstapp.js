import React, { useState } from 'react';

function Firstapp() {
  const [allInfo, setallInfo] = useState([]);
  const [Name, setName] = useState('');
  const [Age, setAge] = useState('');
  const [Nationality, setNationality] = useState('');

  const addInfo = () => {
    const newInfo = {
      name: Name,
      age: Age,
      nationality: Nationality
    };
    setallInfo([...allInfo, newInfo]);
    setName('');
    setAge('');
    setNationality('');
  };

  const deleteInfo = (index) => {
    const updatedInfo = [...allInfo];
    updatedInfo.splice(index, 1);
    setallInfo(updatedInfo);
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='w-1/3 h-auto shadow-2xl text-center'>
          <div className='p-6'>
            <table className='table-fixed border border-slate-950'>
              <tbody>
                {allInfo.map((el, i) => (
                  <tr key={i}>
                    <td className='border border-slate-950 p-2'>{el.name}</td>
                    <td className='border border-slate-950 p-2'>{el.age}</td>
                    <td className='border border-slate-950 p-2'>{el.nationality}</td>
                    <td className='border border-slate-950 p-2'>
                      <button
                        onClick={() => deleteInfo(i)}
                        className='bg-red-500 text-white px-3 py-1 rounded-md'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <input
              className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border my-2 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              value={Name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
              type='text'
            />
            <input
              className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border my-2 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              value={Age}
              onChange={(e) => setAge(e.target.value)}
              placeholder='Age'
              type='number'
            />
            <input
              className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border my-2 border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
              value={Nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder='Nationality'
              type='text'
            />
          </div>
          <button
            onClick={addInfo}
            className='btn bg-red-600 p-4 my-2 rounded-xl text-white'
          >
            Add to table
          </button>
        </div>
      </div>
    </>
  );
}

export default Firstapp;
