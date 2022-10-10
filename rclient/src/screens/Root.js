import { useQuery, useSubscription } from "@apollo/client";
import { ROOT_QUERY } from "graphql/query/root";
import { ROOT_SUBSCRIPTION } from "graphql/subscription/root";
import { useEffect } from "react";

const Root = () => {
  const { loading, data } = useQuery(ROOT_QUERY);
  const { data: subData, error } = useSubscription(ROOT_SUBSCRIPTION);
  useEffect(() => {
    if (subData) {
      console.log({ subData });
    }
  }, [subData]);
  if (loading) {
    return <div>loading</div>;
  }
  return <div>{data?.root?.message}</div>;
};

export default Root;
