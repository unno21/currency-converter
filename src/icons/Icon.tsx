import CloseIcon from '../svg/close.svg';
import MagnifyIcon from '../svg/magnify.svg';
import SwapVerticalIcon from '../svg/swap-vertical.svg';

const Icon = {
  Close: () => <img src={CloseIcon} alt="Close" />,
  Magnify: () => <img src={MagnifyIcon} alt="Close" />,
  SwapVertical: () => <img src={SwapVerticalIcon} alt="Close" />,
};

export default Icon;