const BestStudents = () => {
  return (
    <div className="flex flex-col items-start gap-[16px] w-full">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-gray-500 font-nunito-sans text-[16px] font-bold tracking-wide uppercase">
          Best Students
        </p>
        <p className="text-Viewtext font-nunito-sans text-[14px] font-normal">
          View All Students
        </p>
      </div>
      <div className="flex flex-col p-[24px] items-start gap-[16px] self-stretch rounded-[6px] bg-white">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="font-bold text-head text-[14px]">
            <tr>
              <th scope="col" className="px-6 py-3 text-left   ">
                Reg. No
              </th>
              <th scope="col" className="px-6 py-3 text-left    ">
                F. Name
              </th>
              <th scope="col" className="px-6 py-3 text-left  ">
                L. Name
              </th>
              <th scope="col" className="px-6 py-3 text-left  ">
                Course #
              </th>
              <th scope="col" className="px-6 py-3 text-left   ">
                Total Fess
              </th>
              <th scope="col" className="px-6 py-3 text-left   ">
                Reg. Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-tableRow">
            {/* Table rows go here */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Computer Science</td>
              <td className="px-6 py-4 whitespace-nowrap">3</td>
              <td className="px-6 py-4 whitespace-nowrap">$500</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-12</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">1</td>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Computer Science</td>
              <td className="px-6 py-4 whitespace-nowrap">3</td>
              <td className="px-6 py-4 whitespace-nowrap">$500</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestStudents;
