import { Aside, Navigation } from './wrappers';

const Sidebar = (): JSX.Element => (
  <Aside data-testid="sidebar">
    <Navigation />
  </Aside>
);

export default Sidebar;
