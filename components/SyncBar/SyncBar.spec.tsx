import { render, screen } from 'test-utils';
import SyncBar from './SyncBar';

describe('components > SyncBar', () => {
  it('should render sychronizing text', () => {
    render(<SyncBar isSynchronizing error={false} />);

    expect(screen.getByText('Synchronizing...')).toBeInTheDocument();
  });

  it('should render ✨ when sync is okay', () => {
    render(<SyncBar isSynchronizing={false} error={false} />);

    expect(screen.getByText('✨')).toBeInTheDocument();
  });

  it('should render 🚨 when sync was an error', () => {
    render(<SyncBar isSynchronizing={false} error />);

    expect(screen.getByText('🚨')).toBeInTheDocument();
  });
});
