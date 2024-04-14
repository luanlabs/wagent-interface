// import Tippy from '@tippyjs/react';
// import { roundArrow } from 'tippy.js';
// import { useState } from 'react';
// import { ArrowStyle } from './arrowStyle';

// export type Placement = 'top' | 'bottom';

// interface TooltipProps {
//   title: string;
//   text: string;
//   children: JSX.Element | React.ReactNode;
//   placement?: Placement;
// }

// const CTooltip = ({ text, title, placement, children }: TooltipProps) => {
//   const [visible, setVisible] = useState(false);
//   const show = () => setVisible(true);
//   const hide = () => setVisible(false);

//   const tooltipContent = (
//     <div className="text-white text-left bg-darkGreen w-[240px] px-4 py-3 rounded-xl">
//       {title && (
//         <div>
//           <h3 className="text-base mb-1">{title}</h3>
//           <div className="w-[20px] h-[2px] bg-royalBlue mb-2"></div>
//         </div>
//       )}

//       <span className="text-[13px] tracking-wide ">{text}</span>
//     </div>
//   );

//   return (
//     <>
//       <ArrowStyle placement={placement}>
//         <Tippy
//           content={tooltipContent}
//           placement={placement}
//           interactive
//           visible={visible}
//           onClickOutside={hide}
//           arrow={roundArrow}
//         >
//           <div onMouseEnter={show} onMouseLeave={hide}>
//             {children}
//           </div>
//         </Tippy>
//       </ArrowStyle>
//     </>
//   );
// };

// export default CTooltip;
