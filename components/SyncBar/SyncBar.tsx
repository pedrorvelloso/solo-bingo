import { SyncBardContainer } from './styles';

type SyncBarProps = {
  isSyncing: boolean;
  // syncedAs?: string;
};

const SyncBar = ({ isSyncing }: SyncBarProps) => {
  return <SyncBardContainer>{isSyncing && 'Syncing...'}</SyncBardContainer>;
};

export default SyncBar;
