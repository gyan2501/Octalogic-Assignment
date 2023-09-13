const LatestEnrollment = () => {
  return (
    <div className="flex flex-col items-start gap-[16px] w-full">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-gray-500 font-nunito-sans text-[16px] font-bold tracking-wide uppercase">
          Latest Enrolments
        </p>
        <p className="text-Viewtext font-nunito-sans text-[14px] font-normal">
          View All Courses
        </p>
      </div>
      <div className="flex flex-col p-[24px] items-start gap-[16px] self-stretch rounded-[6px] bg-white">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="font-bold text-head text-[14px]">
            <tr>
              <th scope="col" className="px-6 py-3 text-left   ">
                Enr. No
              </th>
              <th scope="col" className="px-6 py-3 text-left    ">
                S. Name
              </th>
              <th scope="col" className="px-6 py-3 text-left  ">
                C. Name
              </th>
              <th scope="col" className="px-6 py-3 text-left  ">
                Fees
              </th>
              <th scope="col" className="px-6 py-3 text-left   ">
                Enr. Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-tableRow">
            {/* Table rows go here */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Computer Science</td>
              <td className="px-6 py-4 whitespace-nowrap">$500</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-12</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Computer Science</td>
              <td className="px-6 py-4 whitespace-nowrap">$500</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestEnrollment;
