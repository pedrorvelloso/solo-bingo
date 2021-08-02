import { SyncBardContainer } from './styles';

type SyncBarProps = {
  isSynchronizing: boolean;
  error: boolean;
};

const SyncBar = ({ isSynchronizing, error }: SyncBarProps) => {
  return (
    <SyncBardContainer>
      {isSynchronizing && !error && 'Synchronizing...'}
      {!isSynchronizing && !error && '✨'}
      {!isSynchronizing && error && '🚨'}
    </SyncBardContainer>
  );
};

export default SyncBar;
