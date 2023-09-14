export async function InsuranceApi() {
  const response = await fetch("http://192.168.0.101:8085/TALIC/getInsurances");
  console.log("resonse-->", response);
  return response.status === 200 ? response.json() : [];
}
