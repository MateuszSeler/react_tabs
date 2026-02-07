import { Tab } from './Tab';
import { TabModel } from './TabModel';

type Props = {
  tabs: TabModel[];
  activeTab: string;
  onClick: (tab: TabModel) => void;
  content: string;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  activeTab,
  onClick,
  content,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={onClick}
            />
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
