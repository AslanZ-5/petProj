import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const portalRootElement = document.getElementById('portal');

interface PortalProps {
  className?: string;
  children?: ReactNode;
}

if (!portalRootElement) {
  throw new Error('DOM element "portal" not found');
}

const Portal: React.FC<PortalProps> = ({ className, children }) => ReactDOM.createPortal(
  <div className={className}>{children}</div>,
  portalRootElement
);

export default Portal;
