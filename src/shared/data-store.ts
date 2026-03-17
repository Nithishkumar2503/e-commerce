import { useState } from "react";
import type { ProductsProps } from "../types/index.type";

export interface DataStoreType<T> {
  records: T;
  pageSize: number;
  pageToken: string;
}

export interface DataStoreItemType {
  id: string | number;
}

const createDataStore = <T extends DataStoreItemType>() => {
  const [store, dataStore] = useState<DataStoreType<T[]>>({
    records: [],
    pageSize: 25,
    pageToken: "",
  });

  /**
   *
   * @param items ALIGN STORE
   */
  const setStore = ({
    records,
    limit,
    skip,
  }: {
    records: T[];
    limit: number;
    skip: number;
  }) => {
    dataStore((prev) => {
      return {
        ...prev,
        records: [...prev.records, ...records],
        limit,
        skip,
      };
    });
  };

  /**
   *
   * @param items ADD NEW ENTRY TO LIST
   */
  const addAll = (items: T[]) => {
    dataStore((prev) => {
      return {
        ...prev,
        records: [...items, ...store.records],
      };
    });
  };

  /**
   *
   * @param items UPDATE ENTRY TO LIST
   */
  const updateOne = (item: T) => {
    for (let i = 0; i < store.records.length; i++) {
      if (item.id == store.records[i].id) return (store.records[i] = item);
    }
  };

  const addOne = (item: T, order: boolean) => {
    dataStore((prev) => {
      return {
        ...prev,
        records: order ? [item, ...prev.records] : [...prev.records, item],
      };
    });
  };

  const removeOne = (item: T) => {
    for (let i = 0; i < store.records.length; i++) {
      if (item.id == store.records[i].id) return store.records.splice(i, 1);
    }
  };


  return {
    addAll,
    updateOne,
    addOne,
    removeOne,
    records: store.records,
    pageSize: store.pageSize || 25,
    pageToken: store.pageToken,
    setStore,
  };
};

export default createDataStore;
