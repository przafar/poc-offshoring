import React from 'react';
import { Table, TableTbody, TableTh, TableThead, TableTr } from '@mantine/core';

interface Props {
  head: string[];
  children: React.ReactNode;
}

const TableWrapper: React.FC<Props> = ({ head, children }) => {
  return (
    <Table className='w-full '>
      <TableThead className='text-center bg-teal-100'>
        <TableTr>
          {head.map((item, index) => (
            <TableTh key={index}>
              <div className='p-3'>
                {item}
              </div>
            </TableTh>
          ))}
        </TableTr>
      </TableThead>
      <TableTbody className='text-center bg-white'>
        {children}
      </TableTbody>
    </Table>
  );
};

export default TableWrapper;
