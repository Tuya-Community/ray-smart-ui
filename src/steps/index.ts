import _Steps from './Steps';
import type { SmartSteps } from './PropTypes';

const Steps = _Steps as React.FC<SmartSteps>;

export { Steps };

export {
  SmartSteps,
  SmartStepsEvents,
  SmartStepsExternalClassName,
  SmartStepsProps,
  SmartStepsOption,
  SmartStepsClickStepEvent,
} from './PropTypes';
