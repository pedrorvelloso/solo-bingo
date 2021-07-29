import { SyncBardContainer } from './styles';

type SyncBarProps = {
  isSynchronizing: boolean;
  // syncedAs?: string;
};

const SyncBar = ({ isSynchronizing }: SyncBarProps) => {
  return (
    <SyncBardContainer>
      {isSynchronizing && 'Synchronizing...'}
    </SyncBardContainer>
  );
};

export default SyncBar;
