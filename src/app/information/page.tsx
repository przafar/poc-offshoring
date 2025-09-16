import React from 'react';
import TableWrapper from '@/shared/ui/table-wrapper';
import ProjectTotalInfoItem from '@/entity/project/ui/project-total-info-item';
import { projects, projectsTotals } from '@/entity/project/model/mock';
import { ActionIcon, TableTd, TableTr } from '@mantine/core';
import { Plus, Trash } from 'lucide-react';
import TableInfoItem from '@/shared/ui/table-info-item';

const TABLE_HEAD = [
  'name',
  'type',
  'revenue',
  'fromDt',
  'endDt',
  'days',
  'PM',
  'Plan %',
  'Actual %',
  'status',
  ''
]

const InformationPage: React.FC = () => {
  return (
    <React.Fragment>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
        {projectsTotals.map((project, index) => (
          <ProjectTotalInfoItem key={index} title={project.title} total={project.total} />
        ))}
      </section>

      <section>
        <div className='flex-center-between'>
          <h2 className='text-black my-5'>Project list</h2>
          <ActionIcon variant='transparent' className='p-3 cursor-pointer'>
            <Plus />
          </ActionIcon>
        </div>
        <TableWrapper head={TABLE_HEAD}>
          {projects.map((project, index) => (
            <TableTr key={index}>
              <TableInfoItem info={project.name} />
              <TableInfoItem info={project.type} />
              <TableInfoItem info={project.revenue} />
              <TableInfoItem info={project.fromDt} />
              <TableInfoItem info={project.endDt} />
              <TableInfoItem info={project.days} />
              <TableInfoItem info={project.PM} />
              <TableInfoItem info={project.planPercent} />
              <TableInfoItem info={project.actualPercent} />
              <TableInfoItem info={project.status} />
              <TableTd>
                <ActionIcon variant='transparent' className='p-3 cursor-pointer'>
                  <Trash />
                </ActionIcon>
              </TableTd>
            </TableTr>
          ))}
        </TableWrapper>
      </section>
    </React.Fragment>
  );
};

export default InformationPage;
