import React from 'react';
import { TableTd } from '@mantine/core';

interface Props {
  // eslint-disable-next-line
  info: any;
}

const TableInfoItem: React.FC<Props> = ({ info }) => {
  return (
    <TableTd>
      <div className='p-3'>
        {info}
      </div>
    </TableTd>
  );
};

export default TableInfoItem;
