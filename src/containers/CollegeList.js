import React, { useEffect } from 'react';

const CollegeList = () => {

  useEffect(() => {
    const data = async () => {
      try {
        const apiResult = await fetch('https://api.rootnet.in/covid19-in/hospitals/medical-colleges')
          .then((apiResult) => apiResult.json())
          .then((name) => name.data.medicalColleges);
        getCollegeList(apiResult);
      } catch (error) {
        console.error(error);
      }
    };
    data();
  }, [collegeNames]);

  return (
    <div>
      <li>
        {collegeList.empty ? 'Loading...!!!' : collegeList }
      </li>
    </div>
  );
};

export default CollegeList;
