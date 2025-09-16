import React from 'react';

interface Props {
  title: string;
  total: number;
}

const ProjectTotalInfoItem: React.FC<Props> = ({ title, total }) => {
  return (
    <article className='rounded-lg bg-blue-400 py-3'>
      <h4 className='text-white text-center font-medium text-xl'>{title}</h4>
      <p className='text-white text-center font-medium text-sm'>{total}</p>
    </article>
  );
};

export default ProjectTotalInfoItem;
