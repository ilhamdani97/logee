import { useEffect, useState } from 'react';

export function useMappedCompany(data, key) {
  const [mapDataCompany, setMapDataCompany] = useState([]);
  useEffect(() => {
    if (key === 'bank') {
      setMapDataCompany(data.map(i => {
        const id = i[`${key}TransferCode`];
        const name = i[`${key}Name`];
        return {
          text: name,
          value: `${id}--${name}`
        };
      }));
    } else if (key === 'companyType') {
      setMapDataCompany(data.map(i => ({
        text: i[`${key}Name`],
        value: i[`${key}Name`]
      })));
    } else {
      setMapDataCompany(data.map(i => {
        const id = i[`${key}Id`];
        const name = i[`${key}Name`];
        return {
          text: name,
          value: `${id}--${name}`
        };
      }));
    }
  }, [data]);
  return [mapDataCompany, () => setMapDataCompany([])];
}

export function useMappedProgram(data) {
  const [mapList, setMapList] = useState([]);
  useEffect(() => {
    data && setMapList(
      data.map(i => ({
        text: i.programName,
        value: JSON.stringify(i)
      }))
    );
  }, [data]);

  return [mapList, () => setMapList([])];
}

export function useMappedListData(data, key) {
  const [mapListData, setMapListData] = useState([]);
  useEffect(() => {
    setMapListData(data.map(i => {
      const id = i[`${key}Id`];
      return {
        text: i.name,
        value: `${id}--${i.name}`
      };
    }));
  }, [data]);
  return [mapListData, () => setMapListData([])];
}

