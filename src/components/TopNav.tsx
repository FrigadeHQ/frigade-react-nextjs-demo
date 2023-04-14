import React from 'react';
import Placeholder from './Placeholder';
import {
  FrigadeChecklist,
  FrigadeProgressBadge,
  useFlows,
} from '@frigade/react';

const CHECKLIST_FLOW_ID = 'flow_WdDXTX8gF5fK5AN2';

export default function TopNav() {
  const { getFlowStatus } = useFlows();

  return (
    <div>
      <div className='w-full p-8 flex flex-row items-center border-0 justify-between border-b border-b-gray-dark'>
        <div className='flex fles-row items-center'>
          <Placeholder className='mx-4' />
          <Placeholder className='mx-4' />
          <Placeholder className='mx-4' />
        </div>
        <div>
          <div className='max-w-[200px] mx-4'>
            <FrigadeProgressBadge
              title='Get started'
              flowId={CHECKLIST_FLOW_ID}
              hideOnFlowCompletion
            />
          </div>
          <FrigadeChecklist
            hideOnFlowCompletion
            type='modal'
            flowId={CHECKLIST_FLOW_ID}
          />
        </div>
      </div>
    </div>
  );
}
