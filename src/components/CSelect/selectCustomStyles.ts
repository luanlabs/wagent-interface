import { OptionType } from '@/models';
import { StylesConfig } from 'react-select';

const customStyles = (): StylesConfig<OptionType, false> => ({
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#039855' : '#6b7280',
    display: 'flex',
    borderRadius: '10px',
    alignItems: 'center',
    fontWeight: '500',
    cursor: 'pointer',
    height: '42px',
    marginBottom: '5px',
    width: '100% !important',
    backgroundColor: state.isSelected ? '#f3f4f6' : 'white',
    '&:hover': {
      backgroundColor: state.isFocused ? '#f3f4f6' : 'white',
    },
  }),

  control: (provided, state) => ({
    ...provided,
    width: '100%',
    backgroundColor: 'transparent',
    height: '42px',
    borderRadius: '8px',
    fontSize: '16px',
    color: '#039855',
    fontWeight: '500',
    padding: '0 7px',
    cursor: 'pointer',
    border: state.isFocused ? '1px solid #D0D5DD' : '1px solid #D0D5DD',
    transition: 'none',
    outline: 'none',

    boxShadow: 'none',
    '&:hover': {
      borderColor: '#D0D5DD',
    },
  }),

  valueContainer: () => ({
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    padding: '0 0px',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  menu: (provided, state) => ({
    ...provided,
    padding: '4px',
    overflow: 'hidden',
    transition: 'all 400ms ease-in-out',
    visibility: state.selectProps.menuIsOpen ? 'visible' : 'hidden',
    borderRadius: '0.5rem',
    boxShadow:
      ' rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;',
  }),

  placeholder: (defaultStyles) => ({ ...defaultStyles, color: '#98A2B3', fontWeight: 'normal' }),
});

export default customStyles;
