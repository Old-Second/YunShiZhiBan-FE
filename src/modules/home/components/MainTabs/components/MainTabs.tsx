import { BookMarked, Bot, FileText, Play, Rocket } from 'lucide-react';

import { Tab, Tabs } from '@/common/components/elements/Tabs';

import Example from '../../Example';
import Playground from '../../Playground';
import Playground2 from '../../Playground2';
import ChatBot from './ChatBot';
import Readme from './Readme';
import Resource from './Resource';

const TabLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center justify-center gap-1.5">{children}</div>
);

const MainTabs: React.FC = () => {
  const TABS = [
    {
      label: <TabLabel>演示</TabLabel>,
      labelIcon: <Play size={16} />,
      children: (
        <Tab label="Playground">
          <Playground />
        </Tab>
      ),
    },
    {
      label: <TabLabel>演示2</TabLabel>,
      labelIcon: <Play size={16} />,
      children: (
        <Tab label="Playground2">
          <Playground2 />
        </Tab>
      ),
    },
    {
      label: <TabLabel>资源</TabLabel>,
      labelIcon: <Rocket size={16} />,
      children: <Resource />,
    },
    {
      label: <TabLabel>用例</TabLabel>,
      labelIcon: <BookMarked size={16} />,
      children: <Example />,
    },
    {
      label: <TabLabel>说明</TabLabel>,
      labelIcon: <FileText size={16} />,
      children: <Readme />,
    },
    {
      label: <TabLabel>对话</TabLabel>,
      labelIcon: <Bot size={16} />,
      children: <ChatBot />,
    },
  ];
  return <Tabs tabs={TABS} />;
};

export default MainTabs;