import React from 'react';
import TableWrapper from '@/shared/ui/table-wrapper';
import ProjectTotalInfoItem from '@/entity/project/ui/project-total-info-item';
import { projects, projectsTotals } from '@/entity/project/model/mock';
import { ActionIcon, TableTd, TableTr } from '@mantine/core';
import { Plus, Trash } from 'lucide-react';

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
              <TableTd>
                <div className='p-3'>
                  {project.name}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.type}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.revenue}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.fromDt}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.endDt}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.days}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.PM}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.planPercent}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.actualPercent}
                </div>
              </TableTd>
              <TableTd>
                <div className='p-3'>
                  {project.status}
                </div>
              </TableTd>
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
