const apiUrl = "https://api.tinyauth.app";

interface InstancesRes {
  total: number;
}

export const getInstances = async (): Promise<InstancesRes> => {
  const res = await fetch(apiUrl + "/v1/instances/all");
  const data = await res.json();
  return data as InstancesRes;
};
