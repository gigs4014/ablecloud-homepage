const selectList = [
  {
    maintype: '전체',
    subtype: ['-'],
  },
  {
    maintype: '산업',
    subtype: ['Solution', '산업-b', '산업-c'],
  },
  {
    maintype: '나',
    subtype: ['나-a', '나-b', '나-c'],
  },
  {
    maintype: '다',
    subtype: ['다-a', '다-b', '다-c'],
  },
];

const MultiSelect = ({
  setValue,
  selectValue,
}: {
  selectValue: {
    mainType: string;
    subType: string;
  };
  setValue: React.Dispatch<
    React.SetStateAction<{
      mainType: string;
      subType: string;
    }>
  >;
}) => {
  let selectListForSubtype = selectList.find(s => s.maintype === selectValue.mainType)?.subtype;

  return (
    <div className='flex'>
      <select
        onChange={e => {
          setValue(prev => {
            return {
              ...prev,
              mainType: e.target.value,
              subType: selectList[e.target.selectedIndex].subtype[0],
            };
          });
        }}
        value={selectValue.mainType}
        className='mx-2 flex w-24 rounded-lg border-1 sm:w-40 md:w-48 lg:w-60'>
        {selectList &&
          selectList.map((value, index) => (
            <option value={value.maintype} key={index}>
              {value.maintype}
            </option>
          ))}
      </select>
      <select
        onChange={e => {
          setValue(prev => {
            return { ...prev, subType: e.target.value };
          });
        }}
        value={selectValue.subType}
        className='mx-2 flex w-24 rounded-lg border-1 sm:w-40 md:w-48 lg:w-60'>
        {selectListForSubtype &&
          selectListForSubtype.map((value, index) => (
            <option value={value} key={index}>
              {value}
            </option>
          ))}
      </select>
    </div>
  );
};
export default MultiSelect;
